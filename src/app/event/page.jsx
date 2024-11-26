'use client';
/* 리액트는
프론트 앤드에 전문 
리액트로 개발 프론트라는 폴더를 만들고
 백단은 서버라는 폴더 만들고 불편하기 때문에 
 편하려고 NEXT.JS 만든 두개를 합친거라고 생각하면 서버단인지 클라이언트 단인지 확인하려고

클라이언트 쪽이기 때문에 ONCLICK은 USE CLIENT 입력해야함*/
import React from 'react';

const EventPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('제출');
    };
    return (
        <div>
            <h2>마우스 이벤트</h2>
            <button
                onClick={() => {
                    console.log('click');
                }}
                onDoubleClick={() => {
                    console.log('더블클릭');
                }}
            >
                클릭 이벤트
            </button>

            <div
                onMouseEnter={() => {
                    console.log('마우스 오버');
                }}
                className="w-24 h-24 bg-primary-20"
            >
                마우스 오버/아웃
            </div>

            {/* 폼이벤트(입력이벤트) */}
            <form onSubmit={handleSubmit}>
                {/* 입력변경 */}
                <input
                    className="bg-slate-400"
                    type="text"
                    onChange={(e) => {
                        /* 입력한 값을 매개변수 e라는 값으로 받는다 */
                        /* target : input 태그가 나온다 (e.target) */
                        /* target.value 입력한 값이 나온다  ( e.target.value) */
                        console.log('값 변경', e);
                    }}
                    onFocus={() => {
                        console.log('포커스');
                    }}
                />
                <input
                    type="checkbox"
                    onChange={(e) => {
                        /* 체크여부 확인 true,false: e.target.checked */
                        console.log('체크', e.target.checked);
                    }}
                />
                <select
                    onChange={(e) => {
                        console.log('선택 :', e.target.value);
                    }}
                >
                    <option value="1">option1</option>
                    <option value="2">option1</option>
                    <option value="3">option1</option>
                </select>
                {/* 함수등록 시키는거는 ()=>{} 이거 없고 함수 이름만 적음 onSubmit={handleSubmit} */}\
                <button type="submit">제출</button>
            </form>
        </div>
    );
};

export default EventPage;
