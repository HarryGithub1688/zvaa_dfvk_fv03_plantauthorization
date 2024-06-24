sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hab/zvaadfvk00003/test/integration/FirstJourney',
		'hab/zvaadfvk00003/test/integration/pages/PlantAuthorizationList',
		'hab/zvaadfvk00003/test/integration/pages/PlantAuthorizationObjectPage'
    ],
    function(JourneyRunner, opaJourney, PlantAuthorizationList, PlantAuthorizationObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hab/zvaadfvk00003') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePlantAuthorizationList: PlantAuthorizationList,
					onThePlantAuthorizationObjectPage: PlantAuthorizationObjectPage
                }
            },
            opaJourney.run
        );
    }
);