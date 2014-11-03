Ext.define('PatientVitalsMonitoring.view.vitalsForm4', {
    extend: 'Ext.form.Panel',
    alias: 'widget.vitalsForm4',

    requires: [
        'Ext.form.Panel',
        'Ext.Label',
        'Ext.field.Select',
        'Ext.form.FieldSet',
        'Ext.field.Radio'
    ],
    id : 'vitalsForm4',
    xtype: 'vitalsForm4',
    config: {
        fullscreen: true,
        height: 522,
        items: [
            {
                xtype: 'fieldset',
                width: '90%',
                layout: 'hbox',
                title: 'Are you using oxygen ?',
                items: [
                    {
                        xtype: 'radiofield',
                        itemId: 'myradiobutton4',
                        width: '40%',
                        label: 'Yes',
                        labelAlign: 'right',
                        labelWidth: '40%',
                        name: 'rdOxygen',
                        value: 'Yes'
                    },
                    {
                        xtype: 'radiofield',
                        height: 43,
                        width: '40%',
                        label: 'No',
                        labelAlign: 'right',
                        labelWidth: '40%',
                        name: 'rdOxygen',
                        value: 'No'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                id: 'fsOxygenNew',
                name: 'fsOxygenNew',
                style: 'display:none',
                width: '90%',
                layout: 'hbox',
                title: 'Is this new ?',
                items: [
                    {
                        xtype: 'radiofield',
                        width: '40%',
                        label: 'Yes',
                        labelAlign: 'right',
                        labelWidth: '40%',
                        name: 'rdOxygenNew',
                        value: 'Yes'
                    },
                    {
                        xtype: 'radiofield',
                        width: '40%',
                        label: 'No',
                        labelAlign: 'right',
                        labelWidth: '40%',
                        name: 'rdOxygenNew',
                        value: 'No'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                id: 'fsOxygenHowMuch',
                style: 'display:none',
                width: '90%',
                layout: 'hbox',
                title: 'How much ?',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'txtOxygen',
                        name: 'txtOxygen',
                        label: ''
                    },
                    {
                        xtype: 'label',
                        centered: false,
                        html: 'L/min'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                id: 'fsOxygenHelping',
                style: 'display:none',
                width: '90%',
                layout: 'hbox',
                title: 'Is it helping ?',
                items: [
                    {
                        xtype: 'radiofield',
                        width: '40%',
                        label: 'Yes',
                        value: 'Yes',
                        labelAlign: 'right',
                        labelWidth: '40%',
                        name: 'rdOxygenHelping'

                    },
                    {
                        xtype: 'radiofield',
                        width: '40%',
                        value: 'No',
                        label: 'No',
                        labelAlign: 'right',
                        labelWidth: '40%',
                        name: 'rdOxygenHelping'
                    }
                ]
            },
            {
                xtype: 'button',
                width: 100,
                height: 40,
                docked: 'bottom',
                align: 'right',
                itemId: 'vitalButton4',
                text: 'NEXT'
                }
            ],
            listeners: [
             {  
                fn: 'onMyradiobutton4Change',
                event: 'change',
                delegate: '#myradiobutton4'
            }
        ]
    },
    onMyradiobutton4Change: function(checkboxfield, newValue, oldValue, eOpts) {
    if (newValue) {
           document.getElementById("fsOxygenNew").style.display='block';
           document.getElementById("fsOxygenHowMuch").style.display='block';
           document.getElementById("fsOxygenHelping").style.display='block';
        } else {
           document.getElementById("fsOxygenNew").style.display='none';
           document.getElementById("fsOxygenHowMuch").style.display='none';
           document.getElementById("fsOxygenHelping").style.display='none';
        }
    }
});