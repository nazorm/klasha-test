import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import { StyleConstants } from 'styles/StyleConstants';
import { transactionData, transactionColumns } from './data';
import searchIcon from 'assets/search.svg';
import filterIcon from 'assets/filter.svg';
import { Button } from 'components/Button';



export const TransactionsPage = () => {

    return (
        <Wrapper>
            <Container>
                <h1 className='page-title'>Transaction History</h1>
                <SearchandFilter>
                    <div className='search-container'>
                        <input className='search-input' placeholder='Search' />
                        <img src={searchIcon} alt='search' className='search-icon' title='search' />
                    </div>
                    <div className='table-btns'>
                        <TableBtn className='btn btn-secondary-outline'>
                            Filter
                            <img src={filterIcon} alt='filter' className='filter-icon' title='filter' />
                        </TableBtn>
                        <TableBtn className='btn btn-secondary-outline'>
                            Export
                        </TableBtn>
                    </div>
                </SearchandFilter>
                <div className='table-container'>
                    <Table columns={transactionColumns} dataSource={transactionData} />
                </div>
            </Container>
        </Wrapper>
    )
}





const Wrapper = styled.div`

`;

const Container = styled.div`
    border-radius: 8px;
    height: 550px;
    width: 90%;
    margin: 10% auto;
    border: 1px solid ${StyleConstants.COLOR_BORDER};
    overflow: scroll;
    .page-title{
        font-size: 18px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: -0.36px;
        margin-left: 10px;
    }
    .ant-pagination-item-active{
        background-color: ${StyleConstants.COLOR_BORDER};
        border-radius: 20px;
        border: transparent;

    }
    .ant-pagination-item-active a{
        color: ${StyleConstants.COLOR_TEXT_BLACK};
    }
    .ant-pagination-item a{
        color: ${StyleConstants.COLOR_GREY};
    }
`;

const SearchandFilter = styled.div`
    width: 98%;
    border-top: 1px solid ${StyleConstants.COLOR_BORDER};
    border-bottom: 1px solid ${StyleConstants.COLOR_BORDER};
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    @media only screen and (max-width: 600px){
        flex-direction: column;
        align-items: flex-start;
    }
    .search-container{
        border: 1px solid blue;
        position: relative;
        width: 180px;
        border: 1px solid ${StyleConstants.COLOR_BORDER};
        display: flex;
        justify-content: space-between;
        border-radius: 8px;
        height: 35px;
        align-items: center;
        padding-right: 8px;
    }
    .search-input{
        border: transparent;
        padding: 10px;
        &:focus{
            outline: none;
        }
    }
    .search-icon{
        width: 20px;
        height: 20px;
    }
`;

const TableBtn = styled(Button)`
    margin-left: 10px; 
    @media only screen and (max-width: 600px){
        margin-bottom: 10px; 
    }
    .filter-icon{
        margin-left: 5px;
    }
`;




