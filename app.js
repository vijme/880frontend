/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

    requires: [
        'Ext.MessageBox'
    ],
    views: [
        'MainView',
        'LoginForm',
        'RegisterForm',
        'vitalsForm1',
        'vitalsForm2',
        'vitalsForm3',
        'vitalsForm4',
        'vitalsForm5'
    ],
    controllers: [
        'Account',
        'Vitals'
    ],
    models: [
        'login'
    ],
    stores: [
        'loginStore'
    ],
    name: 'PatientVitalsMonitoring',

    launch: function() {
        Ext.create('PatientVitalsMonitoring.model.login');
        Ext.create('PatientVitalsMonitoring.model.vitals');
        Ext.create('PatientVitalsMonitoring.view.MainView', {fullscreen: true});
    }

});
