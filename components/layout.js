const layoutStyle = {
            background:"gray"
            ,color:"white"
            ,width:"100%"
        }

const Layout =(prop)=>{
    return(
        <div style={layoutStyle}>
            <br/>
            <center>
                {prop.children}
            </center>
        </div>
    );   
}

export default Layout;