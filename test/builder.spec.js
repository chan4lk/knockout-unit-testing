/// <reference path="../src/builder.plugin.js" />
describe ('builder', () => {
   it('shlold change text', () => {
        var holder = $('<div></div>');
        holder.builder({foo:'chan'});
        chai.expect(holder.val()).to.be.equal('chan');
   }) ;
});