import React from 'react'

const Image = ({ className, src, alt }) => {
    return <img className={className} src={`https://github.com/brad-adrenalize/eob/blob/main/src/assets/images/${src}?raw=true`} alt={alt} />
}

export default Image;