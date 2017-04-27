//'use strict';
describe('CommonJS', function () {

    beforeEach(function () {
        var entity = getJSONFixture('enrollment.json');
        var programs = getJSONFixture('program.json');
        var brands = getJSONFixture('brands.json');
        var verticals = getJSONFixture('verticals.json');
        ProgramEnrollmentFormCommon.dataStore.StoreProgram(programs);
        ProgramEnrollmentFormCommon.dataStore.StoreBrands(brands);
        ProgramEnrollmentFormCommon.dataStore.StoreVerticals(verticals);
        loadFixtures('Enrollment.html');
        appendLoadFixtures('BigFish.html');

        ProgramEnrollmentFormBigfish.dataManager.setAllControlsValue(entity);
    });

    it('should return valid controls', function () {
        var ids = ['currentYearCBPEquipmentPurchases'];
        var controlIds = ProgramEnrollmentFormCommon.helper.getControlIdArray(ids);
        expect(controlIds.length).toBeGreaterThan(0);
    });

    it(' should freeze all controls', function () {        
        expect(ProgramEnrollmentFormCommon.render.freezeAll).toBeDefined();          
        ProgramEnrollmentFormCommon.render.freezeAll();        

        var disabled = $(':disabled');        
        expect(disabled.length).toBeGreaterThan(0);

        for(var key in ProgramEnrollmentFormCommon.config.salesControlsId){
            expect($(ProgramEnrollmentFormCommon.config.salesControlsId[key]).attr('disabled')).toBeDefined();
        }      
    });
});