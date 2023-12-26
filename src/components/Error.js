import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>oops!!! </h1>
            <h2>something went wrong😐</h2>
            <p>{error.status} : {error.data}.</p>

        </div>
    )
}

export default Error;