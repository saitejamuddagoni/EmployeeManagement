import logo from './logo.svg';
	import './App.css';
	import ListEmployeeComponent from './components/ListEmployeeComponent'
	import HeaderComponent from './components/HeaderComponent';
	import FooterComponent from './components/FooterComponent'; 
  import {BrowserRouter,Routes,Route} from 'react-router-dom';
  import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
	function App() {
  	return (
    	<div>

	    <HeaderComponent/>

	    <BrowserRouter>
  
              <div className='container'>
                <Routes>
                      <Route exact path='/' element={<ListEmployeeComponent/>}/>
                      <Route path='/employees' element={<ListEmployeeComponent/>}/>
                      <Route path='/add-employee' element={<CreateEmployeeComponent/>}/>
                      <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
                </Routes>                  
              </div>

      </BrowserRouter>
    	<FooterComponent/>

 	   </div>
  	);
	}

	export default App;
