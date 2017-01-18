'use strict';
jasmine.getFixtures().fixturesPath = '/base/test/mocks';
jasmine.getJSONFixtures().fixturesPath = '/base/test/mocks';
describe('Program', function () {
    it('should be defined', function () {
        expect(ProgramEnrollmentFormCommon).toBeDefined();

    });

    it('should define standard form', function () {
        expect(ProgramEnrollmentFormStandard).toBeDefined();
        expect(ProgramEnrollmentFormStandard.validate.execute()).toBeTruthy();
    });

    it('should bind ductless data', function () {
         var entity = getJSONFixture('enrollment.json');
        var programs = getJSONFixture('program.json');
        var brands = getJSONFixture('brands.json');
        var verticals = getJSONFixture('verticals.json');
        ProgramEnrollmentFormCommon.dataStore.StoreProgram(programs);
        ProgramEnrollmentFormCommon.dataStore.StoreBrands(brands);
        ProgramEnrollmentFormCommon.dataStore.StoreVerticals(verticals);
        loadFixtures('Enrollment.html');
        appendLoadFixtures('Ductless.html');

        ProgramEnrollmentFormDuctless.dataManager.setAllControlsValue(entity);
        var vehicleExpence = $('#currentYearBrandOnePercentage');
        expect(vehicleExpence.length).toBeGreaterThan(0);

        vehicleExpence.val('-1');
        var data = ProgramEnrollmentFormDuctless.dataManager.getAllControlsValue();
        expect(data).toBeDefined();

        expect(ProgramEnrollmentFormDuctless.validate.execute()).toBeFalsy();

        vehicleExpence.val('50');
        data = ProgramEnrollmentFormDuctless.dataManager.getAllControlsValue();

        expect(ProgramEnrollmentFormDuctless.validate.execute()).toBeTruthy();
    });

    it('should bind BigFish data', function () {
        
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

        var vehicleExpence = $('#currentYearBrandOnePercentage');
        expect(vehicleExpence.length).toBeGreaterThan(0);

        vehicleExpence.val('-1');
        var data = ProgramEnrollmentFormBigfish.dataManager.getAllControlsValue();
        expect(data).toBeDefined();

        expect(ProgramEnrollmentFormBigfish.validate.execute()).toBeFalsy();

        vehicleExpence.val('50');
        data = ProgramEnrollmentFormBigfish.dataManager.getAllControlsValue();
        expect(ProgramEnrollmentFormBigfish.validate.execute()).toBeTruthy();
    });

    it('should bind Standard data', function () {
        var entity = getJSONFixture('enrollment.json');
        var programs = getJSONFixture('program.json');
        var brands = getJSONFixture('brands.json');
        var verticals = getJSONFixture('verticals.json');
        ProgramEnrollmentFormCommon.dataStore.StoreProgram(programs);
        ProgramEnrollmentFormCommon.dataStore.StoreBrands(brands);
        ProgramEnrollmentFormCommon.dataStore.StoreVerticals(verticals);
        loadFixtures('Enrollment.html');
        appendLoadFixtures('Standard.html');

        ProgramEnrollmentFormStandard.dataManager.setAllControlsValue(entity);
        var vehicleExpence = $('#currentYearBrandOnePercentage');
        expect(vehicleExpence.length).toBeGreaterThan(0);

        vehicleExpence.val('-1');
        var data = ProgramEnrollmentFormStandard.dataManager.getAllControlsValue();
        expect(data).toBeDefined();

        expect(ProgramEnrollmentFormStandard.validate.execute()).toBeFalsy();

        vehicleExpence.val('50');
        data = ProgramEnrollmentFormStandard.dataManager.getAllControlsValue();

        expect(ProgramEnrollmentFormStandard.validate.execute()).toBeTruthy();
    });

    it('should save ductless data', function () {
         var entity = getJSONFixture('enrollment.json');
        var programs = getJSONFixture('program.json');
        var brands = getJSONFixture('brands.json');
        var verticals = getJSONFixture('verticals.json');
        ProgramEnrollmentFormCommon.dataStore.StoreProgram(programs);
        ProgramEnrollmentFormCommon.dataStore.StoreBrands(brands);
        ProgramEnrollmentFormCommon.dataStore.StoreVerticals(verticals);
        loadFixtures('Enrollment.html');
        appendLoadFixtures('Ductless.html')
        ProgramEnrollmentFormDuctless.dataManager.setAllControlsValue(entity);
        expect(ProgramEnrollmentFormDuctless.validate.execute()).toBeTruthy();
    });

    it('should invalidate range', function () {
        var isValid = ProgramEnrollmentFormCommon.helper.inRange('199', 0, 100);
        expect(isValid).toBeFalsy();
    });

    it('should validate range', function () {
        var isValid = ProgramEnrollmentFormCommon.helper.inRange('59', 0, 100);
        expect(isValid).toBeTruthy();
    });

    it('should in validate range', function () {
        var isValid = ProgramEnrollmentFormCommon.helper.inRange('-1', 0, 100);
        expect(isValid).toBeFalsy();
    });
});