import { useContext } from "react";
import { AuthContext } from "../Router/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";


const UpdateProfile = () => {
    const { user,loading } = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        updateProfile(user, {
            displayName: name, photoURL: photo, email: email,
        })
            .then(() => {
                // Profile updated!
                toast.success('Successfully updated!');
            }).catch((error) => {
                // An error occurred
                console.log(error)
            });


    }

    return (
        <div className="container mx-auto flex flex-col lg:flex-row">
            <div className="flex-1 space-y-3 ">
                <h1 className="text-2xl font-bold ">Profile</h1>
                <h1 className="text-xl font-medium"><span className="text-xl font-thin ">Name:</span>{displayName}</h1>
                <h1 className="text-xl font-medium"><span className="text-xl font-thin ">Email:</span>{email}</h1>
                <div className="flex gap-4">
                    <h1 className="text-xl font-thin">Photo:</h1>
                    <img className="w-40" src={photoURL} alt="" />
                </div>

            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                
                <form onSubmit={handleUpdate} className="card-body">
                <h1 className="text-2xl font-bold">Update Profile</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;