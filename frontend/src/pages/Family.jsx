import {
  Users,
  CircleUser,
  UserRoundPlus,
  CircleUserRound,
  UserRoundMinus,
} from "lucide-react";
import { useState } from "react";

function Family() {
  const [FamilyMember, setFamilyMember] = useState();
  const [family, setFamily] = useState([
    {
      id: "1",
      name: "Diksha Sharma",
      email: "diksha@example.com",
      phoneNo: "9876543210",
      password: "pass1234",
    },
    {
      id: "2",
      name: "Rahul Verma",
      email: "rahul@example.com",
      phoneNo: "9876543211",
      password: "securepass",
    },
    {
      id: "3",
      name: "Ayesha Khan",
      email: "ayesha@example.com",
      phoneNo: "9876543212",
      password: "mypassword",
    },
    {
      id: "3",
      name: "Arjun Singh",
      email: "arjun@example.com",
      phoneNo: "9876543213",
      password: "password123",
    },
    {
      id: "4",
      name: "Neha Gupta",
      email: "neha@example.com",
      phoneNo: "9876543214",
      password: "letmein",
    },
  ]);

  const [searhResult, setSearchResult] = useState([]);

  // useEffect(() => {
  //   fetchFamily();
  // }, []);

  // const fetchFamily = async () => {
  //   try
  //     const response = await api.get("/family");
  //     setFamilyMembers(response.data.familyMembers || []);
  //   } catch (error) {
  //     toast.error("Failed to fetch family members");
  //   }
  // };
  const handleSearch = (e) => {
    const value = e.target.value;
    const searchFilter = family.filter((obj) => obj.email.includes(value));
    setSearchResult(searchFilter);
  };

  const handleAddFamily = async (_id) => {
    const FamilyMember = (family) => {
      console.log(family);
      setFamilyMember(family);
    };
    FamilyMember();

    const success = await family();
    if (success) {
      setEmail("");
      setSearchResult([]);
    }
  };
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
          onChange={handleSearch}
        />
      </div>

      <div className="flex gap-8 flex-col w-full h-2/2 mt-4 justify-center bg-white shadow-lg">
        {searhResult.map((family) => (
          <div className="flex justify-between shadow-sm w-full py-2">
            <h2 className="flex gap-2 ms-3">
              <CircleUser className="text-lime-600 items-center" />
              <div className=" justify-center">
                <p className=" font-bold">{family.name}</p>
                <p className="text-gray-600 text-sm">{family.email}</p>
              </div>
            </h2>
            <button
              onClick={() => handleAddFamily()}
              className="flex mr-4 bg-lime-600 rounded p-2 mb-3 text-white gap-2 font-medium hover:text-lime-700"
            >
              <UserRoundPlus size={20} className="text-md" />
              Add
            </button>
          </div>
        ))}
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {family.map((family) => (
          <div className="flex justify-center shadow-lg py-11 px-7 mt-8 gap-8">
            <div className="flex gap-3 ">
              <CircleUserRound size={28} className="text-lime-600 " />

              <div>
                <h1 className="font-bold">{family.name}</h1>
                <p className="opacity-50 ">{family.email}</p>
              </div>
            </div>
            <div className="text-red-600">
              <UserRoundMinus size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Family;
