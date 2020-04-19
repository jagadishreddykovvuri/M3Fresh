import styled from "styled-components";

import Input from "../Input";

export const ProductsContainer = styled.div`
  display: grid;
  grid-gap: 3%;
  grid-template-columns: repeat(auto-fit, minmax(160px, 180px));
  justify-content: center;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(130px, 160px));
  }
`;

export const StyledInput = styled(Input)`
  position: sticky;
  top: 95px;
  width: 300px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  padding: 10px;
  padding-top: 85px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const GoToCart = styled.button`
  background: #178e1c;
  position: fixed;
  padding: 14px 16px;
  font-size: 15px;
  bottom: 0px;
  width: 100%;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: 0px 1px 5px #d7e6d0;
  :hover {
    background-color: #156e1b;
  }
`;

export const LoaderContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
`