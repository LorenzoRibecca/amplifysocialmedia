import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions';
import PostForm from './PostForm';

class PostCreate extends Component {
    onSubmit = (formValue) => {
        this.props.createPost(formValue);
    }

    render() {
        return (
            <div>
                <h3>Create a Post</h3>
                <PostForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};

export default connect(null, { createPost })(PostCreate);