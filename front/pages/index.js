import {useState, useEffect} from 'react'
import axios from 'axios'
import List from '../components/list'

const Home = ()=>{


    const [myData, setMyData] = useState('');

    const getData = async()=>{
        const {data} = await axios.get('http://localhost:8000/api/get-data');
        setMyData(data);
    }

    // call function to get data
    useEffect(()=>{
        if (myData == ''){
            getData();
        }
    },[myData]);

    return (
        <>
           <List data = {myData}/> 
        </>
   );
}


export default Home;