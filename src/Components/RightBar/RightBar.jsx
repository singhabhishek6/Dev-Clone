import React from "react";
import { Link } from "react-router-dom";
import { RightBarStyled } from "./RightBarStyle";
import { RightItems } from "./RightItems";
import { BsArrowRight } from "react-icons/bs";
const listings = [
  {
    id: 1,
    mainTitle: "Go/JS/PHP Software engineer looking for new opportunities",
    subText: "forHire",
  },
  {
    id: 2,
    mainTitle: "Live-Coding on YouTube continues tomorrow",
    subText: "events",
  },

];
const news = [
  {
    id: 1,
    mainTitle: "Game Dev Digest — Issue #83 - How and Why",

    newarticle: true,
  },
  {
    id: 2,
    mainTitle: "JavaScript News and Updates of February 2021",

    newarticle: true,
  },

];

const help = [
  {
    id: 1,
    mainTitle: "How to start a programming blog?",

    newarticle: true,
  },
  {
    id: 2,
    mainTitle: "How to use @yarnpkg/core?",
    subText: "2 comments",
    newarticle: false,
  },
  {
    id: 3,
    mainTitle: "Need advice regarding web development",
    subText: "5 comments",

    newarticle: false,
  },
];

export const RightBar = () => {
  return (
    <RightBarStyled>
      <div className="card-hackathon">
        <p>
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--bwBw9kPL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_2240/https://jess.forem.lol/remoteimages/uploads/articles/a3ojuveqrskiei1m6x6x.png"
            alt=""
          />
        </p>
        <h2>
          <Link to="/#">Forem.dev </Link>
          <span>
            is a community dedicated to discussing and discovering the open
            source community software that powers DEV.
          </span>
        </h2>
        <span className="arr">
          <Link to="/signup">
            <BsArrowRight />
            Join
          </Link>
        </span>
      </div>

      <RightItems tag="#news" articles={news} />

      <RightItems tag="#help" articles={help} />

      <RightItems tag="Listings" articles={listings} />
    </RightBarStyled>
  );
};
