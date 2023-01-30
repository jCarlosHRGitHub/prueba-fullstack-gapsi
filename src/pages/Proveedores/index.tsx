import React, {useEffect, useState, useCallback} from 'react';
import logo from '../../logo.svg';
import './style.css';
import { Link } from 'react-router-dom';
import {
   _getProveedores,
  _guardaProveedor,
  _eliminaProveedor 
} from '../../components/services/proveedores.service';

import { NestedModalNew } from './ModalNewProv';

export function Proveedores() {

  const pre = [
    {
        id:0,
        nombre: '',
        rasonsocial: '',
        direccion: ''
    }
  ];

  const [proveedores, setProveedores] = useState(pre);

  useEffect(()=>{
    getInfoCandidato();
  },[])

  const getInfoCandidato =  async () => {
      const response = await _getProveedores();
      setProveedores(response);
  }

  const guardaProveedor = useCallback(async (dataProv, closemodal= () => {}, clearmodal= () => {}) => {
      const response = await _guardaProveedor(dataProv);
      if(response.id){
        const old = [...proveedores];
          const newdata = [...old,{...dataProv,id:response.id}]
          setProveedores(newdata);
      }
      closemodal();
      clearmodal();
  },[proveedores]);

  const eliminaProveedor = async (id:number) => {
    const response = await _eliminaProveedor(id);
    const oldProveedores = [...proveedores];
    const deleted = oldProveedores.find(prov => prov.id === id);
    if(!deleted) return;

    const index = oldProveedores.indexOf(deleted);
    oldProveedores.splice(index,1)
    setProveedores(oldProveedores);
  }

  return (
    <div className="AppS">
      <div className='container mt-3'>
        <h4>Administración de proveedores</h4>
        <div className=''>
          <div className='actions'>
            <div className='d-flex justify-content-end'>
              <NestedModalNew guardaProveedor={guardaProveedor}/>
            </div>
          </div>
          <table className="table table-striped table-hover mt-4">
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Razón Social</th>
                      <th scope="col">Dirección</th>
                      <th className='text-center' scope="col">Eliminar</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      proveedores.length > 0 && proveedores.map(prov => (
                          <tr key={prov?.id}>
                              <th scope="row">{prov?.id}</th>
                              <td>{prov?.nombre}</td>
                              <td>{prov?.rasonsocial}</td>
                              <td>{prov?.direccion}</td>
                              <td className='text-center'>
                                <button onClick={()=>eliminaProveedor(prov.id)} type="button" className='btn btn-danger'>
                                  Eliminar
                                </button>
                              </td>
                          </tr>
                      ))
                  }
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
