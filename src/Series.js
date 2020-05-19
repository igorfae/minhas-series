import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Series = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('/api/series')
            .then(res => {
                setData(res.data.data)
            })
    }, [])

    const deleteSerie = id => {
        axios
            .delete('api/series/' + id) 
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
                    <button onClick={() => deleteSerie(record.id)} className='btn btn-danger'>Remover</button>
                    <Link to={'/series/' + record.id} className='btn btn-warning ml-1'>Info</Link>
                </td>
            </tr> 
        )
    }

    if (data.length === 0) {
        return (
            <div className='container'> 
                <h1>Séries</h1>
                <Link                                    
                    to='/series/novo' 
                    className='btn btn-primary'>Adicionar série
                </Link>
                <hr/>
                <div className='alert alert-warning alert-dismissible fade show' role='alert'>
                    <strong>Não há séries cadastrados. Clique <Link to="/series/novo" className="alert-link">aqui</Link> para cadastrar novo gênero</strong>                        
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <h1>Séries</h1>
            <Link   to='/series/novo' className='btn btn-primary'>Nova série</Link>
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

export default Series