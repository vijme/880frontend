Ext.define('PatientVitalsMonitoring.view.vitalsForm1', {
    extend: 'Ext.form.Panel',
    alias: 'widget.vitalForm1',

    requires: [
        'Ext.form.Panel',
        'Ext.Label',
        'Ext.field.Select',
        'Ext.form.FieldSet',
        'Ext.field.Radio'
    ],

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
                label: 'Date',
                labelWidth: '40%',
                component:{type: 'date'}
            },
            {
                xtype: 'textfield',
                width: '90%',
                label: 'O2 Sat :',
                labelWidth: '40%'
            },
            {
                xtype: 'textfield',
                width: '90%',
                label: 'Heart Rate :',
                labelWidth: '40%'
            },
            {
                xtype: 'textfield',
                width: '90%',
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
                        label: 'Weight :',
                        labelWidth: '50%'
                        },
                        {
                        xtype: 'radiofield',
                        itemId: 'myradiobutton',
                        width: '40%',
                        label: 'Kgs',
                        labelAlign: 'right',
                        labelWidth: '',
                        name: 'rdWeight'
                        },
                        {
                        xtype: 'radiofield',
                        width: '40%',
                        label: 'Lbs',
                        labelAlign: 'right',
                        labelWidth: '',
                        name: 'rdWeight'
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