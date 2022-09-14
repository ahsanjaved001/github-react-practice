import axios from 'axios';

class GithubService {
    static async getRepositories(query, category, page) {
        return await axios.get(
            `https://api.github.com/search/${category}?q=${query}&page=${page}&per_page=100`
        );
    }
}
export default GithubService;