import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid var(--lightGray);
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid var(--lightGray);
  background: white;
  padding: 1rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  border-left: 10px solid white;
  img {
    margin-right: 10px;
  }
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    background: #f7f7f7;
    padding-left: 2rem;
    border-left: 10px solid lightgrey;
  } ;
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 2rem;
    &.loading,
    &:focus {
      outline: none;
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
