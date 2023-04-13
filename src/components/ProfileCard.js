import React, {useState} from "react"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Avatar, Button} from "@mui/material";
import EdicionDatos from "@components/EdicionDatos";

export default function ProfileCard() {
    const [openCreateRecipeModal, setOpenCreateRecipeModal] = useState(false);
    const switchCreateRecipeModal = () => {
        setOpenCreateRecipeModal(!openCreateRecipeModal);
    }
    return (
        <Card sx={{
            minWidth: 275,
            maxWidth: "90%",
            margin: "auto",
            marginTop: "20px",
            marginBottom: "10px",
            backgroundColor: "#CDCDCD"
        }}>
            <CardContent>
                <div style={{display: "flex"}}>
                    <Avatar style={{margin:"auto", width:"30%", height:"30%"}} alt="Remy Sharp" src="https://m.media-amazon.com/images/I/51VXgNZFIoL.jpg" />
                </div>
                <div style={{display:"flex"}}>
                    <p style={{margin:"auto", marginTop:"3vh"}}>Cosme Fulanito</p>
                </div>
                <div style={{display:"flex", marginTop:"10px"}}>
                    <Button onClick={switchCreateRecipeModal} variant="solid" style={{backgroundColor:"#12A76C", margin:"auto"}}>Editar datos</Button>
                    <EdicionDatos open={openCreateRecipeModal} handleClose={switchCreateRecipeModal} data={'test'} />
                </div>
            </CardContent>
        </Card>
    )
}
