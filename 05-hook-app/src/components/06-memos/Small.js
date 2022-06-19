import React from 'react';

const Small = React.memo(({value}) => {

    console.log('oh shit! here we go again');

    return (
        <small>{value}</small>
    );
});
 
export default Small;