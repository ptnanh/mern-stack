import { Row} from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding-block: 16px;
    background-color: #fff;
    align-items: center;
    flex-wrap: nowrap;

    @media (max-width: 1280px) {
        padding-block: 10px;
    }

    @media (max-width: 749px) {
        padding-block: 8px;
    }
`;

export const LogoImage = styled.img`
    height: 50px;
    width: auto;
    object-fit: contain;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #000;
    font-size: 12px;
`;

export const WrapperHeaderCart = styled.div`
    color: #000;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const WrapperHeaderIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;
`;

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: center;
`;