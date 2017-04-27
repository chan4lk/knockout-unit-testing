'use strict';

jasmine.getFixtures().fixturesPath = '/base/test/mocks';
jasmine.getJSONFixtures().fixturesPath = '/base/test/mocks';
describe('Query Builder', function () {
    window.showlightbox = () => {};
    var builderDiv = $('.builder-widgets');

    beforeEach(() => {
        loadFixtures('QueryBuilder.html');
        builderDiv = $('.builder-widgets');
        var filterCriteria = getJSONFixture('filters.json');
        builderDiv.QueryBuilderWrapper(filterCriteria);
    });

    it('should be defined', function () {
        expect(builderDiv.queryBuilder).toBeDefined();
    });

    it('should return sql', function () {
        builderDiv.queryBuilder('setRules', {
            condition: 'OR',
            rules: [{
                    id: 'Country',
                    operator: 'equal',
                    /*value: '224'*/
                },
                {
                    id: 'StateProvince',
                    operator: 'equal',
                    /*value: '3033'*/
                },
                {
                    id: 'County',
                    operator: 'equal'
                }
            ]
        });

        var sql_raw = builderDiv.queryBuilder('getSQL', false, true);
        console.log(sql_raw);
        expect(sql_raw.sql.length).toBeGreaterThan(0);
    });

    it('should contain required colums sql', function () {
        builderDiv.queryBuilder('setRules', {
            condition: 'OR',
            rules: [{
                    id: 'Country',
                    operator: 'equal',
                    value: '224' /* "USA - US" */
                },
                {
                    id: 'StateProvince',
                    operator: 'equal',
                    value: '3069' /*"New York"*/
                },
                {
                    id: 'County',
                    operator: 'equal',
                    value: '1837' /* "WASHINGTON" */
                }
            ]
        });

        var sql_raw = builderDiv.queryBuilder('getSQL', false, true).sql;
        console.log(sql_raw);
        expect(sql_raw.length).toBeGreaterThan(0);
        expect(sql_raw).toContain('country');
        expect(sql_raw).toContain('stateProvince');
        expect(sql_raw).toContain('countyId');
    });

    it('should update state and county after country change', function () {
        builderDiv.queryBuilder('setRules', {
            condition: 'OR',
            rules: [{
                    id: 'Country',
                    operator: 'equal',
                    value: '224' /* "USA - US" */
                },
                {
                    id: 'StateProvince',
                    operator: 'equal',
                    value: '3069' /*"New York"*/
                },
                {
                    id: 'County',
                    operator: 'equal',
                    value: '1837' /* "WASHINGTON" */
                }
            ]
        });

        var rules_info = builderDiv.queryBuilder('getRules');
        console.log(JSON.stringify(rules_info));
        expect(rules_info.rules.length).toBeGreaterThan(0);

        var model = builderDiv.queryBuilder('getModel');
        console.log(model);
        var builderModel = builderDiv.data('queryBuilder').model;
        builderDiv.queryBuilder("addRule", builderModel.root);
        builderDiv.queryBuilder('addRule', model, {
            id: 'Country',
            operator: 'equal',
            value: '36' /* "Canada - CA" */
        });

        var rules_info = builderDiv.queryBuilder('getRules');
        console.log(JSON.stringify(rules_info));
        expect(rules_info.rules.length).toBeGreaterThan(0);
    });

});