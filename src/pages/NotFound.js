import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notfound__card fixed-top">
            <div>
                <h1>404</h1>
                <p>
                    <span>Page Not Found</span>
                    <Link to="/">
                        Go Home
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default NotFound;