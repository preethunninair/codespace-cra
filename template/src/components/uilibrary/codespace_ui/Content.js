import React from "react";
import { connect } from "react-redux";
const mapState = (state) => ({
  rounded: state.templateConfig.config.rounded,
});
class Content extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="app-main">
        <div
          className="scroller"
          ref="mainPanel"
          data-rounded={this.props.contentDivRounded}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default connect(mapState)(Content);
