import React from "react";

import "./styles/main.less";
import "antd/dist/antd.less";

import GitHubFormContainer from "./containers/GithubFormContainer";
import GitHubListContainer from "./containers/GitHubListContainer";


const App = () => {
    return (
        <>
            <GitHubFormContainer />
            <GitHubListContainer />
        </>
    );
}

export default App;