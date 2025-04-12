"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const API_URL = "https://t2hdashboard.theholistay.in/public-gallery-images";

function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [visibleCount, setVisibleCount] = useState(9);
  const [columns, setColumns] = useState(3);
  const [selectedImage, setSelectedImage] = useState(null); // For popup modal

  // Fetch gallery data from API
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setGalleryData(data);
        // Initialize image index for shuffling
        const initialIndexes = {};
        data.forEach((item) => {
          initialIndexes[item.id] = 0;
        });
        setCurrentImageIndex(initialIndexes);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleryData();
  }, []);

  // Dynamically determine the number of columns and set initial visible count
  useEffect(() => {
    const updateColumnsAndVisibleCount = () => {
      let cols = 3;
      if (window.innerWidth < 640) cols = 1; // Mobile: 1 column
      else if (window.innerWidth < 768) cols = 2; // Tablet: 2 columns
      setColumns(cols);
      setVisibleCount(cols * 2); // Ensure 3 rows by default
    };

    updateColumnsAndVisibleCount();
    window.addEventListener("resize", updateColumnsAndVisibleCount);
    return () => window.removeEventListener("resize", updateColumnsAndVisibleCount);
  }, []);

  // Shuffle images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndexes) => {
        if (!galleryData.length) return prevIndexes; // Avoid running if no data
        const updatedIndexes = { ...prevIndexes };
        galleryData.forEach((item) => {
          if (item.images.length > 1) {
            updatedIndexes[item.id] =
              (updatedIndexes[item.id] + 1) % item.images.length;
          }
        });
        return updatedIndexes;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [galleryData]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + columns, galleryData.length));
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - columns, columns * 2));
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <section className="py-10 bg-pink-100 w-full px-[5%]" id="photo-gallery">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Honeymoon Gallery
        </motion.h2>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6`}>
          {galleryData.slice(0, visibleCount).map((item) => {
            const currentIndex = currentImageIndex[item.id] ?? 0; // Fallback to 0 if undefined
            const currentImage =
              item.images && item.images[currentIndex]
                ? `https://t2hdashboard.theholistay.in/${item.images[currentIndex]}`
                : null;

            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
                onClick={() => handleImageClick(currentImage)} // Handle image click
              >
                <div className="overflow-hidden shadow-lg rounded-2xl h-[300px]">
                  {currentImage ? (
                    <img
                      src={currentImage}
                      alt={`Image ${item.id}`}
                      className="object-fill w-full h-full"
                    />
                  ) : (
                    <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                      <span className="text-gray-500">Image not available</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-6">
          {visibleCount < galleryData.length && (
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 mr-4"
            >
              Show More
            </button>
          )}
          {visibleCount > columns * 2 && (
            <button
              onClick={handleShowLess}
              className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
            >
              Show Less
            </button>
          )}
        </div>

        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="relative bg-white rounded-xl overflow-hidden w-[75%] h-[75%] sm:w-[50%] sm:h-[90%] "
            //   initial={{ scale: 0.8 }}
            //   animate={{ scale: 1 }}
            //   exit={{ scale: 0.8 }}
            >
              <img
                src={selectedImage}
                alt="Selected"
                // width={800}
                // height={600}
                className="object-fill w-[100%] h-[100%]"
              />
              <div className="absolute top-0 right-0 p-2">
              <button
        className="absolute top-4 right-4 bg-black text-white rounded-full p-2"
        onClick={() => setSelectedImage(null)} // Close button
      >
        &#10005;
      </button>
              </div>
            </motion.div>
          </motion.div>
        )}

      </div>
    </section>
  );
}

export default Gallery;


