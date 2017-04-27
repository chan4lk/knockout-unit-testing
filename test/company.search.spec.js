/// <reference path="../layouts/1033/js/company/company.search.js" />

'use strict';
jasmine.getFixtures().fixturesPath = '/base/test/mocks';
jasmine.getJSONFixtures().fixturesPath = '/base/test/mocks';

describe('Company Search', function () {
    var beforSuffix = ' 00:00:00';
    var afterSuffix = ' 23:59:59';
    var ruleDiv = '#companySearchFilterDiv_rule_0';
    it('should be defined', function () {
        expect(CompanySearch).toBeDefined();
    });

    it('should append before suffix', function () {
        loadFixtures('RuleContainer.html');
        var rule = { 
            operator: {
                type: 'less',
                nb_inputs: 1
            },
            $el: $(ruleDiv)
            
        };
        var valueGetter = CompanySearch.event.dateFilter.ValueGetter;
        var newValue = valueGetter(rule);
        expect(newValue).toContain(beforSuffix);
    });

    it('should append after suffix', function () {
        loadFixtures('RuleContainer.html');
        var rule = {
            operator: {
                type: 'greater',
                nb_inputs: 1
            },
            $el: $(ruleDiv)

        };
        var valueGetter = CompanySearch.event.dateFilter.ValueGetter;
        var newValue = valueGetter(rule);
        expect(newValue).toContain(afterSuffix);
    });

    it('should append after or equal suffix', function () {
        loadFixtures('RuleContainer.html');
        var rule = {
            operator: {
                type: 'greater_or_equal',
                nb_inputs: 1
            },
            $el: $(ruleDiv)

        };
        var valueGetter = CompanySearch.event.dateFilter.ValueGetter;
        var newValue = valueGetter(rule);
        expect(newValue).toContain(beforSuffix);
    });

    it('should append after or equal suffix', function () {
        loadFixtures('RuleContainer.html');
        var rule = {
            operator: {
                type: 'less_or_equal',
                nb_inputs: 1
            },
            $el: $(ruleDiv)

        };
        var valueGetter = CompanySearch.event.dateFilter.ValueGetter;
        var newValue = valueGetter(rule);
        expect(newValue).toContain(afterSuffix);
    });

    it('should append between suffix', function () {
        loadFixtures('RuleContainer.html');
        var rule = {
            operator: {
                type: 'less_or_equal',
                nb_inputs: 2
            },
            $el: $(ruleDiv)

        };
        var valueGetter = CompanySearch.event.dateFilter.ValueGetter;
        var newValue = valueGetter(rule);
        expect(newValue[0]).toContain(afterSuffix);
        expect(newValue[1]).toContain(beforSuffix);
    });
});