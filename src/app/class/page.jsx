'use client';
import React from 'react';

const ClassPage = () => {
    return <OrderCoffee name="아메리카노" price={3500} />;
};

export default ClassPage;

class OrderCoffee extends React.Component {
    constructor(props) {
        super(props); //부모생성자 함수 호출 리액트 제공해주는 기능
        this.state = {
            name: props.name,
            price: props.price,
        };
    }
    order() {
        return `${this.state.name}을 주문합니다.
      가격은 ${this.state.price}원 입니다.`;
    }
    render() {
        return (
            <div>
                <p>{this.order()}</p>
            </div>
        );
    }
}
