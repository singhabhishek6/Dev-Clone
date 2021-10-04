import React from "react";
import { BiHeart } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";

dayjs.extend(relativeTime);

export const Cards = (props) => {
  let {
    id,
    _id,
    title,
    cover_image,
    createdAt,
    tag_list,
    tags,
    comment_count,
    url,
    likes_count,
    comments_count,
    positive_reactions_count,
    public_reactions_count,
    user,
    published_at,
    reading_time_minutes,
  } = props.data;

  // console.log("article data", user);

  if (tag_list === undefined) {
    tag_list = tags;
  }

  // console.log(user);
console.log(props.data);
  return (
    <article className="article">
      <Link to={`/article/${_id || id}`}>
        {cover_image && (
      
          <img  className="article__image" src={cover_image} alt="" />
        )}
        <div className="article__details">
          <div className="u-pic">
            <img src={user.profile_image} alt="" />
          </div>
          <div className="u-details">
            <a href={`http://dev.to/${user.username}`}>
              <span className="u-name">{user.name}</span>
            </a>
            <a href={url}>
              <span className="time">
                {new Date(createdAt||published_at).toLocaleDateString(undefined, {
                  day: "numeric",
                  month: "long",
                })}
              </span>
            </a>

            <a href={url}>
              <h3>{title}</h3>
            </a>

            <div className="tags">
              {tag_list.map((tag, id) => {
                return (
                  <a key={id} href={`https://dev.to/t/${tag}`}>
                    <span className="tag">#{tag}</span>
                  </a>
                );
              })}
            </div>

            <div className="additional-details">
              <div className="reactions">
                { (likes_count > 0 || public_reactions_count + positive_reactions_count > 0) && (
                  <a href={url? url : "#"}>
                    <span>
                      <i>
                        <BiHeart style={{ width: 20, height: 20 }} />
                      </i>
                      &nbsp;
                       {likes_count || public_reactions_count + positive_reactions_count} &nbsp;
                      <span className="hidden-mobile">reactions</span>
                    </span>
                  </a>
                )}

                <a href={url? url : "#"}>
                  <span>
                    {(comment_count==0 || comments_count > 0) && (
                      <i>
                        <FaRegComment style={{ width: 17, height: 17 }} />
                      </i>
                    )}
                    &nbsp;
                    {(comment_count==0 ||comments_count > 0 )? (
                      <span>
                        {comment_count || comments_count || 0} &nbsp;
                        <span className="hidden-mobile">comments</span>
                      </span>
                    ) : null}
                    {comments_count === 0 ? (
                      <span>
                        <span className="show-mobile">{comment_count || comments_count}</span>
                        &nbsp;
                        <span className="hidden-mobile">Add comment</span>
                      </span>
                    ) : null}
                  </span>
                </a>
              </div>

              <div className="save">
                <small>{reading_time_minutes} min. read</small>
                <button>save</button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
