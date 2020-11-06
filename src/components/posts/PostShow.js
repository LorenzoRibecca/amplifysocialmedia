import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions';
import CommentShow from '../comments/CommentShow';

class PostShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        if (!this.props.post) {
            return <div>Loading...</div>;
        }

        const { post, userId } = this.props.post;

        return(
            <div>
                <div>
                    <h4>{userId}</h4>
                    <h1>{post}</h1>    
                </div>
                <div className="ui hidden divider"></div>
                <div>
                    <CommentShow />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { post: state.posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostShow);