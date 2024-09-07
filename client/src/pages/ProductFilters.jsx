import React from "react";

const ProductFilters = ({
  searchTerm,
  type,
  range,
  shape,
  mounting,
  sortOrder,
  setSearchTerm,
  setType,
  setRange,
  setShape,
  setMounting,
  setSortOrder,
  handleSubmit,
  visible,
}) => {
  return (
    <div
      className={`filter-card backdrop-blur-lg bg-white/20 border-r-1 border-black transition-opacity transition-transform duration-300 ease-in-out ${
        visible ? "filter-card-visible" : "filter-card-hidden"
      } flex flex-col p-6 w-full sm:w-64`}
      style={{ position: "fixed", top: 0, left: 0, height: "100vh" }}
    >
      {/* Filters Header */}
      <h2 className="text-black text-lg font-bold mb-4 uppercase tracking-wide">
        Filters
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Search Field */}
        <div className="flex-1">
          <label className="block text-black text-sm font-light mb-2 uppercase tracking-wide" htmlFor="searchTerm">
            Product
          </label>
          <input
            type="text"
            id="searchTerm"
            placeholder="Search..."
            className="border border-black p-2 w-full focus:outline-none focus:ring-0 focus:border-black text-sm font-light"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Type Field */}
        <div className="flex-1">
          <label className="block text-black text-sm font-light mb-2 uppercase tracking-wide" htmlFor="type">
            Type
          </label>
          <input
            type="text"
            id="type"
            placeholder="Type..."
            className="border border-black p-2 w-full focus:outline-none focus:ring-0 focus:border-black text-sm font-light"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        {/* Range Field */}
        <div className="flex-1">
          <label className="block text-black text-sm font-light mb-2 uppercase tracking-wide" htmlFor="range">
            Range
          </label>
          <input
            type="text"
            id="range"
            placeholder="Range..."
            className="border border-black p-2 w-full focus:outline-none focus:ring-0 focus:border-black text-sm font-light"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
        </div>

        {/* Shape Field */}
        <div className="flex-1">
          <label className="block text-black text-sm font-light mb-2 uppercase tracking-wide" htmlFor="shape">
            Shape
          </label>
          <input
            type="text"
            id="shape"
            placeholder="Shape..."
            className="border border-black p-2 w-full focus:outline-none focus:ring-0 focus:border-black text-sm font-light"
            value={shape}
            onChange={(e) => setShape(e.target.value)}
          />
        </div>

        {/* Mounting Field */}
        <div className="flex-1">
          <label className="block text-black text-sm font-light mb-2 uppercase tracking-wide" htmlFor="mounting">
            Mounting
          </label>
          <input
            type="text"
            id="mounting"
            placeholder="Mounting..."
            className="border border-black p-2 w-full focus:outline-none focus:ring-0 focus:border-black text-sm font-light"
            value={mounting}
            onChange={(e) => setMounting(e.target.value)}
          />
        </div>

        {/* Sort Order */}
        <div className="flex-1">
          <label className="block text-black text-sm font-light mb-2 uppercase tracking-wide" htmlFor="sort_order">
            Sort
          </label>
          <select
            id="sort_order"
            className="border border-black p-2 w-full focus:outline-none focus:ring-0 focus:border-black text-sm font-light"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Price high to low</option>
            <option value="asc">Price low to high</option>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white p-2 border-black border text-sm font-light uppercase tracking-widest hover:bg-gray-900 transition duration-300 mt-4"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default ProductFilters;
