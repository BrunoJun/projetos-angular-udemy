import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{

  public taskList: Array<TaskList> = []
  
  ngDoCheck(): void {

    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))  
  }

  public deleteItemTaskList(event: number) {

    this.taskList.splice(event, 1)
  }

  public deleteTaskList() {

    const confirm = window.confirm("Você deseja apagar todas as tarefas?")

    if (confirm){

      this.taskList = []
    }
  }

  public setEmitTaskList(event: string){

    this.taskList.push({task: event, checked: false})
  }

  public validationInput(event: string, index: number){

    if (!event.length){

      const confirm = window.confirm("Tarefa vazia, deseja apagar?")

      if (confirm){

        this.deleteItemTaskList(index)
      }
    }
  }
}
