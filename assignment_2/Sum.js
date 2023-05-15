import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sum = () => {
    const params = useParams();
    const result = parseInt(params.num1) + parseInt(params.num2);
    return(
        <div>
            <h1> SUM Page </h1>
            <p> { params.num1 } + { params.num2 } = {result} </p>
            <p></p>
            <Link to="/"> Home으로 돌아가기 </Link>
        </div>
    );
}

export default Sum;