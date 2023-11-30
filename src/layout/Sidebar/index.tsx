import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from "react-router-dom";
import klashaLogo from '../../assets/logo.svg';
import dashboardIcon from '../../assets/dashboard.svg';
import walletIcon from '../../assets/wallet.svg';
import transactionIcon from '../../assets/transactions.svg';
import analyticsIcon from '../../assets/analytics.svg';
import marketingIcon from '../../assets/marketing.svg';
import exchangeIcon from '../../assets/exchange.svg';
import cartIcon from '../../assets/cart.svg';
import linkIcon from '../../assets/link.svg';
import wireIcon from '../../assets/wire.svg';


interface ISideBarLinkProps {
    route: string;
    icon: any;
    title?: string;
}

const menuItems = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: dashboardIcon
    },
    {
        name: 'Balances',
        path: '/',
        icon: walletIcon
    },
    {
        name: 'Transactions',
        path: '/transactions',
        icon: transactionIcon
    },
    {
        name: 'Analytics',
        path: '/',
        icon: analyticsIcon
    },
    {
        name: 'Marketing',
        path: '/',
        icon: marketingIcon
    },
    {
        name: 'Exchange rates',
        path: '/',
        icon: exchangeIcon
    },

]

const acceptMenu = [
    {
        name: 'Checkout',
        path: '/',
        icon: cartIcon
    },
    {
        name: 'Payment Links',
        path: '/',
        icon: linkIcon
    }
]

const sendMenu = [
    {
        name: 'Wire',
        path: '/',
        icon: wireIcon
    },
]

export const SideBarLink = (props: ISideBarLinkProps) => {
    const { title, route, icon } = props;
    const location = useLocation();
    const currentPath = location.pathname.toLowerCase();
    const activePath = route.toLowerCase();
    return (
        <li className="side-bar__item">
            <Link to={route} className={currentPath === activePath ? "side-bar__active" : 'side-bar__link'}>
                <img src={icon} alt='icon' className={currentPath === activePath ? "sidebar-icon__active" : 'sidebar-icon'} />
                <span className='sidebar-title'> {title}</span>
            </Link>
        </li>


    )
}

export const SideBar = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/dashboard");
    }
    return (
        <Wrapper>
            <LogoContainer>
                <img src={klashaLogo} alt='logo' className='klasha-logo' onClick={navigateHome} />
            </LogoContainer>

            <MenuContainer>
                <div className='menu'>
                    <p className='menu__title'>Main Pages</p>
                    <ul className='side-bar__items'>
                        {menuItems.map((item) => {
                            return (
                                <SideBarLink
                                    key={item.name}
                                    route={item.path}
                                    title={item.name}
                                    icon={item.icon}
                                />

                            )
                        })}
                    </ul>
                </div>
                <div className='support-menu'>
                    <p className='menu__title'>Accept payments</p>
                    <ul className='side-bar__items'>
                        {acceptMenu.map((item) => {
                            return (
                                <SideBarLink
                                    key={item.name}
                                    route={item.path}
                                    title={item.name}
                                    icon={item.icon}
                                />

                            )
                        })}
                    </ul>
                </div>
                <div className='support-menu'>
                    <p className='menu__title'>Send payments</p>
                    <ul className='side-bar__items'>
                        {sendMenu.map((item) => {
                            return (
                                <SideBarLink
                                    key={item.name}
                                    route={item.path}
                                    title={item.name}
                                    icon={item.icon}
                                />

                            )
                        })}
                    </ul>
                </div>

            </MenuContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
        height: 100vh;
        width: 280px;
        padding-left: 40px;
        background-color:#FFFBF7;
        .support-menu{
        }
        .menu__title{
            font-size: 16px;
            font-weight: 300;
            line-height: 28px;
            color: #8D8D8D;
        }
`;

const MenuContainer = styled.div`
    padding: 0;
    /* overflow-x: scroll; */
    height: inherit;
     .side-bar__items{
        padding: 0px;
        margin-top: 0;
    }

    .side-bar__item{
        list-style-type: none;
        margin: 5px 0;
        border-radius: 24px;
    }
    .sidebar-icon{
        width: 20px;
        height: 20px;
    }
    .side-bar__link, .side-bar__active{
        text-decoration: none;
        font-size: 16px;
        padding: 10px;
        font-weight: 400;
        display: flex;
        align-items: center;
        color: black;
        transition: 0.5s;
        &:hover{
            cursor: pointer;
            .sidebar-icon{
               path: #EF2C5A;
            }
         }
    }
    .side-bar__active{
        color: #EF2C5A;
        font-weight: 600;
    }

    .sidebar-icon__active{
        fill: #EF2C5A;
    }
    .sidebar-title{
        margin-left: 1rem;
    }
`;


const LogoContainer = styled.div`
   display: flex;
   align-items: center;
   position: relative;
   display: flex;
   justify-content: start;
   width: 180px;
   .klasha-logo{
    margin: 2rem 0;
    &:hover{
        cursor: pointer;
    }
   }


`;


