import {useParams} from "react-router-dom";

function UserPage() {
    const { userId } = useParams();
    return (
        <h1>Страница конкретного пользователя {userId}</h1>
    )
}

export default UserPage;
