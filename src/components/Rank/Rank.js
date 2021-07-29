import React from 'react'

const Rank = ({name, entries}) => {
    return(
        <div className='white'>
            {`${name}, você ja usou essa API ${entries} vezes`}
        </div>
    )
}

export default Rank