class todo{
    
    constructor(title,discreption){

        this.title = title;
        this.discreption = discreption;
        this.status = false;

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
    
    constructor(todo_list = []){
        this.todo_list = todo_list;

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
    
    const submit_button = document.querySelector('#submit_todo');
    submit_button.addEventListener('click', ()=>{
        add_todo();
        acordion();
    });
 
   
});
let todo_list = [];
let project_list = [];