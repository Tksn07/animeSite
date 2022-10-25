import React, { useEffect } from "react";
import { useState } from "react";
import ReactSwipe from "react-swipe";
import DemoPage from "./DemoPage";
// const DemoPage = React.lazy(() => import("./DemoPage"));

const ReactSwipeDemo = () => {
  const handleTransitionEnd = (index: number) => {
    console.log("このタイミングで呼ばれてるよ");
  };
  const [pages, setPages] = useState([0, 1, 2, 3, 4]);
  const [startSlide, setStartSlide] = useState(1);

  const [count, setCount] = useState(0);
  return (
    <div>
      <ReactSwipe
        key={pages.length}
        className="carousel"
        swipeOptions={{
          speed: 400,
          continuous: false,
          stopPropagation: true,
          // transitionEnd: handleTransitionEnd,
          callback: (index) => {
            console.log(index);
            if (pages.length - 1 === index) {
              setPages([...pages, pages.length]);
              // setStartSlide(index);
            } else if (index === 0) {
              setCount(count - 1);
              // setStartSlide(1);
              setPages([count - 1, ...pages]);
            }
          },
        }}
      >
        {pages.map((page) => {
          return <DemoPage key={page} />;
        })}
      </ReactSwipe>
    </div>
  );
};

export default ReactSwipeDemo;
