import {reactive, toRefs} from "vue";


//local 스토리지에 값을 저장하고 불러오는 역할 담당
/*
- localStorage.getItem(key)  : 값 불러오기
- localStorage.setItem(key , value) : 값 저장하기
  => localStorage 는 값 저장을 String으로 밖에 못함 => json으로 저장함

- reactive : 객체에 반응성을 더해주는 함수
- toRefs : 객체의 내부 속성들 모두에게 반응성을 더해주는 함수


*/
export const userStorage = () => {

    const KEY = 'my-todo-list';


    const storage_obj = reactive({storage_id:0})  //reactive : 객체에 반응성을 더해주는 함수


    //데이터 불러오는 함수
    const loadTodos = (initTodos) => {
        let temp_todos = JSON.parse(localStorage.getItem(KEY) || []) ;  //파이프 의미가 무엇??
        temp_todos.forEach((todo , idx)=> {
            todo.id = idx;
        })

        storage_obj.storage_id = temp_todos.length;  //storage_id 에 배열의 길이 저장
        initTodos(temp_todos); //todos.value 에 temp_todos 저장하는 함수
    }

    const saveTodos = (todos) => {
        localStorage.setItem(KEY , JSON.stringify(todos.value));
    }

    return {
        ...toRefs(storage_obj),  //toRefs : 객체의 내부 속성들 모두에게 반응성을 더해주는 함수  //...의미 : 값만 불러옴
        loadTodos,
        saveTodos,

    }

}