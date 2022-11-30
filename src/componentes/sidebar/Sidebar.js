import './Sidebar.css';
import {FaUpload} from 'react-icons/fa';
import {RiLayout2Line} from 'react-icons/ri';
import Item from './componentes/Item';

function Sidebar(){
    return(
        <div className='sidebar-header-side'>
        <div className="listItem-side">
        
        <div className='pra_voce'>
        {<RiLayout2Line />} 
         <a className='a-side'>Pra Voce</a>
         </div>

         <div className='pra_voce'>
        {<RiLayout2Line />} 
         <a className='a-side'>Seu Estilo</a>
         </div>
         
         <b className='topics-trend'> TREND TOPICS </b>
         <a className='topics'> #CABELOAFRO  </a>
         <a className='topics'> #UNHADEFIBRA  </a>
         <a className='topics'> #360WAVES </a>
         <a className='topics'> #CORTEAMERICANO </a>

         <h1 className='perf'>Perfis</h1>
         <div className='imgens_geral_side'>
          
        <img className='img_side' src='https://th.bing.com/th/id/R.397bf3355403cf073fb4a7e95b024cef?rik=nsGLf9dRwPJGnA&pid=ImgRaw&r=0' />
        <a className='nome_perf'>VITOR LIMA</a>
        <a className='nome_perf_seguir'>SEGUIR</a>
        <img className='img_side' src='https://th.bing.com/th/id/R.397bf3355403cf073fb4a7e95b024cef?rik=nsGLf9dRwPJGnA&pid=ImgRaw&r=0' />
        <a className='nome_perf'>VITOR LIMA</a>
        <a className='nome_perf_seguir'>SEGUIRrrrrr</a>
        <img className='img_side' src='https://th.bing.com/th/id/R.397bf3355403cf073fb4a7e95b024cef?rik=nsGLf9dRwPJGnA&pid=ImgRaw&r=0' />
        <a className='nome_perf'>VITOR LIMA</a>
        <a className='nome_perf_seguir'>SEGUIR</a>
        <img className='img_side' src='https://th.bing.com/th/id/R.397bf3355403cf073fb4a7e95b024cef?rik=nsGLf9dRwPJGnA&pid=ImgRaw&r=0' />
        <a className='nome_perf'>VITOR LIMA</a>
        <a className='nome_perf_seguir'>SEGUIR</a>
        <img className='img_side' src='https://th.bing.com/th/id/R.397bf3355403cf073fb4a7e95b024cef?rik=nsGLf9dRwPJGnA&pid=ImgRaw&r=0' />
        <a className='nome_perf'>VITOR LIMA</a>
        <a className='nome_perf_seguir'>SEGUIR</a>
        <img className='img_side' src='https://th.bing.com/th/id/R.397bf3355403cf073fb4a7e95b024cef?rik=nsGLf9dRwPJGnA&pid=ImgRaw&r=0' />
        <a className='nome_perf'>VITOR LIMA</a>
        <a className='nome_perf_seguir'>SEGUIR</a>
        <img className='img_side' src='https://th.bing.com/th/id/R.397bf3355403cf073fb4a7e95b024cef?rik=nsGLf9dRwPJGnA&pid=ImgRaw&r=0' />
        <a className='nome_perf'>VITOR LIMA</a>
        <a className='nome_perf_seguir'>SEGUIR</a>
        </div>

        <a className='politica-side'> POLITICA DE PRIVACIDADE - UM ESTILO 2022 DIREITOS, DIRETRIZES DA COMUNIDADE  </a>


        </div>

        

      </div>
    )
}

export default Sidebar;