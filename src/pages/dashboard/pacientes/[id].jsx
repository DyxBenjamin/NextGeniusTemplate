import React, {useState} from 'react';
import {useRouter} from "next/router";
import {Avatar, Box, Tab, Tabs, Typography} from "@mui/material";
import _ from "lodash";
import PlaceholderUsers from "@data/PlaceholderUsers";
import Nav from "@pages/dashboard/components/Nav";
import ProfileTab from "@pages/dashboard/pacientes/components/ProfileTab";
import PlansTab from "@pages/dashboard/pacientes/components/PlansTab";
import DocumentsTab from "@pages/dashboard/pacientes/components/DocumentsTab";
import PublicationsTab from "@pages/dashboard/pacientes/components/PublicationsTab";
import FeedbackTab from "@pages/dashboard/pacientes/components/FeedbackTab";


const TabsEnum = {
	Plans: 'Plans',
	Profile: 'Profile',
	Documents: 'Documents',
	Publications: 'Publications',
	Feedback: 'Feedback',
}

export default function id() {
	const router = useRouter();
	const {id} = router.query;

	const [tabSelected, setTabSelected] = useState(TabsEnum.Plans);

	const user = _.filter(PlaceholderUsers, {id: parseInt(id)})[0];
	const {profile} = user || {};

	const handleChangeTab = (_event, newValue) => {
		setTabSelected(newValue);
	}

	return (
		<Nav>
			<Box sx={{ padding:'2rem', width:'100%' }} >
				<Box sx={{ display:'flex', gap:'30px', alignItems:'center', justifyContent:'flex-start' }} >
					<Avatar/>
					<Typography variant={'h5'} >
						{`${profile?.name} ${profile?.lastName}`}
					</Typography>
				</Box>
				<Box sx={{margin:'30px 0' }}  >
					<Tabs value={tabSelected}  onChange={handleChangeTab} >
						<Tab label="Planes" value={TabsEnum.Plans} />
						<Tab label="Perfil" value={TabsEnum.Profile} />
						<Tab label="Documentos" value={TabsEnum.Documents} />
						<Tab label="Publicaciones" value={TabsEnum.Publications} />
						<Tab label="Feedback" value={TabsEnum.Feedback} />
					</Tabs>
				</Box>
				{tabSelected === TabsEnum.Plans && <PlansTab user={user} />}
				{tabSelected === TabsEnum.Profile && <ProfileTab user={user} />}
				{tabSelected === TabsEnum.Documents && <DocumentsTab user={user} />}
				{tabSelected === TabsEnum.Publications && <PublicationsTab user={user} />}
				{tabSelected === TabsEnum.Feedback && <FeedbackTab user={user} />}
			</Box>
		</Nav>
	)
}
