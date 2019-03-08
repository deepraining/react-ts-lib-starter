import * as React from 'react';

export interface WelcomeProps {
  name: string;
}

export default class Welcome extends React.Component<WelcomeProps> {
  render() {
    const { name } = this.props;

    return <p className="starter-welcome">Welcome, {name}!</p>;
  }
}
