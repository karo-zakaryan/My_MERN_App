import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.defaultProps = {
  alerts: []
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = ({ alert }) => ({
  alerts: alert
});

export default connect(mapStateToProps)(Alert);
