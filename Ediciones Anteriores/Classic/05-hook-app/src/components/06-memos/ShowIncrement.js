import React from 'react';

const ShowIncrement = React.memo(({increment}) => {

    console.log('oh shit!, here we go again');

    return (
        <button className='btn btn-outline-info' onClick={() => increment(5)}>+1</button>
    );
})
 
export default ShowIncrement;