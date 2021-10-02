import { useContext, useEffect, useState } from "react";
import styles from "./Setting.module.css";
import { userContext } from "../../App";
import axios from "axios";
import { storage } from "../Post/Fire";
import { BiUpload } from "react-icons/bi";
import LoadingButton from "@mui/lab/LoadingButton";

export const UserForm = () => {
    const { state, setState } = useContext(userContext);
    const [user, setUser] = useState({});
    const [payload, setPayload] = useState({
        first_name: "",
        last_name: "",
        email: ""
    });
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("");

    useEffect(() => {
        setUser({ ...state.user });
        setPayload({
            first_name: state.user.first_name,
            last_name: state.user.last_name,
            email: state.user.email
        })
    }, [state]);

    //file upload url

    const handleUpload = (image) => {
        console.log("ss");
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        // setProgress(100);
                        setUrl(url);
                        setLoading(false);
                        setPayload({ ...payload, profile_image: url });
                    });
            }
        );
    };

    console.log(url);

    //file upload url end

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "profile_image" && e.target.files[0]) {
            // setImage(e.target.files[0]);
            setLoading(true);
            handleUpload(e.target.files[0]);
        }

        setPayload({ ...payload, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loading) {
            return
        }
        axios.patch(`http://localhost:2222/users/${user._id}`, payload).then(res => {
            alert("Updated Successfully");
        })
            .catch(err => {
                alert(err);
            })
        console.log(payload);
    };
    return (
        <div>
            <h2 className={styles.profileBoxHeader}>User</h2>
            <div className={styles.formFields}>
                <label>First Name</label>
                <br />
                <input type="text" onChange={handleChange} name="first_name" value={payload.first_name} />
            </div>
            <div className={styles.formFields}>
                <label>Last Name</label>
                <br />
                <input type="text" onChange={handleChange} name="last_name" value={payload.last_name} />
            </div>
            <div className={styles.formFields}>
                <label>Email</label>
                <br />
                <input type="email" onChange={handleChange} name="email" value={payload.email} />
            </div>
            <div className={styles.formFields}>
                <label>Profile Image</label>
                <br />

                {loading && (
                    <LoadingButton
                        loading
                        loadingPosition="start"
                        startIcon={<BiUpload />}
                        variant="outlined"
                    >
                        Uploading
                    </LoadingButton>
                )}
                <input
                    className={`${styles.upload_img_box} ${loading && styles.hide} `}
                    type="file"
                    onChange={handleChange}
                    name="profile_image"
                />
            </div>
            <div className={styles.formFields}>
                <input
                    className={`${styles.submitBtn} ${payload.first_name && styles.suc} ${loading && styles.allo}`}
                    value={"Save Profile Information"}
                    type="text"
                    readonly="true"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};
