sap.ui.define([
	"sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel){
	"use strict";
	return Controller.extend("com.exercise1.Exercise1.controller.View1", {
		onInit: function () {
			var data = {
				recipient : {
					name : "World"
				}
			};
			var model = new JSONModel (data);
			this.getView().setModel(model);
		},
		onShowHello : function () {
			MessageToast.show("Hello World!");
		}
	});
});