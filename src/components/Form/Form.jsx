import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addItem } from 'actions';
import fetchData from 'utils/fetchData';
import Spinner from 'components/Spinner/Spinner';
import * as Styled from './Form.styled'




const Form = ( { addItem }) => {
    const [abilities, setAbilities] = useState([]);
    const [gender, setGender] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const loadData = async () => {
        setLoading(true);
        try {
            const dataAbilities = await fetchData(`https://pokeapi.co/api/v2/ability`);const dataGender = await fetchData(`https://pokeapi.co/api/v2/gender`);

            setAbilities(dataAbilities);
            setGender(dataGender);
            setLoading(false);
        }
        catch(error) {
            alert(error);
        }
    }

    useEffect( () => {
        loadData();
    },[])

    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = values => {
        const {name, ability, gender} = values;
        addItem(name, ability, gender);
        setIsSubmit(true);
    }

    const optionList = abilities.map((ability, index) => (
        <option value={ability} key={index}>
                {ability}
        </option>)
    )  

    const radioList = gender.map( (gender, index) => (
        <Styled.InputRadio htmlFor={gender} key={index} > {gender}
            <input type="radio" name="gender" id={gender}  value={gender} 
            {...register('gender', {required: true})}/>
            <span className="checkmark"></span>
        </Styled.InputRadio>
    ))

    return (
        <>
        {loading && <Spinner />}

        <Styled.Form action="" noValidate onSubmit={ handleSubmit(onSubmit) }>

            <Styled.InputTitle className="title">Name</Styled.InputTitle> <br />
            <Styled.InputText {...register('name', { required: true })} type="text" id="name" className="inputText"  placeholder="Name of the pokemon" /> <br />
            {errors.name && <p className="statement" >This field is required!</p>}

            <Styled.InputTitle className="title">Ability</Styled.InputTitle> <br />
            <Styled.Select  {...register('ability', { required: true })} id="ability" defaultValue="" required>
                <option value="" disabled  >Ability</option>
                { optionList }
            </Styled.Select>
            {errors.ability && <p className="statement" >This field is required!</p>}

            <Styled.InputTitle className="title">Gender</Styled.InputTitle> <br />
            <Styled.RadioWrapper>
                {radioList}
            </Styled.RadioWrapper>
            {errors.gender && <p className="statement" >This field is required!</p>}

            <Styled.Submit type="submit" value="Save" />

        </Styled.Form>
        
        {isSubmit && <Redirect to='/'/>}
        </>
    )
}

//redux
const mapDispatchToProps = dispatch => ({
    addItem: (name, ability, gender) => dispatch(addItem(name, ability, gender))
})

export default connect(null, mapDispatchToProps)(Form);