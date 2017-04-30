/// <reference path="../src/query-builder.standalone.d.ts" />

'use strict';
var cexpect = chai.expect;
var should = chai.should();

if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
};

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
    let builderDiv = $('.builder-widgets');
    const selectors = {
        add_rule: '[data-add=rule]'
    };
    
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
        window._TEST_PRINT_ = true;
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
        
        expect(sql_raw.sql.length).toBeGreaterThan(0);
        window._TEST_PRINT_ = false;
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

        expect(sql_raw.length).toBeGreaterThan(0);
        expect(sql_raw).toContain('country');
        expect(sql_raw).toContain('stateProvince');
        expect(sql_raw).toContain('countyId');
    });

    it('should add existing filter', function () {
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

        var sql_raw = builderDiv.queryBuilder('getSQL', false, true).sql;
        cexpect(sql_raw).to.have.length.greaterThan(0);
        var builder = builderDiv.data('queryBuilder');
        var data = {
            id: 'Country',
            operator: 'equal',
            value: '36' /* "Canada - CA" */
        };

        addRule(builder, data);
        var sql_raw = builderDiv.queryBuilder('getSQL', false, true).sql;
        rules_info = builderDiv.queryBuilder('getRules');
        expect(rules_info.rules.length).toEqual(4);
    });

    it('should add new filter', function () {
        builderDiv.queryBuilder('setRules', {
            condition: 'OR',
            rules: [{
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
        expect(rules_info.rules.length).toEqual(2);

        var sql_raw = builderDiv.queryBuilder('getSQL', false, true).sql;
        cexpect(sql_raw).to.have.length.greaterThan(0);
        var builder = builderDiv.data('queryBuilder');
        var data = {
            id: 'Country',
            operator: 'equal',
            value: '36' /* "Canada - CA" */
        };

        addRule(builder, data);
        var sql_raw = builderDiv.queryBuilder('getSQL', false, true).sql;
        rules_info = builderDiv.queryBuilder('getRules');
        expect(rules_info.rules.length).toEqual(2);
    });

    it('should update county after state change', function () {
        var builder = builderDiv.data('queryBuilder');
        builder.reset();

        builder.setRules({
            condition: 'OR',
            rules: [{
                id: 'StateProvince',
                operator: 'equal',
                value: '3069' /*"New York"*/
            }]
        });

        const rules_widget = builder.model.root.rules;

        builderDiv.find(selectors.add_rule).trigger('click'); // add rule.
        rules_widget.last().$el.find('select').val('County').change(); // set filter to 'County'
        rules_widget.last().$el.find('select').last().val('1837').change(); // set value to 'WASHINGTON'
        rules_widget[0].$el.find('select').last().val('3081').change(); // set state value to 'Virginia'
        expect(rules_widget[1].$el.find('select').last().val()).toEqual('2820'); // set county value to 'ACCOMACK'
    });

    it('should update state after country change', function () {
        var builder = builderDiv.data('queryBuilder');
        builder.reset();

        // add first rule.
        builder.setRules({
            condition: 'OR',
            rules: [{
                id: 'Country',
                operator: 'equal',
                value: '224' /* "USA - US" */
            }]
        });

        const rules_widget = builder.model.root.rules;

        builderDiv.find(selectors.add_rule).trigger('click'); // add rule.
        rules_widget.last().$el.find('select').val('StateProvince').change(); // set filter to 'StateProvince'
        rules_widget.last().$el.find('select').last().val('3069').change(); // set value to 'NEW YORK'
        rules_widget[0].$el.find('select').last().val('48').change(); // set Country value to '"Costa Rica - CR"'
        const expected = rules_widget[1].$el.find('select').last().val();
        expect(expected).toEqual('609'); // expect State value to be 'Alajuela - 2'
    });

    it('should update state and county after country change', function () {
        var builder = builderDiv.data('queryBuilder');
        builder.reset();

        // add first rule.
        builder.setRules({
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

        let rules_widget = builder.model.root.rules;

        rules_widget[0].$el.find('select').last().val('48').change(); // set Country value to '"Costa Rica - CR"'
        const state = rules_widget[1].$el.find('select').last().val();
        expect(state).toEqual('609');
        state.should.equal('609'); // expect State value to be 'Alajuela - 2'
        rules_widget = builder.model.root.rules;
        cexpect(rules_widget).to.have.length.of(2); // expect County rule to be removed.
    });

    it('should update county after state change when country is present', function () {
        var builder = builderDiv.data('queryBuilder');
        builder.reset();

        // add first rule.
        builder.setRules({
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

        const rules_widget = builder.model.root.rules;

        rules_widget[1].$el.find('select').last().val('3039').change(); // set State value to '"Connecticut - CT'
        const county = rules_widget[2].$el.find('select').last().val();
        expect(county).toEqual('308'); // expect county value to be 'FAIRFIELD'
        expect(rules_widget.length).toEqual(3); // expect County rule to be removed.
    });

    it('should update county after country change', function () {
        var builder = builderDiv.data('queryBuilder');
        builder.reset();

        // add first rule.
        builder.setRules({
            condition: 'OR',
            rules: [{
                id: 'Country',
                operator: 'equal',
                value: '224' /* "USA - US" */
            }]
        });

        let rules_widget = builder.model.root.rules;

        builderDiv.find(selectors.add_rule).trigger('click'); // add rule.
        rules_widget.last().$el.find('select').val('County').change(); // set filter to 'County'
        rules_widget.last().$el.find('select').last().val('2820').change(); // set value to 'ACCOMACK'
        rules_widget[0].$el.find('select').last().val('48').change(); // set Country value to '"Costa Rica - CR"'
        cexpect(builder.model.root.rules).to.have.lengthOf(1); //County is removed.
    });

    it('should update county after existing country change', function () {
        var builder = builderDiv.data('queryBuilder');
        builder.reset();

        // add first rule.
        builder.setRules({
            condition: 'OR',
            rules: [{
                id: 'County',
                operator: 'equal',
                value: '1837' /* "WASHINGTON" */
            }]
        });

        let rules_widget = builder.model.root.rules;
        builderDiv.find(selectors.add_rule).trigger('click'); // add rule.
        rules_widget.last().$el.find('select').val('Country').change(); // set filter to 'Country'
        const county = rules_widget[0].$el.find('select').last().val(); // get County value
        cexpect(county).to.be.eql('1');
        cexpect(builder.model.root.rules).to.have.lengthOf(2); //County is there.
    });

    it('should remove county after existing country change', function () {
        var builder = builderDiv.data('queryBuilder');
        builder.reset();

        // add first rule.
        builder.setRules({
            condition: 'OR',
            rules: [{
                id: 'Country',
                operator: 'equal',
                value: '224' /* "WASHINGTON" */
            }]
        });
        
        let rules_widget = builder.model.root.rules;
        rules_widget[0].$el.find('select').last().val('48').change(); // set Country value to '"Costa Rica -
        builderDiv.find(selectors.add_rule).trigger('click'); // add rule.        
        rules_widget.last().$el.find('select').val('County').change(); // set filter to 'County'.        
        cexpect(builder.model.root.rules).to.have.lengthOf(1); //County is removed.
    });
});