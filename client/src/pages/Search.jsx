import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductFilters from "./ProductFilters";
import ListingItem from "../Components/ListingItem";
import "./Search.css"
function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("");
  const [Range, setRange] = useState("");
  const [shape, setShape] = useState("");
  const [mounting, setMounting] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [listings, setListings] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false);

  const navigate = useNavigate();

  const fetchListings = async ({
    searchTerm = "",
    type = "",
    Range = "",
    shape = "",
    mounting = "",
    sort = "createdAt",
    order = "desc",
    limit = 9,
    startIndex = 0,
  }) => {
    const url = new URL("/api/listing/get", window.location.origin);
    const params = {
      searchTerm,
      type,
      Range,
      shape,
      mounting,
      sort,
      order,
      limit,
      startIndex,
    };

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch listings");
    }

    return response.json();
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermParam = urlParams.get("searchTerm");
    const typeParam = urlParams.get("type");
    const rangeParam = urlParams.get("Range");
    const shapeParam = urlParams.get("shape");
    const mountingParam = urlParams.get("mounting");
    const sortParam = urlParams.get("sort");

    if (searchTermParam) setSearchTerm(searchTermParam);
    if (typeParam) setType(typeParam);
    if (rangeParam) setRange(rangeParam);
    if (shapeParam) setShape(shapeParam);
    if (mountingParam) setMounting(mountingParam);
    if (sortParam) setSortOrder(sortParam);
  }, []);

  useEffect(() => {
    const fetchAndSetListings = async () => {
      try {
        const listingsData = await fetchListings({
          searchTerm,
          type,
          Range,
          shape,
          mounting,
          sort: "createdAt",
          order: sortOrder,
        });
        setListings(listingsData);
      } catch (error) {
        console.error("Failed to fetch listings:", error);
      }
    };

    fetchAndSetListings();
  }, [searchTerm, type, Range, shape, mounting, sortOrder]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    if (searchTerm) urlParams.set("searchTerm", searchTerm);
    if (type) urlParams.set("type", type);
    if (Range) urlParams.set("Range", Range);
    if (shape) urlParams.set("shape", shape);
    if (mounting) urlParams.set("mounting", mounting);
    urlParams.set("sort", sortOrder);
    navigate(`/search?${urlParams.toString()}`);
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Main content area */}
      <div className="flex-grow">
        <div className="flex">
          {/* Filters Section */}
          <div
            className={`fixed left-0 top-0 h-screen w-64 bg-gray-100 z-20 transition-transform duration-300 md:pt-6 ${
              filtersVisible ? "translate-x-0" : "-translate-x-full"
            } lg:relative lg:translate-x-0 lg:w-64 lg:block block`}
            style={{ paddingLeft: 0 }}
          >
            <ProductFilters
              searchTerm={searchTerm}
              type={type}
              Range={Range}
              shape={shape}
              mounting={mounting}
              sortOrder={sortOrder}
              setSearchTerm={setSearchTerm}
              setType={setType}
              setRange={setRange}
              setShape={setShape}
              setMounting={setMounting}
              setSortOrder={setSortOrder}
              handleSubmit={handleSubmit}
              visible={filtersVisible}
            />
          </div>

          {/* Listings Section */}
          <div className="flex-grow pt-8 md:pt-8 p-6">
            {listings.length > 0 ? (
              <div className="flex justify-center">
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr max-w-7xl">
  {listings.map((listing) => (
       <div key={listing._id} className="min-w-[250px]">
       <ListingItem listing={listing} />
     </div>
  ))}
</div>

              </div>
            ) : (
              <p className="text-center text-gray-700 mt-4">No listings found.</p>
            )}
          </div>
        </div>
      </div>

      {/* Filter button for mobile screens */}
      <button
        className="fixed border-1 border-gray-500 shadow-sm p-4 bottom-0 left-0 right-0 z-30 bg-white text-black p-4 rounded-t-lg lg:hidden"
        onClick={() => setFiltersVisible(!filtersVisible)}
      >
        {filtersVisible ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Mobile Navbar */}
      <nav className={`fixed bottom-0 left-0 right-0 bg-gray-100 border border-t lg:hidden ${filtersVisible ? 'hidden' : 'block'}`}>
        <button
          className="w-full py-2 px-4 text-center text-white bg-black"
          onClick={() => setFiltersVisible(!filtersVisible)}
        >
          {filtersVisible ? "Hide Filters" : "Show Filters"}
        </button>
      </nav>
    </div>
  );
}

export default Search;
