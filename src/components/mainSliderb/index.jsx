import React from 'react';
import { useEffect, useState, useRef } from 'react';
const SliderOne = () => {
    return (
        <div className='slide'>
            <h1>Slide 1</h1>
        </div>
    )
} 
const SliderTwo = () => {
    return (
        <div className='slide'>
            <h1>Slide 2</h1>
        </div>
    )
}

const SliderThree = () => {
    return (
        <div className='slide'>
            <h1>Slide 3</h1>
        </div>
    )
}

const MainSliderb = () => {

    const [currentComponent, setCurrentComponent] = useState(null);

    let slidesArr = [<SliderOne />, <SliderTwo />, <SliderThree />];

    const countTracker = count => setCurrentComponent(count);

    return (
        <div className='app'>
            {<> {slidesArr[currentComponent]} </>}
            <Controls Count={countTracker} />
        </div>
    )
} 

const Controls = (props) => {

    const [count, setCount] = useState(0);
    const decrementButton = useRef();
    const incrementButton = useRef();

    useEffect(() => {
        if (count >= 0 && count < 3) {
            props.Count(count);
            (count > 0) ? (decrementButton.current.disabled = false) : (decrementButton.current.disabled = true);
            (count === 2) ? (incrementButton.current.disabled = true) : (incrementButton.current.disabled = false);
        }
    }, [count]);

    const handleDecrement = () => (setCount(prevCount => prevCount - 1));
    const handleIncrement = () => (setCount(prevCount => prevCount + 1));

    return (
        <div id='sec-controls'>
            <button className='btn-std' onClick={handleDecrement} ref={decrementButton}>Previous</button>
            <button className='btn-std' onClick={handleIncrement} ref={incrementButton}>Next</button>
        </div>
    )
};
export default MainSliderb;