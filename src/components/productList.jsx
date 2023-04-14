import React, { useState, useEffect } from 'react';
import ProductCard from './productCard';
import styled from 'styled-components';
import { getProdutos } from '../api';
import Modal from './modalComponent';

function ProductList() {
    const [produtos, setProdutos] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        getProdutos(setProdutos);
    }, [produtos]); 
  
    return (
        <Container>
            <h1>Lista de Produtos</h1>
            <button onClick={()=> setIsOpen(true)}> + </button>
            {isOpen && <Modal setIsOpen={setIsOpen}/>}
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
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`

const Box = styled.div`
    margin-top: 100px;
    width:90vw;
    overflow-x: auto;
    display: flex;
    gap: 20px;
`

export default ProductList;