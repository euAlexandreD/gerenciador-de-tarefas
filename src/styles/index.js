import styled from "styled-components";
import { FaRegTrashAlt, FaRocket } from "react-icons/fa";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const BoxInformations = styled.section`
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 20px;

    ul{
        padding: none;
        margin-top: 60px;
    }
`

export const InputButton = styled.div`
    display: flex;
`

export const Input = styled.input`
    width: 342px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #D1D3D466;
    background: #D1D3D466;
    padding: 10px;
    gap: 10px;
    margin-right: 10px;
`

export const Button = styled.button`
    width: 130px;
    height: 40px;
    top: 30px;
    left: 390px;
    padding: 10px, 0px, 10px, 0px;
    border-radius: 5px;
    background-color: #8052EC;
    border: none;
    color: white;
    font-size: 17px;
    line-height: 2px;
    cursor: pointer;
    transition: ease-in-out 0.5s;

    &:hover {
        opacity: 0.8;
        transform: scale(1.1);
    }

    &:active{
        opacity: 0.6;
    }
`

export const Icons = styled.div`
    display: flex;
    margin-top: 20px;
    box-shadow: 1px 4px 10px 0px rgba(0,0,0,0.2);
    background: ${ props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
    height: 60px;
    width: 500px;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    li{
        list-style: none;
    }
`

export const Trash = styled(FaRegTrashAlt)`
    cursor: pointer;
`

export const Rocket = styled(FaRocket)`
    cursor: pointer;
`