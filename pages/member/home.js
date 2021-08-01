import styles from '../../styles/Home.module.css'
import Header from "../../components/header";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import {useEffect,useState} from "react";
import {Table,Input,Button,Container,Row,Col,Card,CardBody,CardText,CardTitle} from "reactstrap";
import axios from 'axios';

export default (props)=>{
    const [dataTable,setDataTable] = useState([]);

    const addMember = async ()=>{
        let d = document;
        let sendDAta = {
                            "fname":d.getElementById("newName").value,
                            "lname":d.getElementById("newLName").value,
                            "email":d.getElementById("newEmail").value,
                            "tel": d.getElementById("newTel").value,
                            "password":d.getElementById("newPassword").value
                        };
        let res = await axios({
            method: 'post',
            url: "http://localhost:3000/api/member",
            headers: { 'Content-Type': 'application/json'},
            data :JSON.stringify(sendDAta)
          });
        setDataTable(res.data);
    }

    const delMember=async (id)=>{
        let res = await axios({
            method: 'post',
            url: "http://localhost:3000/api/del_member",
            headers: { 'Content-Type': 'application/json'},
            data :JSON.stringify({"id":id})
          });
        setDataTable(res.data)
    }
    useEffect(async ()=>{
            let res = await axios.get("http://localhost:3000/api/member");
            setDataTable(res.data);
    },[]);

    return (
        <div style={{width:"80%",margin:"auto"}}>
          <Header userName="Thewin" />
          <Layout>
                <Container>
                    <Row>
                        <Col xs="12">
                                <Card body style={{"color":"black"}}>
                                    <CardTitle tag="h5" >รายชื่อสามชิก</CardTitle>
                                    <CardText>รายชื่อสามชิกทั้งหมด</CardText>
                                    <Table striped>
                                        <thead>
                                            <tr>
                                            <th>ID</th>
                                            <th>ชื่อ</th>
                                            <th>นามสกุล</th>
                                            <th>อีเมล</th>
                                            <th>รหัสผ่าน</th>
                                            <th>เบอร์</th>
                                            </tr>
                                        </thead>
                                        {dataTable.map((val,index)=>{
                                            return (
                                                <tr key={index}>
                                                    <td>{val.id}</td>
                                                    <td>{val.fname}</td>
                                                    <td>{val.lname}</td>
                                                    <td>{val.email}</td>
                                                    <td>{val.password}</td>
                                                    <td>{val.tel}</td>
                                                    <td><Button className="bg-warning w-100" >แก้ไข</Button></td>
                                                    <td><Button className="bg-danger w-100" onClick={()=>{delMember(val.id)}}>ลบ</Button></td>
                                                </tr>
                                            );
                                        })}
                                    <tr>
                                        <td></td>
                                        <td><Input type="input" id="newName" placeholder="ชื่อ" /></td>
                                        <td><Input type="input" id="newLName" placeholder="นามสกุล" /></td>
                                        <td><Input type="input" id="newEmail" placeholder="อีเมล" /></td>
                                        <td><Input type="password" id="newPassword" placeholder="รหัสผ่าน" /></td>
                                        <td><Input type="input" id="newTel" placeholder="เบอร์โทร" /></td>
                                        <td colspan="3"><Button className="bg-success w-100" onClick={()=>{addMember()}}>เพิ่ม</Button></td>
                                    </tr>
                                    </Table>    
                                </Card>
                            <br/><br/>
                        </Col>
                    </Row>
                    <br/>
                </Container>
          </Layout>
          <Footer/>
        </div>
    );
}