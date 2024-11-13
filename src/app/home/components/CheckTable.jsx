import Button from '@/components/button/Button';
import Card from '@/components/card/Card';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

const CheckTable = () => {
    return (
        <Card>
            <header>
                <h2>Check Table</h2>
                <Button>
                    <BsThreeDots />
                    <span className="blind">옵션 보기</span>
                </Button>
            </header>
        </Card>
    );
};

export default CheckTable;
