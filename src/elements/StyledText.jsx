import styled from "styled-components";

export const StyledText = styled.span`
    font-weight: bold;
    position: relative;
    color: red;
    line-height: 1.3em;
    display: inline-block;
    &::after{
        position: absolute;
        content: '';
        width: 100%;
        height: 3px;
        background-color: currentColor;
        left: 0;
        top: 1.2em;
    }
`