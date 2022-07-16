import React, {useState} from 'react';
import './App.css';
import './Card/Card';
import Card from "./Card/Card";
import {cardItemItf, cardItemStatusEnm} from "./interface/template";
import Form from "./Form/form";
import Header from "./header/header";

function App() {

    const [todo,setTodo] = useState<cardItemItf[]>(new Array(1).fill(null)
        .map((item,index)=>(item)={
            title:`To do ${index}`,
            description:"correct fonction",
            status:cardItemStatusEnm.TODO}
        ));

    const [doing,setDoing] = useState<cardItemItf[]>(new Array(1).fill(null)
        .map((item,index)=>(item)={
            title:`Doing ${index}`,
            description:"Lorem ipsum",
            status:cardItemStatusEnm.DOING}
        ));
    const [done,setDone] = useState<cardItemItf[]>(new Array(0));
    const [method,setMethod]=useState<string>("add");
    const [newItem,setNewItem]=useState<cardItemItf>({title:"",description:"",status:cardItemStatusEnm.TODO});
    const [showForm,setShowForm]=useState<boolean>(false);
    let mod=showForm?"blurred":"";

  return (
      <div className={"App"}>
          <React.StrictMode>
              <Header setShowForm={setShowForm} setNewItem={setNewItem}/>
              <div className={"body "+mod}>
                <Card
                    setMethod={setMethod}
                    title={`TO DO`}
                    status={cardItemStatusEnm.TODO}
                    cardItems={todo}
                    setNewItem={setNewItem}
                    setShowForm={setShowForm}
                    id={0}
                />
                <Card
                    setMethod={setMethod}
                    title={"DOING"}
                    status={cardItemStatusEnm.DOING}
                    cardItems={doing}
                    setNewItem={setNewItem}
                    setShowForm={setShowForm}
                    id={1}
                />
                <Card
                    setMethod={setMethod}
                    title={"DONE"}
                    status={cardItemStatusEnm.DONE}
                    cardItems={done}
                    setNewItem={setNewItem}
                    setShowForm={setShowForm}
                    id={2}
                />
              </div>
          </React.StrictMode>
          {showForm&&
              <Form
                  method={method}
                  setShowForm={setShowForm}
                  newItem={newItem}
                  arraySetter={[setTodo,setDoing,setDone]}
            />}
      </div>
  );
}
export default App;
