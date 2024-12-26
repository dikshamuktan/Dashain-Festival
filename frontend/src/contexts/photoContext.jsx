import { useState, createContext, useContext } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";

const photoContext = createContext({
  allPhotos: [],
  userPhotos: [],
  toggleLike: () => {},
  fetchAllPhotos: () => {},
  fetchUserPhotos: () => {},
  uploadPhotos: () => {},
  deletePhoto: () => {},
});

export function PhotoProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [userPhotos, setUserPhotos] = useState([]);

  const fetchAllPhotos = async () => {
    try {
      const res = await api.get("/photos/shared");
      setAllPhotos(res.data);
    } catch (error) {
      toast.error("failed to fetch photos");
    }
  };

  const fetchUserPhotos = async () => {
    try {
      const response = await api.get("/photos/user");
      setUserPhotos(response.data);
    } catch (error) {
      toast.error("faile to fetch your photos");
    }
  };

  const toggleLike = async (photoId) => {
    try {
      const res = await api.post(`/photos/${photoId}/like`);
    } catch (err) {
      toast.error("failed to like Photo");
    }
  };

  const uploadPhotos = async (formData) => {
    try {
      const res = await api.post("/photos", formData, {
        headers: { "content-Type": "multipart/form-data" },
      });

      toast.success("Photo uploaded successfully!");

      await Promise.all([fetchAllPhotos(), fetchUserPhotos()]);
      return true;
    } catch (error) {
      toast.error("Provide Image less than 2md ");
      return false;
    }
  };

  const deletePhoto = async (photoId) => {
    try {
      const res = await api.delete(`/photos/${photoId}`);
      setAllPhotos(allPhotos.filter((photo) => photo._id !== photoId));
      setUserPhotos(userPhotos.filter((photo) => photo._id !== photoId));
    } catch (err) {
      toast.error(err.response.data.message || "failed to delete Photo");
    }
  };
  return (
    <photoContext.Provider
      value={{
        fetchAllPhotos,
        fetchUserPhotos,
        uploadPhotos,
        toggleLike,
        deletePhoto,
        allPhotos,
        userPhotos,
      }}
    >
      {children}
    </photoContext.Provider>
  );
}

export function usePhotos() {
  return useContext(photoContext);
}
