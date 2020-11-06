import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchComment, deleteComment } from '../../actions';

class CommentDelete extends Component {
    componentDidMount() {
        this.props.fetchComment(this.props.match.params.id)
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteComment(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.comment) {
            return 'Are you sure you want to delete this comment?'
        }

        return `Are you sure you want to delete the following comment: ${this.props.comment.comment}`
    }

    render() {
        return (
            <Modal
                title="Delete Comment"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismis={() => history.push(`${this.props.comment.path}`)}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { comment: state.comments[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchComment, deleteComment })(CommentDelete);