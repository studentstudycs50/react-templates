import React, {Component} from 'react'
import Form from '../shared/Form/Form'
import Input from '../shared/Input/Input'
import Select from '../shared/Select/Select';
import { outlay } from '../../utils/selectOptions';


export default class App extends Component {

    state = {
        date: Date.now(),
        time: '',
        outlay: '',
        category: '',
        sum: '',
    };

    onHandleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <Form>
                <Input
                    title="День"
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.onHandleChange}
                />

                <Input
                    title="Время"
                    type="time"
                    name="time"
                    value={this.state.time}
                    onChange={this.onHandleChange}
                />

                <Select
                    sets={outlay}
                    //value={this.state.category}
                    onChange={this.onHandleChange} />
                 <Input
                    title="Сумма"
                    type="number"
                    name="sum"
                    placeholder="Введите сумму"
                    value={this.state.sum}
                    onChange={this.onHandleChange}
                />

            </Form>
        )
    }
}



