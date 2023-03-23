import './styles/app.css';
import './styles/header.css';

import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './Calculator';
import Add from './CalculatorExpression.js/Add';
import './styles/calculator.css';
import Subtract from './CalculatorExpression.js/Subtract';
import Multiply from './CalculatorExpression.js/Multiply';
import Divided from './CalculatorExpression.js/Divided';

function App() {
  return (
    <div>
      <header className='header'>
        <h1>Calculator</h1>
      </header>

      <nav className='calculator'>
        <Link to='/'>
          <button id='btn' className='btn-claculator'>
            Home
          </button>
        </Link>
        <Link to='/add'>
          <button id='btn' className='btn-add'>
            Add
          </button>
        </Link>
        <Link to='/subtract'>
          <button id='btn' className='btn-subtract'>
            Subtract
          </button>
        </Link>
        <Link to='/multiply'>
          <button id='btn' className='btn-multiply'>
            Multiply
          </button>
        </Link>
        <Link to='/divided'>
          <button id='btn' className='btn-divided'>
            Divided
          </button>
        </Link>
      </nav>

      <Routes>
        <Route path='/' element={<Calculator />}></Route>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/subtract' element={<Subtract />}></Route>
        <Route path='/multiply' element={<Multiply />}></Route>
        <Route path='/divided' element={<Divided />}></Route>
      </Routes>
    </div>
  );
}

export default App;
