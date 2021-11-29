sap.ui.define([
  'sap/m/Button',
  'sap/m/MessageToast'
], function(Button, MessageToast) {
  'use strict';
  
  new Button({
    text:"Say Hello",
    press : function(){
      MessageToast.show("Hello World")
    }
  }).placeAt("content");
});