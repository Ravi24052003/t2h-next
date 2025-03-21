"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
    { id: 1, src: "/Gallery/c1-1.jpg", title: "Romantic Sunset" },
    { id: 2, src: "/Gallery/c1-2.jpg", title: "Beach Walks" },
    { id: 3, src: "/Gallery/c1-3.jpg", title: "Mountain Views" },
    { id: 4, src: "/Gallery/c2-1.jpg", title: "Exotic Resorts" },
    { id: 5, src: "/Gallery/c2-2.jpg", title: "Candlelight Dinner" },
    { id: 6, src: "/Gallery/c2-3.jpg", title: "City Lights" },
    { id: 7, src: "/Gallery/c3-1.jpg", title: "Snowy Peaks" },
  ];

  function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const [columns, setColumns] = useState(3);

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

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + columns, photos.length));
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - columns, columns * 2));
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
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 `} >
          {photos.slice(0, visibleCount).map((photo) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="overflow-hidden shadow-lg rounded-2xl h-[300px]">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={400}
                  height={300}
                  className="object-fill w-full h-full"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-center">{photo.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6">
          {visibleCount < photos.length && (
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

        {selectedPhoto && (
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
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                // width={800}
                // height={600}
                className="object-fill w-[100%] h-[100%]"
              />
              <div className="absolute top-0 right-0 p-2">
                <button
                  className="text-white bg-black rounded-full p-2"
                  onClick={() => setSelectedPhoto(null)}
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


export default Gallery
