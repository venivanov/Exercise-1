/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/exercise1/Exercise1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});