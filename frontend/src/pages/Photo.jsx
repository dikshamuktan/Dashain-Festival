import { BookImage, Upload, Users, User, Image, Share, X } from "lucide-react";
import { useState, useEffect } from "react";
import PhotoList from "../components/photoList";
import { usePhotos } from "../contexts/photoContext";
import toast from "react-hot-toast";

function Photo() {
  const { uploadPhotos } = usePhotos();

  const [upload, setUpload] = useState(false);
  const [imgPreviewUrl, setImgPreviewUrl] = useState(null);
  const [activeTab, setActiveTab] = useState("SHARED_PHOTO");
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleUpload = () => {
    setUpload(!upload);
  };
  const handleFileChange = (events) => {
    const file = events.target.files[0];
    if (file) {
      setSelectedFile(file);
      const filePath = URL.createObjectURL(file);
      setImgPreviewUrl(filePath);
    }
  };

  const handleRemovePreview = () => {
    setSelectedFile(null);
    setImgPreviewUrl(null);
  };

  const handlePhotoUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error("select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("description", description);

    const success = await uploadPhotos(formData);

    if (success) {
      setSelectedFile(null);
      setDescription("");
      setImgPreviewUrl(null);
      setUpload(false);
    }
  };

  return (
    <div className=" ">
      <div className="flex flex-col my-7 mx-11 p-4 ">
        <div className="flex justify-between">
          <h1 className="flex gap-3 justify-center items-center">
            <BookImage className="" />
            <p className="text-2xl font-bold "> Photos</p>
          </h1>
          <button
            onClick={handleUpload}
            className="flex  gap-3 items-cente bg-lime-600 font-medium text-lg rounded p-2 text-white hover:bg-lime-700 focus:outline focus:ring-white-300"
          >
            <Upload />
            <p>Upload Photo</p>
          </button>
        </div>
        <div className="flex mt-6 gap-3">
          <button
            className={`flex rounded font-bold 
            ${activeTab === "SHARED_PHOTO" ? "bg-lime-600 text-white " : ""}
             p-2 gap-2  hover:bg-lime-700 focus:outline focus:ring-white-400`}
            onClick={() => setActiveTab("SHARED_PHOTO")}
          >
            <Users size={20} />
            <p className="text-lg">Family Photos</p>
          </button>
          <button
            onClick={() => setActiveTab("PERSONNEL_PHOTO")}
            className={`flex border justify-center
            ${activeTab === "PERSONNEL_PHOTO" ? "bg-lime-600 text-white " : ""}
            p-2 gap-1 font-bold text-lg  rounded  hover:bg-lime-700`}
          >
            <User />
            <p>My Photos</p>
          </button>
        </div>
      </div>
      {/* upload part */}
      {upload && (
        <form
          onSubmit={handlePhotoUpload}
          className="flex flex-col justify-center  bg-slate-50 gap-8 rounded-lg shadow-md p-4 ms-20 mr-20"
        >
          <div className="w-full">
            <div className="flex flex-col  border-2 size-40 rounded mt-6 mx-auto justify-center items-center">
              {imgPreviewUrl ? (
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <img
                    src={imgPreviewUrl}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                  <button
                    type="button"
                    onClick={handleRemovePreview}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="border-dashed">
                  <Image size={30} className="items-center text-gray-500" />
                  <h2 className="text-gray-500">No Image Selected</h2>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 ms-9 mr-11">
            <h2 className="font-bold">Select Photo</h2>
            <div className="flex">
              <input
                type="file"
                onChange={handleFileChange}
                className="file:bg-primary font-bold rounded-lg text-gray-500 p-2
            hover:file:bg-primary/90 file:bg-lime-600 file:text-white file:px-3 file:py-2 file:rounded-full file:border-none file:mr-2"
              />
              {/* <p className="p-2">No File Chosen</p> */}
            </div>
          </div>
          <div className="flex flex-col gap-2 ms-9 mr-11">
            <h3 className="text-md font-bold">Description</h3>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border-solid border p-4 border-1 "
              placeholder="Write a description..."
            ></textarea>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleUpload}
              className="hover:bg-gray-200 rounded p-2 border-dashed border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-lime-600 rounded-lg p-2 flex gap-2 text-white hover:bg-lime-700"
            >
              <Share size={20} />
              Share
            </button>
          </div>
        </form>
      )}

      <PhotoList photoType={activeTab} />
    </div>
  );
}

export default Photo;
