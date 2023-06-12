import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TodoModify() {
    const navigate = useNavigate();
    const location = useLocation();
    const [beforeContent, setBeforeContent] = useState(location.state.content);
    const [beforeState, setBeforeState] = useState(location.state.checked);
    const beforeId = location.state.id;
    function onUpdate(){
        axios.put("http://localhost:4000/todos/" + beforeId,{
            content: beforeContent,
            checked: beforeState
        }).then(() => {
            navigate("/todo")
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <h4> 수정 페이지 </h4>
            <hr />
            <div className="form-group">
                <div>
                    <label className="form-label">상태</label>
                    <div>
                        <button
                            onClick={() => setBeforeState(!beforeState)}
                            className={beforeState ? "btn btn-primary btn-lg" : "btn btn-danger btn-lg"}
                        >
                            {beforeState ? "완료" : "미완료"}
                        </button>
                    </div>
                </div>
                <div className="mt-2">
                    <label className="form-label">내용</label>
                    <textarea 
                        onChange={(event) => {setBeforeContent(event.target.value)}}
                        className="form-control" 
                        value={beforeContent}>

                    </textarea>
                </div>
                <div className="mt-2">
                    <button onClick={onUpdate} className="btn btn-success">수정</button>
                    <button onClick={() => navigate("/todo")} className="btn btn-danger ms-2">취소</button>
                </div>
            </div>
        </div>
    )
}

export default TodoModify;