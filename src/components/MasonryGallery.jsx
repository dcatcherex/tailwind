import { useState, useEffect, useRef } from 'react';
import './MasonryGallery.css';

const MasonryGallery = ({ images }) => {
  const [columns, setColumns] = useState(2);
  const [imageWidths, setImageWidths] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = containerRef.current.offsetWidth;
      let newColumns;
      if (containerWidth >= 1024) {
        newColumns = 3;
      } else if (containerWidth >= 768) {
        newColumns = 2;
      } else {
        newColumns = 1;
      }
      setColumns(newColumns);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setImageWidths([]);
    images.forEach(imageUrl => {
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      imgElement.onload = () => {
        setImageWidths(widths => [...widths, imgElement.width]);
      };
    });
  }, [images]);

  const columnHeights = Array.from({ length: columns }, () => 0);
  const imageRows = [];

  for (let i = 0; i < images.length; i++) {
    const columnIndex =
      columnHeights.indexOf(Math.min(...columnHeights));
    imageRows[columnIndex] =
      [...(imageRows[columnIndex] || []), i];
    columnHeights[columnIndex] +=
     imageWidths[i] / (containerRef.current.offsetWidth / columns);
  }

  return (
    <div className="masonry-gallery" ref={containerRef}>
      {imageRows.map((row, i) => (
        <div key={i} className="masonry-gallery__column">
          {row.map((imageIndex) => (
            <img
              key={imageIndex}
              src={images[imageIndex]}
              alt={`Image ${imageIndex}`}
              className="masonry-gallery__item"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryGallery;