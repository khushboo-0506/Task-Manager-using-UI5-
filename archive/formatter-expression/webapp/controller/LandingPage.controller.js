sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/m/MessageToast',
  'sap/ui/core/ValueState'
], function (Controller, MessageToast, ValueState) {
  'use strict';

  return Controller.extend("in.sijas.ui5.app.controller.LandingPage", {
    onInit: function () {

    },
    onPress: function () {
      var message = this.getView().getModel().getProperty("/message");
      MessageToast.show(message);
    },
    formatScoreState: function (iState) {
      if (iState > 80) {
        return ValueState.Success;
      } else if (iState > 60) {
        return ValueState.Warning;
      } else
        return ValueState.Error;
    },
    formatName : function(sFname, sLname){
      var i18nText = this.getOwnerComponent().getModel("i18n").getResourceBundle(),
        sReturnValue = i18nText.getText("combine_names",[sFname,sLname]);
        return sReturnValue;
    }
  });
});