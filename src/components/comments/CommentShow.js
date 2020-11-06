import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchComments } from '../../actions';
import CommentCreate from './CommentCreate';

class CommentShow extends Component {
    componentDidMount() {
        this.props.fetchComments();
    }

    renderAdmin(comment) {
        if (comment.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/comments/edit/${comment.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/comments/delete/${comment.id}`} className="ui button negative">Delete</Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.comments.map(comment => {
            if (comment.path === window.location.pathname) {
                return (
                    <div className="item" key={`1.${comment.id}`}>
                        {this.renderAdmin(comment)}
                        <i className="large middle aligned icon camera" />
                        <div className="content">
                            <Link to={`${comment.path}`}>
                                <p>{comment.userId}</p>
                                {comment.comment}
                            </Link>
                        </div>
                    </div>
                );
            } else {
                return null;
            }
        });
    }            
    
    renderCreate() {
        if(this.props.isSignedIn) {
            return (
                <div>
                    <CommentCreate />
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h3>Comments</h3>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: Object.values(state.comments),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchComments })(CommentShow);