import React, {useEffect, useState} from 'react';
import logo from '../../logo.svg';
import './style.css';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import { CardCandidato } from '../../components/CardCandidato';
import { _infoCandidato } from '../../components/services/candidato.service';
import { info } from 'console';

export function HomePage() {

  const pre = {
    mensaje: "",
    nombre: "",
    appVersion: "unknown"
  }
  const [infoCandidato, setInfoCandidato] = useState(pre);

  useEffect(()=>{
  getInfoCandidato();
  },[])

  const getInfoCandidato =  async () => {
      const response = await _infoCandidato();
      setInfoCandidato(response);
  }

  console.log('responses',infoCandidato);


  return (
    <Container>
      <div className='row justify-content-center mt-5'>
        <div className='col-lg-5 col-md-7 col-sm-10'>
          <CardCandidato infoCandidato={infoCandidato}/>
        </div>
      </div>

      <div className='end-page'>
        <div className='d-flex justify-content-end'>
            <span className='version'>Version: {infoCandidato.appVersion ?? '' }</span>
        </div>
      </div>
    </Container>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    //   <div className="App-line"></div>
      
    //   <main className="App-main">
    //     <p>
    //       Page 1
    //     </p>

    //     <Link to="/page2" className="App-link">
    //       Next Page
    //     </Link>
    //   </main>
    // </div>
  );
}
