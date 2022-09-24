import '../../../Styles/components/app.css';
import Cards from './Cards';
import data from '../../Common/Helper';

function App() {
  document.title = 'Job list filter';
  
  return (
    <div className="app">
      <div className='jl-header'>
        <div className='jl-header__bg'></div>
      </div>

      <div className='jl-container'>
        <Cards data={data} />
      </div>
    </div>
  );
}

export default App;
