import React, { useState, useEffect } from 'react';
import ProductCard from './productCard';
import styled from 'styled-components';
import { getProdutos } from '../api';

function ProductList() {
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        getProdutos(setProdutos);
    }, [produtos]); 
  
    return (
        <Container>
            <h1>Lista de Produtos</h1>
            <Box>
                {produtos.map(produto => (
                    <ProductCard key={produto._id} produto={produto}/>
                ))}
            </Box>
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Box = styled.div`
    width: 100vw;
    display: flex;
    gap: 20px;
`

export default ProductList;