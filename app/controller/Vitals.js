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

        
        /**

        { name: 'VitalDate',  type: 'string'  },
            { name: 'vital02Sat', type: 'string'  },
            { name: 'hearRate',  type: 'string' },
            { name: 'bloodPressure',  type: 'string' },
            { name: 'weight',  type: 'string' },
            { name: 'weightUnits',  type: 'string' },
            { name: 'sob',  type: 'string' },
            { name: 'sobHowLong',  type: 'string' },
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
        */

        //VitalForm1 field values
        var vitalEntryDate = vitalform1.txtVitalsday;
        var vitalOSat = vitalform1.txtOSat;
        var heartRate = vitalform1.txtHeartRate;
        var bp = vitalform1.txtBloodPressure;
        var weight = vitalform1.txtWeight;
        var weightUnits = vitalform1.rdWeight;

        //VitalForm2 field values
        var vitalform2 = this.getVitalForm2().getValues();  
        console.log(vitalform2);
        var sob = vitalform2.selectSOB;
        var sobDuration = vitalform2.txtSOBDuration;
        var sobUnits = vitalform2.selectSOBUnits
        var cough = vitalform2.rdCough;
        var productive = vitalform2.rdProductive;
        var color = vitalform2.selColor;

        //VitalForm3 field values
        var vitalform3 = this.getVitalForm3().getValues();  
        var swelling = vitalform3.rdSwelling;
        var where = vitalform3.txtWhere;
        var frequency = vitalform3.selFrequency;

        // VitalForm4 field values
        var vitalform4 = this.getVitalForm4().getValues();
        var oxygen = vitalform4.rdOxygen;
        var oxygenNew = vitalform4.rdOxygenNew;
        var oxygenQuantity  = vitalform4.txtOxygen;
        var oxygenHelping = vitalform4.rdOxygenHelping;

        // VitalForm5 field values
        var vitalform5 = this.getVitalForm5().getValues();
        var medicationDaily = vitalform5.rdMedicineDaily;

        var vitalRecord = Ext.ModelManager.getModel('PatientVitalsMonitoring.model.vitals');
        var record = new vitalRecord({  VitalDate: vitalEntryDate, vital02Sat: vitalOSat, hearRate: heartRate, bloodPressure: bp,
            weight: weight, weightUnits: weightUnits, sob: sob, sobHowLong: sobDuration, sobUnit: sobUnits, cough: cough, 
            coughProductive:productive, coughcolor:color,swelling: swelling, swellingWhere: where,
            swellingFrequency:frequency, oxygen: oxygen, oxygenNew:oxygenNew, oxygenQuantity:oxygenQuantity,
            oxygenHelping: oxygenHelping, medicationDaily:medicationDaily});        
        record.save();


        var successCallback = function(resp, ops) {
        Ext.Msg.alert('SUCCESS', 'Your details have been entered. Thank you. Please \
            come back tomorrow to enter your vitals.');
        //mainView = this.getMainView();              

            // mainView.push({
            //     xtype: "loginform",
            //     title: "Login"
            // });

        };

        var failureCallback = function(resp, ops) {

            // Show login failure error
            Ext.Msg.alert("Sorry!! Failure", resp);

        };

        var controller = PatientVitalsMonitoring.app.getController('Account');
        console.log(controller);
        console.log(controller.getUserName());

        Ext.Ajax.request({
            url: 'http://127.0.0.1:3000/vitals.json',
            method: 'POST',

            type:'jsonp',
            useDefaultXhrHeader: false,

            params:
            {
                vDate: vitalEntryDate, 
                o2Sat: vitalOSat, 
                heartRate: heartRate, 
                bloodpressure: bp, 
                weight: weight, 
                sob: sob,
                sobDuration: sobDuration, 
                cough: cough, 
                coughProductive: productive, 
                coughColor: color, 
                swelling: swelling,
                swellingWhere: where, 
                swellingFrequency: frequency, 
                oxygen: oxygen, 
                oxygenNew: oxygenNew,
                oxygenQuantity: oxygenQuantity, 
                oxygenHelping: oxygenHelping, 
                dailyMedications: medicationDaily
                
            },
                success: successCallback,
                failure: failureCallback
        });



    }

});
