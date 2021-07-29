import React from 'react'
import './ImgLinkForm.css'

const ImgLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className = 'dark-gray'>
                {'Faça uma requisição para uma API qualquer.'}    
            </p>
            <div className='center'>
                <div className='form center pa4'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-green' onClick={onButtonSubmit} >Run</button>
                </div>
            </div>
        </div>
    )
}

export default ImgLinkForm