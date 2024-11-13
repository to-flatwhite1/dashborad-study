'use client';
import React, { Children } from 'react';
import styled from 'styled-components';

// 스타일링된 Button 컴포넌트 정의
const ButtonStyled = styled.button`
    /* &::before {
        content: '🚀 '; /* 버튼 앞에 이모지 추가 */
    } */
`;

const Button = ({ children, gray }) => {
    return (
        <ButtonStyled
            className={`text-white px-5 py-1 rounded hover:bg-secondary ${gray ? 'bg-gray-500' : 'bg-primary'}`}
        >
            {children}
        </ButtonStyled>
    );
};

export default Button;
