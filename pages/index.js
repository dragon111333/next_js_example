import styles from '../styles/Home.module.css'
import Header from "../components/header";
import Footer from "../components/footer";
import Layout from "../components/layout";
import {Button,Input,Row,Col} from "reactstrap";

import  { useState } from 'react';

function inputChange(event,setFullName){
  setFullName(event.target.value);
}
function changeNumber(setNumber,number,setTextColor){
  setNumber(number);
  if(number>0){
      setTextColor("white");
  }else if(number<=0){
      setTextColor("tomato");
  }
}

const TestProgram=(props)=>{
  const [number,setNumber] = useState(0);
  const [textColor,setTextColor] = useState("white");
  return (
      <Row>
          <Col>
              <h1 style={{"color":textColor}}>number : {number} </h1>
              <Button className="bg-danger" onClick={()=>{changeNumber(setNumber,number-1,setTextColor)}}>-</Button>
              <Button className="bg-success"  onClick={()=>{changeNumber(setNumber,number+1,setTextColor)}}>+</Button>

          </Col>
      </Row>
  );
}

export default ()=> {
  const [number, setNumber] = useState(0);
  const [fullName,setFullName] = useState("");
  return (
    <div style={{width:"80%",margin:"auto"}}>
          <Header userName="Thewin" />
          <Layout>
                <h3>number : {number}</h3>
                <h3>name : {fullName}</h3>
                <Input id="input_name" style={{width:"50%;"}} placeholder={"กรอกชื่อ"} onChange={(e)=>{inputChange(e,setFullName)}} />
                <Button className="btn-success" style={{width:"50%;"}} onClick={(e)=>{setNumber(number+1); }}>ยืนยัน</Button>
                <br/>
                <TestProgram/>
                <br/><br/>
          </Layout>
          <Footer/>
    </div>
  );
}


