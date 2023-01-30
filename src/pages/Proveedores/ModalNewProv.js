// import * as React from 'react';
import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { _guardaProveedor } from '../../components/services/proveedores.service';

export const NestedModalNew = ({guardaProveedor}) => {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const preData = {nombre:'', rasonsocial:'', direccion:''};
    const [data, setData] = useState(preData);

    const resetData = () => {
        setData(preData);
    }

    const preErrors = {enombre:'', erasonsocial:'', edireccion:''};
    const [errors, setErrors] = useState(preErrors);

    const setInputValue = (value, key) => {
        setData({...data,[key]:value})
    }

    const submit = () => {
        let _errors = {};

        if(!nombre.trim()){
            _errors.enombre = 'Indique el nombre del proveedor';
        }

        if(!rasonsocial.trim()){
            _errors.erasonsocial = 'Indique la razón social';
        }

        if(!direccion.trim()){
            _errors.edireccion = 'Indique la dirección';
        }

        if(Object.keys(_errors).length === 0){
            guardaProveedor(data, handleClose, resetData);
        }
        setErrors({...preErrors, ..._errors});
    }
    //console.log('pd',proveedores);
    // const guardaProveedor =  async (data) => {
    //     const response = await _guardaProveedor();
    //     if(response.id){
    //         const newdata = [...proveedores,{...data,id:response.id}]
    //         console.log()
    //     }
    // }

    const {nombre, rasonsocial, direccion} = data;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid rgba(0,0,0,0.4)',
        borderRadius: '4px',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };
  
    return (
      <div>
        <Button onClick={handleOpen}>Nuevo proveedor</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">Nuevo proveedor</h2>
            <div className='form-group'>
                <label>Nombre: {errors.enombre && (<span className='text-danger'>{errors.enombre}</span>)}</label>
                <input onChange={e => setInputValue(e.target.value, 'nombre')} className='form-control' value={nombre}/>
            </div>
            <div className='form-group'>
                <label>Razón social: {errors.erasonsocial && (<span className='text-danger'>{errors.erasonsocial}</span>)}</label>
                <input onChange={e => setInputValue(e.target.value, 'rasonsocial')} className='form-control' value={rasonsocial}/>
            </div>
            <div className='form-group'>
                <label>Dirección: {errors.edireccion && (<span className='text-danger'>{errors.edireccion}</span>)}</label>
                <input onChange={e => setInputValue(e.target.value, 'direccion')} className='form-control' value={direccion}/>
            </div>
            <div className='form-group mt-3'>
                <button type='button' onClick={submit} className='btn btn-primary w-100'>Guardar proveedor</button>
            </div>

          </Box>
        </Modal>
      </div>
    );
  }