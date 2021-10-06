import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import styles from "./Setting.module.css";

export const Account = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const { state} = useContext(userContext);
  const [user, setUser] = useState({});
  const [errModel, setErrModel] = useState(false);
  const [errMessege, setErrMessage] = useState("");

  const state1  = {
    vertical: "top",
    horizontal: "right",
  }
  const { vertical, horizontal } = state1;

  useEffect(() => {
    setUser({ ...state.user });
  }, [state]);

  const handleAlert = (message) => {
    setErrMessage(message);
    setErrModel(true);
    setTimeout(() => {
      setErrModel(false);
    }, 2000);
  };

  const handleSubmit = () => {
    if (currentPassword === "") {
      handleAlert("Current Password is required!");
      return;
    } else if (password !== confirmPassword) {
      handleAlert("Password and currentPassword did not matched!");
      return;
    } else if (user?._id === undefined) {
      handleAlert("User is not logged in");
      return;
    }

    const payload = {
      password: currentPassword,
      updated_password: password,
    };

    axios
      .patch(`https://devto-backent.herokuapp.com/users/${user._id}`, payload)
      .then((res) => {
        handleAlert("Updated Successfully");
        setCurrentPassword("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((err) => {
        handleAlert(err);
      });
  };

  return (
    <div>
      <h2 className={styles.profileBoxHeader}>Set new password</h2>
      <div className={styles.formFields}>
        <label>Current password</label>
        <br />
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div className={styles.formFields}>
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.formFields}>
        <label>Confirm new password</label>
        <br />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className={styles.formFields}>
        <input
          className={`${styles.submitBtn} ${
            confirmPassword === password && styles.suc
          }`}
          value={"Set New Password"}
          type="text"
          readonly="true"
          onClick={handleSubmit}
        />
      </div>

      <Snackbar
        open={errModel}
        anchorOrigin={{
          vertical,
          horizontal,
        }}
        key={vertical + horizontal}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {errMessege}
        </Alert>
      </Snackbar>
    </div>
  );
};
