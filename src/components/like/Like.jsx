'use client';
import classNames from 'classnames';
import { Heart } from 'lucide-react';
import React, { useState } from 'react';

const BtnLike = ({ isLiked, toggleLike }) => {
    return (
        <button onClick={toggleLike}>
            <Heart fill={isLiked ? 'red' : ''} />
        </button>
    );
};
const BtnFollow = ({ isLiked, toggleLike }) => {
    return (
        <button onClick={toggleLike} className={classNames(isLiked ? 'bg-gray-400' : 'bg-green-500')}>
            +팔로우
        </button>
    );
};

const Like = () => {
    const [isLiked, setIsLiked] = useState(false);
    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div>
            <BtnLike isLiked={isLiked} toggleLike={toggleLike} />
            <BtnFollow isLiked={isLiked} toggleLike={toggleLike} />
        </div>
    );
};

export default Like;
