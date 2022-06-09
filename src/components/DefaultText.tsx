import React from 'react'
import styled from 'styled-components/native'

type IDefaultText = {
    children: React.ReactNode
}

export const DefaultText: React.FC<IDefaultText> = (props) => {
    return (
        <DefaultDesc>{props.children}</DefaultDesc>
    )
}

const DefaultDesc = styled.Text`
    font-size: 17px;
    font-family: roboto;
    font-weight: 400;
    color: #081F32;
`