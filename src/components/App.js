import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PostCreate from './posts/PostCreate';
import PostEdit from './posts/PostEdit';
import PostDelete from './posts/PostDelete';
import PostList from './posts/PostList';
import PostShow from './posts/PostShow';
import CommentDelete from './comments/CommentDelete';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={PostList} />
                        <Route exact path="/posts/new" component={PostCreate} />
                        <Route exact path="/posts/edit/:id" component={PostEdit} />
                        <Route exact path="/posts/delete/:id" component={PostDelete} />
                        <Route exact path="/posts/:id" component={PostShow} />
                        <Route exact path="/comments/delete/:id" component={CommentDelete} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;