Ext.define('PatientVitalsMonitoring.model.login', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            { name: 'Name',  type: 'string'  },
            { name: 'HospID', type: 'string'  },
            { name: 'Passwd',  type: 'string' }
        ],//fields
        proxy:{
            type: 'localstorage',  id: 'SenchaLogin'
        }, //proxy
        validations: [
            {   field: 'Name', type: 'presence', message: 'First Name is required'},
            {   field: 'HospID', type: 'presence', message: 'Hospital ID is required'},
            {   field: 'Passwd', type: 'presence', message: 'Password is required'  },
            {   field: 'Name', type: 'length', max: 30,   min: 1 , message:
                     'username should be between 1 to 10 characters'  },
            {   field: 'Passwd', type: 'length', max: 10,   min: 4 , message:
                     'Passwd should be between 4 to 10 characters' }
        ]//validations
    }//config
});//define