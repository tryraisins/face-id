import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";

import { detectFaces, drawResults } from "../../helpers/faceApi";

import Button from "../Button/Button";
import Gallery from "../Gallery/Gallery";
import Results from "../Results/Results";
import Webcam from "react-webcam";

import "./Camera.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Camera = () => {
  const camera = useRef();
  const cameraCanvas = useRef();

  const [photo, setPhoto] = useState(undefined);
  const [showGallery, setShowGallery] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [results, setResults] = useState([]);

  const clearOverlay = (canvas) => {
    canvas.current
      .getContext("2d")
      .clearRect(0, 0, canvas.width, canvas.height);
  };

  const toggleGallery = () => setShowGallery(!showGallery);

  const capture = () => {
    const imgSrc = camera.current.getScreenshot();
    const newPhotos = [...photos, imgSrc];
    setPhotos(newPhotos);
    setPhoto(imgSrc);
    setShowGallery(true);
  };
  const reset = () => {
    setPhoto(undefined);
    setPhotos([]);
    setShowGallery(false);
  };
  const deleteImage = (target) => {
    const newPhotos = photos.filter((photo) => {
      return photo !== target;
    });
    setPhotos(newPhotos);
  };

  return (
    <div className='camera'>
      <p className='scroll_down black'>Take a photo and get results below ↓</p>
      <div className='camera__wrapper'>
        <Webcam audio={false} ref={camera} width='100%' height='auto' />
        <canvas
          className={classnames(
            "webcam-overlay",
            true && "webcam-overlay--hidden",
          )}
          ref={cameraCanvas}
        />
      </div>

      {true ? (
        <>
          <div className='camera__button-container'>
            {photos.length > 0 && (
              <Button onClick={toggleGallery} className='pointer'>
                {showGallery ? "Hide " : "Show "} Gallery
              </Button>
            )}
            <Button onClick={capture} className='camera__button--snap grow'>
              <FontAwesomeIcon icon='camera' size='lg' />
            </Button>
            {photos.length > 0 && (
              <Button onClick={reset} className='pointer'>
                Reset
              </Button>
            )}
          </div>

          {photos.length > 0 && (
            <Gallery
              photos={photos}
              selected={photo}
              show={showGallery}
              deleteImage={deleteImage}
            />
          )}
        </>
      ) : (
        <>
          <div className='results__container'>
            <Results results={results} />
          </div>
        </>
      )}
    </div>
  );
};

export default Camera;
