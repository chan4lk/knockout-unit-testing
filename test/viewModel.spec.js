jasmine.getFixtures().fixturesPath = '/base/test/mocks';
jasmine.getJSONFixtures().fixturesPath = '/base/test/mocks';
describe('Person Name', function(){

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
        console.log(data.persons);
        loadFixtures('page.html');
        var content = $('.content');
        expect(content).not.toBeUndefined(); 
        var target = new PersonNameViewModel(persons[0].firstName, persons[0].lastName);
        ko.applyBindings(target, content.get(0));

        var fullNameHolder = content.find('span');
        console.log(fullNameHolder);
        expect(fullNameHolder.text()).toBe('Chandima Ranaweera');
    });
});
