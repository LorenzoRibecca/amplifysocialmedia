import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../actions';
import CommentForm from './CommentForm';

class CommentCreate extends Component {
    onSubmit = (formValue) => {
        this.props.createComment(window.location.pathname, formValue);
    }

    render() {
        return (
            <div>
                <CommentForm onSubmit={this.onSubmit} />
            </div>
        )
    }
};


export default connect(null, { createComment })(CommentCreate)