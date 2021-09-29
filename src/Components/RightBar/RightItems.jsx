import React from "react";

export const RightItems = ({ tag, articles }) => {
  return (
    <div className="card">
      <header>
        <h3>{tag}</h3>
        {tag === "Listings" && (
          <a href="/#">
            <small>see all</small>
          </a>
        )}
      </header>
      <ul>
        {articles.map((a) => {
          return (
            <li key={a.id}>
              <a href="/#">{a.mainTitle}</a> <br />
              <small>{a.subText}</small>
              {a.newarticle && <span>new</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
