import todo from '../images/todo.svg'
import { FaPlus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useState } from 'react';

function TodoApp(){

    const [inputData,setInputData]=useState('')
    const[items,setItems]=useState([])
    const[placeHolder,setPlaceHolder]=useState('✍️add items...')

    const addItem=()=>{
        console.log(inputData);
        if(!inputData){

        }else{
            setItems([...items,inputData])
            setInputData('')
        }
    }
    const deleteItem=(index)=>{
        const filteredArray=items.filter((item,i)=>index!==i)
        setItems(filteredArray)
    }
    return(
        <>
        <div className="todoApp">
            <div className='heading'>
                <img src={todo} alt='Ram'/>              
                <h3>Add You List Here✌️</h3>
            </div>
            <div className='inputContainer'>
                <input type='text' placeholder={placeHolder} value={inputData}
                 onChange={event=>setInputData(event.target.value)}
                 onClick={()=>setPlaceHolder('')}
                 onBlur={()=>setPlaceHolder('✍️add items...')}
                 />
                <div className="inputIcon" onClick={addItem}>
                    <FaPlus />
                </div>                    
            </div>
            <div className='item-container'>
                {
                    items.map((ele,index)=>(
                        <div className='item' key={index}>
                          <h4>{ele}</h4>
                          <AiFillDelete className='delete-icon' onClick={()=>deleteItem(index)}/>                    
                        </div>
                    ))
                }
           </div>
            {
                items.length > 1 ? (
                <div>
                <div className='deleteAllBtn'>
                    <button onClick={()=>setItems([])}>Delete All</button>
                </div>
                </div>
            ) : null
            }
        </div>
        </>
    )
}

export default TodoApp