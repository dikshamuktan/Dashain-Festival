import {
  Heart,
  Trash2,
  Share2,
  Maximize2,
  SquareUserRound,
  X,
} from "lucide-react";
import { useState } from "react";

const PhotoCard = ({ photo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    if (likes > 0) setLikes(likes - 1);
  };

  const handlePic = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative group inline-block overflow-hidden rounded-lg px-1  transition-transform duration-300 hover:scale-110">
        <button
          onClick={handleLike}
          className=" absolute  p-1 gap-1 ml-2 mt-2 flex justify-center items-center bg-black opacity-70 rounded-lg "
        >
          <Heart
            size={20}
            className={` ${likes ? "fill-red-600 text-red-600" : "text-white"}`}
          />
          <h1 className="text-xl font-md text-white"> {likes}</h1>
        </button>
        <button className="absolute  bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 right-5 mt-2 text-white p-2 rounded-full">
          <Trash2 size={20} />
        </button>

        <img
          className="aspect-[4/3]"
          src={photo.imageUrl}
          alt="Uploaded"
          style={{
            height: "280px",
            width: "100%",
          }}
        />

        {/* floating infocard */}

        <div className="absolute translate-y-28 mb-3 transition-trasform duration-200 group-hover:translate-y-4 bottom-1 p-2 right-0 w-full">
          <div className=" bg-white rounded-lg p-3 shadow-lg ">
            <div className="flex justify-between">
              <div className="flex  gap-2 ms-2">
                <SquareUserRound className="mt-1" />
                <div className="">
                  <h2 className="font-bold">{photo.userId.name}</h2>
                  <p className="opacity-50 text-xs">
                    {new Date(photo.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mr-2 ">
                <button>
                  <Heart
                    size={20}
                    onClick={handleLike}
                    className={` ${likes ? "fill-red-600 text-red-600" : ""}`}
                  />
                </button>
                <button>
                  {" "}
                  <Share2 size={20} />
                </button>
                <button onClick={handlePic}>
                  <Maximize2 size={20} />
                </button>
              </div>
            </div>
            <div>
              <p className="ms-3 text-lime-600 text-md">{photo.description}</p>
            </div>
          </div>
        </div>

        {/* image full screen  */}
      </div>
      {isOpen && (
        <div className="z-20 h-screen inset-0 fixed justify-center items-center  flex flex-col bg-gray-400 bg-opacity-90 ">
          <button>
            <X
              size={40}
              className="absolute mt-5 ml-7  text-white w-4/6"
              onClick={handlePic}
            />
          </button>
          <img
            className="w-5/6 h-5/6 object-cover"
            src={photo.imageUrl}
            alt="Uploaded"
          />
        </div>
      )}
    </>
  );
};

export default PhotoCard;
