import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Slide from "./Slide";

const ReactSwipeableViewDemo = () => {
  const [slides, setSlides] = useState([0, 1, 2, 3, 4]);

  return (
    <SwipeableViews
      enableMouseEvents
      index={1}
      onChangeIndex={(index) => {
        if (slides.length - 1 === index) {
          setSlides([...slides, 5]);
        } else if (index === 0) {
          setSlides([0, ...slides]);
        }
      }}
    >
      {slides.map((i) => {
        console.log(i);
        return <Slide />;
      })}
    </SwipeableViews>
  );
};

export default ReactSwipeableViewDemo;
