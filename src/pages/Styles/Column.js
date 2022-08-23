import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) =>
    props.flexDirection ? "column" : "initial"};
`;

export const ColumnStyles = styled.div`
  width: 100%;
  padding: 18px;
  overflow: hidden;

  .title {
    padding: 8px;
    font-weight: bold;
    font-size: 1.2rem;
    color: #000;
    border-radius: 8px;
    text-align: center;
    background-color: #ff7bbd;
  }

  @media screen and (min-width: 992px) {
    width: 50%;
  }
`;

export const Code = styled.div`
  width: 100%;
  height: 78vh;
  padding: 12px;
  border-radius: 8px;
  line-height: 1.4rem;
  overflow-y: scroll;
  color: #fff !important;
  border: 2px #ccc solid;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #494949;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
  }

  &::-webkit-scrollbar-corner {
    display: none;
  }
`;