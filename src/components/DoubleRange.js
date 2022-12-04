import React, {useRef} from "react";

function DoubleRange({ max, min, filterByPrice}) {
    const sliderOne = useRef();
    const sliderTwo = useRef();
    const range1 = useRef();
    const range2 = useRef();
    const sliderTrack = useRef();
    let minGap = min;
    const slideOne = () => {
        if (parseInt(sliderTwo.current.value) - parseInt(sliderOne.current.value) <= minGap) {
            sliderOne.current.value = parseInt(sliderTwo.current.value) - minGap;
        }
        range1.current.textContent = sliderOne.current.value;
        fillColor();
    }
    const slideTwo = () => {
        if (parseInt(sliderTwo.current.value) - parseInt(sliderOne.current.value) <= minGap) {
            sliderTwo.current.value = parseInt(sliderOne.current.value) + minGap;
        }
        range2.current.textContent = sliderTwo.current.value;
        fillColor();
    }
    const fillColor = () => {
        let percent1 = (sliderOne.current.value / max) * 100;
        let percent2 = (sliderTwo.current.value / max) * 100;
        sliderTrack.current.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, lightgreen ${percent1}%, lightgreen ${percent2}%,   #dadae5 ${percent2}%)`
    }

    const handleMouseUp = () => {
        filterByPrice({min: sliderOne.current.value, max: sliderTwo.current.value});
    }
    return (
        <div className="wrapperRange">
            <div className="values">
                <span ref={range1}>${min}</span>
                <span> - </span>
                <span ref={range2}>${max}</span>
            </div>
            <div className="containerRange">
                <div className="slider-track" ref={sliderTrack}>

                </div>
                <input ref={sliderOne} type={"range"} min={min} max={max + 1} onInput={slideOne}
                       onMouseUp={handleMouseUp}/>
                <input ref={sliderTwo} type={"range"} min={min} max={max + 1} onInput={slideTwo}
                       onMouseUp={handleMouseUp}/>
            </div>
        </div>
    )
}

export default DoubleRange;