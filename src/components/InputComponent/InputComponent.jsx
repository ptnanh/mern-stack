import React from "react";
import { Input } from 'antd';

const InputComponent = ({size, placeholder, bordered, style, className, ...rests}) => {

    return (
        <div className="flex rounded-none relative border border-gray-300 w-full max-w-[680px]">
            <Input 
                size={size} 
                placeholder={placeholder} 
                bordered={bordered}
                style={style}
                className={className}
                {...rests}
            />
        </div>
    )
}

export default InputComponent