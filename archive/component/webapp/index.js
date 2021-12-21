sap.ui.define([
  "sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
  'use strict';
  
  new ComponentContainer({
    name : "in.sijas.ui5.app",
    settings : {
      id : "demo"
    },
    async : true
  }).placeAt("content");
});