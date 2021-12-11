sap.ui.define([
  'sap/ui/core/mvc/XMLView'
], function(XMLView) {
  'use strict';
  
  XMLView.create({viewName:"in.sijas.ui5.app.LandingPage"}).then(function(oView){
    oView.placeAt("content");
  })
});