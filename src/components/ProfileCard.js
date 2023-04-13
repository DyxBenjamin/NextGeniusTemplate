import React from "react"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Avatar} from "@mui/material";

export default function ProfileCard() {
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
                    <p style={{margin:"auto", marginTop:"3vh"}}>User Name</p>
                </div>
            </CardContent>
        </Card>
    )
}
