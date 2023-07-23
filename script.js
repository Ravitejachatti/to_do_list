const text_value=document.getElementsByClassName("input_line");
const add_btn=document.getElementsByClassName("btn_add");
const tasklist=document.getElementsByClassName("main_list");


let editingTask = false;
let editInput = null;

function func(){

    const task_value=text_value.value;
    if(task_value){
        const list_item=document.createElement('li');
        list_item.classList.add('fade-in');
        const check_box=document.createElement('input');
        check_box.type='checkbox';
        const lable_item=document.createElement('label');
        lable_item.text=task_value;
    
    }


}
