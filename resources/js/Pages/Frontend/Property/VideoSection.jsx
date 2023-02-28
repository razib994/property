import React from 'react';

const VideoSection = ({video_link}) => {
    return (
        <div className="p-8 shadow my-6 border">
            <h2 className="text-3xl font-bold py-3"> Video Section </h2>
            <div className="w-full"><iframe title="Dubai Luxury Property Highlight The Glass Penthouse" width="100%" height="658" src={video_link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe></div>
        </div>
    );
}

export default VideoSection;
