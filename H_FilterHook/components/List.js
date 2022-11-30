import React from 'react';

const List = ({words}) => {

    return (
        <textarea className = 'FilterWords'
        value = {words.join('\n')}
        readOnly = {true} />
    );

}

export default List;