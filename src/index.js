import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';

import ClickMe from './ClickMe';
import styles from './styles.css';

const ClickMeBug = CSSModules(ClickMe, styles);

class App extends React.Component {
  render() {
    return (
      <div>
        <ClickMe label="I'm ok" />
        <ClickMeBug label="Im causing rerender" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
