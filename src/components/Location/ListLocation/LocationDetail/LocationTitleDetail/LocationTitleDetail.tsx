import React from 'react'
import styled from "styled-components/native"
import { IrouteLocation } from "../../../location.type"

export const LocationTitleDetail: React.FC<{ route: IrouteLocation }> = ({ route }) => {
    return (
        <>
            <Wrapper>
                <PlanerType>{route.params.location.type}</PlanerType>
                <PlanetName>{route.params.location.name}</PlanetName>
                <Replacement>Replacement Dimension</Replacement>
            </Wrapper>
            <TextResidents>Residents</TextResidents>
        </>

    )
}

const Wrapper = styled.View`
    background: #F2F2F7;
    width: 100%;
`

const PlanerType = styled.Text`
    padding-top: 20px;
    color: #6E798C;
    letter-spacing: 0.07px;
    text-align: center;
    font-weight: 400;
    font-size: 11px;
`

const PlanetName = styled.Text`
    text-align: center;
    color: #081F32;
    letter-spacing: 0.337647px;
    font-weight: 700;
    font-size: 28px;
`

const Replacement = styled.Text`
    text-align: center;
    color: #8E8E93;
    letter-spacing: -0.08px;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 13px;
    padding-bottom: 20px;
`

const TextResidents = styled.Text`
    padding-top: 20px;
    color: #8E8E93;
    letter-spacing: 0.38px;
    font-weight: 700;
    font-size: 20px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
`