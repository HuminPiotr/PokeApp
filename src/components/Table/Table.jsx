import React from 'react'
import { connect } from 'react-redux';
import TableItem from 'components/TableItem/TableItem';
import * as Styled from './Table.styled';

const Table = ({ pokemonList }) => {
    const tableItemList = pokemonList.map( (pokemon, index) => <TableItem name={ pokemon.name } id={pokemon.id} key={pokemon.id} />)

    return (
        <>
        { pokemonList.length > 0 ? 
            <Styled.Table>
                <h2 className="header" >Your pokemons</h2>
                    <ul className="list" >
                        { tableItemList }
                    </ul> 
            </Styled.Table>
            :
            <Styled.Message>
                <p>No pokemons in your pokedex.</p>
                <p>Create new one or fetch some.</p>
            </Styled.Message>
        }
        </>
    )
}

//redux
const mapStateToProps = (state) => {
    const { pokemonList } = state;
    return { pokemonList };
}

export default connect(mapStateToProps)(Table);