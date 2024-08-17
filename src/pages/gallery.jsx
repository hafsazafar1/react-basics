import axios from "axios";
import React, { useState, useEffect } from "react";

function ImageGallery() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://picsum.photos/v2/list");
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);
  return (
    <>
      <h1>Image Gallery</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
      {images.map((image) => (
          <div key={image.id} style={{ margin: '10px' }}>
            <img
              src={image.download_url}
              alt={image.author}
              style={{ width: '200px', height: '300px', objectFit: 'cover' }}
            />
            <p>{image.author}</p>
          </div>
        ))}
      </div>
      
    </>
  );
}
export default ImageGallery;
