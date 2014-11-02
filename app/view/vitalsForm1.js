Ext.define('PatientVitalsMonitoring.view.vitalsForm1', {
    extend: 'Ext.form.Panel',
    alias: 'widget.vitalsForm1',

    requires: [
        'Ext.form.Panel',
        'Ext.Label',
        'Ext.field.Select',
        'Ext.form.FieldSet',
        'Ext.field.Radio'
    ],
    id : 'vitalsForm1',
    xtype: 'vitalsForm1',
    config: {
        fullscreen: true,
        height: 522,
        items: [
            {
                xtype: 'label',
                height: 50,
                html: 'Vital Signs',
                style: 'font-weight:bold;font-size:24px',
                styleHtmlContent: true
            },
            {
                xtype: 'textfield',
                width: '90%',
                id: 'txtVitalsday',
                name: 'txtVitalsday',
                label: 'Date',
                labelWidth: '40%',
                component:{type: 'date'}
            },
            {
                xtype: 'textfield',
                width: '90%',
                id: 'txtVitalsDate',
                name: 'txtVitalsDate',
                label: 'O2 Sat :',
                labelWidth: '40%'
            },
            {
                xtype: 'textfield',
                width: '90%',
                id: 'txtHeartRate',
                name: 'txtHeartRate',
                label: 'Heart Rate :',
                labelWidth: '40%'
            },
            {
                xtype: 'textfield',
                width: '90%',
                id: 'txtBloodPressure',
                name: 'txtBloodPressure',
                label: 'Blood Pressure :',
                labelWidth: '40%'
            },
            {
                xtype: 'fieldset',
                height: 130,
                width: '85%',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'textfield',
                        width: '70%',
                        id: 'txtWeight',
                        name: 'txtWeight',
                        label: 'Weight :',
                        labelWidth: '50%'
                        },
                        {
                        xtype: 'radiofield',
                        width: '40%',
                        label: 'Kgs',
                        labelAlign: 'right',
                        labelWidth: '',
                        id:'Kgs',
                        checked: 'false',
                        value: 'kgs',
                        name: 'rdWeight',
                        
                        },
                        {
                        xtype: 'radiofield',
                        width: '40%',
                        label: 'Lbs',
                        labelAlign: 'right',
                        labelWidth: '',
                        value: 'LBS',
                        id:'LBS',
                        checked: 'false',
                        name: 'rdWeight',
                        
                        }
                    ]
                },
                {
                xtype: 'button',
                width: 100,
                height: 40,
                docked: 'bottom',
                align: 'right',
                itemId: 'vitalButton1',
                text: 'NEXT'
                }
            ]
        }
    
    });