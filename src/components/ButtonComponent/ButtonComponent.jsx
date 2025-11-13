import React from "react";
import { Button } from 'antd';

const ButtonComponent = ({size, styleButton, styleTextButton, textButton, className, ...rests}) => {

    return (
        <div className="block">
            <Button 
                size={size}
                className={className}
                style={styleButton}
            >
                <span style={styleTextButton}>{textButton}</span>
            </Button>
        </div>
    )
}

export default ButtonComponent