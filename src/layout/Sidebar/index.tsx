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
import { StyleConstants } from 'styles/StyleConstants';
import { Button } from 'components/Button';
import supportIcon from 'assets/support.svg';
import leftIcon from 'assets/arrow-left.svg';


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
export const SideBarIcon = (props: ISideBarLinkProps) => {
    const { route, icon } = props;
    const location = useLocation();
    const currentPath = location.pathname.toLowerCase();
    const activePath = route.toLowerCase();
    return (
        <li className="closed__item">
            <Link to={route} className={currentPath === activePath ? "closed-active-item" : "closed-side-bar__item"}>
                <img src={icon} alt='icon' className={currentPath === activePath ? " closed-icon closed-active-item" : " closed-icon closed-side-bar__item"} />
            </Link>
        </li>
    )

}

export const SideBar = () => {
    const navigate = useNavigate();
    const [isPanelOpen, setIsPanelOpen] = useState(true);
    const navigateHome = () => {
        navigate("/dashboard");
    }
    const togglePanel = () => {
        setIsPanelOpen(!isPanelOpen)
    }
    return (
        <Wrapper>
            <LogoContainer>
                <img src={klashaLogo} alt='logo' className='klasha-logo' onClick={navigateHome} />
            </LogoContainer>
            {isPanelOpen ? (
                <>
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

                        <ActionBtns>
                            <SupportBtn className='btn btn-primary'>
                                <img src={supportIcon} className='support-icon' alt='support' title='support' />
                                Support
                            </SupportBtn>
                            <SupportBtn className='btn btn-secondary-outline' onClick={togglePanel}>
                                <img src={leftIcon} className='support-icon' alt='hide' title='hide' />
                                Hide panel
                            </SupportBtn>
                        </ActionBtns>
                    </MenuContainer>
                </>


            )
                :
            (
                    <ClosedSideBar>
                        <ul className='closed-bar__list'>
                            {menuItems.map((item) => {
                                return (
                                    <SideBarIcon
                                        key={item.name}
                                        route={item.path}
                                        icon={item.icon}
                                    />

                                )
                            })}
                        </ul>
                        <ul className='closed-bar__list'>
                            {acceptMenu.map((item) => {
                                return (
                                    <SideBarIcon
                                        key={item.name}
                                        route={item.path}
                                        icon={item.icon}
                                    />

                                )
                            })}
                        </ul>
                        <ul className='closed-bar__list'>
                            {sendMenu.map((item) => {
                                return (
                                    <SideBarIcon
                                        key={item.name}
                                        route={item.path}
                                        icon={item.icon}
                                    />

                                )
                            })}
                        </ul>
                        <ClosedSupportBtn className='btn btn-secondary-outline' onClick={togglePanel} >
                            <img src={leftIcon} className='closed-support-icon' alt='hide' title='hide' />
                        </ClosedSupportBtn>
                    </ClosedSideBar>
              )

            }


        </Wrapper>
    )
}

const Wrapper = styled.div`
        height: 100vh;
        padding-left: 40px;
        background-color:${StyleConstants.COLOR_ACCENT};
`;

const MenuContainer = styled.div`
    padding: 0;
    height: inherit;
    width: 280px;
    .menu__title{
        font-size: 16px;
        font-weight: 300;
        line-height: 28px;
        color: ${StyleConstants.COLOR_TEXT_GREY};
    }
     .side-bar__items{
        padding: 0px;
        margin-top: 0;
    }

    .side-bar__item{
        list-style-type: none;
        margin: 5px 0;
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
                stroke: ${StyleConstants.COLOR_PRIMARY};
            }
         }
    }
    .side-bar__active{
        color:${StyleConstants.COLOR_PRIMARY};
        font-weight: 600;
    }

    .sidebar-icon__active{
        stroke:${StyleConstants.COLOR_PRIMARY};
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

const ActionBtns = styled.div`
 margin-top: 2rem;
 display: flex;
 flex-direction: column;
`;

const SupportBtn = styled(Button)`
   margin-top: 1rem;
   align-items: center;
   .support-icon{
    margin-right: 10px;
   }
`;


const ClosedSideBar = styled.div`
        width: 100px;
        height: 100vh;
        text-align: center;

        .closed-icon{
            width: 30px;
            height: 30px;
        }
        .closed-bar__list{
            padding: 0;
        }
        .closed__item{
            list-style-type: none;
            display: flex;
            align-items: center;
            justify-content: center;
            
        }

      .closed-side-bar__item, .closed-active-item{
            margin: 5px 2px ;
            padding: 5px 0;
            transition: 0.5s;
      }
  
`;

const ClosedSupportBtn = styled(Button)`
   margin-top: 1rem;
   width: 50px;
   align-self: center;
   margin-left: 20%;
   .closed-support-icon{
     transform: rotate(180deg);
   }
`;

