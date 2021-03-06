import {cardItemItf, cardItemStatusEnm} from "../interface/template";
import React, {Dispatch, SetStateAction} from "react";

const Header : React.FC<{
    setShowForm: Dispatch<SetStateAction<boolean>>,
    setNewItem:Dispatch<SetStateAction<cardItemItf>>
}> =(props)=>{
    const {setNewItem, setShowForm} = props;
    return(
        <header>
            <div className="header">
                <h2>TypeScript To Do</h2>
            </div>

            <div>
                <button onClick={()=> {
                    setShowForm(true);
                    setNewItem({title:"",description:"",status:cardItemStatusEnm.TODO});
                }} id={"top__btn"}>Add Task</button>
            </div>
            <hr/>
        </header>
    )
}
export default Header;