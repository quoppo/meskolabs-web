import React from 'react';

interface ImageCardProps {
  imagePath: string;
  altText: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imagePath, altText, description }) => {
  return (
    <div className="block max-w-full pl-7 pr-7 bg-white text-Chivo shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          className=" w-full object-cover h-48 sm:h-64 md:h-80 lg:h-96"
          src={imagePath}
          alt={altText}
        />
      </div>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
