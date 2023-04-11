import React from "react";
import {Tab, Tabs} from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

export default function TabsManager({tabs}) {

	return (
		<>
			<Tabs
				variant="fullWidth"
				value={value}
				onChange={handleChange}
				aria-label="icon label tabs example">
				<Tab icon={<PhoneAndroidIcon />} label="Alpha" />
				<Tab icon={<PhoneAndroidIcon />} label="Beta" />
				<Tab icon={<PhoneAndroidIcon />} label="Gamma" />
			</Tabs>
		</>
  );
}
