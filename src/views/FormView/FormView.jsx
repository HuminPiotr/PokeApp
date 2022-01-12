import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'components/Form/Form';
import * as Styled from './FormView.styled'


const FormView = () => (
    <Styled.Container>
        <Link to='/' className="backLink"> &lt; &nbsp;Go back home </Link>
        <Styled.Header className="header"> Create your own pokemon </Styled.Header>
        <Form></Form>
    </Styled.Container>
);

export default FormView;