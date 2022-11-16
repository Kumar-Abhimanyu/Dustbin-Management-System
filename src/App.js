import './App.css';
import { Crud } from './components';
import { RealtimeData } from './realTimeDatabase';

function App() {
  return(
    <>
    <div className='crud'>
      <Crud/>
    </div>
    <br></br>
    <div className='tabs'>
      <RealtimeData/>
    </div>
    </>
  );
}
 
export default App;