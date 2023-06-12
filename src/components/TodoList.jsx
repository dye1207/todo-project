import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function TodoList() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    function getTodos() {
        axios.get("http://localhost:4000/todos").then((res) => {
            setTodoList(res.data)
        }).catch(() => {
            setErrorMessage("Json-Server 켰나요? 확인해보세요.")
        })
    }

    useEffect(() => {
        getTodos();
    }, []);

    function onSubmit() {
        axios.post("http://localhost:4000/todos/" , {
            content: todo,
            checked: false
        }).then((res) => {
            toast.warn("일정 등록 완료");
            setTodoList(prevTodo => {return [...todoList, prevTodo, ]})
            // window.location.reload();
        })
    }
    
    function onDelete(id) {
        axios.delete("http://localhost:4000/todos/" +id).then(() => {
            window.location.reload();
        })
    }

    function handleCheck(event, id, content) {
        axios.put("http://localhost:4000/todos/" + id, {
            checked: event.target.checked,
            content: content
        }).then(() => {
            window.location.reload();
        })
    }
    return(
        <div>
            <h4 className="text-center">일정 관리 앱</h4>
            <hr />
            <div className="d-flex justify-content-between">
                <div className="flex-fill">
                    <input 
                        onChange={(event) => setTodo(event.target.value)}
                        value={todo}
                        className="form-control" 
                        placeholder="일정 등록 하세요"
                        // onKeyPress={handleKeyword} 
                    />
                </div>
                <button onClick={onSubmit} className="btn btn-primary ms-3">등록</button>
            </div>
            <hr />
            {errorMessage ? 
                <div className="text-danger h4 text-center">{errorMessage}</div> 
                : ""}
   <div>
                {todoList.map((item, index) => {
                    return(
                        <div className="card mt-2" key={index}>
                        <div className="card-body d-flex justify-content-between align-itmes-center">
                            <div className="flex-fill">
                                <input
                                checked={item.checked} // true, false의 값을 가짐
                                onChange={(event)=>handleCheck(event, item.id, item.content)}
                                className="form-check-input me-2"
                                type="checkbox"/>
                                <span style={{textDecoration: item.checked ? "line-through" : "",
                                        color: item.checked ? "gray" : "black"}}>
                                {item.content}
                            </span>
                            </div> 
                            <div className="d-flex">
                                <Link
                                to={"/todo/modify/" + item.id}
                                state={{
                                    id: item.id,
                                    content: item.content,
                                    checked: item.checked
                                }}
                                style={{width: "80px"}}
                                className="btn btn-success me-2">
                                    수정
                                </Link>
                                <button 
                                    style={{width: "70px"}}
                                    onClick={() => {onDelete(item.id)}} 
                                    className="btn btn-danger">삭제</button> 
                            </div>
                        </div>
                    </div>    
                    )
               })}
            </div>
        </div>
          
    )
}

export default TodoList;