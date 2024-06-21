import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Test = ({ num }) => {
    const [stat, useStat] = useState(num);
    // useEffect(() => {
    //     useStat(num);
    // }, [num]);
    return (
        <div>
            <p>props:{num}</p>
            <p>state:{stat}</p>
        </div>
    );
};

export default Test;
