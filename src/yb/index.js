/**
 * Created by zengtao on 2017/5/19.
 */
import React, {Fragment, useEffect , useState } from 'react';


let defaultProps={}

export default function Index(prop) {
    const [count, setCount] = useState(0);

    let props={
        ...defaultProps,...prop
    }
    const {} = props;

    useEffect(() => {

        return ()=>{
        }
    },[]);



    return (
        <div>

        </div>
    );
}
