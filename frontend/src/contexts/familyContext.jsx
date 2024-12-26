import { createContext, useContext, useState } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";
import { Search } from "lucide-react";

const FamilyContext = createContext({
  familyMember: [],
  searchResult: [],
  searchUsers: () => {},
  fetchFamilyMember: () => {},
  addFamilyMember: () => {},
  removeFamilyMember: () => {},
});

export const FamilyProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [familyMember, setFamilyMember] = useState([]);

  const fetchFamilyMember = async () => {
    try {
      const res = await api.get("/family");
      setFamilyMember(res.data.familyMembers);
    } catch (err) {
      toast.error("failed to fetch family members");
    }
  };

  const searchUsers = async (searchTerm) => {
    if (searchTerm === "") {
      return setSearchResult([]);
    }
    try {
      const res = await api.get(`/users/search?email=${searchTerm}`);

      setSearchResult(res.data.users || []);
    } catch (err) {
      toast.error("failed to search");
    }
  };

  const addFamilyMember = async (id) => {
    try {
      const res = await api.post("/family", { familyMemberId: id });
      toast.success("Member added successfully !");
      setSearchResult([]);
      fetchFamilyMember();
    } catch (err) {
      toast.error("failed to add member");
    }
  };

  const removeFamilyMember = async (id) => {
    try {
      const response = await api.delete(`/family/${id}`);
      toast.success("family member removed");
      fetchFamilyMember();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "failed to remove family member"
      );
    }
  };

  return (
    <FamilyContext.Provider
      value={{
        searchUsers,
        searchResult,
        familyMember,
        fetchFamilyMember,
        addFamilyMember,
        removeFamilyMember,
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
};

export function useFamily() {
  return useContext(FamilyContext);
}
