import styled from '@emotion/styled';

export const ButtonStyles = styled.button` 

    background-color: #3f51b5;
    border: 0;
    border-radius: 2px;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    min-width: 180px;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    transition: all .25s cubic-bezier(.4,0,.2,1);

&:hover,
&: focus {
  background-color: #303f9f;
}
`

