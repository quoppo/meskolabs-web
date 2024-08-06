import React from "react";

interface ImageCardProps {
  image: string;
  title: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, title, description }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between max-w-sm overflow-hidden mx-auto mb-8">
      <img className="w-full h-auto" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
