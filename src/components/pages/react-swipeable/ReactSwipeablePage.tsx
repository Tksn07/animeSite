/** ライブラリがクッソムズイ！！
 * npmインストール数もびみょい
 * 他のやつにするわ！ */
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";

const ReactSwipeableDemo = () => {
  const config = {
    delta: 10, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: 250, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
  };

  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    ...config,
  });

  return (
    <div {...handlers}>
      <SlideWrapper>ここですわいぷできるよ！！</SlideWrapper>
    </div>
  );
};

export default ReactSwipeableDemo;

const SlideWrapper = styled.div`
  height: 200px;
  background-color: gray;
  border: 20px solid;
  box-sizing: border-box;
`;
