describe('CommonJS', function(){
    it('should return valid controls', function(){
        var ids = ['currentYearCBPEquipmentPurchases'];
        var controlIds = ProgramEnrollmentFormCommon.helper.getControlIdArray(ids);
        expect(controlIds.length).toBeGreaterThan(0);
        console.log(controlIds);
    });
});