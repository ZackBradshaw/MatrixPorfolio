import React, { componentDidMount, useEffect, useRef } from "react";
import $ from "jquery";
import "./canvas.css";
import "./App.css";

import DeskImg from "./images/Desk.png";
import Temple1 from "./images/Temple1.png";
import Temple2 from "./images/Temple2.png";
import Temple3 from "./images/Temple3.png";
import Temple4 from "./images/Temple4.png";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  let imgIndex = 0;
  let imgArr = [];
  let percent = 0.001;
  let atStart = false;

  const images = [Temple1];
  const size = window.innerHeight / 6;

  images.forEach((image, idx) => {
    let elImage = new Image(size);
    elImage.src = image;
    elImage.classList.add("project-image");
    document.body.append(elImage);
    imgArr.push(elImage);
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    scroll();
    function scroll() {
      document
        .getElementById("wrapper")
        .addEventListener("wheel", function (event) {
          const wScroll = event.deltaY / 10;
          const offsetElement = $(".wrapper");
          const offsetPosition = offsetElement.offset().top;
          let targetCube = $(".wrapper Canvas");
          let startEl = $(".startpos");
          let currentPosition = targetCube.offset().top;
          let startpos = startEl.offset().top;
          atStart = currentPosition >= startpos - 20;
          if (percent >= 0.3) {
            var newPosition = currentPosition + wScroll - offsetPosition;
          }
          targetCube.css({
            top: newPosition,
          });
          console.log(startpos);
        });
    }

    document.getElementById("wrapper").addEventListener("wheel", function (e) {
      if (e.deltaY / 120 < 0 && percent < 0.3) {
        percent += 0.01;
      } else if (e.deltaY / 120 > 0 && percent > 0.001 && atStart) {
        percent -= 0.01;
      }
    });

    function drawImage(idx) {
      let { width, height } = imgArr[idx].getBoundingClientRect();
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.webkitImageSmoothingEnabled = false;
      ctx.msSmoothingEnabled = false;
      ctx.imageSmoothingEnabled = false;

      let scaledWidth = width * percent;
      let scaledHeight = height * percent;

      if (percent >= 1) {
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        ctx.drawImage(imgArr[idx], 0, 0, width, height);
      } else {
        ctx.drawImage(imgArr[idx], 0, 0, scaledWidth, scaledHeight);
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        if (canvas.width !== 0 && canvas.height !== 0) {
          ctx.drawImage(
            canvas,
            0,
            0,
            scaledWidth,
            scaledHeight,
            0,
            0,
            width,
            height
          );
        }
      }
    }

    function animate() {
      drawImage(imgIndex);
      window.requestAnimationFrame(animate);
    }

    animate();
  }, [imgArr, imgIndex]);

  return (
    <div className="wrapper" id="wrapper">
      <div className="startpos" id="startpos"></div>
      <canvas className="Canvas" id="canvas" ref={canvasRef} {...props} />
    </div>
  );
};

export default Canvas;
