import React, { useState } from 'react';
import styled from 'styled-components';
import userIcon from 'assets/user.svg';
import dropdownIcon from 'assets/dropdown.svg'
import { Dropdown } from 'antd';
import { Select } from 'antd';
const languageOptions = [
    {
        label: 'En',
        key: '1'
    },
]


const items = [
    {
        label: 'User Center',
        key: '1'
    },
    {
        label: 'Logout',
        key: '2'
    },
]


export const Header = () => {
    const [languageValue, setLanguageValue] = useState('En')

    const handleLanguageChange = (value: string) => {
        setLanguageValue(value);
    };


    return (
        <Wrapper>
            <div className='header-content'>
                <Dropdown menu={{ items }} className='user' >
                    <img src={userIcon} alt='user' title='user' className='header-icon' />
                </Dropdown>
                <Select
                    suffixIcon={<img src={dropdownIcon} alt='drop-down' title='drop-down' className='header-icon' />}
                    value={languageValue}
                    style={{ width: 60 }}
                    onChange={handleLanguageChange}
                    options={languageOptions}
                />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  .header-content{
    display:flex;
    align-items: center;
  }
  .user{
    margin-right: 20px;
  }
`;
