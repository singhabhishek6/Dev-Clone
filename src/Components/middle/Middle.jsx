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
  const [latest, setLatest] = useState(false);
  const { state} = useContext(userContext);
  const [user, setUser] = useState({});
  const [fetchClicked, setFetchClicked] = useState("");
  const [page, setPage] = useState(2);
  useEffect(() => {
    setUser({ ...state.user });
  }, [state]);

  useEffect(() => {
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
        setPage((prev) => prev + 1);
        fetchAgain();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [articles]);

  const fetchAgain = () => {
    if (articles.length !== 0) {
      axios
        .get(`https://devto-backent.herokuapp.com/posts?page=${page}&limit=10`)
        .then((result) => {
          setArticles([...articles, ...result.data.posts]);
        });
    }
  };
  useEffect(() => {
    fetchIt();
  }, [fetchClicked]);

  function fetchIt() {
    setArticles([]);

    let latestData = [];

    axios
      .get(`https://devto-backent.herokuapp.com/posts?page=1&limit=10`)
      .then((res) => {
        if (fetchClicked === "latest=2") {
          latestData = res.data.posts.reverse();
          setArticles([...latestData]);
        } else {
          setArticles(res.data.posts);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <MiddleStyle>
      {user?._id && <Welcom />}
      <header className="header">
        <nav>
          <span
            className={`${feed && "bold"}`}
            onClick={(e) => {
              setFetchClicked("feed=2");
              setLatest(false);
              setFeed(true);
            }}
          >
            Feed
          </span>
          <span
            className={`${latest && "bold"}`}
            onClick={(e) => {
              setFetchClicked("latest=2");
              setLatest(true);
              setFeed(false);
            }}
          >
            Latest
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
