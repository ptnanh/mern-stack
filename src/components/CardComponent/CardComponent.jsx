import React from 'react';
import { Card } from 'antd';

const CardComponent = () => {
  return (
    <Card
        hoverable
        style={{ width: 240 }}
        bodyStyle={{padding: '10px' }}
        cover={
        <img
            draggable={false}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
        }
    >
    </Card>
  )
}

export default CardComponent