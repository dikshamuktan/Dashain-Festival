function MyPhotos() {
  return (
    <div>
      <div>
        {userPhotos.map((photos, index) => (
          <ul myPics={photos} key={photos._id}>
            <img
              className="aspect-[4/3] rounded "
              src={photos.imageUrl}
              alt="Uploaded"
              style={{
                height: "280px",
                width: "100%",
              }}
            />
            <p className="">{photos.description}</p>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default MyPhotos;
