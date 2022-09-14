import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import GithubService from '../services/GitHubService';
import GitHubForm from "../components/GitHubForm";
import { storeResults, clearResults } from '../redux/GitHubSlice';

const GitHubFormContainer = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState("users");
    const [query, setQuery] = useState("");

    const onSearchCategory = (value) => {
        setCategory(value);
    }

    const onSearchHandle = (e) => {
        e.persist();
        setQuery(e.target.value);
    }

    const apiCall = async () => {
        const response = await GithubService.getRepositories(query, category, 1);
        dispatch(storeResults({
            list: response.data.items,
            category: category,
            query: query,
            page: 1
        }));
    }

    useEffect(() => {
        if(query.length >= 3) {
            apiCall();
        }

        if(query.length < 3) {
            dispatch(clearResults());
        }
    }, [query, category]);

    return (
        <GitHubForm searchHandle={onSearchHandle} categoryHandle={onSearchCategory} data={{category, query}}/>
    );
}

export default GitHubFormContainer;