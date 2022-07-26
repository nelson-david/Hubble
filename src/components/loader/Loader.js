import { ImSpinner8 } from "react-icons/im";

const Loader = ({loadingStyle, failed}) => {
    return (
        <div className="loader">
        {
                failed===false?
                <>
                {
                    loadingStyle==="basic"?
                    <p className="spin">
                        <ImSpinner8 />
                    </p>:''
                }
                </>
                :
                <div className="failed">
                    <h4>
                        Loading Failed
                    </h4>
                </div>
        }
        </div>
    )
}

export default Loader;