import React from 'react';
import logotypeMobile from 'assets/logo-mobile.svg';
import logotype from 'assets/logo.svg';
import * as Styled from './Logo.styled';

const Logo = () => (
    <Styled.Logo to="/">
        <picture className="logotype">
            <source media="(min-width: 640px)" srcSet={logotype} alt="logotype pokeball" />
            <img src={logotypeMobile} srcSet={logotypeMobile} alt="logotype pokeball" />
        </picture>
        <h1 className="header" >PokemonsWorld</h1>
    </Styled.Logo>
)

export default Logo;