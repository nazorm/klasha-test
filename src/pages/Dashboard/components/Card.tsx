import React from 'react';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';

interface IDashboardCardProps {
    hasGraph?: boolean,
    graphImage?: string,
    timeFrame?: string,
    duration?: string,
    amount?: string,
}

export const DashboardCard = ({ hasGraph, graphImage, timeFrame, duration, amount }: IDashboardCardProps) => {
    return (
        <Wrapper>
            {hasGraph && (
                <h4 className='card-heading'>{timeFrame}</h4>
            )}
            {hasGraph && (
                <img src={graphImage} alt='graph' title='graph' className='graph' />
            )}
            <p className='overview'>
                {duration}
                <br />
                <span className='amount'>
                    {amount}
                </span>
            </p>
        </Wrapper>
    )
};



const Wrapper = styled.div`
    border-radius: 8px;
    display: flex;
    width: 210px;
    height: 200px;
    padding: 22px;
    border: 1px solid ${StyleConstants.COLOR_TEXT_BLACK};
    flex-direction: column;
    .card-heading{
        font-size: 14px;
        font-weight: 400;
        line-height: 20px; 
    }
    .graph{
        /* width: 300px; */
        height: 78px;
    }
    .overview{
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    }
    .amount{
        font-size: 20px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: -0.4px;
    }
    &:nth-child(2){
        background-color: ${StyleConstants.COLOR_TEXT_BLACK};
        color: white;
    }
`;

