Ext.define('PatientVitalsMonitoring.controller.Vitals', {
    extend: 'Ext.app.Controller',

    config: {
         refs: {
             mainView: 'mainview',
             vitalForm1: '#vitalsForm1',
             vitalForm2: '#vitalsForm2',
             vitalForm3: '#vitalsForm3',
             vitalForm4: '#vitalsForm4',
             vitalForm5: '#vitalsForm5'
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
        var vitalDetails = Ext.create('widget.vitalsForm2'),	
            mainView = this.getMainView();				

        mainView.push({
            xtype: "vitalsForm2",
            title: "Vitals2"
        });
    },

    showVitals2: function(button, e, eOpts) {
        
        var vitalDetails = Ext.create('widget.vitalsForm3'), 
            mainView = this.getMainView();              

        mainView.push({
            xtype: "vitalsForm3",
            title: "Vitals3"
        });
    },

    showVitals3: function(button, e, eOpts) {
        
        var vitalDetails = Ext.create('widget.vitalsForm4'), 
            mainView = this.getMainView();              

        mainView.push({
            xtype: "vitalsForm4",
            title: "Vitals4"
        });
    },

    showVitals4: function(button, e, eOpts) {

        var vitalDetails = Ext.create('widget.vitalsForm5'), 
            mainView = this.getMainView();              

        mainView.push({
            xtype: "vitalsForm5",
            title: "Vitals5"
        });

    },

    showFinalPanel: function(button, e, eOpts) {
        var vitalform1 = this.getVitalForm1().getValues();
        var vitalform2 = this.getVitalForm2().getValues();
        var vitalform3 = this.getVitalForm3().getValues();
        var vitalform4 = this.getVitalForm4().getValues();
        var vitalform5 = this.getVitalForm5().getValues();
        console.log('vitalform1');
        console.log(vitalform1);
        console.log('vitalform2');
        console.log(vitalform2);
        console.log('vitalform3');
        console.log(vitalform3);
        console.log('vitalform4');
        console.log(vitalform4);
        console.log('vitalform5');
        console.log(vitalform5);

        Ext.Msg.alert('SUCCESS', 'Your details have been entered. Thank you');
        mainView = this.getMainView();              

        mainView.push({
            xtype: "loginform",
            title: "Login"
        });
    }

});
