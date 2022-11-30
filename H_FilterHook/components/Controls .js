import React, {useRef} from 'react';

const Controls = ({cbUpdate}) => {

    const checkboxRef = useRef(null);
    const inputRef = useRef(null);

    const sortWords = () => {
        cbUpdate && cbUpdate(checkboxRef.current.checked, inputRef.current.value);
    };

    const reset = () => {
        checkboxRef.current.checked = false;
        inputRef.current.value = '';
        sortWords();
    };

    return (
        <div className='ListController'>
            <input type='checkbox'
            ref={checkboxRef}
            onChange={sortWords} />  
            <input type="text"
            ref={inputRef} 
            onChange={sortWords} />       
            <button onClick={reset}>сброс</button>
        </div>  
    );  
    
}

export default Controls;