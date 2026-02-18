import React, { useRef } from 'react';
import '../css/styles.css'

const FocusScreen = () => {

    const inputRef = useRef();

    const handleclick = (e) => {
        e.preventDefault();
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <form>
                <input ref={inputRef} className='form-control' placeholder='Tu nombre'/>
                <button className='btn btn-outline-primary mt-3' onClick={handleclick}>Focus</button>
            </form>
        </div>
    );
}
 
export default FocusScreen;