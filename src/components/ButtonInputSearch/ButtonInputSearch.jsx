import React from "react";
import { Button, Input } from 'antd';
import { SearchOutlined } from "@ant-design/icons";

const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton } = props
    return (
        <div className="flex rounded-none relative border border-gray-300 w-full max-w-[680px]">
            <Input size={size} placeholder={placeholder} bordered={false} className="input-search rounded-none" />
            <Button size={size} bordered={false} icon={<SearchOutlined/>} className="button-search rounded-none">{textButton}</Button>
        </div>
    )
}

export default ButtonInputSearch