import styles from '../styles/Home.module.css'
import Header from "../components/header";
import Footer from "../components/footer";
import Layout from "../components/layout";
import {useState} from "react";
import {Table,Input,Button,Container,Row,Col,Card,CardBody,CardText,CardTitle,CardSubtitle,FormGroup,Form,Label} from "reactstrap";


function login(event){
    event.preventDefault();
    const email = document.getElementById("exampleEmail").value;
    const password = document.getElementById("examplePassword").value;
    if(email=="admin"&&password=="555"){
        alert("เข้าสู่ระบบแล้ว email->"+email+" | password->"+password);
    }else{
        alert("ผิดพลาด")
    }
}

function add(event){
    const email = document.getElementById("exampleEmail").value;
    const password = document.getElementById("examplePassword").value;
    document.getElementById("member").innerHTML += email+" | "+password+"<br/>";
}



const FormLogin =()=>{
    const [user,setUser] = useState([]);
    const addByState=()=>{
        const newEmail = document.getElementById("exampleEmail").value;
        const newPassword = document.getElementById("examplePassword").value;
        setUser([...user,{"email":newEmail,"password":newPassword}]);
    }
    return (
        <Form onSubmit={(e)=>{login(e)}} inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <strong id="member"></strong>
                    {
                        user.map((val,index)=>{
                            return(
                                <p key={index}>
                                    {val.email+" | "+val.password}
                                </p>
                            );
                        })
                    }
                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                <Input type="input" name="email" id="exampleEmail" placeholder="something@idk.cool" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
            </FormGroup>
            <br/>
            <Button className="btn btn-primary" type="submit">เข้าสู่ระบบ</Button>
            <Button className="btn btn-success" onClick={(e)=>{add(e)}} type="button">เพิ่ม</Button>
            <Button className="btn btn-success" onClick={(e)=>{addByState(e)}} type="button">เพิ่ม(State)</Button>
            <Button className="btn btn-warning" type="reset">ล้าง</Button>
        </Form>
    );
}

export default ()=>{
    return(
        <div>
        <Header userName="Thewin" />
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <Card style={{"color":"black","margin":5,"maxWidth":"500px"}}>
                            <CardBody style={{"textAlign":"left"}}>
                                <CardTitle tag="h5">Form login</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">โปรดเข้าสู่ระบบ</CardSubtitle>
                                <FormLogin/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <br/>
            </Container>
        </Layout>
        <Footer/>
        </div>      
    );
}