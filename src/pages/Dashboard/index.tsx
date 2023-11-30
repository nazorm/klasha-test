import React from 'react';
import styled from 'styled-components';
import { DashboardCard } from './components/Card';
import graph1 from 'assets/graph1.svg';
import graph2 from 'assets/graph2.svg';
import graph3 from 'assets/graph3.svg';


const overviewData = [
    {
        id: 1,
        graphImage: graph1,
        timeFrame: '24 Aug - 01 Sep 21',
        duration: 'This week',
        amount: '₦1,652.50',
    },
    {
        id: 2,
        graphImage: graph2,
        timeFrame: '24 Aug - 01 Sep 21',
        duration: 'This month',
        amount: '₦1,652.50',
    },
    {
        id: 3,
        graphImage: graph3,
        timeFrame: '24 Aug - 01 Sep 21',
        duration: 'Last month',
        amount: '₦1,652.50',
    }
]

export const DashboardPage = () => {
    return (
        <Wrapper>
            <h1 className='page-title'>Sales overview</h1>
            <CardContainer>
                <DashboardCard duration='Today&apos;s sales' amount='₦1,652.50' />
                {overviewData.map((data) => {
                    return (
                        <DashboardCard 
                            key={data.id} 
                            hasGraph={true} 
                            graphImage={data.graphImage} 
                            timeFrame={data.timeFrame} 
                            duration={data.duration} 
                            amount={data.amount} 
                        />
                    )
                })}
            </CardContainer>
        </Wrapper>
    )
}


const Wrapper = styled.div`
  width: 95%;
  margin: 4rem auto auto;

`;

const CardContainer = styled.div`
   display: grid;
   grid-template-columns : repeat(4, minmax(160px, 1fr));
`;




