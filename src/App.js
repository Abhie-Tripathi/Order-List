import React,{useState} from 'react';
import Form from './components/Form/Form';
import ProductList from './components/List/ProductList';

function App() {
    const [datalist,setdatalist] = useState([])
    const [sum,setsum] = useState(0)

    const getdata = (data) =>{
        setdatalist((prevdata)=>[...prevdata,data])
        setsum((prevsum)=>+prevsum + +data.Price)

    }
    return(<>
        <Form onsubmit={getdata}/>
        <ProductList list={datalist} sum={sum}/>
        </>
    )
}
  
export default App;
