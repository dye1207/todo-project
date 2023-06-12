import { Link } from "react-router-dom";
import figureGif from "../components/gif/dong.gif"

function Home({title, author, date, content}) {
    return(
        <div className="justify-content-center text-center mt-3">
            <h2 className="pretty-font fw-bold">도영</h2>
            <hr />
            <figure>
                <blockquote className="blockquote">
                    <p className="h6 fw-bold">
                   프론트엔드 개발자를 공부하고 있습니다. <br/>
                    경력은 금융권이지만, IT 분야의 중요성을 느껴 공부를 하고 있습니다. </p>

                </blockquote>
                <figcaption className="blockquote-footer">
                    <cite title="Source Title" className="h6 fw-bild">
                    2023.3~2023.8
                    </cite>
                </figcaption>
            </figure>
            <img src={figureGif} alt="main" />
            <h5></h5>
            <hr />
               <Link to="/todo" className="link-sucess h5 fw-bold">일정 작성 하러 이동하기</Link>
            </div>
    ) 
}

export default Home;