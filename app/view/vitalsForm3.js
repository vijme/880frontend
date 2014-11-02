Ext.define('PatientVitalsMonitoring.view.vitalsForm3', {
    extend: 'Ext.form.Panel',
    alias: 'widget.vitalForm3',

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
            xtype: 'fieldset',
            height: 88,
            width: '85%',
            layout: 'hbox',
            title: 'Do you have swelling?',
            items: [
                {
                    xtype: 'radiofield',
                    itemId: 'myradiobutton6',
                    width: '40%',
                    label: 'Yes',
                    labelAlign: 'right',
                    labelWidth: '40%',
                    name: 'rdSwelling'
                },
                {
                    xtype: 'radiofield',
                    width: '40%',
                    label: 'No',
                    labelAlign: 'right',
                    labelWidth: '40%',
                    name: 'rdSwelling'
                }
              ]
            },
            {
                xtype: 'textfield',
                width: '90%',
                id: 'txtWhere',
                style: 'display:none',
                label: 'Where :'
            },
            {
                xtype: 'selectfield',
                id: 'selFrequency',
                width: '90%',
                style: 'display:none',
                label: 'Frequency :',
                labelWidth: '40%',
                options: [
                     {
                       text: 'Select',
                        value: 'Select'
                    },
                    {
                        text: 'Increased',
                        value: 'Increased'
                    },
                    {
                        text: 'Same',
                        value: 'Same'
                    }
                ]
            },
            {
                xtype: 'button',
                width: 100,
                height: 40,
                docked: 'bottom',
                align: 'right',
                itemId: 'vitalButton3',
                text: 'NEXT'
            }
        ],
        listeners: [
        {
            fn: 'onMyradiobutton6Change',
            event: 'change',
            delegate: '#myradiobutton6'
        }
        ]
    },

    onMyradiobutton6Change: function(checkboxfield, newValue, oldValue, eOpts) {
                    if (newValue){
                        document.getElementById("txtWhere").style.display='block';
                        document.getElementById("selFrequency").style.display='block';
                    } else {
                        document.getElementById("txtWhere").style.display='none';
                        document.getElementById("selFrequency").style.display='none';
                    }
    }
});

