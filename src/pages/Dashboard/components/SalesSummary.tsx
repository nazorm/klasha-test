import React, { useState } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import dropdownIcon from 'assets/dropdown.svg';
import downIcon from 'assets/down.svg';
import { Button } from 'components/Button';
import { StyleConstants } from 'styles/StyleConstants';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';
import { currencyOptions, emailOptions, overviewSalesData } from '../data';
import lines from 'assets/lines.svg'


export const SalesSummary = () => {
    const [currencyValue, setCurrencyValue] = useState('USD')
    const [emailValue, setEmailValue] = useState('Email')

    const handleCurrencyChange = (value: string) => {
        setCurrencyValue(value);
    };

    const handleEmailChange = (value: string) => {
        setEmailValue(value);
    };

    return (
        <Wrapper>
            <GraphContainer>
                <GraphHead>
                    <p className='graph-text'> Sales <span className='graph-head-text'>7 days</span> <span className='graph-head-text'>30 days</span></p>
                    <Select
                        suffixIcon={<img src={dropdownIcon} alt='drop-down' title='drop-down' className='header-icon' />}
                        value={currencyValue}
                        style={{ width: 80 }}
                        onChange={handleCurrencyChange}
                        options={currencyOptions}
                    />
                    <Select
                        suffixIcon={<img src={dropdownIcon} alt='drop-down' title='drop-down' className='header-icon' />}
                        value={emailValue}
                        style={{ width: 220 }}
                        onChange={handleEmailChange}
                        options={emailOptions}
                    />
                    <DownloadBtn className='btn btn-secondary-outline'>
                        <img src={downIcon} alt='download' className='download-icon' title='download' />
                        Download report
                    </DownloadBtn>

                </GraphHead>

                <ChartContainer>
                <AreaChart width={735} height={280} data={overviewSalesData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="95%" stopColor={`${StyleConstants.COLOR_PRIMARY}`} stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Area  dataKey="salesTrend" stroke={`${StyleConstants.COLOR_PRIMARY}`} fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ChartContainer>
            </GraphContainer>
            <SummaryPrompt>
                <img src={lines} className='lines' alt='lines' title='lines' />
                <p className='prompt-info'>KlashaWire - send
                    <br />
                    money to businesses
                    <br />
                    globally from Africa
                </p>
                <WireBtn className='btn btn-secondary'>
                    Send a Wire
                </WireBtn>
            </SummaryPrompt>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    width: 98%;
    @media only screen and (max-width: 1000px){
        flex-direction: column;
    }

`;

const GraphContainer = styled.div`
    height: 340px;
    width: 65%;
    @media only screen and (max-width: 1000px){
        width: 90%;
    }
`;

const GraphHead = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 @media only screen and (max-width: 700px){
       flex-direction: column;
       align-items: start;
       height: 200px;
 }
 .graph-text{
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.4px;
    
 }
 .graph-head-text{
    font-size: 14px;
    font-weight: 600;
    line-height: 22.4px;
    padding: 2px 10px;
    &:nth-child(1){
        color: ${StyleConstants.COLOR_PRIMARY};
        border-left: 1px solid rgba(0, 0, 0, 0.10);
        margin-left: 15px;
    }
 }
`;

const DownloadBtn = styled(Button)`
  width: 148px;
  font-size: 12px;
  padding: 8px 10px !important;
  .download-icon{
    margin-right: 5px;
  }
  &:hover{
    cursor: pointer;
  }

`;

const WireBtn = styled(Button)`
  margin-top: 6rem;
`;

const SummaryPrompt = styled.div`
 background-color: ${StyleConstants.COLOR_PRIMARY};
 width: 304px;
 height: 284px;
 color: white;
 position: relative;
 padding: 15px;
 border-radius: 8px;
 @media only screen and (max-width: 1000px){
     width: 300px;
     height: 300px;
     margin: 50%  auto 10%;
 }
 .prompt-info{
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.4px;
 }
.lines{
    position: absolute;
    bottom: 0;
    top: 0;
    z-index: 1;
}
`;

const ChartContainer = styled.div`
   margin-top: 20px;
    @media only screen and (max-width: 1000px){
        width: 100%;
        overflow: scroll;
    }
`;
