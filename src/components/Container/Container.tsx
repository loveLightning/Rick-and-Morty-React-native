import React from 'react';
import styled from 'styled-components/native';

type IContainer = {
  children: React.ReactNode;
};

export const Container: React.FC<IContainer> = props => {
  return <ContainerWrapper>{props.children}</ContainerWrapper>;
};

const ContainerWrapper = styled.View`
  margin-right: 15px;
  margin-left: 15px;
  flex: 1;
`;
