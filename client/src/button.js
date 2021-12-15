import { useState } from "react";

export default function Text()
{
    const [text, setText] = useState(0);
}
return(
    <div>
        <button onClick={()=> setText(text)}>click on</button>
        <h2>{text ? "amaizing": ""}</h2>
    </div>
)