Ext.define('PatientVitalsMonitoring.view.vitalsForm4', {
    extend: 'Ext.form.Panel',
    alias: 'widget.vitalForm4',

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
                                        name: 'rdOxygen'
                                    },
                                    {
                                        xtype: 'radiofield',
                                        height: 43,
                                        width: '40%',
                                        label: 'No',
                                        labelAlign: 'right',
                                        labelWidth: '40%',
                                        name: 'rdOxygen'
                                    }
                                ]
            },
            {
                                xtype: 'fieldset',
                                id: 'fsOxygenNew',
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
                                        name: 'rdOxygenNew'
                                    },
                                    {
                                        xtype: 'radiofield',
                                        width: '40%',
                                        label: 'No',
                                        labelAlign: 'right',
                                        labelWidth: '40%',
                                        name: 'rdOxygenNew'
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
                                        labelAlign: 'right',
                                        labelWidth: '40%',
                                        name: 'rdOxygenHelping'
                                    },
                                    {
                                        xtype: 'radiofield',
                                        width: '40%',
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