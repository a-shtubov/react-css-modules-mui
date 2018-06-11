import * as React from 'react';
import CSSModules from 'react-css-modules';
import Button from '@material-ui/core/Button';

class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.renderCount = 0;
  }
  render() {
    const { label } = this.props;

    this.renderCount++;

    return (
      <div>
        <div>render count: {this.renderCount}</div>
        <Button variant="raised" color="primary">
          {label}
        </Button>
      </div>
    );
  }
}

export default ClickMe;
