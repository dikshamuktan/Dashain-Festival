import { User } from "lucide-react";

function ProfilePage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex mt-9 gap-4">
          <User size={30} />
          <h2 className="font-bold text-2xl ms-0">Profile Settings</h2>
        </div>
        <div className="shadow-lg w-4/6 gap-4">
          <img src="" />
          <div className="gap-7 flex">
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <p>email.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
