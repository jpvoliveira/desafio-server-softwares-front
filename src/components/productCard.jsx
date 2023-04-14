import React, { useState } from 'react';
import styled from 'styled-components';
import { deletarProduto } from '../api';
import DetailComponent from './detailComponent';
import EditComponent from './editComponent';

function ProductCard({ produto }) {
    const { codigo, descricao, _id } = produto;
    const [detalhes, setDetalhes] = useState(false)
    const [deletar, setDeletar] = useState(false)
    const [editar, setEditar] = useState(false)

    if(detalhes){
        return <DetailComponent produto={produto} setDetalhes={setDetalhes}/>
    }

    if(editar){
        return <EditComponent produto={produto} setEditar={setEditar}/>
    }

    return (
        <Container>
            <p>Código: {codigo}</p>
            <p>Descrição: {descricao}</p>
            <BoxButtons>
                <button onClick={() => setDetalhes(true)}>Detalhes</button>
                <button onClick={() => setEditar(true)}>Editar</button>
                <button onClick={() => onDelete()}>Deletar</button>
            </BoxButtons>
        </Container>
    );

    function onDelete(){
        setDeletar(true)
        deletarProduto(setDeletar, _id)
    }
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    background-color: gray;
    border-radius: 10px;
    padding: 20px;
    min-width: 250px;
    max-width: 250px;
    min-height: 250px;
    max-height: 250px;
`
const BoxButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export default ProductCard;