import React from 'react'
import { Wrapper } from './styles';

export const Contenitore = ({child}) => {
    return (
        <Wrapper>
            {child}
        </Wrapper>
    )
};