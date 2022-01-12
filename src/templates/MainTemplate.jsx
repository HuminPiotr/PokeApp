import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import * as Styled from './MainTemplate.styled';
import Logo from 'components/Logo/Logo.jsx';

const MainTemplate = ( {children} ) => (
    <>
    <GlobalStyle />
    <Styled.Container>
        <Logo />
        { children }
    </Styled.Container>
    </>
)

export default MainTemplate;