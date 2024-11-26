'use client';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { TfiAlarmClock, TfiFacebook, TfiAnnouncement, TfiGithub } from 'react-icons/tfi';

const StatePage = () => {
    //const [상태, 상태변경함수] = useState('초기값');
    const [name, setName] = useState('김겨울');

    function changeName() {
        console.log(name);
        document.querySelector('strong').innerText = name;
        setName(name === '김겨울' ? '김가을' : '김겨울');
    }

    const [num, setNum] = useState(0);

    const [minus, setminus] = useState(10);

    const [isOpen, setIsOpen] = useState(false);
    const sortArr = [
        {
            value: '컬쳐아이콘',
            icon: <TfiAlarmClock />,
        },
        {
            value: '한적한 시골',
            icon: <TfiAnnouncement />,
        },
        {
            value: '최고의 전망',
            icon: <TfiFacebook />,
        },
        {
            value: '한옥',
            icon: <TfiGithub />,
        },
    ];
    const [selected, setSelected] = useState();

    const menuName = ['한식', '중식', '양식'];
    const [name2, setName2] = useState('한식');
    const [seseons, setSeseons] = useState('햇살');

    const seaseon = ['봄', '여름', '가을', '겨울'];

    const [click, setclick] = useState();

    const ssgMenu = ['전체 카테고리', '특가', '이벤트', '베스트', '브랜드관', '선물하기', '사업자 매장'];
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    };
    return (
        <div>
            <div className="py-30">
                <input
                    className="bg-pink-500"
                    type="text"
                    value={text}
                    placeholder="원하는 상품을 검색"
                    onChange={handleChange}
                />

                <br />
                <br />
                <br />
                <br />
                <p>{text}</p>
            </div>

            <div>
                <ul className="flex gap-3">
                    {ssgMenu.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {seaseon.map((item, index) => (
                        <li
                            className={`py-2 ${click === index ? 'bg-primary-30' : ''}`}
                            key={index}
                            onClick={() => setclick(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-3 items-center">
                <h2>study</h2>
                <strong>{seseons}</strong>
                <button
                    className="w-20 h-20 bg-gray-200"
                    onClick={() => setSeseons(seseons === '햇살' ? '소나기' : '햇살')}
                >
                    클릭
                </button>
            </div>
            <div>
                <ul>
                    {menuName.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => setName2(index)}
                            className={`py-2 ${name2 === index ? 'bg-primary-50' : ''}`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            {/* airbnb */}
            <div>
                {/* tab */}
                <div className="flex gap-5 ">
                    {sortArr.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setSelected(index);
                            }}
                            className={`py-2 ${selected === index ? 'bg-primary' : ''}`}
                        >
                            {item.icon}
                            {item.value}
                        </button>
                    ))}
                </div>
                <div>선택된 탭 내용</div>
            </div>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                {isOpen ? <IoIosClose /> : <FaBars />}
            </button>
            <hr />
            <strong>{minus}</strong>
            <button
                onClick={() => {
                    setminus(minus - 1);
                }}
                className="w-28 h-28 bg-stone-600"
            >
                감소
            </button>
            <hr />
            <strong>{num}</strong>
            <button
                onClick={() => {
                    setNum(num + 1);
                }}
                className="w-24 h-24 bg-slate-50"
            >
                증가
            </button>

            <hr />
            <h2>useState</h2>
            <strong>{name}</strong>
            <button className="w-24 h-24 bg-slate-50" onClick={changeName}>
                이름 변경
            </button>
        </div>
    );
};

export default StatePage;
