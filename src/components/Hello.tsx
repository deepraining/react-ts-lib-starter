import * as React from 'react';

export interface HelloProps {
  name: string;
}

export default class Hello extends React.Component<HelloProps> {
  render() {
    const { name } = this.props;

    return <p className="starter-hello">Hello, {name}!</p>;
  }
}
