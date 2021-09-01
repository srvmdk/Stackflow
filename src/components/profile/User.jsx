import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Button, Grid, Image, Heading, Text } from "grommet";
import { Location, Link } from "grommet-icons";
import { GOLD, SILVER, BRONZE } from "../../constants/constants";
import { fetchData } from "../../utils/common";
import {
	getUserInfoUrl,
	userInfoParams,
	initUser,
} from "../../utils/profileUtils";
import locale from "../../i18N/en-US";

const User = (props) => {
	const { userId } = props;

	const [user, setUser] = useState(initUser);

	useEffect(async () => {
		const res = await fetchData(getUserInfoUrl(userId), userInfoParams);
		if (res?.status === 200) {
			const {
				display_name: name,
				profile_image: imageUrl,
				link,
				location,
				reputation,
				badge_counts: badges,
			} = res.data.items[0];
			setUser({ name, imageUrl, link, location, reputation, badges });
		}
	}, []);

	const getProfileImage = () => (
		<Box gap="small" pad="xsmall" border>
			<Box height="small" width="small">
				<Image src={user.imageUrl} alt={userId} fit="cover" />
			</Box>
			<Box direction="row" alignSelf="center" align="end" gap="small">
				<Text size="small">{locale.profile.reputation}</Text>
				<Text size="medium">{user.reputation ?? "--"}</Text>
			</Box>
		</Box>
	);

	const getBadges = () => {
		const capitalize = (str) =>
			typeof str === "string" && str[0].toUpperCase() + str.slice(1);

		return (
			<Box direction="row" gap="medium" margin={{ top: "small" }}>
				{[GOLD, SILVER, BRONZE].map((el) => (
					<Box key={el} direction="row" gap="xsmall" align="end">
						<Text size="small">{capitalize(el)}</Text>
						<Text size="xxlarge">{user.badges[el] ?? "--"}</Text>
					</Box>
				))}
			</Box>
		);
	};

	const getProfileInfo = () => (
		<Box gap="small">
			<Heading level={2} margin={{ vertical: "small" }}>
				{user.name ?? `User ${userId}`}
			</Heading>

			<Button
				plain
				icon={<Location />}
				label={<Text size="small">{user.location ?? "--"}</Text>}
				alignSelf="start"
				size="small"
			/>

			<Button
				plain
				icon={<Link />}
				label={<Text size="small">{user.link ?? "--"}</Text>}
				href={user.link}
				target="_blank"
				alignSelf="start"
				size="small"
			/>

			{getBadges()}
		</Box>
	);

	return (

			<Box width="large" margin={{ top: "medium", bottom: "xsmall" }}>
				<Grid rows="small" columns={["small", "medium"]} gap="large">
					{getProfileImage()}
					{getProfileInfo()}
				</Grid>
			</Box>

	);
};

User.propTypes = {
	userId: PropTypes.any.isRequired,
};

export default User;
