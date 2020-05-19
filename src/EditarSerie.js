import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const EditarSerie = ({match}) => {

    const [name, setName] = useState('')

    const [success, setSuccess] = useState(false)

    useEffect(() => {
      axios
        .get('/api/series/' + match.params.id)
        .then(res => {
          setName(res.data.name)
        })
    }, [match.params.id])

    const onChange = event => {
        setName(event.target.value)
    }

    const onSave = () => {
        axios.put('/api/series/' + match.params.id, {
            name
        })
            .then(res => {
                setSuccess(true)
            })
    }

    if (success) {
        return (
            <div>
               <Redirect to='/series' />
            </div>
        )
    }

    return (
        <div className='container'>
            <h1>Editar série</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Série' />
                </div>
                <button type='button' onClick={onSave} className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    )
}


export default EditarSerie 
