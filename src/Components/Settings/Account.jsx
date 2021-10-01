import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import styles from './Setting.module.css';

export const Account = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { state, setState } = useContext(userContext);
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser({ ...state.payload });
    }, [state])

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            alert("Password and confirm password should be the same");
            return;
        }

        const payload = {
            password: currentPassword,
            updated_password: password,
        }

        axios.patch(`http://localhost:2222/users/${user._id}`, payload)
            .then(res => {
                alert("Updated Successfully");
            })
            .catch(err => {
                alert(err);
            })
    }

    return (
        <div>
            <h2 className={styles.profileBoxHeader}>Set new password</h2>
            <div className={styles.formFields}>
                <label>Current password</label><br />
                <input type="text" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
            </div>
            <div className={styles.formFields}>
                <label>Password</label><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className={styles.formFields}>
                <label>Confirm new password</label><br />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div className={styles.formFields}>
                <input className={styles.submitBtn} value={"Set New Password"} type="text" readonly="true" onClick={handleSubmit} />
            </div>
        </div>
    );
}