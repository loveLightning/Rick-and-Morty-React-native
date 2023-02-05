import styled from 'styled-components/native'

export const InfoDesc = styled.Text`
  padding-bottom: 7px;
  font-size: 15px;
  font-family: ${({ theme }) => theme.roboto400};
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.grey[4]};
`

export const InfoText = styled.Text`
  color: ${({ theme }) => theme.light_black};
  letter-spacing: -0.41px;
  font-family: ${({ theme }) => theme.roboto900};
  font-size: 17px;
  padding-top: 7px;
`

export const InformationLine = styled.View`
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-width: 1px;
`

export const Title = styled.Text`
  margin-top: 20px;
  letter-spacing: 0.38px;
  color: ${({ theme }) => theme.grey[4]};
  font-family: ${({ theme }) => theme.roboto700};
  font-size: 20px;
  padding-left: 15px;
  margin-bottom: 10px;
`
