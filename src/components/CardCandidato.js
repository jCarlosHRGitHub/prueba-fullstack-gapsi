// import * as React from 'react';
import React, {useEffect, useState} from 'react';
import candidato from '../candidato.jpeg'
import { Link } from 'react-router-dom';


export function CardCandidato(data) {
    const {infoCandidato} = data;
  return (
    <>
    <div className='card p-3'>
        <div className='text-center'>
            <img src={candidato} className='img-candidato' />
            <div className='saludo my-3'>
                {`${infoCandidato.mensaje} ${infoCandidato.nombre}`}
            </div>
            <div className='action'>
                <Link to="/proveedores" className="">
                    <button className='btn btn-info text-white'>Continuar</button>
                </Link>
            </div>
        </div>
    </div>
    </>
  );
}