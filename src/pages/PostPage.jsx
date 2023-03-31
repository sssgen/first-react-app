import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService'
import Loading from '../components/UI/loading/Loading';

const PostPage = () => {
    let params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching( async() => {
        const response = await PostService.getPostById(params.id);
        setPost(response.data);
    })
    const [fetchCommentsById, commentsIsLoading, commentsError] = useFetching( async() => {
        const response = await PostService.getCommentsById(params.id);
        setComments(response.data);
    })

    useEffect(() =>{
        fetchPostById();    
    }, [])
    useEffect(() =>{
        fetchCommentsById();    
    }, [])

    return (
        <div className='container'>
            <h1>Post №{params.id}</h1>
            {isLoading 
                ? <Loading />
                : <div>
                    {post.title}
                    <br />
                    <br />
                    {post.description}
                </div>
            }
            <h2>Comments</h2>
            <hr style={{margin: 5}}></hr>
            {commentsIsLoading
                ? <Loading />
                : <div>
                    {comments.map(comm => 
                        <div key={comm.id}>
                            <h5>{comm.email}</h5>
                            <h5 style={{margin: 5}}>{comm.description}</h5>
                        </div>    
                    )}
                </div>
            }
        </div>
    );
};

export default PostPage;