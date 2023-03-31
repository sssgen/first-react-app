import axios from "axios";

export default class PostService{
    static async getAll(limit = 10, page = 1){
            let response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params:{
                    _limit: limit,
                    _page: page
                }
            });
            // replace object's KEY 'body' to 'description'
            response = JSON.parse(JSON.stringify(response).replaceAll('"body"', '"description"'));
            return response
    }
    static async getPostById(id){
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        // replace object's KEY 'body' to 'description'
        response = JSON.parse(JSON.stringify(response).replaceAll('"body"', '"description"'));
        return response
    }
    static async getCommentsById(id){
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        // replace object's KEY 'body' to 'description'
        response = JSON.parse(JSON.stringify(response).replaceAll('"body"', '"description"'));
        return response
    }
}