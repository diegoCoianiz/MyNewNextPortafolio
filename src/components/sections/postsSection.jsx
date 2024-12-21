import React, { useState } from "react";
import "@/styles/PostsSection.css";
import StorySlider from "../utilTools/storySilder";

const PostsSection = ({ data, stories }) => {
  const posts = data
  return (
    <section className="section">
      <StorySlider stories={stories} />
      <div className="posts-section__grid">
        {posts.map((post, id) => (
          <PostCard id={id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default PostsSection;

const PostCard = ({ post, id }) => {
  const sliceText = 100

  const [isExpanded, setIsExpanded] = useState(false);
  const longText = post.description.length > sliceText-1 ? true : false

  const handleToggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="post-card" key={id}>
      {console.log(longText, )}
      <div className="post-card__content">
        <h3 className="post-card__title">{post.title}</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="post-card__category">{post.category}</p>
          <p className="post-card__date">{post.date}</p>
        </div>
        <p className="post-card__description">
          {isExpanded
            ? post.description
            : `${post.description.slice(0, sliceText)}...`}
        </p>
        <span
          className="post-card__toggle"
          onClick={handleToggleDescription}
        >
          {longText && (
            <p>{isExpanded ? "Show less" : "Show more"}</p>
          )}
        </span>

        {post.contentType === "image" && (
          <img
            src={post.imgPhoto}
            alt={post.imgAlt}
            className="post-card__image"
          />
        )}
        {post.contentType === "video" && (
          <iframe
            src={post.videoUrl}
            className="post-card__video"
            title={post.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {post.leyend && <p className="post-card__leyend">{post.leyend}</p>}
      </div>
    </div>
  );
};