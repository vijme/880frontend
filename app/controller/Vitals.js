Ext.define('PatientVitalsMonitoring.controller.Vitals', {
    extend: 'Ext.app.Controller',

    config: {
         refs: {
             mainView: 'mainview',
             vitalForm1: 'vitalsForm1',
             vitalForm2: 'vitalsForm2',
             vitalForm3: 'vitalsForm3',
             vitalForm4: 'vitalsForm4',
             vitalForm5: 'vitalsForm5'
        },
        views:[
            'vitalsForm1',
            'vitalsForm2',
            'vitalsForm3',
            'vitalsForm4',
            'vitalsForm5'
        ],

        control: {
            "button#vitalButton1": {       tap: 'showVitals'            },
            "button#vitalButton2": {       tap: 'showVitals2'            },
            "button#vitalButton3": {       tap: 'showVitals3'            },
            "button#vitalButton4": {       tap: 'showVitals4'            },
            "button#vitalButton5": {       tap: 'showVitals5'            },
            "button#submitVitalsButton": { tap: 'showFinalPanel'         }
        }
    },
    

    showVitals: function(button, e, eOpts) {
       
        var vitalDetails = Ext.create('widget.vitalForm2'),	
            mainView = this.getMainView();				

        mainView.push({
            xtype: "vitalForm2",
            title: "Vitals2"
        });
    },

    showVitals2: function(button, e, eOpts) {
        
        var vitalDetails = Ext.create('widget.vitalForm3'), 
            mainView = this.getMainView();              

        mainView.push({
            xtype: "vitalForm3",
            title: "Vitals3"
        });
    },

    showVitals3: function(button, e, eOpts) {
        
        var vitalDetails = Ext.create('widget.vitalForm4'), 
            mainView = this.getMainView();              

        mainView.push({
            xtype: "vitalForm4",
            title: "Vitals4"
        });
    },

    showVitals4: function(button, e, eOpts) {

        var vitalDetails = Ext.create('widget.vitalForm5'), 
            mainView = this.getMainView();              

        mainView.push({
            xtype: "vitalForm5",
            title: "Vitals5"
        });

    },

    showFinalPanel: function(button, e, eOpts) {
       
        Ext.Msg.alert('SUCCESS', 'Your details have been entered. Thank you');
        mainView = this.getMainView();              

        mainView.push({
            xtype: "loginform",
            title: "Login"
        });
    }

});
