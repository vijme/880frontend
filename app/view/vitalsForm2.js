Ext.define('PatientVitalsMonitoring.view.vitalsForm2', {
    extend: 'Ext.form.Panel',
    alias: 'widget.vitalsForm2',

    requires: [
        'Ext.form.Panel',
        'Ext.Label',
        'Ext.field.Select',
        'Ext.form.FieldSet',
        'Ext.field.Radio'
    ],
    id : 'vitalsForm2',
    xtype: 'vitalsForm2',


    config: {
        fullscreen: true,
        height: 522,
        items: [
			{
                xtype: 'selectfield',
                itemId: 'myselectfield',
                name: 'selectSOB',
                id : 'selectSOB',
                width: '90%',
                label: 'Do you have shortness of Breath?',
                labelWidth: '70%',
                labelWrap: true,
                options: [
                    {
                        text: 'No',
                        value: 'No'
                    },
                    {
                        text: 'Yes',
                        value: 'Yes'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                height: 50,
                width: '90%',
                layout: 'hbox',
                id: 'txtSOBDuration',
                name: 'txtSOBDuration',
                style: 'display:none',
                items:[
                    {
                    xtype: 'textfield',
                    width: '70%',
                    disabled: false,
                    height: 170,
                    hidden: false,
                    label: 'For how long ?',
                    labelWidth: '',
                    labelWrap: true
                    },
                    {
                    xtype: 'selectfield',
                    width: '30%',
                    itemId: 'myselectfield1',
                    id: 'selectSOBUnits',
                    name: 'selectSOBUnits',
                    options: [
                            {
                            text: 'Hours',
                            value: 'Hours'
                            },
                            {
                            text: 'Days',
                            value: 'Days'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                height: 88,
                width: '85%',
                layout: 'hbox',
                title: 'Have you had cough?',
                items: [
                    {
                        xtype: 'radiofield',
                        itemId: 'myradiobutton',
                        width: '40%',
                        label: 'Yes',
                        labelAlign: 'right',
                        labelWidth: '',
                        name: 'rdCough',
                        value: 'Yes'
                    },
                    {
                        xtype: 'radiofield',
                        width: '40%',
                        label: 'No',
                        labelAlign: 'right',
                        labelWidth: '',
                        value: 'No',
                        name: 'rdCough'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                height: 88,
                id: 'fsProductive',
                style: 'display:none',
                width: '85%',
                layout: 'hbox',
                title: 'Is it Productive ?',
                items: [
                    {
                        xtype: 'radiofield',
                        itemId: 'myradiobutton1',
                        width: '40%',
                        label: 'Yes',
                        value: 'Yes',
                        labelAlign: 'right',
                        labelWidth: '40%',
                        name: 'rdProductive'
                    },
                    {
                        xtype: 'radiofield',
                        width: '40%',
                        label: 'No',
                        value: 'No',
                        labelAlign: 'right',
                        labelWidth: '40%',
                        name: 'rdProductive'                        
                   }
                ]
            },
            {
                xtype: 'selectfield',
                id: 'selColor',
                name: 'selColor',
                style: 'display:none',
                width: '90%',
                label: 'Color ?',
                //labelWidth: '40%',
                labelWrap: true,
                options: [
                    {                                  
                        text: 'Clear',
                        value: 'Clear'
                    },
                    {
                        text: 'Yellow',
                        value: 'Yellow'
                    },
                    {
                        text: 'Pink',
                        value: 'Pink'
                    }
                ]
            },
            {
			    xtype: 'button',
            	width: 100,
            	height: 40,
            	docked: 'bottom',
            	align: 'right',
            	itemId: 'vitalButton2',
            	text: 'NEXT'
            }
          ],

        listeners: [
            {
                fn: 'onMyselectfieldChange',
                event: 'change',
                delegate: '#myselectfield'
            },
            {
                fn: 'onMyradiobuttonChange',
                event: 'change',
                delegate: '#myradiobutton'
            },
            {
                fn: 'onMyradiobutton1Change',
                event: 'change',
                delegate: '#myradiobutton1'
            }
        ]
    },
    onMyselectfieldChange: function(selectfield, newValue, oldValue, eOpts) {
                        if (newValue=='Yes') {
                            document.getElementById('txtSOBDuration').style.display='block';
                      } else {
                           document.getElementById('txtSOBDuration').style.display='none';
                      }

    },

    onMyradiobuttonChange: function(checkboxfield, newValue, oldValue, eOpts) {
               if(newValue) {
                   document.getElementById("fsProductive").style.display='block';
               } else {
                   document.getElementById("fsProductive").style.display='none';
                   document.getElementById("selColor").style.display='none';

               }
    },

    onMyradiobutton1Change: function(checkboxfield, newValue, oldValue, eOpts) {
                if (newValue) {
                    document.getElementById("selColor").style.display='block';
                } else {
                    document.getElementById("selColor").style.display='none';
                }
    }

    
});
              
