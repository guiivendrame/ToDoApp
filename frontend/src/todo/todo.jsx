import React, { Component } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import Todolist from "./todolist";
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    handleAdd() {
        console.log('Add')
    }

    render() {
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm handleAdd={this.handleAdd}/>
                <Todolist />
            </div>
        )
    }
}
