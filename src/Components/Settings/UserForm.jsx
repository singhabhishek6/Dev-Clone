import { useState } from 'react';
import styles from './Setting.module.css';

export const UserForm = () => {
    const [payload, setPayload] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPayload({...payload, [name]: value});
    } 

    const handleSubmit = (e) => {
        console.log(payload);
    }

    return (
        <div>
            <h2 className={styles.profileBoxHeader}>User</h2>
            <div className={styles.formFields}>
                <label>First Name</label><br />
                <input type="text" onChange={handleChange} name="first_name" />
            </div>
            <div className={styles.formFields}>
                <label>Last Name</label><br />
                <input type="text" onChange={handleChange} name="last_name" />
            </div>
            <div className={styles.formFields}>
                <label>Email</label><br />
                <input type="email" onChange={handleChange} name="email" />
            </div>
            <div className={styles.formFields}>
                <label>Profile Image</label><br />
                <input className={styles.upload_img_box} type="file" onChange={handleChange} name="profile_img" />
            </div>
            <div className={styles.formFields}>
                <input className={styles.submitBtn} value={"Save Profile Information"} type="text" readonly="true" onClick={handleSubmit} />
            </div>
        </div>
    );
}