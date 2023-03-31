import React, { useEffect, useState, useRef } from 'react';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyButton from '../components/UI/button/MyButton';
import { getPageCount } from '../utils/postPages';
import MyModal from '../components/UI/modal/MyModal';
import PostService from '../API/PostService';
import Loading from '../components/UI/loading/Loading';
import { useObserver } from '../hooks/useObserver';

function Posts() {
    const [filter, setFilter] = useState({sort:'', query:''}) // Filter option
    const [modal, setModal] = useState(false) // Active | non-Active modal window[createPost]
    const [posts, setPosts] = useState([]); // List of posts
    const SortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query); // Custom hook usePosts.js
    const [totalPages, setTotalPages] = useState(0);
    const [postLimit, setPostLimit] = useState(10);
    const [postPage, setPostPage] = useState(1);
    const lastElement = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching( async () =>{
        const response = await PostService.getAll(postLimit, postPage);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, postLimit))
    })

    useObserver(lastElement, postPage < totalPages, isPostsLoading, () => {
        setPostPage( postPage + 1 );
    })

    useEffect(() =>{
        fetchPosts();
    }, [postPage]);

    // Managing posts
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{color: 'black'}} onClick={() => setModal(true)}>
                Create Post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}> 
                <PostForm create={createPost} /> 
            </MyModal>
            <PostFilter 
                filter={filter} 
                setFilter={setFilter}
            />
            <hr style={{ width: '100%', margin: '40px 0' }}></hr>
            {postError &&
                <h1> Oop!: ${postError} </h1>
            }
            <PostList remove={removePost} posts={SortedAndSearchedPosts} title={'Some Posts'} />
            <div ref={lastElement}/>
            {isPostsLoading &&
                <Loading />
            }   
        </div>

  );
}

export default Posts;
