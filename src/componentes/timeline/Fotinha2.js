import Imagem from './Imagem';
import { BsSuitHeart } from 'react-icons/bs';
import { BiMessageRounded } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import { BiCollection } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import img1 from './imagens/t.png';
import img2 from './imagens/tt.jpg';
import React from "react";
import VideoInput from "./VideoInput";
import "./Styles.css";


function Fotinha2(props){
    return(
        <div className="fotinha" >
           <div className="foto_nome">
            <img className='img_perfil_fotinha' src={img1} />
            <h4 className="nome_fotinha"> OUTRO NOME </h4> 
            
            </div>
        
            <div className="img_timeline">
            <div className="App">
        <h1>Video upload</h1>
        <VideoInput width={200} height={470} />
      </div>
            </div>

           </div>

        

        

    )
}

export default Fotinha2;