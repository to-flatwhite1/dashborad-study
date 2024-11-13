import Card from '@/components/card/Card';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';
import { BsBarChartFill } from 'react-icons/bs';
import MiniState from './components/miniState';
import MiniStateGrid from './components/MiniStateGrid';
import IconBox from '@/components/icon/IconBox';
import Button from '@/components/button/Button';
import CheckTable from './components/CheckTable';

const HomePage = () => {
    return (
        <div id="wrap" className="bg-gray-300">
            <Header />
            {/* ministate */}
            <main className="inner flex flex-col gap-10">
                <div>
                    <Button>확인</Button>
                    <Button gray>취소</Button>
                </div>

                <MiniStateGrid />
                <div className="flex flex-col  lg:flex-row gap-4">
                    <div className="bg-red-50 grow">
                        <CheckTable />
                    </div>
                    <div className=" grow flex flex-col md:flex-row gap-4">
                        <div className="bg-green-100 grow ">g</div>
                        <div className="bg-green-100 grow">g</div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
