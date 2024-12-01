import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Image {
  src: string;
  title: string;
}

interface SlidingImagesProps {
  images: Image[];
}

const SlidingImages: React.FC<SlidingImagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-96 w-96 overflow-hidden rounded-lg">
      {images.map((image: Image, index: number) => {
        let slideClass = "absolute w-full h-full transition-transform";

        if (index === currentIndex) {
          slideClass = cn(slideClass, "slide-active");
        } else if (index === (currentIndex + 1) % images.length) {
          slideClass = cn(slideClass, "slide-next");
        } else {
          slideClass = cn(slideClass, "slide-prev");
        }

        return (
          <div key={index} className={slideClass}>
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 rounded">
              <h2 className="text-white text-2xl text-bold  text-center">
                {image.title}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SlidingImages;
