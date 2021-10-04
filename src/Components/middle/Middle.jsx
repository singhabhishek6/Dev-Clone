import React, { useContext, useEffect, useState } from "react";
import { Cards } from "./Cards";
import { MiddleStyle } from "./MiddleStyle";
import { Skeleton } from "./Skeleton";
import { Welcom } from "./Welcom";
import axios from "axios";
import { userContext } from "../../App";

export const Middle = () => {
  const [articles, setArticles] = useState([]);
  const [feed, setFeed] = useState(true);
  const [top, setTop] = useState(false);
  const [latest, setLatest] = useState(false);
  const { state, setState } = useContext(userContext);
  const [user, setUser] = useState({});
  const [fetchClicked, setFetchClicked] = useState("");

  useEffect(() => {
    setUser({ ...state.user });
  }, [state]);

  useEffect(() => {
    const fetchAgain = () => {
      console.log("fetch again");
      if (articles.length !== 0) {
        axios.get("https://dev.to/api/articles").then((result) => {
          console.log("line no 20", articles, result);
          setArticles([...articles, ...result.data]);
        });
      }
    };
    const handleScroll = () => {
      const html = document.documentElement;
      const body = document.body;
      const windowheight =
        "innerHeight" in window ? window.innerHeight : html.offsetHeight;

      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      const windowBottom = windowheight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        console.log("we reached the bottom");
        fetchAgain();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [articles]);

  useEffect(() => {
    fetchIt();
  }, [fetchClicked]);

  function fetchIt() {
    setArticles([]);

    let latestData = [];

    axios
      .get("http://localhost:2222/posts")
      .then((res) => {
        latestData = res.data.posts.reverse();
        console.log(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });

    let timer = setTimeout(async () => {
     

      let res = await fetch(
        `https://dev.to/api/articles?${fetchClicked && fetchClicked}`
      );
      const data = await res.json();
      if (fetchClicked === "latest=2") {
        console.log(latestData,"posts");
        setArticles([...latestData, ...data]);
      } else {
        setArticles(data);
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }

  console.log(articles);
  return (
    <MiddleStyle>
      {user?._id && <Welcom />}
      <header className="header">
        <nav>
          <span
            className={`${feed && "bold"}`}
            onClick={(e) => {
              setTop(false);
              setFetchClicked("feed=2");
              setLatest(false);
              setFeed(true);
            }}
            href="/#"
          >
            Feed
          </span>
          <span
            className={`${top && "bold"}`}
            onClick={(e) => {
              setTop(true);
              setFetchClicked("latest=2");
              setLatest(false);
              setFeed(false);
            }}
            href="/#"
          >
            Latest
          </span>
          <span
            className={`${latest && "bold"}`}
            onClick={(e) => {
              setLatest(true);
              setFeed(false);
              setTop(false);
              setFetchClicked("top=2");
            }}
            href="/#"
          >
            Top
          </span>
        </nav>
      </header>
      <div className="articles">
        {articles &&
          articles.map((article, id) => {
            return <Cards key={id} data={article} />;
          })}

        {!articles.length && [1, 2, 3, 4, 5].map((a) => <Skeleton key={a} />)}
      </div>
    </MiddleStyle>
  );
};
