class todo{
    
    constructor(title,discreption){

        this.title = title;
        this.discreption = discreption;
        this.status = false;

    }
    get_title(){
        return this._title;
    }
    get_discreption(){
        return this._discreption;
    }
    get_status(){
        return this._status;
    }
    set_title(title){
        this.title = title;
    }
    set_discreption(){
        this.discreption = discreption;
    }
    set_status(){
        this.status = true;
    }
}
class groups{
    
    constructor(){
        const todo_list = [];

    }

}
function add_todo(){

    const title = document.querySelector('#input_title').value;
    const discreption = document.querySelector('#input_discreption').value;

    const todo_item = new todo(title,discreption);

    
    todo_list.push(todo_item);

}
function acordion(){
    const main = document.querySelector('#main_div');
    for(let i = 0 ; i < todo_list.length() ; i++){
       let div = 
       `<div class="accordion-item">
          <h2 class="accordion-header" id="todo_title_${i}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              ${todo_list[i].get_title()}
            </button>
          </h2>
          <div id="todo_discreption_${i}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">${todo_list[i].get_discreption()}
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
