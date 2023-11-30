import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';

export const Button = styled.button`
        height: 40px;
        transition: all 0.4s;
        font-size: 12px;
        position: relative;
        overflow: hidden;
        z-index: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        float: left;
        border-color: transparent;
        width: 120px;
        font-weight: 600;
       
        &:hover{
            cursor: pointer;
        }
        &.btn-primary {
            background-color: ${StyleConstants.COLOR_PRIMARY};
            color: ${StyleConstants.COLOR_WHITE };
            padding: 8px 10px;
            border-radius: 39px;
            &:hover {
                background-color: ${StyleConstants.COLOR_ACCENT_HOVER};
            }
        }
        &.btn-secondary-outline{
            padding: 8px 10px;
            border-radius: 8px;
            border: 1px solid  ${StyleConstants.COLOR_TEXT_BLACK};
            background-color: transparent;
            padding: 12px 20px;
            color: ${StyleConstants.COLOR_TEXT_BLACK};
        }
        &.btn-secondary{
            padding: 8px 10px;
            border-radius: 8px;
            border: transparent;
            background-color:  ${StyleConstants.COLOR_TEXT_BLACK};
            padding: 12px 20px;
            color: ${StyleConstants.COLOR_WHITE};
        }
  `;