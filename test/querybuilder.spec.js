'use strict';

function addRule(instance, data, group) {
    if (data.id === undefined) {
        throw new Error('Missing rule field id');
    }

    if (data.operator === undefined) {
        data.operator = 'equal';
    }

    if (group === undefined) {
        group = instance.model.root;
    }

    var model = instance.addRule(group);
    if (model === null) {
        return;
    }

    model.filter = instance.getFilterById(data.id);
    model.operator = instance.getOperatorByType(data.operator);
    model.flags = instance.parseRuleFlags(data);

    if (data.data) {
        model.data = data.data;
    }

    if (model.operator.nb_inputs !== 0 && data.value !== undefined) {
        instance.setRuleValue(model, data.value);
    }

    return model;
}

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
        expect(rules_info.rules.length).toEqual(3);

        var builder = builderDiv.data('queryBuilder');
        var data = {
            id: 'Country',
            operator: 'equal',
            value: '36' /* "Canada - CA" */
        };

        var model = addRule(builder, data);  
        console.log(model.values);      
        rules_info = builderDiv.queryBuilder('getRules');
        expect(rules_info.rules.length).toEqual(4);
    });
});