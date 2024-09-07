import React from 'react';
import './OurProducts.css'; // Import the CSS file

const OurProduct = () => {
  const properties = [
    { id: 1, desc: 'FLORENTINE' },
    { id: 2, desc: 'DAISY' },
    { id: 3, desc: 'VIRGO' },
    { id: 4, desc: 'NECTOR' },
    { id: 5, desc: 'AQUARIUS' },
    { id: 6, desc: 'ICON' },
    { id: 7, desc: 'SPA' },
    { id: 8, desc: 'TERRIM' },
    { id: 9, desc: 'SPRINGLE' },
    { id: 10, desc: 'CROSS' },
    { id: 11, desc: 'CONTY' },
    { id: 12, desc: 'CROWN' },
    { id: 13, desc: 'SALVO' }
  ];


  const backgroundImages = [
    'https://firebasestorage.googleapis.com/v0/b/magicsprings-dbaf7.appspot.com/o/Screenshot_06-Sep_16-18-15_20872.png?alt=media&token=921ccdf7-b376-4b18-9e74-940a48b16b94',
    "https://firebasestorage.googleapis.com/v0/b/magicsprings-dbaf7.appspot.com/o/Screenshot_06-Sep_16-17-58_29673.png?alt=media&token=2922e302-39b8-42d6-b8c6-02d62271da53",
    "https://firebasestorage.googleapis.com/v0/b/magicsprings-dbaf7.appspot.com/o/Screenshot_06-Sep_16-17-37_25690.png?alt=media&token=67979970-5b34-4767-acc9-2958ccd1ddab",
    "https://firebasestorage.googleapis.com/v0/b/magicsprings-dbaf7.appspot.com/o/Screenshot_06-Sep_16-17-05_16461.png?alt=media&token=08a8efb7-474f-4044-9a21-f3d136e6d760",
    'https://i.ibb.co/ZmtmLGK/a.jpg',
    'https://i.ibb.co/pzGysVS/b.jpg',
    'https://i.ibb.co/QMrtWT1/c.jpg',
    'https://i.ibb.co/DL5pvY6/bg-1-2.jpg',
    'https://i.ibb.co/FWV1BJG/bg-1.jpg',
    'https://i.ibb.co/ZXmWmSZ/14.jpg',
    'https://i.ibb.co/hLcmWbT/15646.jpg',
    'https://i.ibb.co/89P5rTs/15678.jpg',
    'https://i.ibb.co/RhZgpSG/20845.jpg'
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="featuredPropBox">
            <ul>
              {properties.map((property, index) => (
                <li key={property.id} style={{ backgroundSize:'100% 90%',backgroundImage: `url(${backgroundImages[index]})` }}>
                  <a href="#">
                    <div className="fplogo">
                     <p>{property.logo}</p>
                    </div>
                    <div className="fptext">
                      <p>{property.text}</p>
                    </div>
                    <div className="cardDescription">
                    <p>{property.desc}</p>
                  </div>
                  </a>
                
                </li>
                
              ))}
              
            </ul>


          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
