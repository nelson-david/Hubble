import { useState } from "react";
import Modal from "./Modal";


const Test = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
            />
            <button onClick={() => setShowModal(!showModal)}>
                Click Me
            </button>
        </div>
    )

}

export default Test;