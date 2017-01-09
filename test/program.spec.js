jasmine.getFixtures().fixturesPath = '/base/test/mocks';
jasmine.getJSONFixtures().fixturesPath = '/base/test/mocks';
describe('Program', function(){
    it('should be defined', function(){
        expect(ProgramEnrollmentFormCommon).toBeDefined();
        
    });

    it('should define statnderd form', function(){
        expect(ProgramEnrollmentFormStandard).toBeDefined();
        expect(ProgramEnrollmentFormStandard.validate.isValid()).toBeTruthy();
    });

    it('shoud bind ductless data', function(){
        var entity = jasmine.getJSONFixture('programs.json');
        //console.log(entity);
        jasmine.loadFixtures('Enrollment.html');
        jasmine.appendLoadFixtures('Ductless.html')
        ProgramEnrollmentFormDuctless.dataManager.setAllControlsValue(entity);
        var vehicleExpence = $('#currentYearBrandOnePercentage');
        expect(vehicleExpence.length).toBeGreaterThan(0);
        vehicleExpence.val('-1');
        console.log('vehicleExpence', vehicleExpence.val());
        var data = ProgramEnrollmentFormDuctless.dataManager.getAllControlsValue();
        expect(data).toBeDefined();
        console.log('currentYearBrandOnePercentage', data.CompetitiveBrand1PercentageCurrentYear);
        expect(ProgramEnrollmentFormDuctless.validate.isValid()).toBeFalsy();        
        vehicleExpence.val('50');
        data = ProgramEnrollmentFormDuctless.dataManager.getAllControlsValue();
        console.log('currentYearBrandOnePercentage', data.CompetitiveBrand1PercentageCurrentYear);
        
        expect(ProgramEnrollmentFormDuctless.validate.isValid()).toBeTruthy();
    });

    it('shoud save ductless data', function(){
        var entity = jasmine.getJSONFixture('programs.json');
        //console.log(entity);
        jasmine.loadFixtures('Enrollment.html');
        jasmine.appendLoadFixtures('Ductless.html')
        ProgramEnrollmentFormDuctless.dataManager.setAllControlsValue(entity);        
        expect(ProgramEnrollmentFormDuctless.validate.isValid()).toBeTruthy();
    });

    it('should invalidte range', function(){
        var isValid = ProgramEnrollmentFormCommon.helper.inRange('199', 0, 100);
        expect(isValid).toBeFalsy();
    });

    it('should validate range', function(){
        var isValid = ProgramEnrollmentFormCommon.helper.inRange('59', 0, 100);
        expect(isValid).toBeTruthy();
    });

    it('should in validate range', function(){
        var isValid = ProgramEnrollmentFormCommon.helper.inRange('-1', 0, 100);
        expect(isValid).toBeFalsy();
    });
});