import PhotoCard from "./photocard";
import { useState } from "react";
function PhotoList() {
  const photoList = [
    {
      _id: "673f0691bff38085a11be486",
      userId: {
        _id: "673615770808c9ab5e5a42d7",
        name: "Chhetri",
        email: "chhetri@gmail.com",
        profilePicture:
          "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732183609/profile_pictures/gbhtf2ap5yahnurj6x80.jpg",
      },
      imageUrl:
        "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732183697/uploads/cbqq8edwyq7wmhphmlsb.jpg",
      description: "Cat Sleeping while standing",
      likes: [
        {
          _id: "673615770808c9ab5e5a42d7",
          name: "Chhetri",
          profilePicture:
            "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732183609/profile_pictures/gbhtf2ap5yahnurj6x80.jpg",
        },
      ],
      createdAt: "2024-11-21T10:08:17.832Z",
      __v: 1,
    },
    {
      _id: "673f0671bff38085a11be47b",
      userId: {
        _id: "673615770808c9ab5e5a42d7",
        name: "Chhetri",
        email: "chhetri@gmail.com",
        profilePicture:
          "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732183609/profile_pictures/gbhtf2ap5yahnurj6x80.jpg",
      },
      imageUrl:
        "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732183665/uploads/m1cwcbekvsdelyhsqfjz.jpg",
      description: "Lets Do Coding ",
      likes: [],
      createdAt: "2024-11-21T10:07:45.805Z",
      __v: 0,
    },
    {
      _id: "673f065ebff38085a11be470",
      userId: {
        _id: "673615770808c9ab5e5a42d7",
        name: "Chhetri",
        email: "chhetri@gmail.com",
        profilePicture:
          "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732183609/profile_pictures/gbhtf2ap5yahnurj6x80.jpg",
      },
      imageUrl:
        "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732183646/uploads/obuos1onx09mwsknx0dy.jpg",
      description: "its japan",
      likes: [],
      createdAt: "2024-11-21T10:07:26.594Z",
      __v: 0,
    },
    {
      _id: "673f04cdbff38085a11be312",
      userId: {
        _id: "6736d2d6bff38085a11bd406",
        name: "sujit",
        email: "sujit@gmail.com",
        profilePicture: "",
      },
      imageUrl:
        "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732183245/uploads/auleklcawp9m6tjqlaxn.jpg",
      description: "swivt background",
      likes: [
        {
          _id: "673615770808c9ab5e5a42d7",
          name: "Chhetri",
          profilePicture:
            "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732183609/profile_pictures/gbhtf2ap5yahnurj6x80.jpg",
        },
      ],
      createdAt: "2024-11-21T10:00:45.648Z",
      __v: 1,
    },
    {
      _id: "673f0498bff38085a11be2fd",
      userId: {
        _id: "673615770808c9ab5e5a42d7",
        name: "Chhetri",
        email: "chhetri@gmail.com",
        profilePicture:
          "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732183609/profile_pictures/gbhtf2ap5yahnurj6x80.jpg",
      },
      imageUrl:
        "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732183192/uploads/vnpw4srhxiwt6fug01c4.png",
      description: "output of my AI Model",
      likes: [],
      createdAt: "2024-11-21T09:59:52.506Z",
      __v: 0,
    },
    {
      _id: "673ebbecbff38085a11be219",
      userId: {
        _id: "673d6dcabff38085a11be143",
        name: "Dipesh Muktan",
        email: "dipesh@123email.com",
        profilePicture: "",
      },
      imageUrl:
        "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732164588/uploads/wph3jjhsfweakgbkfhlr.jpg",
      description: "",
      likes: [
        {
          _id: "673d6dcabff38085a11be143",
          name: "Dipesh Muktan",
          profilePicture: "",
        },
      ],
      createdAt: "2024-11-21T04:49:48.910Z",
      __v: 1,
    },
    {
      _id: "673ebbd3bff38085a11be20f",
      userId: {
        _id: "673d6dcabff38085a11be143",
        name: "Dipesh Muktan",
        email: "dipesh@123email.com",
        profilePicture: "",
      },
      imageUrl:
        "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732164562/uploads/xwmsbt2iae7tjyurdbr4.jpg",
      description: "",
      likes: [],
      createdAt: "2024-11-21T04:49:23.286Z",
      __v: 2,
    },
    {
      _id: "673c3a32bff38085a11be077",
      userId: {
        _id: "673c2b58bff38085a11bdf8e",
        name: "saroj",
        email: "saroj@email.com",
        profilePicture:
          "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732077245/profile_pictures/hfazezvm79htj5bdl7if.jpg",
      },
      imageUrl:
        "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732000305/uploads/rwyssxl1jlfdbqxanxnq.jpg",
      description: "1st official professional photo shoot",
      likes: [
        {
          _id: "673c2b58bff38085a11bdf8e",
          name: "saroj",
          profilePicture:
            "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732077245/profile_pictures/hfazezvm79htj5bdl7if.jpg",
        },
        {
          _id: "673615770808c9ab5e5a42d7",
          name: "Chhetri",
          profilePicture:
            "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732183609/profile_pictures/gbhtf2ap5yahnurj6x80.jpg",
        },
      ],
      createdAt: "2024-11-19T07:11:46.313Z",
      __v: 2,
    },
    {
      _id: "673618ed4f86395904964125",
      userId: {
        _id: "673615770808c9ab5e5a42d7",
        name: "Chhetri",
        email: "chhetri@gmail.com",
        profilePicture:
          "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732183609/profile_pictures/gbhtf2ap5yahnurj6x80.jpg",
      },
      imageUrl:
        "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1731598572/uploads/l1pplq5mmqspz8zxsxoy.jpg",
      description: "Deployment thumbnail for youtube channel",
      likes: [
        {
          _id: "67360c2ac4fb629267ea0103",
          name: "Manish Chhetri",
          profilePicture:
            "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1731595433/profile_pictures/uhurv5p3zmjra5pfssi8.jpg",
        },
        {
          _id: "6737281ebff38085a11bd4eb",
          name: "Mandip Chhetri",
          profilePicture: "",
        },
        {
          _id: "673615770808c9ab5e5a42d7",
          name: "Chhetri",
          profilePicture:
            "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732183609/profile_pictures/gbhtf2ap5yahnurj6x80.jpg",
        },
        {
          _id: "673c2b58bff38085a11bdf8e",
          name: "saroj",
          profilePicture:
            "https://res.cloudinary.com/dvpzrmtyc/image/upload/v1732077245/profile_pictures/hfazezvm79htj5bdl7if.jpg",
        },
      ],
      createdAt: "2024-11-14T15:36:13.094Z",
      __v: 8,
    },
  ];
  const [photos, setPhotos] = useState(photoList);
  return (
    <div>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-11 gap-y-6 mt-8 ">
        {photos.map((photos, index) => (
          <PhotoCard photo={photos} key={photos._id} />
        ))}
      </div>
    </div>
  );
}

export default PhotoList;
