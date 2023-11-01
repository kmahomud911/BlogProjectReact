import React from 'react'
import { Container } from '../components'
import {PostForm  as PostCardComponent} from "../components/index"

function Post() {
    return (
        <div className='py-8'>
            <Container>
                <PostCardComponent />
            </Container>
        </div>
    )
}

export default Post
