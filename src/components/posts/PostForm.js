import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostForm extends Component {
    renderError({ error, touched }) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="post" component={this.renderInput} label="What're you thinking?" />
                <button className="ui button primary">Share Post</button>
            </form>
        );
    }
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.post) {
        errors.post = 'You must enter a post'
    }

    return errors;
};

export default reduxForm({
    form: 'postForm',
    validate
})(PostForm);
