import React, { Component } from "react";

import { withTranslation } from "react-i18next";

class ClassComponent extends Component {
  render() {
    const { t } = this.props;

    return <h6>{t("Approvals.ApprovalInformation")}</h6>;
  }
}
export default withTranslation("translations")(ClassComponent);
