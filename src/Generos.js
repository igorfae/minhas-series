import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Generos = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('/api/genres')
            .then(res => {
                setData(res.data.data)
            })
    }, [])

    const deleteGenero = id => {
        axios
            .delete('api/genres/' + id) 
            .then(res => {
                const filtrado = data.filter(item => item.id !== id)
                setData(filtrado)
            })
    }

    const renderLine = record => {
        return (
            <tr key={record.id}>
                <th scope='row'>{record.id}</th>
                <td>{record.name}</td>
                <td>
                    <button onClick={() => deleteGenero(record.id)} className='btn btn-danger'>Remover</button>
                    <Link to={'/generos/' + record.id} className='btn btn-warning ml-1'>Editar</Link>
                </td>
            </tr> 
        )
    }

    if (data.length === 0) {
        return (
            <div className='container'> 
                <h1>Gêneros</h1>
                <Link                                     
                    to='/generos/novo' 
                    className='btn btn-primary'>Adicionar gênero
                </Link>
                <hr/>
                <div className='alert alert-warning alert-dismissible fade show' role='alert'>
                    <strong>Não há gêneros cadastrados. Clique <Link to="/generos/novo" className="alert-link">aqui</Link> para cadastrar novo gênero</strong>                        
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <h1>Gêneros</h1>
            <Link                                
                to='/generos/novo' 
                className='btn btn-primary'>Adicionar gênero
            </Link>
            <hr/>
            <table className='table table-hover table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderLine)}
                </tbody>
            </table>
        </div>
    )
}

export default Generos