import react from "react";

function MyPhotos() {
  const myPhotos = [
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
  ];

  return (
    <div>
      <div>
        {myPhotos.map((myPhotos, index) => (
          <ul myPics={myPhotos} key={myPhotos._id}>
            <img
              className="aspect-[4/3] rounded "
              src={myPhotos.imageUrl}
              alt="Uploaded"
              style={{
                height: "280px",
                width: "100%",
              }}
            />
            <p className="">{myPhotos.description}</p>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default MyPhotos;
