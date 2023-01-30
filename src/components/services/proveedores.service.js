import { _fetch } from "../heplers/fetch";

export const _getProveedores = async (data = {}) => {
    const req = {...data};
    try{
        const fetch = await _fetch('/proveedores', req);
        return await fetch.json();
    } catch (error) {
        return [
            {
                error: true,
                id:0,
                nombre: '',
                rasonsocial: '',
                direccion: ''
            }
        ]
    }
}

export const _guardaProveedor = async (data = {}) => {
    const req = {...data};
    try{
        // console.log('req',req );
        const fetch = await _fetch('/proveedores', req,'POST');
        return await fetch.json();
    } catch (error) {
        return  {
                error: true,
                id:0,
                nombre: '',
                rasonsocial: '',
                direccion: ''
            }
        
    }
}

export const _eliminaProveedor = async (id) => {
    try{
        // console.log('req',req );
        const fetch = await _fetch(`/proveedores/${id}`,{},'DELETE');
        return await fetch.json();
    } catch (error) {
        return  {
                error: true,
                }
        
    }
}