import {TextItem} from './styles';
import {Props} from './typings';
import React from 'react';

const Text: React.FC<Props> = ({
  children,
  ...props
}) => (
  <TextItem {...props}>{children}</TextItem>
);

export default Text;
