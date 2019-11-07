import React, { PureComponent } from 'react';
import Switch from '@material-ui/core/Switch';
import withStyles from "@material-ui/core/styles/withStyles";
import { purple } from "@material-ui/core/colors";

interface OwnProps {
}

interface OwnState {
  readonly checkedNormal: boolean;
  readonly checkedPurple: boolean;
}

type Props = OwnProps;

// type State = Readonly<{
//   checkedNormal: boolean;
//   checkedPurple: boolean;
// }>;

type State = OwnState;

const PurpleSwitch = withStyles({
  switchBase: {
    color: purple[300],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

class MaterialSwitch extends PureComponent<Props, State> {
  readonly state: State = {
    checkedNormal: true,
    checkedPurple: true,
  };

  handleChange = (name: string) => (event: { target: { checked: boolean }; }) => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  render() {
    const { checkedNormal, checkedPurple } = this.state;

    return (
      <div>
        <div>MaterialSwitch</div>
        <div>{checkedNormal ? "Checked normal" : "Not checked normal"}</div>
        <Switch
          checked={checkedNormal}
          onChange={this.handleChange('checkedNormal')}
        />
        <div>{checkedPurple ? "Checked purple" : "Not checked purple"}</div>
        <PurpleSwitch
          checked={checkedPurple}
          onChange={this.handleChange('checkedPurple')}
          disabled
        />
      </div>
    );
  }
}

export default MaterialSwitch;
