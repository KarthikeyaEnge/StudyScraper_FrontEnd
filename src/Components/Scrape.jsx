import React from 'react'
import {FaPlusCircle,FaTrash} from 'react-icons/fa';
import { useState } from 'react';


const Scrape = () => {
    const [file,setFile]=useState([]);
    const [error,setError]=useState(null);

     const handleUpload=(event)=>{
        const count=(file.length>=1)?(file.length+1):1; 
        const extname=event.target.files[0].name.split('.')[1];
         
        if(extname==='jpg' || extname==='jpeg' || extname==='png'){
           setError(null);
            const fname={
                "name":event.target.files[0].name,
                "id":count
            };
    
            
            console.log(fname);
              if(fname) setFile([...file,fname]);
        }

        else{
            setError('Invalid File');
            setFile([]);
        }
     }

     const handleDelete=(id)=>{
          const filelist=file.filter((item)=>item.id!==id);
          (filelist.length>0)?setFile([...filelist]):setFile([]);
          console.log(filelist);
     }

    return (
    <main className='scrp-main'>
       <section className='imp-sec'>
         
         <button>
         <input type="file" onChange={handleUpload}/>    
              <FaPlusCircle/>
              Import
         </button>
              <p>Add Your Scan</p>
              <p>Accepted-Format:
                JPEG, PNG, JPG</p>

                  
        </section> 

           <h3 className='error'>{error}</h3>

        <section>
            <ul className='file-list'>
            
            { 
               file.map((d)=>{
                   return (<li key={d.id}> 
                             <p>{ d.name }</p>
                             <FaTrash
                                role='button'
                                onClick={()=>handleDelete(d.id)}
                             />
                          </li>)
                })
            }
             </ul> 
            
        </section>
        
    </main>
  )
}

export default Scrape