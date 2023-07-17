import { useRef, useState } from "react";
import { useStateRef, getRefValue, getTouchEventData } from "../utils/hooks";
import { styled } from "../styles/stitches.config";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const Carousel = ({ children, ...props }) => {
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);
  const sliderRef = useRef(null);
  const sliderWidthRef = useRef(0);
  const minOffsetXRef = useRef(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const MIN_SWIPE_REQUIRED = 40;

  const onTouchStart = (e) => {
    setIsSwiping(true);

    currentOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = getTouchEventData(e).clientX;

    const sliderEl = getRefValue(sliderRef);
    const sliderWidth = sliderEl.offsetWidth;

    sliderWidthRef.current = sliderWidth;
    minOffsetXRef.current = sliderEl.offsetWidth - sliderEl.scrollWidth;

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("mousemove", onTouchMove);
    window.addEventListener("mouseup", onTouchEnd);
  };

  const onTouchMove = (e) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    let newOffsetX = getRefValue(currentOffsetXRef) - diff;
    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > maxOffsetX) newOffsetX = maxOffsetX;
    if (newOffsetX < minOffsetX) newOffsetX = minOffsetX;

    setOffsetX(newOffsetX);
  };

  const onTouchEnd = () => {
    setIsSwiping(false);

    const currentOffsetX = getRefValue(currentOffsetXRef);
    const sliderWidth = getRefValue(sliderWidthRef);
    let newOffsetX = getRefValue(offsetXRef);
    const diff = currentOffsetX - newOffsetX;

    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        newOffsetX = Math.floor(newOffsetX / sliderWidth) * sliderWidth;
      } else {
        newOffsetX = Math.ceil(newOffsetX / sliderWidth) * sliderWidth;
      }
    } else {
      newOffsetX = Math.round(newOffsetX / sliderWidth) * sliderWidth;
    }

    setOffsetX(newOffsetX);
    setCurrentIndex(Math.abs(newOffsetX / sliderWidth));

    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onTouchEnd);
    window.removeEventListener("mousemove", onTouchMove);
    window.removeEventListener("mouseup", onTouchEnd);
  };

  const onButtonClick = (e) => {
    const sliderEl = getRefValue(sliderRef);
    const sliderWidth = sliderEl.offsetWidth;

    if (e.target.name === "previous") {
      if (currentIndex <= 0) return;
      else {
        setOffsetX(-(sliderWidth * (currentIndex - 1)));
        setCurrentIndex(currentIndex - 1);
      }
    } else if (e.target.name === "next") {
      if (currentIndex >= children.length - 1) return;
      else {
        setOffsetX(-(sliderWidth * (currentIndex + 1)));
        setCurrentIndex(currentIndex + 1);
      }
    } else return;
  };

  const onIndicatorClick = (i) => {
    const sliderEl = getRefValue(sliderRef);
    const sliderWidth = sliderEl.offsetWidth;

    setCurrentIndex(i);
    setOffsetX(-(sliderWidth * i));
  };

  return (
    <Container
      onTouchStart={onTouchStart}
      onMouseDown={onTouchStart}
      {...props}
    >
      <Slider
        className={`${isSwiping ? "is-swiping" : ""}`}
        ref={sliderRef}
        style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
      >
        {children?.map((child, i) => (
          <Item key={i}>{child}</Item>
        ))}
      </Slider>
      <Controls>
        <Button name="previous" onClick={(e) => onButtonClick(e)}>
          <FaCaretLeft
            style={{ marginRight: "5px", pointerEvents: "none" }}
            aria-label="previous"
          />
        </Button>
        <p>{`${currentIndex + 1} of ${children.length}`}</p>
        <Button name="next" onClick={(e) => onButtonClick(e)} aria-label="next">
          <FaCaretRight style={{ marginLeft: "5px", pointerEvents: "none" }} />
        </Button>
      </Controls>
      {/*       <IndicatorList>
        {children?.map((_, i) => (
          <IndicatorUnit
            key={i}
            className={`${currentIndex === i ? "active" : ""}`}
            onClick={() => onIndicatorClick(i)}
          />
        ))}
      </IndicatorList> */}
    </Container>
  );
};
export default Carousel;

const Container = styled("div", {
  width: "100%",
  maxWidth: "100%",
  overflow: "hidden",
  touchAction: "pan-y",
});

const Slider = styled("ul", {
  display: "flex",
  flexDirection: "row",
  listStyle: "none",
  minWidth: "100%",
  transition: "transform 0.3s ease-out",
  "&.is-swiping": {
    transition: "none",
  },
});

const Item = styled("li", {
  flexShrink: "0",
  width: "100%",
  /* 
  "& span": {
    height: "100% !important",
  }, */
});

const IndicatorList = styled("ul", {
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  marginTop: "15px",
});

const IndicatorUnit = styled("li", {
  width: "12px",
  height: "12px",
  margin: "0 4px",
  borderRadius: "9999px",
  backgroundColor: "#555555",
  cursor: "pointer",
  "&.active": {
    backgroundColor: "#222222",
  },
});

const Controls = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "10px 0",
  fontSize: "1.3rem",
});

const Button = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  borderRadius: "5px",
  padding: "8px 15px",
  background: "#444",
  color: "white",
  cursor: "pointer",
  fontSize: "1.3rem",
  "&:hover": {
    background: "#555",
  },
});
