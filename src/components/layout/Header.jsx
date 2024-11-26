'use client';

import { navItemsData } from '@/data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const LinkNav = ({ children, href }) => {
    const pathname = usePathname(); // 현재 경로를 가져옴
    const isActive = pathname === href; // 현재 경로와 href 비교하여 활성화 여부 결정

    return (
        <Link
            href={href} // 링크를 클릭하면 해당 경로로 이동
            className={`py-2 ${isActive ? 'text-primary' : ''}`} // 경로가 일치하면 'text-primary' 클래스 추가
        >
            {children} {/* 텍스트는 children으로 전달 */}
        </Link>
    );
};

const Header = () => {
    return (
        <header className="bg-gray-200 p-4 flex justify-between items-center">
            <h1>
                <Link href="/">logo</Link>
            </h1>
            <nav>
                <ul className="flex gap-5">
                    {navItemsData.map(({ href, label }) => (
                        <li key={href}>
                            <LinkNav href={href}>{label}</LinkNav>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
