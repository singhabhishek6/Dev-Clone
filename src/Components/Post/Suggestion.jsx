import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
export const Suggestion = ({ tag, title, md }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className={`titleHelp ${title && "appear"}`}>
        <h4>Writing a Great Post Title</h4>
        <ul className="list-disc pl-6 color-base-70">
          <li>
            Think of your post title as a super short (but compelling!)
            description — like an overview of the actual post in one short
            sentence.
          </li>
          <li>
            Use keywords where appropriate to help ensure people can find your
            post by search.
          </li>
        </ul>
      </div>

      <div className={`titleHelp1 ${tag && "appear1"}`}>
        <h4 className="mb-2 fs-l">Tagging Guidelines</h4>
        <ul className="list-disc pl-6 color-base-70">
          <li>Tags help people find your post.</li>
          <li>
            Think of tags as the topics or categories that best describe your
            post.
          </li>
          <li>
            Add up to four comma-separated tags per post. Combine tags to reach
            the appropriate subcommunities.
          </li>
          <li>Use existing tags whenever possible.</li>
          <li>
            Some tags, such as “help” or “healthydebate”, have special posting
            guidelines.
          </li>
        </ul>
      </div>

      <div className={`titleHelp2 ${md && "appear2"} ${show && "hi"}`}>
        <h4>Editor Basics</h4>
        <ul>
          <li>Use Markdown to write and format posts.</li>
          <li className="li" onClick={() => setShow(!show)}>
            <span className={`drop ${show && "dropR"}`}>
              <TiArrowSortedDown />
            </span>
            Commonly used Syntax
          </li>
          <div className={`hints ${!show && "lu"}`}>
            <img src="sug.png" alt="" />
          </div>
          <li>
            You can use Liquid tags to add rich content such as Tweets, YouTube
            videos, etc. In addition to images for the post's content, you can
            also drag and drop a cover image
          </li>
        </ul>
      </div>
    </div>
  );
};
