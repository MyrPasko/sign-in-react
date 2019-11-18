import React, { PureComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

class Results extends PureComponent<Props> {
  render() {
    return (
      <div>Results component.</div>
    );
  }
}

export default Results;
