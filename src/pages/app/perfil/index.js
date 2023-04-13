import {Fragment} from "react";
import ProfileCard from "@components/ProfileCard";
import ButtonProfile from "@components/ButtonProfile";
import useGetAPI from "@hooks/useGetAPI";
import ButtonsFamiliars from "@components/ButtonsFamiliars";
import {Box} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

export default function Index() {
    const {data: usersInfo, isLoading: usersIsLoading} = useGetAPI('/api/services/users');
    return(
        <Fragment>
            <ProfileCard/>
            <Card style={{marginTop:"15px"}}>
                <h4 style={{textAlign:"center"}}>Miembros de tu familia</h4>
                <CardContent>
                    <Box sx={{mb: 1, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        {usersInfo && <ButtonsFamiliars users={usersInfo}/>}
                        <ButtonProfile/>
                    </Box>
                </CardContent>
            </Card>
        </Fragment>
    )
}
