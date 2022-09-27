import React from 'react'

const Image = ({ className, loading, src, alt }) => {
    return <img loading={loading} className={className} src={`https://github.com/brad-adrenalize/icbworldtrade/blob/main/src/assets/images/${src}?raw=true`} alt={alt} />
}

export default Image;