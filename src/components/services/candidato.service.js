import { _fetch } from "../heplers/fetch";

export const _infoCandidato = async (data = {}) => {
    const req = {...data};
    try{
        const fetch = await _fetch('/candidato', req);
        return await fetch.json();
    } catch (error) {
        return {
            error: true,
            mensaje: "",
            nombre: "",
            appVersion: "unknown"
          }
    }
}