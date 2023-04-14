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
                <Box>
                    <span>Código</span>
                    <input type="number" value={newCode} onChange={(e) => setNewCode(e.target.value)}/>
                </Box>
                <Box>
                    <span>Descrição</span>
                    <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}/>
                </Box>
                <Box>
                    <span>Preco</span>
                    <input type="text" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
                </Box>
                <Box>
                    <span>Data de Cadastro</span>
                    <input type="text" value={newDate} onChange={(e) => setNewDate(e.target.value)}/>
                </Box>
                <BoxButton>
                    <button type="submit">Editar</button>
                    <button onClick={() => setEditar(false)}>Cancelar</button>
                </BoxButton>
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
    justify-content: center;
    background-color: gray;
    border-radius: 10px;
    padding: 20px;
    min-width: 250px;
    max-width: 250px;
    min-height: 250px;
    max-height: 250px;
`

const BoxButton = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input{
        width: auto;
        height: 20px;
        text-align: center;
    }
`

export default EditComponent;