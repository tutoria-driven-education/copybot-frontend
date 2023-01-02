import { Link } from "react-router-dom";
import styled, { StyledComponent } from "styled-components";

const Container = styled.main`
  display: flex;
  height: 100vh;
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
  width: 420px;
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

const Group = styled.div`
  padding: 12px;
  position: relative;
`;

interface ControlProps {
  active: boolean;
}

const Control: any = styled.input`
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

  &::placeholder {
    color: #a8a8b3;
  }

  &:disabled {
    background-color: #ccc;
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
};
