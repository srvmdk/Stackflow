import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grommet } from "grommet";
import theme from "./grommet.config.json";
import { featureQsUrl } from "./utils/questionUtils";
import LoginForm from "./components/loginForm/LoginForm";
import Questions from "./components/questions/Questions";
import Profile from "./components/profile/Profile";
import PageWrapper from "./components/hoc/PageWrapper";
import Page404 from "./components/Page404";
import ErrorBoundary from "./components/hoc/ErrorBoundary";

function App() {
	return (
		<ErrorBoundary>
			<Grommet theme={theme} full className="App">
				<Switch>
					<Route exact path="/" component={LoginForm} />
					<Route
						exact
						path="/featured"
						render={(routeProps) => (
							<PageWrapper>
								<Questions {...routeProps} url={featureQsUrl} />
							</PageWrapper>
						)}
					/>
					<Route exact path="/user/:userId" component={Profile} />
					<Route component={Page404} />
				</Switch>
			</Grommet>
		</ErrorBoundary>
	);
}

export default App;
