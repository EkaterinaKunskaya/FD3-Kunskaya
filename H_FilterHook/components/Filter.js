import React, {useState} from 'react';

import '../styles/style.css';

import Controls from './Controls ';
import List from './List';

const Filter = ({words}) => {

    const [currentWords, setCurrentWords] = useState(words);

    const changeStateCurrentWords = (checkbox, input) => {
        let newCurrentWords = words.slice();

        if (input) newCurrentWords = newCurrentWords.filter(value => value.indexOf(input) !== -1);
        if (checkbox) newCurrentWords.sort();
        
        setCurrentWords(newCurrentWords);
    };

    return (
        <div className='FilterBlock'>
            <Controls cbUpdate={changeStateCurrentWords}/>
            <List words={currentWords}/>
        </div>
    );  
    
}

export default Filter;