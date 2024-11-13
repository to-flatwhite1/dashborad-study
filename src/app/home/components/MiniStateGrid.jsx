import React from 'react';
import MiniState from './MiniState';
import { BsAirplaneEnginesFill, BsBackpack2, BsBarChartFill, BsBinoculars } from 'react-icons/bs';
import FlagImage from '@/components/icon/FlagImage';

const MiniStateGrid = () => {
    const stateData = [
        {
            name: 'Earnings',
            value: '$350.4',
            startContent: <BsBarChartFill />,
        },
        {
            name: 'Spend this month',
            value: '$642.39',
            startContent: <BsAirplaneEnginesFill />,
        },
        {
            name: 'Sales',
            value: '$574.34',
        },
        {
            name: 'Your balance',
            value: '$1,000',
            growth: '24.5%',
            endContent: <FlagImage country="usa" />,
        },
        {
            name: 'New Tasks',
            value: '154',
            startContent: <BsBackpack2 />,
        },
        {
            name: 'Total Projects',
            value: '2935',
            startContent: <BsBinoculars />,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {stateData.map((item, index) => (
                <MiniState
                    key={index}
                    name={item.name}
                    value={item.value}
                    startContent={item.startContent}
                    endContent={item.endContent}
                    growth={item.growth}
                />
            ))}
        </div>
    );
};

export default MiniStateGrid;
