import { Link } from "react-router-dom";
import styled, { StyledComponent } from "styled-components";

const Container = styled.main`
  z-index: 1;
  display: flex;
  height: 100vh;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .loading-text {
    width: 600px;
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.8rem;
  }
`;

interface HorizontalProps {
  login: boolean;
}

const Horizontal = styled.form`
  width: 460px;
  padding: 12px;
  border-radius: 24px;
  background-color: ${(props: HorizontalProps) =>
    props.login ? "#343444" : "transparent"};
`;

const Title = styled.h2`
  padding: 0 12px;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 16px;
  text-align: center;
`;

type FormGroupProps = {
  flex?: boolean;
};

const Group = styled.div`
  width: 100%;
  padding: 12px;
  position: relative;
`;

type ControlProps = {
  active: boolean;
};

const Control = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  font-size: 1.4rem;
  border-radius: 6px;
  padding: 0 8px 0 40px;
  transition: border 0.2s;
  border: 2px solid transparent;

  & ~ label {
    svg {
      color: ${({ active }: ControlProps) => (active ? "#ff7bbd" : "#a8a8b3")};
    }
  }

  &:focus {
    border: 2px solid #ff7bbd;

    & ~ label {
      svg {
        color: #ff7bbd;
      }
    }
  }

  &::placeholder {
    color: #a8a8b3;
  }

  &:disabled {
    background-color: #ccc;
  }
`;

type LabelProps = {
  labelText: string;
};

const LabelFile = styled.label<LabelProps>`
  height: 45px;
  display: flex;
  border-radius: 7px;
  align-items: center;

  &::before {
    width: 35%;
    transition: all 0.2s;
    justify-content: center;
    background-color: #888888;
    border-radius: 6px 0 0 6px;
    content: "Escolher arquivo";
  }

  &::after {
    width: 65%;
    color: #000000;
    padding: 0 12px;
    background-color: #ffffff;
    border-radius: 0 6px 6px 0;
    content: "${(props) => props.labelText}";
  }

  &::after,
  &::before {
    height: 100%;
    display: flex;
    align-items: center;
  }

  &:hover {
    cursor: pointer;

    &::before {
      background-color: #666666;
    }
  }

  & ~ input {
    display: none;
  }
`;

const LabelIcon = styled.label`
  position: absolute;
  left: 16px;
  top: 18px;

  svg {
    color: #a8a8b3;
    font-size: 2rem;
  }
`;

const Submit = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  color: #ffffff;
  font-size: 1.4rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  background-color: #ff7bbd;

  &:hover {
    background-color: #dc4e95;
  }

  &:disabled {
    background-color: #ed6fae;
  }
`;

const Navigate = styled(Link)`
  width: 100%;
  color: #fff;
  display: block;
  margin-top: 12px;
  text-align: center;
  transition: color 0.2s;

  &:hover {
    color: #ccc;
  }
`;

const Select = styled.select`
  width: 100%;
  height: 45px;
  border: none;
  font-size: 1.4rem;
  border-radius: 6px;
  padding: 0 8px 0 40px;
  transition: border 0.2s;
  border: 2px solid transparent;
  color: ${(props: ControlProps) => (props.active ? "#000" : "#a8a8b3")};

  & ~ label {
    svg {
      color: ${(props: ControlProps) => (props.active ? "#ff7bbd" : "#a8a8b3")};
    }
  }

  &:focus {
    border: 2px solid #ff7bbd;

    & ~ label {
      svg {
        color: #ff7bbd;
      }
    }
  }

  &:disabled {
    background-color: #ccc;
  }
`;

type ToolTipProps = {
  left?: string;
  backgroundOpacity: boolean;
}

const ToolTip = styled.div`
  left: ${({ left }: ToolTipProps) => left};
  width: 120px;
  bottom: 130%;
  position: absolute;
  background-color: ${({ backgroundOpacity }: ToolTipProps) => backgroundOpacity ? "#ff7bbda8" : "#ff7bbd"};
  color: #fff;
  padding: 8px;
  border-radius: 6px;
  font-size: 1rem;
  text-align: center;
  transition: all 0.2s;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);

  &::before {
    left: 50%;
    content: "";
    bottom: -8px;
    position: absolute;
    transform: translateX(-50%) rotate(180deg);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #ff7bbda8;
  }
`;

const WrapperToolTip = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    ${ToolTip} {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

const WrapperTrade = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin: 0 12px;
    font-size: 1.6rem;
  }
`;

type MossStatusProps = {
  status: boolean;
};

const Trade = styled.button`
  width: 50px;
  height: 15px;
  border: none;
  border-radius: 24px;
  position: relative;

  &::before {
    top: -2px;
    left: ${({ status }: MossStatusProps) => (status ? "30px" : "0")};
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ff7bbd;
    position: absolute;
    transition: all 0.2s;
  }
`;

const StatusText = styled.span`
  color: #ff0000;
  font-weight: bold;
  font-size: 1.2rem;
`;

const MossStatus = styled.div`
  left: 24px;
  top: 122px;
  display: flex;
  padding: 12px;
  border-radius: 6px;
  position: absolute;
  align-items: center;
  background-color: #45455c;

  span {
    font-weight: 300;
    font-size: 1.2rem;
    margin: 0 0 0 6px;
    color: ${({ status }: MossStatusProps) => (status ? "#00ff00" : "#ff0000")};
  }
`;

const UpdateStatus = styled.button`
  border: none;
  display: flex;
  color: #ffffff;
  font-size: 1.2rem;
  align-items: center;
  background-color: transparent;
`;

const Info = styled.div`
  top: 22px;
  right: -28px;
  padding: 0 6px;
  color: #ffffff;
  font-size: 1.6rem;
  position: absolute;
`;

export default {
  Container,
  Horizontal,
  Title,
  Group,
  Control,
  Submit,
  LabelIcon,
  Navigate,
  Select,
  WrapperTrade,
  Trade,
  MossStatus,
  LabelFile,
  ToolTip,
  WrapperToolTip,
  UpdateStatus,
  StatusText,
  Info,
};
