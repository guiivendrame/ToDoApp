import React, { Component } from "react";
import axios from 'axios'

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import Todolist from "./todolist";

const url = 'http://localhost:3003/api/todos';
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { description: '', list: [] }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    handleAdd() {
        const description = this.state.description;
        axios.post(url, { description })
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    render() {
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm description={this.state.description} handleAdd={this.handleAdd}
                handleChange={this.handleChange} />
                <Todolist />
            </div>
        )
    }
}
