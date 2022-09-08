import React, { Component } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import Todolist from "./todolist";
export default class Todo extends Component {
    render() {
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm />
                <Todolist />
            </div>
        )
    }
}
