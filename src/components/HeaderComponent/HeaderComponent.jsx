import React from "react";
import UserIcon from "../../assets/icons/UserIcon";
import CartIcon from "../../assets/icons/CartIcon";
import { Col } from 'antd';
import { WrapperHeader, LogoImage, WrapperHeaderIcon, WrapperHeaderAccount, WrapperHeaderCart } from './style';
import { CaretDownOutlined } from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import TypeProduct from "../TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";

const HeaderComponent = () => {
  const arr = ['TV', 'Tu Lạnh', 'Laptop']
  return (
    <div>
      <header className="main-header">
        <WrapperHeader className="page-width">
          <Col lg={{ span: 6 }} md={{ span: 4 }} xs={{ span: 12 }}><LogoImage src="/Avira-logo.png" alt="Logo" /></Col>
          <Col lg={{ span: 12 }} md={{ span: 10 }} className="hidden md:flex justify-center">
            <ButtonInputSearch 
              size="large"
              placeholder="Input search text"
              textButton="Tìm kiếm"
            />
          </Col>
          <Col lg={{ span: 6 }} md={{ span: 10 }} xs={{ span: 12 }}>
            <WrapperHeaderIcon>
              <WrapperHeaderAccount>
                <UserIcon size={20} stroke="#000" />
                <div className="hidden md:block">
                  <div>Đăng nhập/ Đăng Ký</div>
                  <div>
                    <span>Tài khoản</span>
                    <CaretDownOutlined />
                  </div>
                </div>
              </WrapperHeaderAccount>
              <WrapperHeaderCart>
                <CartIcon size={24} fill="#000" />
                <span className="hidden">Giỏ hàng</span>
              </WrapperHeaderCart>
            </WrapperHeaderIcon>
          </Col>
        </WrapperHeader>
        <div className="page-width">
          <WrapperTypeProduct className="pb-4">
            {arr.map((item) => {
              return (
                <TypeProduct name={item} key={item}/>
              )
            })}
          </WrapperTypeProduct>
        </div>
      </header>
    </div>
  )
}

export default HeaderComponent