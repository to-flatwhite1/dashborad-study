import Button, { ButtonIcon } from '@/components/button/Button';
import Card from '@/components/card/Card';
import Title from '@/components/title/Title';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

const CheckTable = ({ tableDataCheck }) => {
    return (
        <Card>
            <Title>CheckTable</Title>
            <main className="pt-5">
                <table className="w-full text-left">
                    <thead className="border-b border-b-gray-300 bg-gray-100 text-sm text-gray-500 font-medium">
                        <tr>
                            <th className="py-3">NAME</th>
                            <th>PROGRESS</th>
                            <th>QUANTITY</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableDataCheck.map((item) => (
                            <tr key={item.id}>
                                {/* 중복될 요소에 key 값을 먼저 입력하기 */}
                                <th className="py-3 flex gap-2">
                                    <input checked={item.name[1]} type="checkbox" name="check-1" id="check-1" />
                                    <label htmlFor="chekc-1">{item.name[0]}</label>
                                </th>
                                <td>{item.progress}</td>
                                <td>{item.quantity}</td>
                                <td>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </Card>
    );
};

export default CheckTable;
