jasmine.getFixtures().fixturesPath = '/base/test/mocks';
jasmine.getJSONFixtures().fixturesPath = '/base/test/mocks';
describe('Knockout', function(){

    beforeEach(function () {
       ko.cleanNode(document.body); 
    });

    it('computes fullName based on firstName and lastName', function(){
        var target = new PersonNameViewModel('Ada', 'Lovelace');
        expect(target.fullName()).toBe('Ada Lovelace');
    });

    it('should clear text', function () {
        var fixture = setFixtures('<div class="post">foo</div>');
        var post = fixture.find('.post');
        expect($(post).html()).toBe('foo');
    });

    it('should bind data', function(){
        
        var data = getJSONFixture('persons.json');
        var persons = data.persons;

        loadFixtures('page.html');
        var content = $('.content');
        expect(content).not.toBeUndefined(); 

        var target = new PersonNameViewModel(persons[0].firstName, persons[0].lastName);
        ko.applyBindings(target, content.get(0));

        var fullNameHolder = content.find('span');
        expect(fullNameHolder).toContainText('Chandima Ranaweera');
    });

    it('should update modle by ui', function () {
         var data = getJSONFixture('persons.json');
        var persons = data.persons;

        loadFixtures('page.html');
        var content = $('.content');       

        var model = new PersonNameViewModel(persons[0].firstName, persons[0].lastName);
        ko.applyBindings(model, content.get(0));

        var firstName = $(content.find('p').get(0)).find('input').get(0);
        console.log(firstName);
        $(firstName).val('Hansi').change();
        expect($(firstName).val()).toBe('Hansi');
        expect(model.firstName()).toBe('Hansi');
        expect(model.fullName()).toBe('Hansi Ranaweera')
    })
});
