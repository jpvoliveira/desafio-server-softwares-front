import React from 'react';
import styled from 'styled-components';

function DetailComponent({produto, setDetalhes}){
    const { codigo, descricao, preco, data_cadastro } = produto;
    return(
        <Container>
            <p>Código: {codigo}</p>
            <p>Descrição: {descricao}</p>
            <p>Preco: {preco}</p>
            <p>Data de Cadastro: {data_cadastro}</p>
            <button onClick={() => setDetalhes(false)}>Voltar</button>
        </Container>
    );
}

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

export default DetailComponent