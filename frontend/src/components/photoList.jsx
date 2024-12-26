import PhotoCard from "./photoCard";
import { useEffect } from "react";
import { usePhotos } from "../contexts/photoContext";

function PhotoList({ photoType }) {
  const { fetchAllPhotos, fetchUserPhotos, allPhotos, userPhotos } =
    usePhotos();

  useEffect(() => {
    fetchUserPhotos();
    fetchAllPhotos();
  }, []);

  let photos = photoType === "SHARED_PHOTO" ? allPhotos : userPhotos;

  return (
    <div>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 gap-y-6 mt-8 my-8 mx-8 p-9">
        {photos.map((photos, index) => (
          <PhotoCard photo={photos} key={photos._id} />
        ))}
      </div>
    </div>
  );
}

export default PhotoList;
