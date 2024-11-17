import { useContext, useState } from "react"
import "./ProfileUpdatePage.scss"
import { AuthContext } from "../../context/AuthContext"
import apiRequest from "../../lib/apiRequest"
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

const ProfileUpdatePage = () => {
    const [error, setError] = useState("");

    const { currentUser, updateUser } = useContext(AuthContext);

    const [avatar, setAvatar] = useState([]);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);

        const { username, email, password } = Object.fromEntries(formData);

        try {
            const response = await apiRequest.put(`/users/${currentUser.id}`, {
                username,
                email,
                password,
                avatar:avatar[0]
            })

            updateUser(response.data);
            navigate("/profile")
        } catch (error) {
            console.log(error)
            setError(error.response.data.message);
        }
    }

    return (
        <div className="profileUpdatePage">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Update Profile</h1>
                    <div className="item">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            defaultValue={currentUser.username}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            defaultValue={currentUser.email}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                        />
                    </div>
                    <button>Update</button>
                    {
                        error && <span>{error}</span>
                    }
                </form>
            </div>
            <div className="sideContainer">
                <img src={avatar[0] || currentUser.avatar || "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"} alt="" className="avatar" />
                <UploadWidget uwConfig={{
                    cloudName: "dojnru4gb",
                    uploadPreset: "xorbook",
                    multiple: false,
                    maxImageFileSize: 2000000,
                    folder: "avatar"
                }}
                    setState={setAvatar}
                />
            </div>
        </div>
    )
}

export default ProfileUpdatePage