class todo{
    
    constructor(title,discreption,project){

        this.title = title;
        this.discreption = discreption;
        this.status = false;
        this.project = project;
    }
    get title(){
        return this._title;
    }
    get discreption(){
        return this._discreption;
    }
    get status(){
        return this._status;
    }
    get project(){
        return this._project;
    }
    set project(value){
        this._project = value;
    }
    set title(value){
        this._title = value;
    }
    set discreption(value){
        this._discreption = value;
    }
    set status(value){
        this._status = value;
    }
}
class project{
    
    constructor(todo_list = [],title){
        this.title = title ; 
        this.todo_list = todo_list;
      
    }
    get title(){
        return this._title;
    }
    set title(value){
        this._title = value;
    }
    
    
    set todo_list(value){
        this._todo_list = value
    }
    get todo_list(){
        return this._todo_list;
    }

    append_todo_list(item){
        todo_list.push(item);
    }
}
function add_todo(){
 
    const title = document.querySelector('#input_title').value;
    const discreption = document.querySelector('#input_discreption').value;

    const todo_item = new todo(title,discreption);
    
    
    todo_list.push(todo_item);
    console.log(todo_list)
}
function acordion(){
    const main = document.querySelector('#main_div');
    main.innerHTML = ``;
    // we can rest the entier main or we can only add the last element
    for(let i = 0 ; i < todo_list.length ; i++){
       //let div = 
       let div = document.createElement('div');
       div.innerHTML=
       `<div class="accordion-item">
          <h2 class="accordion-header" id="todo_title_${i}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#todo_discreption_${i}" aria-expanded="false" aria-controls="todo_discreption_${i}">
              ${todo_list[i].title}   
            </button>
          </h2>
          <div id="todo_discreption_${i}" class="accordion-collapse collapse" aria-labelledby="todo_title_${i}"
            data-bs-parent="#main_div">
            <div class="accordion-body">${todo_list[i].discreption}
            </div>
          </div>
        </div>`;
        
        main.append(div);
    }

    
  }

document.addEventListener('DOMContentLoaded', function() {
    
    const submit_todo = document.querySelector('#submit_todo');
    submit_todo.addEventListener('click', ()=>{
        add_todo();
        acordion();
    });
    const submit_project = document.querySelector('#submit_project');
    submit_project.addEventListener('click',()=>{
           
        add_project();
        listProjects();
    })
    const defultProject = new project([],"Defult");
    project_list.push(defultProject);
    listProjects();
    
});
let todo_list = [];
let project_list = [];
function add_project(){
    const title = document.querySelector('#input_project').value;
    const newProject = new project([],title);
    project_list.push(newProject);
    console.log(project_list)
}
function listProjects(){
    const ul = document.querySelector('#ulProject');
    ul.innerHTML = ''
    for(let i = 0 ; i < project_list.length ; i++){
        let li = document.createElement('li');
        let button = createProjectButton(project_list[i].title);
        li.append(button);
        ul.append(li);
    }
    
}
function createProjectButton(projectName){
   
    const button = document.createElement('button');
    button.className = "btn btn-primary";
    button.style.margin = "3px";
    button.textContent = projectName;
    return button;

}
function listTodo(){}