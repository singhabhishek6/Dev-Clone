import { useContext, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Customization } from "./customization";
import styles from "./Setting.module.css";
import { UserForm } from "./UserForm";
import { Account } from "./Account";
import { userContext } from "../../App";
import { Redirect } from "react-router";

export const Setting = () => {
  const [toggle, setToggle] = useState(false);
  const [currentSelectedTab, setCurrentSelectedTab] = useState("profile");
  const { state } = useContext(userContext);

  const [userFormDisplay, setUserFormDisplay] = useState("inherit");
  const [customizationDisplay, setCustomizationDisplay] = useState("none");
  const [accountDisplay, setAccountDisplay] = useState("none");

  //left Bar click background color setting
  const [profileBG, setProfileBG] = useState("#fff");
  const [customizationBG, setCustomizationBG] = useState("none");
  const [NotificationsBG, setNotificationsBG] = useState("none");
  const [accountBG, setAccountBG] = useState("none");
  const [billingBG, setBillingBG] = useState("none");
  const [extensionBG, setExtensionBG] = useState("none");

  const setDisplayToNone = () => {
    if (currentSelectedTab === "profile") setUserFormDisplay("none");
    else if (currentSelectedTab === "customize")
      setCustomizationDisplay("none");
    else if (currentSelectedTab === "account") setAccountDisplay("none");
  };

  const setAllLeftBGToNone = () => {
    if (currentSelectedTab === "profile") setProfileBG("none");
    else if (currentSelectedTab === "customize") setCustomizationBG("none");
    else if (currentSelectedTab === "account") setAccountBG("none");
    else if (currentSelectedTab === "notification") setNotificationsBG("none");
    else if (currentSelectedTab === "billing") setBillingBG("none");
    else if (currentSelectedTab === "extension") setExtensionBG("none");
  };

  if (state?.user?._id === undefined) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Navbar setToggle={setToggle} toggle={toggle} />
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.heading}>Settings</h1>
          <div className={styles.settingBody}>
            <div className={styles.leftSideBar}>
              <div
                className={styles.leftSideContent}
                style={{ background: profileBG }}
                onClick={() => {
                  setDisplayToNone();
                  setUserFormDisplay("inherit");
                  setCurrentSelectedTab("profile");
                  setProfileBG("#fff");
                  setAllLeftBGToNone();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                >
                  <title id="ac8rzijw9o8mvhps99vvzuftvig54kzr">Profile</title>
                  <path
                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                    fill="#FFCC4D"
                  ></path>
                  <path
                    d="M7.842 15.123c.025.1.649 2.433 4.158 2.433 3.51 0 4.133-2.333 4.158-2.433a.277.277 0 00-.464-.265c-.011.01-1.086 1.03-3.695 1.03-2.607 0-3.683-1.02-3.692-1.03a.28.28 0 00-.452.087.278.278 0 00-.014.178zM10.056 9.5c0 1.074-.622 1.944-1.39 1.944-.767 0-1.388-.87-1.388-1.944 0-1.074.621-1.944 1.389-1.944.767 0 1.389.87 1.389 1.944zm6.666 0c0 1.074-.621 1.944-1.389 1.944-.767 0-1.389-.87-1.389-1.944 0-1.074.622-1.944 1.39-1.944.767 0 1.388.87 1.388 1.944z"
                    fill="#664500"
                  ></path>
                </svg>
                <p className={styles.leftSideContentTitle}>Profile</p>
              </div>
              <div
                className={styles.leftSideContent}
                style={{ background: customizationBG }}
                onClick={() => {
                  setDisplayToNone();
                  setCustomizationDisplay("inherit");
                  setCurrentSelectedTab("customize");
                  setCustomizationBG("#fff");
                  setAllLeftBGToNone();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  ariaLabelledby="a9ai80uggz3lyx9lwjemg019dmdtkrns"
                  className="crayons-icon crayons-icon--default"
                >
                  <title id="a9ai80uggz3lyx9lwjemg019dmdtkrns">
                    Customization
                  </title>
                  <path
                    d="M12 16.444a4.444 4.444 0 110-8.889 4.444 4.444 0 010 8.89zm8.889-6.11H19.02a7.16 7.16 0 00-.879-2.12l1.322-1.32a1.112 1.112 0 000-1.572l-.786-.786a1.11 1.11 0 00-1.571 0l-1.321 1.322a7.167 7.167 0 00-2.12-.88V3.112A1.111 1.111 0 0012.557 2h-1.112a1.11 1.11 0 00-1.11 1.111V4.98a7.167 7.167 0 00-2.12.879l-1.32-1.322a1.111 1.111 0 00-1.572 0l-.786.786a1.112 1.112 0 000 1.571l1.322 1.321a7.172 7.172 0 00-.88 2.12H3.112A1.111 1.111 0 002 11.443v1.112a1.11 1.11 0 001.111 1.11H4.98c.18.76.48 1.473.879 2.119l-1.322 1.322a1.112 1.112 0 000 1.571l.786.786a1.113 1.113 0 001.571 0l1.321-1.322c.655.405 1.37.702 2.12.88v1.867A1.111 1.111 0 0011.443 22h1.112a1.111 1.111 0 001.11-1.111V19.02c.76-.18 1.473-.48 2.119-.879l1.322 1.322a1.108 1.108 0 001.571 0l.786-.786a1.111 1.111 0 000-1.571l-1.322-1.321a7.16 7.16 0 00.88-2.12h1.867A1.111 1.111 0 0022 12.557v-1.112a1.111 1.111 0 00-1.111-1.11z"
                    fill="#66757F"
                  ></path>
                </svg>
                <p className={styles.leftSideContentTitle}>Customization</p>
              </div>
              <div
                className={styles.leftSideContent}
                style={{ background: NotificationsBG }}
                onClick={() => {
                  setDisplayToNone();
                  setCurrentSelectedTab("notification");
                  setNotificationsBG("#fff");
                  setAllLeftBGToNone();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  ariaLabelledby="aljhfvi4pfzq1a25vpz054p5ngl8u7u0"
                  class="crayons-icon crayons-icon--default"
                >
                  <title id="aljhfvi4pfzq1a25vpz054p5ngl8u7u0">
                    Notifications
                  </title>
                  <path
                    d="M14.222 20.333c0 1.228-4.444 1.228-4.444 0v-5.555a2.222 2.222 0 114.444 0v5.555z"
                    fill="#C1694F"
                  ></path>
                  <path
                    d="M16.444 3.667H7.556v11.11h13.333V8.112a4.444 4.444 0 00-4.445-4.444z"
                    fill="#99AAB5"
                  ></path>
                  <path
                    d="M7.556 3.667A4.444 4.444 0 003.11 8.11v6.667H12V8.11a4.445 4.445 0 00-4.444-4.444"
                    fill="#292F33"
                  ></path>
                  <path
                    d="M20.889 9.222h-6.667a1.111 1.111 0 000 2.222h4.445v1.112a1.11 1.11 0 001.11 1.11h1.112A1.111 1.111 0 0022 12.557v-2.223a1.111 1.111 0 00-1.111-1.11z"
                    fill="#DD2E44"
                  ></path>
                </svg>
                <p className={styles.leftSideContentTitle}>Notifications</p>
              </div>
              <div
                className={styles.leftSideContent}
                style={{ background: accountBG }}
                onClick={() => {
                  setDisplayToNone();
                  setAccountDisplay("inherit");
                  setCurrentSelectedTab("account");
                  setAccountBG("#fff");
                  setAllLeftBGToNone();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  ariaLabelledby="abmhbuoarreekpanuuumq6k1r1k4rzm2"
                  class="crayons-icon crayons-icon--default"
                >
                  <title id="abmhbuoarreekpanuuumq6k1r1k4rzm2">Account</title>
                  <path
                    d="M14.728 9.999a9.75 9.75 0 00-1.6 1.345c-.07-2.358-.637-5.408-3.762-6.901-.618-3.364-7.83-1.655-7.183-1.329 1.285.65 1.97 2.305 2.796 3.175 1.474 1.552 3.113 1.647 3.928.433 1.927 1.252 2.054 3.627 1.995 6.166-.006.28-.013.542-.013.78v7.776c0 .614 2.223.614 2.223 0v-6.383c.3-.53 1.179-1.947 2.46-2.941.881.774 2.301.527 3.59-.83.829-.871 1.275-2.525 2.56-3.176.68-.342-7.11-2.218-6.993 1.885"
                    fill="#77B255"
                  ></path>
                </svg>
                <p className={styles.leftSideContentTitle}>Account</p>
              </div>
              <div
                className={styles.leftSideContent}
                style={{ background: billingBG }}
                onClick={() => {
                  setDisplayToNone();
                  setCurrentSelectedTab("billing");
                  setBillingBG("#fff");
                  setAllLeftBGToNone();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  ariaLabelledby="ab2g6nxdztvz3gmwbhj3h2218079pbaq"
                  class="crayons-icon crayons-icon--default"
                >
                  <title id="ab2g6nxdztvz3gmwbhj3h2218079pbaq">Billing</title>
                  <path
                    d="M4.222 4.778A2.222 2.222 0 002 7v10a2.222 2.222 0 002.222 2.222h15.556A2.222 2.222 0 0022 17V7s0-2.222-2.222-2.222H4.222z"
                    fill="#FFAC33"
                  ></path>
                  <path d="M22 10.333H2V7.556h20v2.777z" fill="#292F33"></path>
                  <path
                    d="M19.778 15.889H4.222v-3.333h15.556v3.333z"
                    fill="#F4F7F9"
                  ></path>
                  <path
                    d="M12.556 15.333c-.947 0-1.301-.672-1.372-1-.304.023-.6.168-1.002.424-.426.27-.908.576-1.515.576-.665 0-1.07-.375-1.111-1.11-.002-.032.02-.105.011-.105-1.032 0-1.779.978-1.786.989a.555.555 0 11-.895-.658c.042-.058 1.064-1.338 2.67-1.338 1.076 0 1.137.764 1.154 1.049l.003.06c.27-.018.55-.196.873-.401.533-.339 1.196-.762 2.083-.535.484.124.56.574.588.743a.764.764 0 00.027.125c.005 0 .082.05.321.073.456.041.957-.155 1.486-.363.549-.216 1.117-.439 1.728-.439 1.883 0 2.649.909 2.73 1.013a.556.556 0 01-.876.684c-.013-.015-.516-.585-1.854-.585-.401 0-.848.175-1.322.36-.56.22-1.351.438-1.941.438z"
                    fill="#8899A6"
                  ></path>
                </svg>
                <p className={styles.leftSideContentTitle}>Billing</p>
              </div>
              <div
                className={styles.leftSideContent}
                style={{ background: extensionBG }}
                onClick={() => {
                  setDisplayToNone();
                  setCurrentSelectedTab("extension");
                  setExtensionBG("#fff");
                  setAllLeftBGToNone();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="img"
                  ariaLabelledby="ab8muouuxa6eh17qkb3i1a8kt8w8qx9m"
                  class="crayons-icon crayons-icon--default"
                >
                  <title id="ab8muouuxa6eh17qkb3i1a8kt8w8qx9m">
                    Extensions
                  </title>
                  <path
                    d="M7.556 22a.554.554 0 01-.494-.81l3.87-7.523h-6.71a.556.556 0 01-.363-.976L16.082 2.135a.555.555 0 01.857.675l-3.87 7.523h6.709a.556.556 0 01.363.976L7.919 21.865a.555.555 0 01-.363.135"
                    fill="#FFAC33"
                  ></path>
                </svg>
                <p className={styles.leftSideContentTitle}>Extensions</p>
              </div>
            </div>
            <div className={styles.rightSide}>
              <div style={{ display: `${userFormDisplay}` }}>
                <UserForm />
              </div>
              <div style={{ display: `${customizationDisplay}` }}>
                <Customization />
              </div>
              <div style={{ display: `${accountDisplay}` }}>
                <Account />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
