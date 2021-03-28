import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const SectionView = styled.View`
    display: flex;
    flex-direction: column;
    /* Posição na horizontal */
    align-items: center;
    /* Posição na vertical */
    justify-content: center;

    /* Jeito errado de fazer */
    /* background-color: ${colors.backgroundDark}; */

    /*Este é o melhor jeito*/
    /* background-color: ${props => props.theme.colors.backgroundDark}; */

    /* Mais pode ser assim tbm */
    background-color: ${(theme) => colors.backgroundDark};

    width: 100%;
    height: 100%;
    
`;

export const SectionImage = styled.Image`
    height: 150px;
    width: 150px;
`;

export const SectionText = styled.Text`
    color: white;
    font-size: 18px;
    font-family: serif;
`;