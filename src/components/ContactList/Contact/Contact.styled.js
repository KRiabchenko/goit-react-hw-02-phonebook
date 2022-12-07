import styled from '@emotion/styled';

export const ContactItem = styled.li`
  &:not(first-child) {
    margin-top: 10px;
  }
`;

export const DeleteButton = styled.button`
  width: 25%;
  display: inline-block;
  margin: 0 auto;
  margin-left: 5px;
  border: 1px solid black;
  border-radius: 5px;
`;
