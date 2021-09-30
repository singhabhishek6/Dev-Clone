import styles from './Setting.module.css';

export const Account = () => {
    return (
        <div>
            <h2 className={styles.profileBoxHeader}>Set new password</h2>
            <div className={styles.formFields}>
                <label>Current password</label><br />
                <input type="text" />
            </div>
            <div className={styles.formFields}>
                <label>Password</label><br />
                <input type="text" />
            </div>
            <div className={styles.formFields}>
                <label>Confirm new password</label><br />
                <input type="text" />
            </div>
            <div className={styles.formFields}>
                <input className={styles.submitBtn} value={"Set New Password"} type="text" readonly="true" />
            </div>
        </div>
    );
}