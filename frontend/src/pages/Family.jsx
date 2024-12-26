import {
  Users,
  CircleUser,
  UserRoundPlus,
  CircleUserRound,
  UserRoundMinus,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useFamily } from "../contexts/familyContext";

function Family() {
  const {
    searchResult,
    fetchFamilyMember,
    familyMember,
    searchUsers,
    addFamilyMember,
    removeFamilyMember,
  } = useFamily();

  useEffect(() => {
    fetchFamilyMember();
  }, []);

  // const fetchFamily = async () => {
  //   try
  //     const response = await api.get("/family");
  //     setFamilyMembers(response.data.familyMembers || []);
  //   } catch (error) {
  //     toast.error("Failed to fetch family members");
  //   }
  // };
  const handleSearch = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    searchUsers(value);
    // searchUsers(value);
    // const searchFilter = family.filter((obj) => obj.email.includes(value));
    // setSearchResult(searchFilter);
  };

  const handleAddFamily = async (id) => {
    addFamilyMember(id);
  };

  // const handleDelete = async (id) => {
  //   removeFamilyMember(id);
  // };
  return (
    <div className="flex flex-col my-7 mx-11 p-4">
      <div className="flex gap-3 ">
        <Users />
        <h1 className="text-xl font-bold">Family Members</h1>
      </div>
      <div className="mt-5 rounded-lg shadow-lg ">
        <input
          className="border rounded w-full p-2 "
          type="text"
          name="events"
          placeholder="Search family member by email"
          onChange={(e) => handleSearch(e)}
        />
      </div>

      <div className="flex gap-8 flex-col w-full h-2/2 mt-4 justify-center bg-white shadow-lg">
        {searchResult.map((family) => (
          <div
            key={family._id}
            className="flex justify-between shadow-sm w-full py-2"
          >
            <h2 className="flex gap-2 ms-3">
              <CircleUser className="text-lime-600 items-center" />
              <div className=" justify-center">
                <p className=" font-bold">{family.name}</p>
                <p className="text-gray-600 text-sm">{family.email}</p>
              </div>
            </h2>
            <button
              onClick={() => handleAddFamily(family._id)}
              className="flex mr-4 bg-lime-600 rounded p-2 mb-3 text-white gap-2 font-medium hover:text-lime-700"
            >
              <UserRoundPlus size={20} className="text-md" />
              Add
            </button>
          </div>
        ))}
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {familyMember.map((family) => (
          <div className="flex justify-center shadow-lg py-11 px-7 mt-8 gap-8">
            <div className="flex gap-3 ">
              <CircleUserRound size={28} className="text-lime-600 " />

              <div>
                <h1 className="font-bold">{family.name}</h1>
                <p className="opacity-50 ">{family.email}</p>
              </div>
            </div>
            <button
              onClick={() => removeFamilyMember(family._id)}
              className="text-red-600"
            >
              <UserRoundMinus size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Family;
