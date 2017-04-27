'use strict';
jasmine.getFixtures().fixturesPath = '/base/test/mocks';
jasmine.getJSONFixtures().fixturesPath = '/base/test/mocks';
describe('Query Builder', function () {
    it('should be defined', function () {
        jasmine.loadFixtures('QueryBuilder.html');
        var filterCriteria = jasmine.getJSONFixture('filters.json');
        var builderDiv = $('.builder-widgets');
        builderDiv.QueryBuilderWrapper(filterCriteria);
    });

});