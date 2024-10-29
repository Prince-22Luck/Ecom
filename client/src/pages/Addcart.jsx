import axios from 'axios';
import { useState } from 'react'
import Compressor from 'compressorjs';


const Addcart = () => {
    const [image,setImage]=useState('');
    const [name,setName]=useState('');
    const [description,setDescribe]=useState('');
    const [category,setCategory]=useState('');
    const [price,setPrice]=useState('');

    const handleImageChange = (e)=>{

        const file = e.target.files[0];
        if(file){
            new Compressor(file,{
                quality:0.6,
                success(result){
                    const reader = new FileReader();
                    reader.onloadend = ()=>{
                        setImage(reader.result);
                    };
                    reader.readAsDataURL(result);
                },
                error(err){
                    console.error("Error in compressing Image ",err);
                },
            });
        }
    };


    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
          await axios.post('http://localhost:3001/cartItems',{name,price,description,category,image})
          console.log("submit is running")
        }
        catch(e){
          console.log(e)
        }
       
      }



  return (

    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name}  placeholder='Part Name' required/>
        <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} placeholder='Price' required/>
        <input type="text" onChange={(e)=>setDescribe(e.target.value)} value={description} placeholder='Description' required/>
        <input type="text" onChange={(e)=>setCategory(e.target.value)} value={category} placeholder='Category' required/>
        <input type="file" onChange={handleImageChange}  required/>
       <button type='submit'>Insert</button>
    </form>
    
  )
}

export default Addcart