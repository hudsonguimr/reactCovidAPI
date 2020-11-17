import React from 'react';
import Covid from '../pages/Dashboard/index'

import { Switch, Route} from 'react-router-dom';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Covid} />

    </Switch>
)

export default Routes;