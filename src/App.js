import logo from './logo.svg';
import './App.css';
import logoInsta from './Instagram_logo.svg.png'; 
import SidebarHeader from './componentes/sidebarheader/SidebarHeader';
import Timeline from './componentes/timeline/Timeline';
import Sugestoes from './componentes/sugest/Sugestoes';
import Timeline2 from './componentes/timeline/Timeline2';
import ImagemP from './componentes/imagens/tt.jpg';
import Sidebar from './componentes/sidebar/Sidebar';
import Timeline3 from './componentes/timeline/Timeline3';
import Sugestoes4 from './componentes/sugest/Sugestoes4';
import Sugestoes3 from './componentes/sugest/Sugestoes3';
import Sugestoes2 from './componentes/sugest/Sugestoes2';



function App() {
  return (
    <div className="App">

        <SidebarHeader logo={logoInsta}/>
        
        <div className='geral_pag'>

        <div className='story_timeline'>
        <Sidebar />
        </div>

        <div className='geral_sugest'>
        <div className='geral_time'>
        <Timeline />
        <Timeline2 /> 
        <Timeline3 />
        <Timeline3 />
        <Timeline3 />
        <Timeline3 />
        </div>

        <div className='sugestao_geral'>
        <Sugestoes />
        <Sugestoes2 />
        <Sugestoes3 />
        <Sugestoes4 />
        <Sugestoes />
        <Sugestoes />
        </div>
        
        <div >
        </div>
        </div>
        </div>
        
        
      

      
    
    </div>
  );
}

export default App;
