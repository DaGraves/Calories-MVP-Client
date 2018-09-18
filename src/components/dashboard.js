import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {Link, Redirect} from 'react-router-dom';
import {fetchProtectedData} from '../actions/protected-data';
import {retrieveDailyLogs, getDailyLogs, removeDay} from '../actions/dailyLogs';
import Card from './card';

import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(retrieveDailyLogs())
        .then(results => {
            return this.props.dispatch(getDailyLogs(results));
        })
    }

getId(id) {
    console.log('test');
    this.props.dispatch(removeDay(id))
    this.props.dispatch(retrieveDailyLogs())
    .then(results => {
        return this.props.dispatch(getDailyLogs(results));
    });
}


    render() {
        if (this.props.loggedOut) {
            return <Redirect to="/dashboard" />;
        }
        const dailyLogs = this.props.meals && this.props.meals.map((day, index) => 
        <li className="card" key={index}>
            <Card handleClick={(id) => this.getId(id)} {...day} />
        </li>
        )
        return (
            <section className="dashboard-container">
                <div className="dashboard-title">
                <h1>Dashboard</h1>
                </div>
                <Link className="log-day-btn" to="/dailylogs">Log Meals</Link>
                <ul className="meal-list">
                {dailyLogs}
                </ul>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    meals: state.dailyLogsReducer.dailyLogs,
      loggedOut: state.auth.currentUser === null
});

export default requiresLogin()(connect(mapStateToProps)(Dashboard));