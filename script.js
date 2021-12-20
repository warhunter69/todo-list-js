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
        this._todo_list.push(item);
        console.log('aaa',this._todo_list);
    }
}
function add_todo(){
 
    const title = document.querySelector('#input_title').value;
    const discreption = document.querySelector('#input_discreption').value;

    const todo_item = new todo(title,discreption);
    const radioButtons = document.querySelectorAll('input[name="projectButton"]');
    //console.log(radioButtons)
    let selectedValue;
            for (const rb of radioButtons) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            //alert(selectedValue);
            //console.log(selectedValue)

    const project = project_list.find(o => o.title === selectedValue);
    project.append_todo_list(todo_item);
    //console.log(project)        

    
    todo_list.push(todo_item);

    //console.log(todo_list);
    console.log(project_list);
}
function acordion(){

    const main = document.querySelector('#main_div');
    main.innerHTML = ``;
    const radioButtons = document.querySelectorAll('input[name="projectButton"]');
    //console.log(radioButtons)
    let selectedValue;
            for (const rb of radioButtons) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            //alert(selectedValue);
            //console.log(selectedValue)

    const project = project_list.find(o => o.title === selectedValue);
    // we can rest the entier main or we can only add the last element
    for(let i = 0 ; i < project.todo_list.length ; i++){
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
    const defultProject = new project([],"Defult");
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
    project_list.push(defultProject);
    listProjects();
    document.getElementById("Defult").checked = true;
    
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
        let button = createProjectButton(project_list[i]);
        let label = createLable(project_list[i]);
        li.append(button);
        li.append(label)
        ul.append(li);

    }
    
}
function createProjectButton(project){
   
    const button = document.createElement('input');
    button.className = "btn-check";
    button.style.margin = "3px";
    button.textContent = project.title;
    button.setAttribute("name","projectButton");
    button.setAttribute("type","radio");
    button.setAttribute("value",project.title);
    button.id = project.title;
    button.addEventListener('click',()=>{
        acordion();
    });
    return button;

}
function listTodo(project){


}
function createLable(project){

    const lable = document.createElement('label');
    lable.className = "btn btn-primary";
    lable.textContent = project.title;
    lable.setAttribute("for",project.title);
    return lable;

}