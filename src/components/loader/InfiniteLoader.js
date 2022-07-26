import { ImSpinner2 } from "react-icons/im";

const InfiniteLoader = () => {
    return (
        <div className="loader">
            <span className="spin">
                <ImSpinner2 />
            </span>
        </div>
    )
}

export default InfiniteLoader;