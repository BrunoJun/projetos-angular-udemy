import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList: Array<TaskList> = [{task: "Apenas teste", checked: false}]

  public deleteItemTaskList(event: number) {

    this.taskList.splice(event, 1)
  }

  public deleteTaskList() {

    const confirm = window.confirm("Você deseja apagar todas as tarefas?")

    if (confirm){

      this.taskList = []
    }
  }

}
