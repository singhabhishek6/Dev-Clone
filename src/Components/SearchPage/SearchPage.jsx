import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Cards } from "../middle/Cards";
import { Skeleton } from "../middle/Skeleton";
import { Navbar } from "../Navbar/Navbar";
import styles from "./SearchPage.module.css";
import { Result } from "./Result";

export const SearchPage = () => {
  const [toggle, setToggle] = useState(false);
  const [articles, setArticles] = useState(null);



  //left Bar click background color setting
  const { data } = useParams();
  



  useEffect(() => {
    fetchIt(data);
  }, [data]);
  function fetchIt(x) {
    setArticles("");
    let timer = setTimeout(async () => {
      const res = await fetch(`https://dev.to/api/articles?tag=${x && x}`);
      const data = await res.json();
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
          <h1 className={styles.heading}>Search results for {data}</h1>
          <div className={styles.settingBody}>
            <div className={styles.leftSideBar}>
              <div
                className={styles.leftSideContent}
              >
                <p className={styles.leftSideContentTitle}>Posts</p>
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
