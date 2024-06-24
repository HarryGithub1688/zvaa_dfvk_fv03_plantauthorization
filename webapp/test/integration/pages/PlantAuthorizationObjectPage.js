sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'hab.zvaadfvk00003',
            componentId: 'PlantAuthorizationObjectPage',
            contextPath: '/PlantAuthorization'
        },
        CustomPageDefinitions
    );
});