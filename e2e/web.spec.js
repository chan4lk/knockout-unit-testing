describe('blackjack page', function () {

    before(function () {
        var chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
    });

    it('should have the right title - the fancy generator way', function () {
        browser.url('/');
        var title = browser.getTitle();
        title.should.be.equal(title, 'Home');
    });

    it('should have the correct error message', function () {
        browser.url('//Pages/AEnrolmentForm.aspx?programId=5454&dealerId=246408');
        browser.waitUntil(true, 10000);
        var errorMessage = browser.getText('#loadErrorMessageDiv*=Current user is null');
        //.indexOf('Current user is null') > 0;
        errorMessage.should.not.be.null;
        errorMessage.should.equal('System error occurred,Current user is null. Please refresh your page. Please contact your administrator for further assistance.');

    });

    it('should login the user', function(){
         browser.url('//Pages/AEnrolmentForm.aspx?programId=5454&dealerId=246408');
         browser.click('.nav.pull-right a');
         browser.waitUntil(true, 10000);
         
    });

    it('should have correct program name', function () {
        browser.url('//Pages/AEnrolmentForm.aspx?programId=5454&dealerId=246408');       
        var programName = browser.getText('#EnrollmentFormProgramIdValueLabel');
        programName.should.equal('Test Enrollment Program Test 28 (ch28)');
    });
});