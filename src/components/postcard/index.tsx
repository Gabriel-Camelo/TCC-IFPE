import React, { useState, useEffect } from "react";

import "./postcard.styles.scss";

interface IPostcard {
  type?: "post" | "banner" | "comment";
  post?: IPost;
}

const Postcard = (props: IPostcard) => {
  const [cardType, setCardType] = useState<"banner" | "post" | "comment">("post");
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    (props.type? setCardType(props.type):setCardType("post"));
    const fetchPost = async () => {
      const response = await fetch("http://localhost:3000/api/posts/1");
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  });

  return (
    <div className={`${"postcard " + cardType}`}>
      {post && (
        <>
          <div className="postcard-image">
            <img src={post.image} alt={post.title} id="postcardBanner"/>
          </div>
          <div className="postcard-content">
            <div className="postcard-header">
              <div className="postcard-line">
                <div className="postcard-slug">

                </div>
                <div className="postcard-views">

                </div>
              </div>
            
              <div className="postcard-title">

              </div>
              <div className="postcard-subtitle">

              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Postcard;