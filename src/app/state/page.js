'use client';

import classNames from 'classnames';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';

const SamplePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    function handleChange() {
        setIsOpen(!isOpen);
    }

    const [text, setText] = useState('');

    const menu = [{ value: '메뉴1' }, { value: '메뉴2' }, { value: '메뉴3' }];

    const [tab, setTab] = useState(0);
    return (
        <div className="flex flex-col justify-center">
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                className="block bg-blue-300 mx-auto my-3"
            />
            <p>{text}</p>
            <div className="flex flex-col">
                {/* tab */}
                {menu.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setTab(index);
                        }}
                        className={classNames(tab === index ? ' bg-green-400' : '')}
                    >
                        {item.value}
                    </button>
                ))}
            </div>
            <div>
                {tab === 0 && <div>메뉴1 컨텐츠</div>}
                {tab === 1 && <div>메뉴2 컨텐츠</div>}
                {tab === 2 && <div>메뉴3 컨텐츠</div>}
                {/* && 참이면 오른쪽 값이 출력된다 */}
            </div>
            <button className={' relative z-10'} onClick={handleChange}>
                {isOpen ? <IoIosClose /> : <FaBars />}
            </button>
            <div className={classNames('fixed top-0 w-full h-full bg-blue-300 z-0', isOpen ? 'left-0' : 'left-full')}>
                전체메뉴
            </div>
        </div>
    );
};
//원래 값을 false 닫기 버튼이다
//button 을 클릭 했을 때 상태변경함수 실행된다 그러면 true로 바꼈기 때문에
//삼항 연산자에서 isOpen 변수안에 true이기 때문에 닫기 모양이 보여진다
export default SamplePage;
