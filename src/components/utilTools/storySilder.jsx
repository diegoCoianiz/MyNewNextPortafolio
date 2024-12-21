import React, { useState } from "react";
import "@/styles/StorySlider.css";

const StorySlider = ({ stories, mode = "panorama" }) => {
  const [selectedStory, setSelectedStory] = useState(null); // Historia seleccionada
  const [currentSlide, setCurrentSlide] = useState(0); // Diapositiva actual

  const handleStoryClick = (index) => {
    if (mode === "panorama") {
      setSelectedStory(selectedStory === index ? null : index); // Alternar entre vista general y detalle
    }
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Texto copiado al portapapeles: " + text);
  };

  const renderLinks = (links) => {
    return links.map((link, index) => (
      <button
        key={index}
        className="story-detail__button"
        onClick={() =>
          link.redirect
            ? window.open(link.redirect, "_blank")
            : handleCopy(link.toCopy)
        }
      >
        {link.text}
      </button>
    ));
  };

  if (mode === "diapositivas") {
    return (
      <div className="story-slider story-slider--diapositivas">
        <div
          className="story-slider__container"
          onScroll={(e) => {
            const { scrollLeft, clientWidth } = e.target;
            const newSlide = Math.round(scrollLeft / clientWidth);
            setCurrentSlide(newSlide);
          }}
        >
          {stories.map((story, index) => (
            <div
              key={index}
              className="story-slider__item story-slider__item--slide"
            >
              <div className="story-detail">
                <div className="story-detail__left">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="story-detail__image"
                  />
                </div>
                <div className="story-detail__right">
                  <p className="story-detail__description">{story.description}</p>
                  <div className="story-detail__links">
                    {story.links && renderLinks(story.links)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="story-slider__indicators">
          {stories.map((_, index) => (
            <span
              key={index}
              className={`story-slider__dot ${
                index === currentSlide ? "story-slider__dot--active" : ""
              }`}
              onClick={() => {
                const container = document.querySelector(
                  ".story-slider__container"
                );
                if (container) {
                  const newScrollPosition = container.clientWidth * index;
                  container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
                }
              }}
            ></span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="story-slider">
      {selectedStory === null ? (
        <div className="story-slider__container">
          {stories.map((story, index) => (
            <div
              key={index}
              className="story-slider__item"
              onClick={() => handleStoryClick(index)}
            >
              <img
                src={story.image}
                alt={story.title}
                className="story-slider__image"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="story-detail">
          <div className="story-detail__left">
            <img
              src={stories[selectedStory].image}
              alt={stories[selectedStory].title}
              className="story-detail__image"
              onClick={() => setSelectedStory(null)}
            />
          </div>
          <div className="story-detail__right">
            <p className="story-detail__description">
              {stories[selectedStory].description}
            </p>
            <div className="story-detail__links">
              {stories[selectedStory].links && renderLinks(stories[selectedStory].links)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorySlider;
