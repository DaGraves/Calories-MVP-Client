import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, isTrimmed} from '../validators';
import {saveDay} from '../actions/dailyLogs';

export class DayForm extends React.Component {
    
    onSubmit(values) {
        console.log(this.props);
        const {meal1, meal2, meal3, snack} = values;
        this.props.dispatch(saveDay(values));
        return this.props.history.push("/dashboard");
    }
    
    render() {
        console.log(this.props.values);
        return(
            <form className="day-form"
            onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                    
            )}>
                        <legend class="form-title">Log Meals</legend>
            <fieldset>
                <div className="general-inputs">
                    <div className="field-container">
                        <label htmlFor="date">Date:</label>
                        <Field component={Input} type="date" name="date"
                        validate={[required, nonEmpty, isTrimmed]}/>
                    </div>
                    <div className="field-container">
                        <label htmlFor="meal1">1st Meal:</label>
                        <Field
                            component={Input}
                            type="text"
                            name="meal1"
                            validate={[required, nonEmpty, isTrimmed]} />
                    </div>
                    <div className="field-container">
                        <label htmlFor="meal1">2nd Meal:</label>
                        <Field
                            component={Input}
                            type="text"
                            name="meal2"
                            validate={[required, nonEmpty, isTrimmed]} />
                    </div>
                    <div className="field-container">
                        <label htmlFor="meal3">3rd Meal:</label>
                        <Field
                            component={Input}
                            type="text"
                            name="meal3"
                            validate={[required, nonEmpty, isTrimmed]} />
                    </div>
                    <div className="field-container">
                        <label htmlFor="snack">Snacks/Other:</label>
                        <Field
                            component={Input}
                            type="text"
                            name="snack"
                            validate={[required, nonEmpty, isTrimmed]} />
                    </div>
                </div>
                <div className="submit-btn-box">
                    <button
                        className="submit-btn"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Submit
                    </button>
                </div>
            </fieldset>
            </form>
        );
    }
}

export default reduxForm({
    form: 'dayForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('date','meal1', 'meal2', 'meal3', 'snack'))
})(DayForm);



