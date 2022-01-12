import React from 'react'
import { connect } from 'react-redux';
import { removeItem } from 'actions';
import * as Styled from './TableItem.styled';

const TableItem = ( { name, id, removeItem } ) => (
    <Styled.Item>
        <div className='nameField' > { name } </div>
        <div className="deleteField">
            <button className="deleteButton" onClick={() => removeItem(id)}> delete </button>
        </div>
    </Styled.Item>
)

const mapDispatchToProps = dispatch => ({
    removeItem: (id) => dispatch(removeItem(id)),
})

export default connect(null,mapDispatchToProps)(TableItem);