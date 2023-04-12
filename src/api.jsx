import axios from 'axios';

const API_URL = 'https://desafio-server-softwares.onrender.com';

export async function getProdutos(setProdutos) {
    try {
        const response = await axios.get(`${API_URL}/produtos`);
        setProdutos(response.data);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
};

export async function editarProduto(setEditar, _id, body) {
    try {
        await axios.put(`${API_URL}/produtos/${_id}`, body);
        setEditar(false)
    } catch (error) {
        console.error('Erro ao atualizar objeto:', error);
    }
};

export async function deletarProduto(setDeletar, _id) {
    try {
        await axios.delete(`${API_URL}/produtos/${_id}`);
        setDeletar(false)
    } catch (error) {
        console.error('Erro ao deletar objeto:', error);
    }
};