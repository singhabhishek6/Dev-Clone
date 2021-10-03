import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Cards } from "../middle/Cards";
import { MiddleStyle } from "../middle/MiddleStyle";
import { Skeleton } from "../middle/Skeleton";
import { Navbar } from "../Navbar/Navbar";
import styles from "./SearchPage.module.css";
import { Result } from "./Result";

export const SearchPage = () => {
  const [toggle, setToggle] = useState(false);
  const [currentSelectedTab, setCurrentSelectedTab] = useState("profile");
  const [articles, setArticles] = useState(null);

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
  const { data } = useParams();
  console.log(data, "sds");
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

  useEffect(() => {
    fetchIt(data);
  }, [data]);
  function fetchIt(x) {
    setArticles("");
    let timer = setTimeout(async () => {
      const res = await fetch(`https://dev.to/api/articles?tag=${x && x}`);
      const data = await res.json();
      console.log(data);
      setArticles(data);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }

  return (
    <div>
      <Navbar setToggle={setToggle} toggle={toggle} />
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.heading}>Search results for react</h1>
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
                <p className={styles.leftSideContentTitle}>Posts</p>
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
                <p className={styles.leftSideContentTitle}>Comments</p>
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
                <p className={styles.leftSideContentTitle}>People</p>
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
                <p className={styles.leftSideContentTitle}>My posts only</p>
              </div>
            </div>
            <div className={styles.rightSide}>
              <Result>
                <div className="articles">
                  {articles &&
                    articles.map((article, id) => {
                      return <Cards key={id} data={article} />;
                    })}

                  {!articles &&
                    [1, 2, 3, 4, 5].map((a) => <Skeleton key={a} />)}
                </div>
              </Result>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
