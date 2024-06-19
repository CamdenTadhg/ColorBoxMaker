import react, {useState} from "react";
import './BoxList.css';
import NewBoxForm from './NewBoxForm.jsx';
import Box from './Box.jsx';
import {v4 as uuid} from 'uuid';

const BoxList = () => {
    const INITIAL_STATE = [
        {id: uuid(), color: 'blueviolet' , width: 18, height: 21},
        {id: uuid(), color: 'darkmagenta', width: 17, height: 17},
        {id: uuid(), color: 'darkorchid', width: 28, height: 23}
    ]
    const [boxList, setBoxList] = useState(INITIAL_STATE);

    const addBox = (color, width, height) =>{
        const boxListCopy = boxList.map(box => ({...box}))
        boxListCopy.push({id:uuid(), color, width, height});
        setBoxList(boxListCopy);
    };

    const deleteBox = (id) => {
        const newBoxList = boxList.filter((box) => box.id !== id);
        setBoxList(newBoxList);
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox}/>
            {boxList.map(b => (
                <Box key={b.id} color={b.color} width={b.width} height={b.height} deleteBox={() => deleteBox(b.id)}/>
            ))}
        </div>
    )
}

export default BoxList;