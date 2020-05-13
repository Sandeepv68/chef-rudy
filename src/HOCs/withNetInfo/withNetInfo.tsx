/**
 * Import React
 */
import React from "react";

/**
 * Import react-native components
 */
import NetInfo from "@react-native-community/netinfo";
import { Platform, ToastAndroid } from "react-native";

function withNetInfo(WrappedComponent: any) {
  return class withNetInfo extends React.Component {
    constructor(props: any) {
      super(props);
      this.state = { netInfo: {} };
    }

    componentDidMount() {
      return this._getNetInfo();
    }

    _getNetInfo = () => {
      return Platform.OS === "android"
        ? NetInfo.addEventListener((state) => {
            !state.isConnected
              ? ToastAndroid.show("Network connectivity lost", ToastAndroid.SHORT)
              : null;
            this.setState({
              netInfo: state,
            });
          })
        : null;
    };

    render() {
      return (
        <WrappedComponent {...this.props} netInfo={this.state.netInfo}>
          {this.props.children}
        </WrappedComponent>
      );
    }
  };
}

export default withNetInfo;
