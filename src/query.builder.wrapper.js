///<summary>
/// � 2012 UTC Climate Control & Security, Inc. All rights reserved. CONFIDENTIAL AND
/// PROPRIETARY INFORMATION The information contained herein (the
/// 'Proprietary Information') is highly confidential and proprietary to and
/// constitutes trade secrets of UTC Climate Control & Security, Inc.. The Proprietary Information
/// is for UTC Climate Control & Security, Inc. internal use only and shall not be published,
/// communicated, disclosed or divulged to any person, firm, corporation or
/// other legal entity, directly or indirectly, without the prior written
/// consent of UTC Climate Control & Security, Inc. Information Management.
///
/// Source File:            query.builder.wrapper.js
/// Sub-system/Module:      UTC.CCS.DPG.Branding.Artifact.en-US
/// Description:            This is a wrapper for queryBuilder
/// </summary>
///
//Version QAR 2.3.2
(function ($) {

    "use strict";

    //This is a wrapper for queryBuilder
    $.fn.QueryBuilderWrapper = function () {

        var internalQueryBuilder = {

            // configuration
            config: {
                constant: {
                    option: "option",
                    none: "none",
                    block: "block",
                    display: "display",
                    selected: "selected",
                    select: "select",
                    cache_key: "event-data",
                },
                selectors: {
                    rule_value_container: '.rule-value-container',
                    submitButton: '.query-builder-submit-button',
                    queryBuilderDropdownDataEmptyErrorPopupDiv: 'queryBuilderDropdownDataEmptyErrorPopup'
                },
                type: {
                    object: "object",
                    string: "string"
                },
                event: {
                    afterCreateRuleInput: "afterCreateRuleInput.queryBuilder",
                    afterUpdateRuleValue: "afterUpdateRuleValue.queryBuilder",
                    beforeDeleteRule: "beforeDeleteRule.queryBuilder",
                    afterDeleteRule: "afterDeleteRule.queryBuilder",
                    afterDeleteGroup: "afterDeleteGroup.queryBuilder",
                    keyPressEvent: "keypress",
                }
            },

            //initialize method
            init: function (domElements, args) {

                try {
                    var returnData = false;

                    // if arguments are empty
                    if (!args || args.length === 0) {
                        internalQueryBuilder.logging("Arguments are null,empty or undefined");
                    } else if (!domElements || domElements.length === 0) {
                        // if DOM elements are empty
                        internalQueryBuilder.logging("Cannot find DOM element");
                    } else {
                        //Change operator display values
                        internalQueryBuilder.updateOperatorDisplayValues();

                        // get first argument
                        var firstArgument = args[0];

                        // loop through all DOM elements
                        domElements.each(function () {

                            var $element = $(this);

                            // if first argument is an object
                            if (typeof firstArgument === internalQueryBuilder.config.type.object) {
                                internalQueryBuilder.handleObject($element, firstArgument);
                            } else if (typeof firstArgument === internalQueryBuilder.config.type.string) {
                                //if first argument is a string
                                returnData = internalQueryBuilder.handleMethod($element, firstArgument, args);
                            }
                        });
                    }

                    return returnData;
                } catch (error) {
                    internalQueryBuilder.logging(error);
                }
            },

            // if first argument is an object then this method will be called
            handleObject: function ($element, firstArgument) {
                // render query builder using original API
                $element.queryBuilder(firstArgument);
                // register events
                internalQueryBuilder.registerEvents($element, firstArgument);
            },

            // if first argument is a string, then we consider it as a method name of original query builder API
            handleMethod: function ($element, firstArgument, args) {

                // if there are more than one arguments
                if (args.length > 1) {
                    return $element.queryBuilder(firstArgument, args[1]);
                } else {
                    return $element.queryBuilder(firstArgument);
                }

            },

            updateOperatorDisplayValues: function () {
                $.fn.queryBuilder.regional['en'].operators = ({
                    "equal": "Equals",
                    "not_equal": "Not Equals",
                    "in": "In",
                    "not_in": "Not In",
                    "less": "Before",
                    "less_or_equal": "Before Or Equal To",
                    "greater": "After",
                    "greater_or_equal": "After Or Equal To",
                    "between": "Between",
                    "not_between": "Not Between",
                    "begins_with": "Begins With",
                    "not_begins_with": "Doesn't Begin With",
                    "contains": "Contains",
                    "not_contains": "Doesn't Contain",
                    "ends_with": "Ends With",
                    "not_ends_with": "Doesn't End With",
                    "is_empty": "Is Empty",
                    "is_not_empty": "Is Not Empty",
                    "is_null": "Is Null",
                    "is_not_null": "Is Not Null"
                });
            },

            // handles logging
            logging: function (message) {
                throw new Error(message);
            },

            // this class is responsible for handling parent child scenarios
            parentChildFunctionality: {

                //get child codes based on selected parent key
                getChildCodes: function (selectedParentKey, parentChildFilterMapping) {
                    var childCodes = [],
                        mappingLength = parentChildFilterMapping.length,
                        childNodeLength = -1,
                        selectedMapping = null;


                    //loop through mapping
                    for (var i = 0; i < mappingLength; i++) {
                        selectedMapping = parentChildFilterMapping[i];

                        //identify mapping which is associated to selected parent key
                        if (selectedMapping.ParentKey === selectedParentKey) {
                            childNodeLength = selectedMapping.ChildDataList.length;

                            // loop through all child
                            for (var j = 0; j < childNodeLength; j++) {
                                childCodes.push(selectedMapping.ChildDataList[j].Key);
                            }
                            return childCodes;
                        }
                    }
                    return childCodes;
                },
                /**
                 * Get the query builder instance.
                 * 
                 * @param {Rule} rule The updated rule
                 * @returns QueryBuilder instance.
                 */
                getBuilderByRule: function (rule) {
                    var parent = rule;
                    while (parent.parent != null) {
                        parent = parent.parent;
                    }
                    var builder = parent.$el.parent().data('queryBuilder');
                    return builder;
                },
                
                /**
                 * Get the all the filters of the query builder instance.
                 * 
                 * @param {Rule} rule - the rule to get all the filters.
                 * @returns all the filters of the query builder.
                 */
                getFiltersByRule: function (rule) {
                    var builder = internalQueryBuilder.parentChildFunctionality.getBuilderByRule(rule);
                    var filters = builder.filters;
                    return filters;
                },

                //get child option string based on parent key
                getOptionListString: function (selectedParentKey, parentChildFilterMapping) {
                    var returnOptionString = "",
                        mappingLength = parentChildFilterMapping.length,
                        childNodeLength = -1,
                        selectedMappingChildData = null,
                        allChildDataArray = [],
                        selectedMapping = null;

                    //loop through mapping
                    for (var i = 0; i < mappingLength; i++) {
                        selectedMapping = parentChildFilterMapping[i];
                        selectedMappingChildData = selectedMapping.ChildDataList;
                        if (selectedMappingChildData) {
                            childNodeLength = selectedMappingChildData.length;
                            if (selectedParentKey) {
                                //identify mapping which is associated to selected parent key
                                if (selectedMapping.ParentKey === selectedParentKey) {
                                    selectedMappingChildData.sort(internalQueryBuilder.commonFunctions.getSortedArray('Value'));
                                    // loop through all child
                                    for (var j = 0; j < childNodeLength; j++) {
                                        returnOptionString = returnOptionString + "<option value=" + selectedMappingChildData[j].Key + ">" + selectedMappingChildData[j].Value + "</option>";
                                    }
                                    return returnOptionString;
                                }
                            } else {
                                // loop through all child
                                for (var j = 0; j < childNodeLength; j++) {
                                    allChildDataArray.push(selectedMappingChildData[j]);
                                }
                            }
                        }
                    }

                    if (allChildDataArray) {
                        allChildDataArray.sort(internalQueryBuilder.commonFunctions.getSortedArray('Value'));
                        var allChildArrayLength = allChildDataArray.length;
                        if (allChildArrayLength > 0) {
                            for (var j = 0; j < allChildArrayLength; j++) {
                                returnOptionString = returnOptionString + "<option value=" + allChildDataArray[j].Key + ">" + allChildDataArray[j].Value + "</option>";
                            }
                        }
                    }

                    return returnOptionString;
                },

                //analyze child
                analyzeChild: function (inUseRule) {
                    var childUpdated = false;
                    if (inUseRule) {
                        var firstParentRule = internalQueryBuilder.parentChildFunctionality.getFirstParentRuleOfGroup(inUseRule);

                        // if in use rule is a parent
                        if (inUseRule.filter.childId) {
                            //if in use rule and first parent are same, then we need to populate children.
                            if (firstParentRule.id === inUseRule.id) {

                                // ex: State
                                var childId = inUseRule.filter.childId,
                                    parentRuleLength = inUseRule.parent.rules.length;

                                // iterate through all the rules in same group
                                for (var i = 0; i < parentRuleLength; i++) {
                                    var rule = inUseRule.parent.rules[i];
                                    //select child in group whiteout considering nested group rules.
                                    if (rule && rule.filter && rule.level === inUseRule.level && rule.filter.id === childId) {
                                        internalQueryBuilder.parentChildFunctionality.refreshChildDataBasedOnParent(inUseRule, rule);
                                        childUpdated = true;
                                    }
                                }

                                // if child not found then look for grand children or parents.
                                if (!childUpdated) {
                                    internalQueryBuilder.parentChildFunctionality.refreshHirachey(inUseRule);
                                }
                            }
                        } else {
                            if (firstParentRule && (firstParentRule.level === inUseRule.level)) {
                                internalQueryBuilder.parentChildFunctionality.refreshChildDataBasedOnParent(firstParentRule, inUseRule);
                            } else {
                                internalQueryBuilder.parentChildFunctionality.refreshHirachey(inUseRule);
                            }
                        }
                    }
                },
                /**
                 * Update the grand children of current rule.
                 * 
                 * @param {Rule} currentRule 
                 * @param {string} childId 
                 * @param {string} parentKey 
                 */
                updateChildren: function (currentRule, childId, parentKey) {
                    var parentUtil = internalQueryBuilder.parentChildFunctionality;

                    // get all the filters in query builder.
                    var allFilters = parentUtil.getFiltersByRule(currentRule);

                    // get all fiters which could be a child of current rule.
                    var childFilters = allFilters.filter(function (filter) {
                        return filter.id === childId;
                    });

                    // get all the child rule of current rule.
                    var childRules = currentRule.parent.rules.filter(function (rule) {
                        return childFilters.filter(function (childFilter) {
                            return childFilter.id === rule.filter.id;
                        }).length > 0;
                    });

                    // only if current rule has no childre then look for grand child.
                    if (childRules.length === 0) {

                        // get all the rule which is based of grand child filter.
                        var grandChildRules = currentRule.parent.rules.filter(function (rule) {
                            return childFilters.filter(function (childFilter) {
                                return childFilter.childId === rule.filter.id;
                            }).length > 0;
                        });

                        // if grand child rules exists, then update.
                        if (grandChildRules.length) {
                            grandChildRules.map(function (grandChildRule) {

                                // get the filter of the rule.
                                var grandChildFilter =
                                    childFilters.filter(function (currentGrandChild) {
                                        return currentGrandChild.childId === grandChildRule.filter.id;
                                    });

                                // get parent data mapping of the grand child rule. ex :- all US states.
                                var parentMapping = grandChildFilter[0].parentChildFilterMapping.filter(function (parentDataMapping) {
                                    return parentDataMapping.ParentKey === parentKey;
                                });

                                // get all grand child data mapping of grand child rule. ex :- all NY counties.
                                var grandChildMapping = grandChildRule.filter.parentChildFilterMapping.filter(function (grandChild) {
                                    var isChildData = false;
                                    parentMapping[0].ChildDataList.map(function (childData) {
                                        if (childData.Key === grandChild.ParentKey) {
                                            isChildData = true;
                                        }
                                    });

                                    return isChildData;
                                });

                                var grandChildOptionListString = '';

                                // aggregrate all grand child data of current rule. ex :- counties of the country.
                                parentMapping[0].ChildDataList.map(function (childData) {
                                    grandChildOptionListString += internalQueryBuilder.parentChildFunctionality.getOptionListString(childData.Key, grandChildMapping);
                                });

                                internalQueryBuilder.commonFunctions.rebindSelectInput(grandChildRule, grandChildOptionListString);
                            });
                        }
                    }
                },

                /**
                 * Update parent dropdown to propagate the changes to children.
                 * 
                 * @param {Rule} currentRule The currently updated rule.
                 * @param {string} parentId The parent id of the rule.
                 */
                updateParents: function (currentRule, parentId) {
                    var parentUtil = internalQueryBuilder.parentChildFunctionality;

                    /**
                     * get all the filters in query builder.
                     * @type {Array<any>}
                     */
                    var allFilters = parentUtil.getFiltersByRule(currentRule);

                    /**
                     * get all fiters which could be a parent of current rule.
                     * @type {Array<any>}
                     */
                    var parentFilters = allFilters.filter(function (filter) {
                        return filter.id === parentId;
                    });

                    /**
                     * get all the parent rules of current rule.
                     * @type {Array<any>}
                     */
                    var parentRules = currentRule.parent.rules.filter(function (rule) {
                        return parentFilters.filter(function (parentFilter) {
                            return parentFilter.id === rule.filter.id;
                        }).length > 0;
                    });

                    // if parent rules are not present, then look for grand parents.
                    if (parentRules.length === 0) {
                        /**
                         * get all the rules which is based of grand parent filters.
                         * @type {Array<any>}
                         */
                        var grandParentRules = currentRule.parent.rules.filter(function (rule) {
                            return parentFilters.filter(function (parentFilter) {
                                return parentFilter.parentId === rule.filter.id;
                            }).length > 0;
                        });

                        // if grand parent rules exists, then update.
                        if (grandParentRules.length) {

                            grandParentRules.map(function (grandParentRule) {
                                // fire change event of grand parent, then query builder will update the child rules.
                                // make sure update happen only once per child rule change.
                                if (grandParentRule.filter.updateHash === undefined || grandParentRule.filter.updateHash !== currentRule.filter.updateHash) {
                                    grandParentRule.$el.find(internalQueryBuilder.config.constant.select).last().change();
                                    var hash = new Date();
                                    grandParentRule.filter.updateHash = hash;
                                    currentRule.filter.updateHash = hash;
                                }
                            });
                        }
                    }

                },

                /**
                 * Refresh the rule hirachy if current rule has children
                 * or if current rule is a decendent of a rule.
                 * 
                 * @param {any} currentRule The changed rule. 
                 */
                refreshHirachey: function (currentRule) {
                    if (!currentRule) {
                        return;
                    }

                    /**
                     * @type {string}
                     */
                    var parentKey = currentRule.value;

                    /**
                     * @type {string}
                     */
                    var childId = currentRule.filter.childId;

                    /**
                     * @type {string}
                     */
                    var parentId = currentRule.filter.parentId;

                    /**
                     * @type {Function}
                     */
                    var parentUtil = internalQueryBuilder.parentChildFunctionality;

                    // if current rule could have children, the update them.
                    if (childId) {
                        parentUtil.updateChildren(currentRule, childId, parentKey);
                    }

                    // if current rule is child then, update this based on parents.
                    if (parentId) {
                        parentUtil.updateParents(currentRule, parentId);
                    }

                },

                //refresh child data based on parent
                refreshChildDataBasedOnParent: function (parentRule, childRule) {
                    var parentKey = parentRule.value;
                    var optionListString = internalQueryBuilder.parentChildFunctionality.getOptionListString(parentKey, childRule.filter.parentChildFilterMapping);
                    internalQueryBuilder.commonFunctions.rebindSelectInput(childRule, optionListString);
                },

                //display all child data
                displayAllChildData: function (childRule) {
                    var allOptionListString = internalQueryBuilder.parentChildFunctionality.getOptionListString(null, childRule.filter.parentChildFilterMapping),
                        // get child control
                        $childInput = childRule.$el.find(internalQueryBuilder.config.selectors.rule_value_container);
                    // if child node exist
                    if ($childInput && $childInput.length > 0) {
                        var $selectedChildInput = $childInput.find(internalQueryBuilder.config.constant.select);
                        if ($selectedChildInput) {
                            $selectedChildInput.empty();
                            $selectedChildInput.html(allOptionListString);
                        }
                    }
                },

                //get first parent rule of group
                getFirstParentRuleOfGroup: function (inUseRule) {
                    var parentId = null,
                        ruleLength = inUseRule.parent.rules.length,
                        rule = null;

                    // select in use rule as parent if child id exist
                    if (inUseRule.filter.childId) {
                        // select in use rule as parent
                        parentId = inUseRule.filter.id;
                    } else {
                        // when child. get it's parent filter id
                        parentId = inUseRule.filter.parentId;
                    }

                    //loop through all loops
                    for (var i = 0; i < ruleLength; i++) {
                        rule = inUseRule.parent.rules[i];
                        if (rule.filter && (rule.level === inUseRule.level) && (parentId === rule.filter.id)) {
                            return rule;
                        }
                    }

                    return null;
                },

                //Get first and second parent
                getFirstAndSecondParent: function (toBeDeleteRule) {
                    var returnObject = {
                            firstParentRule: null,
                            secondParentRule: null
                        },
                        parentRuleLength = toBeDeleteRule.parent.rules.length;

                    // iterate parent rules
                    for (var i = 0; i < parentRuleLength; i++) {

                        var rule = toBeDeleteRule.parent.rules[i];

                        if (rule.filter && (rule.level === toBeDeleteRule.level) && (toBeDeleteRule.filter.id === rule.filter.id)) {
                            if (!returnObject.firstParentRule) {
                                returnObject.firstParentRule = rule;
                            } else if (returnObject.firstParentRule && !returnObject.secondParentRule) {
                                returnObject.secondParentRule = rule;
                                break;
                            }
                        }
                    }

                    return returnObject;
                }
            },

            //common functionality
            commonFunctions: {

                //rebind select input with given option string
                rebindSelectInput: function (rule, optionListString) {
                    if (rule) {
                        var childElement = rule.$el;
                        if (childElement) {
                            var $selectInputContainer = childElement.find(internalQueryBuilder.config.selectors.rule_value_container);
                            if ($selectInputContainer) {
                                var $selectedChildInput = $selectInputContainer.find(internalQueryBuilder.config.constant.select);
                                if ($selectedChildInput) {
                                    $selectedChildInput.empty();
                                    if (optionListString) {
                                        $selectedChildInput.html(optionListString).change();
                                    } else {
                                        if (rule) {
                                            internalQueryBuilder.commonFunctions.generateDropDownEmptyErrorMessagePopup($(childElement.closest('.query-builder')));
                                            rule.drop();
                                        }
                                    }
                                }
                            }
                        }
                    }
                },

                generateDropDownEmptyErrorMessagePopup: function ($queryBuilderDiv) {
                    var popupContainerDivId = internalQueryBuilder.config.selectors.queryBuilderDropdownDataEmptyErrorPopupDiv,
                        popupContainer = $queryBuilderDiv.siblings('#' + popupContainerDivId);
                    if (popupContainer && popupContainer.length > 0) {
                        showlightbox(popupContainerDivId);
                    } else {
                        $queryBuilderDiv.after(
                            $('<div/>', {
                                'id': internalQueryBuilder.config.selectors.queryBuilderDropdownDataEmptyErrorPopupDiv,
                                'class': 'popup_content'
                            })
                            .append(
                                $('<div/>', {
                                    'class': 'popup-header'
                                })
                                .append($('<span/>', {
                                    text: 'Filter is removed'
                                }))
                                .append($('<a/>', {
                                    'href': '#',
                                    'class': 'txt-close',
                                    'onclick': 'closelightbox("queryBuilderDropdownDataEmptyErrorPopup"); return false;',
                                    'html': '&times;'
                                }))
                            )
                            .append($('<div/>', {
                                    'class': 'popup-pinner'
                                })
                                .append($('<div>Filter is removed due to empty data.</div>'))
                                .append($('<div/>', {
                                        'class': 'popup_btnWrapper'
                                    })
                                    .append($('<input/>', {
                                        'value': 'Ok',
                                        'type': 'button',
                                        'class': 'btn right-floating btn-cancel',
                                        'onclick': 'closelightbox("queryBuilderDropdownDataEmptyErrorPopup"); return false;'
                                    }))
                                )
                            )
                        );
                        showlightbox(popupContainerDivId);
                    }
                },

                //get sorted array based on input property
                getSortedArray: function propComparator(prop) {
                    return function (item1, item2) {
                        var a = item1[prop].toLowerCase(),
                            b = item2[prop].toLowerCase();
                        if (a < b) {
                            return -1;
                        }
                        if (a > b) {
                            return 1;
                        }
                        return 0;
                    };
                },

                //get option list string based on given values
                getOptionListString: function (filterId, filterValues) {
                    var returnOptionString = "",
                        allOptionArray = [];
                    if (filterId && filterValues) {
                        for (var key in filterValues) {
                            var optionObject = {};
                            optionObject.id = key;
                            optionObject.value = filterValues[key];
                            allOptionArray.push(optionObject);
                        }

                        if (allOptionArray) {
                            allOptionArray.sort(internalQueryBuilder.commonFunctions.getSortedArray('value'));

                            var allOptionArrayLength = allOptionArray.length;

                            if (filterId === "Country") {
                                allOptionArray.moveItem('value', "USA - US", 0);
                                allOptionArray.moveItem('value', "Canada - CA", 1);
                                allOptionArray.moveItem('value', "Mexico - MX", 2);
                            }

                            if (allOptionArrayLength > 0) {
                                for (var j = 0; j < allOptionArrayLength; j++) {
                                    returnOptionString = returnOptionString + "<option value=" + allOptionArray[j].id + ">" + allOptionArray[j].value + "</option>";
                                }
                            }

                        }
                    }
                    return returnOptionString;
                },

                //enable Disable submit button based on selection criteria
                handleSubmitButton: function ($element) {
                    var $submitButton = $(internalQueryBuilder.config.selectors.submitButton);
                    if ($submitButton) {
                        $submitButton.attr('disabled', !$element.queryBuilder('validate'));
                    }
                }
            },

            //caching
            cacheData: function ($element, cacheData) {
                // if valid data
                if (cacheData) {
                    $element.data(internalQueryBuilder.config.constant.cache_key, cacheData);
                } else {
                    $element.data(internalQueryBuilder.config.constant.cache_key, {});
                }
            },

            //register events
            registerEvents: function ($element, firstArgument) {

                //if event data exist
                if (firstArgument.event) {
                    var event = firstArgument.event;
                    internalQueryBuilder.cacheData($element, event, internalQueryBuilder.config.constant.cache_key);
                } else {
                    internalQueryBuilder.cacheData($element, {}, internalQueryBuilder.config.constant.cache_key);
                }

                // after create rule input event
                $element.on(internalQueryBuilder.config.event.afterCreateRuleInput, function (e, rule, error, value) {

                    var eventData = $element.data(internalQueryBuilder.config.constant.cache_key);

                    // if property exist
                    if (eventData.beforeCreateRuleEvent) {
                        eventData.beforeCreateRuleEvent(e, rule, error, value);
                    } else {
                        var $submitButton = $(internalQueryBuilder.config.selectors.submitButton);
                        if ($submitButton) {
                            $submitButton.attr('disabled', false);
                        }
                    }

                    // if property exist
                    if (eventData.createRuleEvent) {
                        eventData.createRuleEvent(e, rule, error, value);
                    } else {
                        rule.addRule = true;
                        var selectedFilter = rule.filter,
                            selectedFilterId = "",
                            selectedFilterValues = null;

                        if (selectedFilter) {
                            if (selectedFilter.input === "select" && selectedFilter.sortInAlphabetically) {
                                selectedFilterValues = selectedFilter.values;
                                selectedFilterId = selectedFilter.id;
                                var optionListString = internalQueryBuilder.commonFunctions.getOptionListString(selectedFilterId, selectedFilterValues, rule);
                                internalQueryBuilder.commonFunctions.rebindSelectInput(rule, optionListString);
                            }
                        }
                    }

                    // if property exist
                    if (eventData.afterCreateRuleEvent) {
                        eventData.afterCreateRuleEvent(e, rule, error, value);
                    }
                });

                //after update rule value event
                $element.on(internalQueryBuilder.config.event.afterUpdateRuleValue, function (e, rule, error, value) {

                    var eventData = $element.data(internalQueryBuilder.config.constant.cache_key);

                    // if property exist
                    if (eventData.beforeUpdateRuleEvent) {
                        eventData.beforeUpdateRuleEvent(e, rule, error, value);
                    }

                    // if property exist
                    if (eventData.updateRuleEvent) {
                        eventData.updateRuleEvent(e, rule, error, value);
                    } else {
                        var childId = rule.filter.childId;

                        if (rule.filter.parentId || childId) {
                            //Create parent or child
                            if (rule.addRule) {
                                rule.addRule = false;
                                internalQueryBuilder.parentChildFunctionality.analyzeChild(rule);
                            } else if (!rule.addRule && childId) {
                                //Value change event of parent
                                internalQueryBuilder.parentChildFunctionality.analyzeChild(rule);
                            }
                        }

                        rule.addRule = false;
                    }

                    // if property exist
                    if (eventData.afterUpdateRuleEvent) {
                        eventData.afterUpdateRuleEvent(e, rule, error, value);
                    }

                });

                //before delete rule event
                $element.on(internalQueryBuilder.config.event.beforeDeleteRule, function (e, toBeDeleteRule, error, value) {

                    // get event data from cache
                    var eventData = $element.data(internalQueryBuilder.config.constant.cache_key);

                    // if property exist
                    if (eventData.beforeDeleteRuleEvent) {
                        eventData.beforeDeleteRuleEvent(e, toBeDeleteRule, error, value);
                    }

                    // if property exist
                    if (eventData.deleteRuleEvent) {
                        eventData.deleteRuleEvent(e, toBeDeleteRule, error, value);
                    } else {
                        //handles only filter deletion
                        if (toBeDeleteRule.filter) {

                            var childId = toBeDeleteRule.filter.childId,
                                parentRuleLength = toBeDeleteRule.parent.rules.length;

                            //Parent
                            if (childId) {
                                var firstSecondParent = internalQueryBuilder.parentChildFunctionality.getFirstAndSecondParent(toBeDeleteRule);

                                if (!firstSecondParent.secondParentRule) {
                                    for (var i = 0; i < parentRuleLength; i++) {
                                        var childRule = toBeDeleteRule.parent.rules[i];
                                        if (childRule.filter && childRule.level === toBeDeleteRule.level && childRule.filter.id === childId) {
                                            internalQueryBuilder.parentChildFunctionality.displayAllChildData(childRule);
                                        }
                                    }
                                } else if (firstSecondParent.secondParentRule && toBeDeleteRule.id === firstSecondParent.firstParentRule.id) {

                                    for (var i = 0; i < parentRuleLength; i++) {
                                        var childRule = toBeDeleteRule.parent.rules[i];
                                        if (childRule.filter && childRule.level === toBeDeleteRule.level && childRule.filter.id === childId) {
                                            internalQueryBuilder.parentChildFunctionality.refreshChildDataBasedOnParent(firstSecondParent.secondParentRule, childRule);
                                        }
                                    }
                                }
                            }
                        }
                    }

                    // if property exist
                    if (eventData.afterDeleteRuleEvent) {
                        eventData.afterDeleteRuleEvent(e, toBeDeleteRule, error, value);
                    }
                });

                //Handling the key events to enable/disable submit button
                $element.on(internalQueryBuilder.config.event.keyPressEvent, function (event) {
                    var keyCode = event.which || event.keyCode;
                    if (keyCode === 13) {
                        var currentElement = document.activeElement;

                        //This will ensure that the entered data in the text box is applied to the query builder
                        window.setTimeout(function () {
                            currentElement.blur();
                        }, 10);
                        var currentElement = document.activeElement;
                        window.setTimeout(function () {
                            $(internalQueryBuilder.config.selectors.submitButton).click();
                        }, 15);

                    }
                });
            }
        };

        // call init method
        return internalQueryBuilder.init(this, arguments);
    };
}(jQuery));

Array.prototype.moveItem = function (property, value, newIndex) {

    if (newIndex !== undefined) {
        var old_index = -1;
        for (var i = 0; i < this.length; i += 1) {
            if (this[i][property] === value) {
                old_index = i;
            }
        }
        while (old_index < 0) {
            old_index += this.length;
        }
        while (newIndex < 0) {
            newIndex += this.length;
        }
        if (newIndex >= this.length) {
            var k = newIndex - this.length;
            while ((k--) + 1) {
                this.push(undefined);
            }
        }
        this.splice(newIndex, 0, this.splice(old_index, 1)[0]);
    }
    return this; // for testing purposes
};