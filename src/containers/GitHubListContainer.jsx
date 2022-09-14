import React from "react";
import { useDispatch, useSelector } from "react-redux";

import GitHubList from "../components/GitHubList";
import GithubService from "../services/GitHubService";
import { storeResults } from '../redux/GitHubSlice';

const GitHubListContainer = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.gitHub);

    const fetchMoreData = async () => {
        const response = await GithubService.getRepositories(data.query, data.category, data.page + 1);

        dispatch(storeResults({
            list: [...data.list, ...response.data.items],
            category: data.category,
            query: data.query,
            page: data.page + 1
        }))
    }

    return (
        <GitHubList data={data} fetchMoreData={fetchMoreData}/>
    );
}

export default GitHubListContainer;