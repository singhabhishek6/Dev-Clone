import styles from './Setting.module.css';

export const UserForm = () => {
    return (
        <div>
            <h2 className={styles.profileBoxHeader}>User</h2>
            <div className={styles.formFields}>
                <label>Name</label><br />
                <input type="text" />
            </div>
            <div className={styles.formFields}>
                <label>Email</label><br />
                <input type="email" />
            </div>
            <div className={styles.formFields}>
                <label>Username</label><br />
                <input type="text" />
            </div>
            <div className={styles.formFields}>
                <label>Profile Image</label><br />
                <input className={styles.upload_img_box} type="file" />
            </div>
            <div className={styles.formFields}>
                <input className={styles.submitBtn} value={"Save Profile Information"} type="text" readonly="true" />
                {/* <button>Save Profile Information</button> */}
            </div>
        </div>
    );
}