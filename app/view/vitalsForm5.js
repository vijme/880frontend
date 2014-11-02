Ext.define('PatientVitalsMonitoring.view.vitalsForm5', {
    extend: 'Ext.form.Panel',
    alias: 'widget.vitalForm5',

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
                xtype: 'formpanel',
                height: 160,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'fieldset',
                        id: 'fsDailyMedicine',
                        width: '90%',
                        layout: 'hbox',
                        title: 'Have you taken your medicine daily?',
                        items: [
                           {
                                xtype: 'radiofield',
                                width: '40%',
                                label: 'Yes',
                                labelAlign: 'right',
                                labelWidth: '40%',
                                name: 'rdMedicineDaily'
                            },
                            {
                                xtype: 'radiofield',
                                width: '40%',
                                label: 'No',
                                labelAlign: 'right',
                                labelWidth: '40%',
                                name: 'rdMedicineDaily'
                            }
                          ]
                    },
                    {
                         xtype: 'button',
                        width: 100,
                        height: 40,
                        docked: 'bottom',
                        align: 'center',
                        itemId: 'submitVitalsButton',
                        text: 'SUBMIT'
                    }
                ]//for formpanel
            }//for form
        ]
    }
});