import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { addItem } from 'actions';
import fetchData from 'utils/fetchData';
import Spinner from 'components/Spinner/Spinner';
import * as Styled from './FetchButton.styled';

const FetchButton = ({ addItem, pokemonList }) => {

const [loading, setLoading] = useState(false);
const [offset, setOffset] = useState(0);
const [buttonStatusText, setButtonStatusText] = useState('Fetch pokemons')


useEffect( () => {
    if(pokemonList.length >= 10){
        setButtonStatusText('No more pokemons')
    }
    else if(pokemonList.length > 0){
        setButtonStatusText('Fetch 5 more');
    }
    if(pokemonList.length <= 0) {
        setButtonStatusText('Fetch pokemons')
    }
},[pokemonList]);

const loadData = async () => {
    if(!loading){
        setLoading(true);
        try {
            const data = await fetchData(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}`);
            data.map(pokemon => addItem(pokemon))
            setOffset( prevState => prevState + 5)
            setLoading(false);
        }
        catch(error) {
            alert(error);
        }
    }

}

return (
    <>
    {loading && <Spinner />}
        <Styled.Button onClick={ loadData } disabled={ pokemonList.length >= 10 } >
          { buttonStatusText }          
        </Styled.Button>
    </>

)

}

//redux
const mapStateToProps = state => {
    const { pokemonList } = state;
    return { pokemonList };
}

const mapDispatchToProps = dispatch => ({
    addItem: (name, ability, gender) => dispatch(addItem(name, ability, gender))
})

export default connect(mapStateToProps, mapDispatchToProps)(FetchButton);