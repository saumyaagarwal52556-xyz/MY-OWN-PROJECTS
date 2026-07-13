import { useState } from "react";
import Navbar from "./Navbar";


const Button = () => {
    let [isopen, setIsopen] = useState(false);

    return (
        <>
            <button onClick={() => {
                setIsopen(prev => !prev)
            }
            }>
                click me
            </button>

            {isopen && <Navbar />}
        </>)
}

export default Button;