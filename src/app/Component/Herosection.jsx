"use client";
import React, { useState, useEffect } from "react";

function Herosection() {
  const [homeVideoUrl, setHomeVideoUrl] = useState("");

  useEffect(() => {
    const fetchHomeVideo = async () => {
      try {
        console.log("Fetching data...");
        const response = await fetch("https://t2hdashboard.theholistay.in/public-hero-section-videos");
        const data = await response.json();
        console.log("Fetched data:", data);

        const homeVideoObject = data.find(item => item.use_in === "home");
        console.log("Home video object:", homeVideoObject);

        if (homeVideoObject) {
          // If video_url is relative, prepend the base URL
          const videoUrl = homeVideoObject.video_url.startsWith("http")
            ? homeVideoObject.video_url
            : `https://t2hdashboard.theholistay.in/${homeVideoObject.video_url}`;
          setHomeVideoUrl(videoUrl);
        } else {
          console.warn("No video found for 'use_in: home'");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHomeVideo();
  }, []);

  return (
    <div className="w-full bg-gray-100">
      {homeVideoUrl ? (
        <video
          src={homeVideoUrl}
          playsInline
          width="100%"
          muted
          loop
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
}

export default Herosection;