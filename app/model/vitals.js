Ext.define('PatientVitalsMonitoring.model.vitals', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            { name: 'VitalDate',  type: 'string'  },
            { name: 'vital02Sat', type: 'string'  },
            { name: 'hearRate',  type: 'string' },
            { name: 'bloodPressure',  type: 'string' },
            { name: 'weight',  type: 'string' },
            { name: 'weightUnits',  type: 'string' },
            { name: 'sob',  type: 'string' },
            { name: 'sobHowLong',  type: 'string' },
            { name: 'sobUnit',  type: 'string' },
            { name: 'cough',  type: 'string' },
            { name: 'coughProductive',  type: 'string' },
            { name: 'coughColor',  type: 'string' },
            { name: 'swelling',  type: 'string' },
            { name: 'swellingWhere',  type: 'string' },
            { name: 'swellingFrequency',  type: 'string' },
            { name: 'oxygen',  type: 'string' },
            { name: 'oxygenNew',  type: 'string' },
            { name: 'oxygenQuantity',  type: 'string' },
            { name: 'oxygenHelping',  type: 'string' },
            { name: 'medicationDaily',  type: 'string' }
        ],//fields
        proxy:{
            type: 'localstorage',  id: 'vitalsModel'
        }
    }//config
});//define