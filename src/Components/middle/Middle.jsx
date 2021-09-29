import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Cards } from './Cards';
import { MiddleStyle } from './MiddleStyle';
import { Skeleton } from './Skeleton';

export const Middle = () => {
    const [articles, setArticles] = useState(null);
    const [feed,setFeed] = useState(true)
    const [top,setTop] = useState(false)
    const [latest,setLatest] = useState(false)

    useEffect(() => {
      const fetchAgain = () => {
        if (articles != null) {
          fetch("https://dev.to/api/articles")
            .then((res) => res.json())
            .then((result) => setArticles([...articles, ...result]));
        }
      };
  console.log(articles);
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
      
      fetchIt("")
    }, []);

    function fetchIt(x){
      setArticles("")
      let timer = setTimeout(async () => {
        const res = await fetch(`https://dev.to/api/articles?${ x && x}`);
        const data = await res.json();
  
        setArticles(data);
      }, 2000);

      return()=>{
        clearTimeout(timer)
      }
    }
  
    return (
        <MiddleStyle>
        <header className="header">
          <nav>
            <span className={`${feed && 'bold'}`}
            onClick={(e)=>{
              fetchIt("feed=2")
              setTop(false)
              setLatest(false)
              setFeed(true)
            }}
            href="/#">Feed</span>
            <span className={`${top && 'bold'}`} onClick={(e)=>{
              fetchIt("latest=2")
              setTop(true)
              setLatest(false)
              setFeed(false)
            }} href="/#">Latest</span>
            <span className={`${latest && 'bold'}`} onClick={(e)=>{
              fetchIt("top=2")
              setLatest(true)
              setFeed(false)
              setTop(false)
            }} href="/#">Top</span>
          </nav>
        </header>
        <div className="articles">
          {articles &&
            articles.map((article, id) => {
              return <Cards key={id} data={article} />;
            })}
  
          {!articles && [1, 2, 3, 4, 5].map((a) => <Skeleton key={a} />)}
        </div>
      </MiddleStyle>
    )
}
