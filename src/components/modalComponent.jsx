import React, { useState } from 'react';
import styled from 'styled-components';
import { registrarProduto } from '../api';

function Modal({setIsOpen}) {
    const [code, setCode] = useState(0)
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [date, setDate] = useState()

    return (
        <div>
            <Overlay>
                <ModalContainer>
                    <form onSubmit={handleRegister}>
                        <Box>
                            <span>Código</span>
                            <input type="number" value={code} onChange={(e) => setCode(e.target.value)}/>
                        </Box>
                        <Box>
                            <span>Descrição</span>
                            <input type="text" placeholder='Produto' value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </Box>
                        <Box>
                            <span>Preco</span>
                            <input type="text" placeholder='R$ 0,00' value={price} onChange={(e) => setPrice(e.target.value)}/>
                        </Box>
                        <Box>
                            <span>Data de Cadastro</span>
                            <input type="text" placeholder='00/00/0000' value={date} onChange={(e) => setDate(e.target.value)}/>
                        </Box>
                        <BoxButton>
                            <button type="submit">Cadastrar</button>
                            <button onClick={() => setIsOpen(false)}>Voltar</button>
                        </BoxButton>
                    </form>
                </ModalContainer>
            </Overlay>
        </div>
    );

    function handleRegister(e){
        e.preventDefault()
        
        const body = {
            "codigo": code,
            "descricao": description,
            "preco": price,
            "data_cadastro": date
        }

        registrarProduto(setIsOpen, body);
    }
};

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    `
const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: gray;
    border-radius: 10px;
    padding: 20px;
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
const BoxButton = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    `

export default Modal;