import React from "react";
import { useParams } from "react-router";
import { Box } from "grommet";
import { getUserQsUrl } from "../../utils/profileUtils";
import PageWrapper from "../hoc/PageWrapper";
import User from "./User";
import UserTags from "./UserTags";
import Questions from "../questions/Questions";

const Profile = () => {
	const { userId } = useParams();

	return (
		<PageWrapper>
			<Box gap="medium">
				<User userId={userId} />
				<UserTags userId={userId} />
				<Questions url={getUserQsUrl(userId)} isUser />
			</Box>
		</PageWrapper>
	);
};

export default Profile;
