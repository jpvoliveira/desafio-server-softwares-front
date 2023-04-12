import React, { useState } from 'react';
import styled from 'styled-components';
import { editarProduto } from '../api';

function EditComponent({produto, setEditar}){
    const { codigo, descricao, preco, data_cadastro, _id } = produto;

    const [newCode, setNewCode] = useState(codigo)
    const [newDescription, setNewDescription] = useState(descricao)
    const [newPrice, setNewPrice] = useState(preco)
    const [newDate, setNewDate] = useState(data_cadastro)

    return(
        <Container>
            <form onSubmit={handleEdit}>
                <p>Código: <input type="number" value={newCode} onChange={(e) => setNewCode(e.target.value)}/></p>
                <p>Descrição: <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}/></p>
                <p>Preco: <input type="text" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/></p>
                <p>Data de Cadastro: <input type="text" value={newDate} onChange={(e) => setNewDate(e.target.value)}/></p>
                <button type="submit">Editar</button>
                <button onClick={() => setEditar(false)}>Cancelar</button>
            </form>
        </Container>
    )

    function handleEdit (e) {
        e.preventDefault();

        const body = {
            "codigo": newCode,
            "descricao": newDescription,
            "preco": newPrice,
            "data_cadastro": newDate
        }

        editarProduto(setEditar, _id, body);
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    background-color: gray;
    border-radius: 10px;
    padding: 20px;
`

export default EditComponent;