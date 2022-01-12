import React from 'react';

import FetchButton from 'components/FetchButton/FetchButton';
import Table from 'components/Table/Table';
import * as Styled from './StartView.styled';

const StartView = () => (
    <>
        <Styled.Panel>
            <Styled.LinkForm to ="/form">Create pokemon</Styled.LinkForm>
            <FetchButton />
        </Styled.Panel>
        <Table />    
    </>
);

export default StartView;