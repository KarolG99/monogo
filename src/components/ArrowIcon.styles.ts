import styled from "styled-components";
import {ReactComponent as Arrow} from '../assets/icons/arrow.svg';

export const ArrowIcon = styled(Arrow)`
    fill: ${({ theme }) => theme.colors.secondary};
    width: 20px;
    height: 20px;
`;