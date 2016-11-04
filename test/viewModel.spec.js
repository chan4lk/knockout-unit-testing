describe('Person Name', function(){
    it('computes fullName based on firstName and lastName', function(){
        var target = new PersonNameViewModel('Ada', 'Lovelace');
        expect(target.fullName()).toBe('Ada Lovelace');
    });
});