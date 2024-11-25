import { Heart, Trash2 } from "lucide-react";

const PhotoCard = ({ photo }) => {
  return (
    <div className="relative hover:underline hover:bg-lime-600 rounded-lg px-1 hover:px-1 hover:py-1 group-hover:opacity-100 transition-opacity duration-200">
      <div className="flex justify-between my-8 relative">
        <div>
          <Heart className=" text-red-600" />
        </div>
        <button className="absolute top-3 right-3 z-30 bg-red-500 text-white p-2 rounded-full">
          <Trash2 className="" />
        </button>
      </div>
      <img
        className="relative aspect-[4/3] "
        src={photo.imageUrl}
        alt="Uploaded"
        style={{
          height: "280px",
          width: "100%",
        }}
      />
      <p>{photo.description}</p>
    </div>
  );
};

export default PhotoCard;
