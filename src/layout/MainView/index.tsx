import React from 'react';
import styled from 'styled-components';
import { Header } from 'layout/Header';
import { SideBar } from 'layout/Sidebar';

interface Props {
    children: React.ReactNode;
}

export const MainView = ({ children }: Props) => {
    return (
        <Wrapper>
            <SideBar />
            <Content>
                <Header />
                {children}
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.section`
   display: flex;
`;

const Content = styled.section`
     width: 100%;
`;