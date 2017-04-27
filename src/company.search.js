//<-- version HYP_PH2_1.0.1 -->
var CompanySearch = { // company search name space
    config: {}, // configuration    
    event: {}, //static events 
    dataManager: {}, //data manager
    webService: {}, //service          
    render: {}, // render
    exception: {} // exception
};

CompanySearch.config = (function () {
    var privateConstant = {
            serviceUrl: '/_vti_bin/BlackjackService/CompanyManagementServices.svc/'
        },

        privateAjaxDataType = {
            arrayOType: 'Array',
            objectType: 'Object'
        },

        privateServiceDataType = {
            xml: 'xml',
            json: 'json'
        },

        privateMethodName = {
            loadCompanySearchFilterServiceMethod: 'LoadCompanySearchInitialData',
            loadGridDataServiceMethod: 'GetCompanySearchData',
            deactivateNonDealerCompany: 'DeactivateNonDealerCompany',
            reactivateNonDealerCompany: 'ReactivateNonDealerCompany',
            getDistributorBranchSource: 'GetDistributorBranchSource',
            exportCompanySearchData: 'CompanySearchExport'
        },

        privateRequestType = {
            get: 'GET',
            post: 'Post'
        },

        privateKey = {
            companySearchHtmlContent: "InitialCompanySearchHtmlContent",
            legalEntityList: "InitialCompanySearchLegalEntity",
            distributorBrancheList: "CompanySearchDistributorBranches",
            searchCriteriaQueryBuilder: "SearchCriteriaQueryBuilder",
            editCompanyPageUrlKey: "EditCompanyPageUrlKey"
        },

        privateSelectors = {
            companySearchMainWrapper: "#companySearchMainWrapper",
            initialDivId: "#initialDivHolder",
            legalEntityComboDropdown: "#legalEntityComboDropdown",
            branchComboDropdown: "#branchComboDropdown",
            companySearchFilterDiv: "#companySearchFilterDiv",
            companySearchGridDiv: "#companySearchGrid",
            companySearchSubmitButton: "#companySearchSubmit",
            companySearchSuccessMessageDiv: "#companySearchGridhSuccessMessageDiv",
            companySearchErrorMessageDiv: "#companySearchGridErrorMessageDiv",
            filterErrorMessageDivDiv: "#loadErrorMessageDiv",
            filterSuccessMessageDivDiv: "#filterSuccessMessageDiv",
            legalEntityWrapperDiv: "#legalEntityWrapperDiv",
            companyExportButton: "#companyExportButton",
            companySearchGridRowCountMessageDiv: "#companySearchGridRowCountMessage",
            companySearchGridContainerDiv: "#companySearchGridContainerDiv",
            manageRelationshipPopupDiv: "manageRelationshipPopupDiv",
            companyReactivatePopup: "companyReactivatePopup",
            companyDeactivatePopup: "companyDeactivatePopup",
            reActivateConfirmationMessageDiv: "#reActivateConfirmationMessageDiv",
            deActivateConfirmationMessageDiv: "#deActivateConfirmationMessageDiv",
            companyDeactivateConfirmButton: "#companyDeactivateConfirmButton",
            companyReactivateConfirmButton: "#companyReactivateConfirmButton",
            companySearchBusyImageDiv: "#companySearchBusyImageDiv",
            companySearchBusyWrapperDiv: "#companySearchBusyWrapperDiv",
            companySearchInitialBusyWrapperDiv: '#companySearchInitialBusyWrapperDiv',
            companySearchInitialBusyImageDiv: '#companySearchInitialBusyImageDiv',
            errorExceptionMessageDiv: "#serverExceptionErrorMessage",
            manageRelationshipPopupBindDiv: '#ManageRelationshipPopupBindDiv'
        },

        privateSelectorType = {
            classSelecter: '.',
            idSelecter: '#'
        };

    return {
        constant: privateConstant,
        serviceDataType: privateServiceDataType,
        ajaxDataType: privateAjaxDataType,

        methodName: privateMethodName,
        requestType: privateRequestType,
        key: privateKey,
        selectors: privateSelectors,
        selectorType: privateSelectorType
    };
}());

CompanySearch.webService = (function () {
    // call web service
    var privateCall = function (serviceMethod, requestType, dataType, data, callSuccessMethod, contextObject) {
        var requestData;
        if (data) {
            requestData = data;
        } else {
            requestData = '';
        }

        $.ajax({
            url: CompanySearch.config.constant.serviceUrl + serviceMethod,
            context: contextObject,
            dataType: dataType,
            cache: false,
            beforeSend: function () {
                $(CompanySearch.config.selectors.companySearchBusyWrapperDiv).show();
                $(CompanySearch.config.selectors.companySearchBusyImageDiv).show();
            },
            data: requestData,
            contentType: "application/json",
            type: requestType,
            success: function (data) {
                callSuccessMethod(data, this);
            },
            error: function (errorData) {
                console.log(errorData.responseText);
            },
            complete: function () {
                $(CompanySearch.config.selectors.companySearchBusyImageDiv).hide();
                $(CompanySearch.config.selectors.companySearchBusyWrapperDiv).hide();
            }
        });

    };
    return {
        // call web service
        call: function (serviceMethod, requestType, dataType, data, callSuccessMethod, context) {
            privateCall(serviceMethod, requestType, dataType, data, callSuccessMethod, context);
        }
    };
}());

CompanySearch.event = (function () {
    var privatePageLoad = function () {
            var serviceMethod = CompanySearch.config.methodName.loadCompanySearchFilterServiceMethod,
                requestType = CompanySearch.config.requestType.post,
                dataType = CompanySearch.config.serviceDataType.json,
                callSuccessMethod = CompanySearch.render.bindCompanySearchInitialData,
                data = '';
            CompanySearch.webService.call(serviceMethod, requestType, dataType, data, callSuccessMethod, null);
        },

        privateSearchSubmit = function (submitButton) {
            var $submitButton = $(submitButton),
                filterElement = $submitButton.closest('.query-builder-wrapper').find(CompanySearch.config.selectors.companySearchFilterDiv),
                whereClause = filterElement.queryBuilder('getSQL', false),
                serviceMethod = CompanySearch.config.methodName.loadGridDataServiceMethod,
                requestType = CompanySearch.config.requestType.post,
                dataType = CompanySearch.config.serviceDataType.json,
                callSuccessMethod = CompanySearch.render.bindSearchResultGrid,
                companyColumnIdToSubmit = null,
                $legalEntityComboDropdown = $(CompanySearch.config.selectors.legalEntityComboDropdown),
                $branchComboDropdown = $(CompanySearch.config.selectors.branchComboDropdown),
                $companySearchGrid = $(CompanySearch.config.selectors.companySearchGridDiv);

            //clears all selected indexes.
            if ($companySearchGrid) {
                $companySearchGrid.jqxGrid('clearselection');
                var pageSize = $companySearchGrid.jqxGrid('pagesize');
                if (typeof (pageSize) == "undefined" && sessionStorage.length !== 0 && sessionStorage.getItem("pageCount") !== null) {
                    if (!isNaN(parseInt(sessionStorage.getItem("pageCount")))) {
                        CompanySearch.dataManager.companySearchGridPageSize = parseInt(sessionStorage.getItem("pageCount"));
                    }
                }
                if (pageSize && pageSize > 0) {
                    CompanySearch.dataManager.companySearchGridPageSize = pageSize;
                }
            }
            if (CompanySearch.dataManager.getIsInternal) {
                if ($branchComboDropdown) {
                    var branchSelectedItem = $branchComboDropdown.jqxComboBox('getSelectedItem');
                    if (branchSelectedItem) {
                        companyColumnIdToSubmit = branchSelectedItem.value;
                    }
                }
                if (!companyColumnIdToSubmit && $legalEntityComboDropdown) {
                    var legalEntitySelectedItem = $legalEntityComboDropdown.jqxComboBox('getSelectedItem');
                    if (legalEntitySelectedItem) {
                        companyColumnIdToSubmit = legalEntitySelectedItem.value;
                    }
                }
            } else {
                if ($legalEntityComboDropdown) {
                    var legalEntitySelectedItem1 = $legalEntityComboDropdown.jqxComboBox('getSelectedItem');
                    if (legalEntitySelectedItem1) {
                        companyColumnIdToSubmit = legalEntitySelectedItem1.value;
                    }
                }
            }

            if (!whereClause.sql) {
                $(CompanySearch.config.selectors.companySearchGridContainerDiv).css("display", "none");
            } else {
                var data = JSON.stringify({
                    companyId: companyColumnIdToSubmit,
                    whereClause: whereClause.sql
                });
                CompanySearch.webService.call(serviceMethod, requestType, dataType, data, callSuccessMethod, null);
            }
        },

        privateLeagalEntityChange = function (event) {
            var args = event.args;
            if (args) {
                var item = args.item;
                if (item) {
                    var companyId = item.value;
                    if (companyId) {
                        var serviceMethod = CompanySearch.config.methodName.getDistributorBranchSource,
                            requestType = CompanySearch.config.requestType.post,
                            dataType = CompanySearch.config.serviceDataType.json,
                            callSuccessMethod = CompanySearch.render.bindDistributorBranch,
                            data = JSON.stringify({
                                companyId: companyId
                            });
                        CompanySearch.webService.call(serviceMethod, requestType, dataType, data, callSuccessMethod, companyId);
                    }
                }
            } else {
                var $distributorBrancheDropDown = $(CompanySearch.config.selectors.branchComboDropdown);
                $distributorBrancheDropDown.jqxComboBox({
                    dropDownWidth: 480,
                    height: 28,
                    width: 480,
                });
                $distributorBrancheDropDown.jqxComboBox('clear');
                $distributorBrancheDropDown.jqxComboBox({
                    disabled: true
                });
            }
        },

        privateExportCompanySearchData = function () {
            CompanySearch.render.clearMessageDiv();
            var $companySearchGrid = $(CompanySearch.config.selectors.companySearchGridDiv),
                selectedRowsToExport = [],
                exportDataUrl = CompanySearch.dataManager.getServiceHostedServerName() +
                CompanySearch.config.constant.serviceUrl +
                CompanySearch.config.methodName.exportCompanySearchData,
                selectedRowIndexes = $companySearchGrid.jqxGrid('getselectedrowindexes');
            CompanySearch.dataManager.setExportCompanyIds(selectedRowIndexes);

            for (var i = 0; i < selectedRowIndexes.length; i++) {
                selectedRowsToExport.push($companySearchGrid.jqxGrid('getrowdata', selectedRowIndexes[i]));
            }

            $companySearchGrid.jqxGrid('exportdata', 'csv', 'jqxGrid', false, selectedRowsToExport, true, exportDataUrl);
        };

    return {
        pageLoad: function () {
            privatePageLoad();
        },

        searchSubmit: function (submitButton) {
            privateSearchSubmit(submitButton);
        },

        viewCompany: function (viewButton) {
            var $viewButton = $(viewButton),
                companyId = $viewButton.attr('companyid');
            window.open(CompanySearch.dataManager.getServiceHostedServerName().trim() + CompanySearch.dataManager.getEditCompanyUrl().trim() + companyId, '_blank');
        },

        reactivateCompany: function (reactivateButton) {
            var $reactivateButton = $(reactivateButton),
                companyId = $reactivateButton.attr('companyid'),
                companyTypeId = $reactivateButton.attr('companytypeid'),
                companyDisplayMessage = $reactivateButton.attr('companydisplaymessage');

            if (CompanySearch.dataManager.isManagesRelationshipPopup(companyTypeId)) {
                var isNonBranded = true;
                if (CompanySearch.dataManager.nonBrandedCompanyTypeId !== companyTypeId) {
                    isNonBranded = false;
                }

                var dealerCompany = {
                    companyId: companyId,
                    services: [],
                    typeId: companyTypeId,
                    isPopup: true,
                    categoryId: -1,
                    isRelationshipEdit: true,
                    parentIsCompanySearch: true,
                    parentDivId: CompanySearch.config.selectors.manageRelationshipPopupBindDiv,
                    isNonBrandedCompany: isNonBranded,
                    busyWrapperDiv: CompanySearch.config.selectors.companySearchBusyWrapperDiv,
                    busyImageDiv: CompanySearch.config.selectors.companySearchBusyImageDiv
                };
                ManageRelationships.events.loadManageRelationshipScreen(dealerCompany);
                closelightbox(CompanySearch.config.selectors.companyReactivatePopup);
            } else {
                var serviceMethod = CompanySearch.config.methodName.reactivateNonDealerCompany,
                    requestType = CompanySearch.config.requestType.post,
                    dataType = CompanySearch.config.serviceDataType.json,
                    callSuccessMethod = CompanySearch.render.bindCompanyReactivateData,
                    data = JSON.stringify({
                        companyId: companyId,
                        companyDisplayMessage: companyDisplayMessage
                    }),
                    reactivateContext = {
                        companyId: companyId,
                        companyDisplayMessage: companyDisplayMessage
                    };
                closelightbox(CompanySearch.config.selectors.companyReactivatePopup);
                CompanySearch.webService.call(serviceMethod, requestType, dataType, data, callSuccessMethod, reactivateContext);
            }
        },

        deactivateCompany: function (deactivateButton) {
            var $deactivateButton = $(deactivateButton),
                companyId = $deactivateButton.attr('companyid'),
                companyTypeId = $deactivateButton.attr('companytypeid'),
                companyDisplayMessage = $deactivateButton.attr('companydisplaymessage');

            //if (CompanySearch.dataManager.isManagesRelationshipPopup(companyTypeId)) {
            //    var isNonBranded = true;
            //    if (CompanySearch.dataManager.nonBrandedCompanyTypeId !== companyTypeId)
            //        isNonBranded = false;
            //
            //    var dealerCompany = {
            //        companyId: companyId,
            //        services: [],
            //        typeId: '',
            //        isPopup: true,
            //        categoryId: null,
            //        isRelationshipEdit: true,
            //        parentIsCompanySearch: true,
            //        parentDivId: CompanySearch.config.selectors.manageRelationshipPopupBindDiv,
            //        isNonBrandedCompany: isNonBranded,
            //        busyWrapperDiv: CompanySearch.config.selectors.companySearchBusyWrapperDiv,
            //        busyImageDiv: CompanySearch.config.selectors.companySearchBusyImageDiv
            //    };
            //    ManageRelationships.events.loadManageRelationshipScreen(dealerCompany);
            //    closelightbox(CompanySearch.config.selectors.companyDeactivatePopup);
            //}
            //else {
            var serviceMethod = CompanySearch.config.methodName.deactivateNonDealerCompany,
                requestType = CompanySearch.config.requestType.post,
                dataType = CompanySearch.config.serviceDataType.json,
                callSuccessMethod = CompanySearch.render.bindCompanyDeactivateData,
                data = JSON.stringify({
                    companyId: companyId,
                    companyDisplayMessage: companyDisplayMessage
                }),
                deactivateContext = {
                    companyId: companyId,
                    companyDisplayMessage: companyDisplayMessage
                };
            closelightbox(CompanySearch.config.selectors.companyDeactivatePopup);
            CompanySearch.webService.call(serviceMethod, requestType, dataType, data, callSuccessMethod, deactivateContext);
            //}
        },

        leagalEntityChange: function (event) {
            privateLeagalEntityChange(event);
        },

        exportCompanySearchData: function () {
            privateExportCompanySearchData();
        },

        showPopUpReactivateCompany: function (reactivateImage) {
            showlightbox(CompanySearch.config.selectors.companyReactivatePopup);
            var $reactivateButton = $(reactivateImage),
                companyId = $reactivateButton.attr('companyid'),
                companyTypeId = $reactivateButton.attr('companytypeid'),
                companyDisplayId = $reactivateButton.attr('companydisplayid'),
                companyDisplayName = $reactivateButton.attr('companydisplayname'),
                $reactivatePopUpConfirmButton = $reactivateButton.closest(CompanySearch.config.selectors.companySearchMainWrapper).find(CompanySearch.config.selectors.companyReactivateConfirmButton),
                messageValue = null;
            $reactivatePopUpConfirmButton.attr('companyid', companyId);
            $reactivatePopUpConfirmButton.attr('companytypeid', companyTypeId);

            if (companyDisplayId && companyDisplayName) {
                messageValue = companyDisplayName + " - " + companyDisplayId;
                $reactivatePopUpConfirmButton.attr('companydisplaymessage', messageValue);
            }
        },

        showPopUpDeactivateCompany: function (deactivateImage) {
            showlightbox(CompanySearch.config.selectors.companyDeactivatePopup);
            var $deactivateButton = $(deactivateImage),
                companyId = $deactivateButton.attr('companyid'),
                companyTypeId = $deactivateButton.attr('companytypeid'),
                companyDisplayId = $deactivateButton.attr('companydisplayid'),
                companyDisplayName = $deactivateButton.attr('companydisplayname'),
                $deactivatePopUpConfirmButton = $deactivateButton.closest(CompanySearch.config.selectors.companySearchMainWrapper).find(CompanySearch.config.selectors.companyDeactivateConfirmButton),
                messageValue = null;
            $deactivatePopUpConfirmButton.attr('companyid', companyId);
            $deactivatePopUpConfirmButton.attr('companytypeid', companyTypeId);

            if (companyDisplayId && companyDisplayName) {
                messageValue = companyDisplayName + " - " + companyDisplayId;
                $deactivatePopUpConfirmButton.attr('companydisplaymessage', messageValue);
            }
        },
    };
}());

CompanySearch.render = (function () {
    var privateBindCompanySearchInitialData = function (data, context) {
            if (data.serviceCallSuccess) {
                CompanySearch.dataManager.setIsInternal(data.IsInternal);
                CompanySearch.dataManager.setEditCompanyUrl(data.EditCompanyPageUrlKey);
                CompanySearch.dataManager.nonBrandedCompanyTypeId = data.NonBrandedCompanyTypeId;

                var companyTypeIdString = data.PopupCompanyTypeIds,
                    companyTypeIdArray = [];
                if (companyTypeIdString) {
                    companyTypeIdArray = companyTypeIdString.split(',');
                    CompanySearch.dataManager.popupCompanyTypeIdArray = companyTypeIdArray;
                }

                privateBindHtmlContent(data);
                privateBindLegalEntity(data);
                privateBindDistributorBranch(data);
                privateSetComboDropdownVisibilty();
                privateBindFilterControl(data);

                if (data.ReActivateConfirmationMessage) {
                    $(CompanySearch.config.selectors.reActivateConfirmationMessageDiv).html(data.ReActivateConfirmationMessage);
                }
                if (data.DeActivateConfirmationMessage) {
                    $(CompanySearch.config.selectors.deActivateConfirmationMessageDiv).html(data.DeActivateConfirmationMessage);
                }
            } else {
                privateBindFilterLoadErrorMessage(data.serviceCallMessage);
                CompanySearch.render.setServerExceptionMessage(data.serverExceptionMessage);
            }
            $(CompanySearch.config.selectors.companySearchInitialBusyImageDiv).hide();
            $(CompanySearch.config.selectors.companySearchInitialBusyWrapperDiv).hide();
        },

        privateBindHtmlContent = function (data) {
            var htmlContent = data[CompanySearch.config.key.companySearchHtmlContent];
            $(CompanySearch.config.selectors.initialDivId).html(htmlContent);
        },

        privateBindCompanyDeactivateData = function (data, context) {
            if (data.serviceCallSuccess) {
                if (data.companyDeactivated) {
                    privateBindGridSuccessMessage(data.companyDeactivateMessage);
                    privateReRenderResultGrid(parseInt(context.companyId), false);
                } else {
                    privateBindGridErrorMessage(data.companyDeactivateMessage);
                }
            } else {
                privateBindGridErrorMessage(data.serviceCallMessage);
                CompanySearch.render.setServerExceptionMessage(data.serverExceptionMessage);
            }
        },

        privateBindCompanyReactivateData = function (data, context) {
            if (data.serviceCallSuccess) {
                if (data.companyReactivated) {
                    privateBindGridSuccessMessage(data.companyReactivateMessage);
                    privateReRenderResultGrid(parseInt(context.companyId), true);
                } else {
                    privateBindGridErrorMessage(data.companyReactivateMessage);
                }
            } else {
                privateBindGridErrorMessage(data.serviceCallMessage);
                CompanySearch.render.setServerExceptionMessage(data.serverExceptionMessage);
            }
        },

        privateReRenderResultGrid = function (companyId, IsReactivation) {
            var gridDataLength = CompanySearch.dataManager.getGridData().length;
            for (var i = 0; i < gridDataLength; i++) {
                var gridRowData = CompanySearch.dataManager.getGridData()[i];
                if (gridRowData.ActionData.CompanyId === companyId) {
                    if (IsReactivation) {
                        gridRowData.ActionData.Status = 'Active';
                    } else {
                        gridRowData.ActionData.Status = 'InActive';
                    }
                    var resultSourceToReBind = CompanySearch.dataManager.getJqxAdapterDataSourceToBindGrid();
                    $(CompanySearch.config.selectors.companySearchGridDiv).jqxGrid({
                        source: resultSourceToReBind
                    });
                    return;
                }
            }
        },

        privateBindGridErrorMessage = function (message) {
            if (message) {
                $(CompanySearch.config.selectors.companySearchSuccessMessageDiv).css("display", "none");
                $(CompanySearch.config.selectors.companySearchErrorMessageDiv).css("display", "block");
                $(CompanySearch.config.selectors.companySearchErrorMessageDiv).html(unescape(message));
            }
        },

        privateBindFilterLoadErrorMessage = function (message) {
            if (message) {
                $(CompanySearch.config.selectors.filterErrorMessageDivDiv).css("display", "block");
                $(CompanySearch.config.selectors.filterErrorMessageDivDiv).html(message);
            }
        },

        privateBindGridSuccessMessage = function (message) {
            if (message) {
                $(CompanySearch.config.selectors.companySearchSuccessMessageDiv).css("display", "block");
                $(CompanySearch.config.selectors.companySearchErrorMessageDiv).css("display", "none");
                $(CompanySearch.config.selectors.companySearchSuccessMessageDiv).html(unescape(message));
            }
        },

        privateBindLegalEntity = function (data) {
            if (CompanySearch.dataManager.getIsInternal()) {
                var legalEntity = data[CompanySearch.config.key.legalEntityList],
                    $leagalEntityDropDown = $(CompanySearch.config.selectors.legalEntityComboDropdown);
                if (legalEntity && legalEntity.length > 0) {
                    var legalEntitySource = {
                            datatype: "json",
                            datafields: [{
                                    name: 'Id'
                                },
                                {
                                    name: 'DisplayName'
                                }
                            ],
                            id: 'idLegalEntityComboDropdown',
                            localdata: legalEntity
                        },
                        legalEntityDataAdapter = new $.jqx.dataAdapter(legalEntitySource);
                    $leagalEntityDropDown.jqxComboBox({
                        source: legalEntityDataAdapter,
                        searchMode: 'containsignorecase',
                        displayMember: 'DisplayName',
                        dropDownWidth: 480,
                        width: 480,
                        height: 28,
                        valueMember: 'Id'
                    });
                    $leagalEntityDropDown.on('change', CompanySearch.event.leagalEntityChange);
                } else {
                    $leagalEntityDropDown.jqxComboBox({
                        dropDownWidth: 480,
                        height: 28,
                        width: 480,
                    });
                    $leagalEntityDropDown.jqxComboBox('clear');
                }
                $leagalEntityDropDown.jqxComboBox({
                    placeHolder: "Select Legal Entity"
                });
            }
        },

        privateBindDistributorBranch = function (data) {
            var distributorBranche = data[CompanySearch.config.key.distributorBrancheList],
                $distributorBrancheDropDown = $(CompanySearch.config.selectors.branchComboDropdown);

            if (distributorBranche && distributorBranche.length > 0) {
                var distributorBrancheSource = {
                        datatype: "json",
                        datafields: [{
                                name: 'Id'
                            },
                            {
                                name: 'DisplayName'
                            }
                        ],
                        id: 'idBranchComboDropdown',
                        localdata: distributorBranche
                    },
                    distributorBrancheSourceDataAdapter = new $.jqx.dataAdapter(distributorBrancheSource);

                $distributorBrancheDropDown.jqxComboBox({
                    source: distributorBrancheSourceDataAdapter,
                    searchMode: 'containsignorecase',
                    displayMember: 'DisplayName',
                    dropDownWidth: 480,
                    width: 480,
                    height: 28,
                    valueMember: 'Id'
                });
                $distributorBrancheDropDown.jqxComboBox({
                    disabled: false
                });
            } else {
                $distributorBrancheDropDown.jqxComboBox({
                    dropDownWidth: 480,
                    height: 28,
                    width: 480,
                });
                $distributorBrancheDropDown.jqxComboBox('clear');
            }
            $distributorBrancheDropDown.jqxComboBox({
                placeHolder: "Select Branch"
            });
            $distributorBrancheDropDown.jqxComboBox({
                disabled: false
            });
        },

        privateSetComboDropdownVisibilty = function () {
            if (CompanySearch.dataManager.getIsInternal()) {
                $(CompanySearch.config.selectors.branchComboDropdown).jqxComboBox({
                    disabled: true
                });
            } else {
                $(CompanySearch.config.selectors.legalEntityWrapperDiv).css("display", "none");
            }
        },

        privateBindNamedFunctions = function (filters) {
            var filters = filters.filter(function (filter) {
                if (filter.valueSetter) {
                    return true;
                } else {
                    return false;
                }
            });
            filters.map(function (filter) {
                privateSetFuncByName(filter, "valueSetter");
                privateSetFuncByName(filter, "valueGetter");
            });
        },

        privateSetFuncByName = function (reference, propName) {
            function executeFunctionByName(functionName, context /*, args */ ) {
                var namespaces = functionName.split(".");
                var func = namespaces.pop();
                for (var i = 0; i < namespaces.length; i++) {
                    context = context[namespaces[i]];
                }
                return context[func];
            };

            if (reference[propName]) {
                reference[propName] = executeFunctionByName(reference[propName], window);
            }
        },

        privateBindFilterControl = function (data) {
            var filterCriteria = data[CompanySearch.config.key.searchCriteriaQueryBuilder];
            if (filterCriteria) {
                privateBindNamedFunctions(filterCriteria.filters);
                filterCriteria.sort_filters = true;
                var $companySearchFilter = $(CompanySearch.config.selectors.companySearchFilterDiv);
                $companySearchFilter.QueryBuilderWrapper(filterCriteria);
            }
        },

        privateBindSearchGridData = function (data, context) {
            if (data.serviceCallSuccess) {
                $(CompanySearch.config.selectors.companySearchGridContainerDiv).css("display", "block");
                CompanySearch.render.clearMessageDiv();
                if (data.companySearchResultList) {
                    CompanySearch.dataManager.setGridData(data.companySearchResultList);
                    $(CompanySearch.config.selectors.companySearchGridDiv).jqxGrid({
                        source: CompanySearch.dataManager.getJqxAdapterDataSourceToBindGrid(),
                        autoheight: true,
                        selectionmode: 'checkbox',
                        pagesize: CompanySearch.dataManager.companySearchGridPageSize,
                        pagesizeoptions: ['10', '20', '50', '100', '200', '250', '500'],
                        pageable: true,
                        columnsreorder: true,
                        columnsresize: true,
                        sortable: true,
                        filterable: true,
                        showfilterrow: true,
                        filter: function (cellValue, rowData, dataField, filterGroup, defaultFilterResult) {
                            if (dataField === "DisplayId") {
                                var filters = filterGroup.getfilters();
                                for (var i = 0; i < filters.length; i++) {
                                    var filter = filters[i];
                                    var filterValue = filter.value;
                                    if ((cellValue + '').indexOf(filterValue + '') > -1) {
                                        return true;
                                    }
                                }
                                return false;
                            }
                        },
                        width: '100%',
                        ready: function () {
                            var $companyExportButton = $(CompanySearch.config.selectors.companyExportButton);
                            if ($companyExportButton) {
                                $companyExportButton.css("display", "block");
                                $companyExportButton.attr('disabled', true);
                            }
                        },
                        rendered: function (type) {
                            if (type == "full") {
                                var grid = $(CompanySearch.config.selectors.companySearchGridDiv);
                                grid.find('.jqx-grid-column-header .jqx-checkbox-default').parent().on('change', function (event) {
                                    if (false === $($(CompanySearch.config.selectors.companySearchGridDiv).find('.jqx-grid-column-header .jqx-checkbox-default').parent()).jqxCheckBox('checked')) {
                                        privateExportButtonEnable(false);
                                    } else {
                                        privateExportButtonEnable(true);
                                    }
                                });
                                grid.jqxGrid({
                                    pagesize: CompanySearch.dataManager.companySearchGridPageSize
                                });
                            } else if (type == "rows") {
                                var hiddenPage = $('input:hidden', 'div#gridpagerlistcompanySearchGrid');
                                if (hiddenPage !== null && hiddenPage !== undefined && hiddenPage.length > 0) {
                                    sessionStorage.setItem("pageCount", hiddenPage.val());
                                }
                            }
                        },
                        columns: [{
                                text: 'CompanyColumnId',
                                datafield: 'CompanyColumnId',
                                hidden: true
                            },
                            {
                                text: 'Company ID',
                                datafield: 'DisplayId',
                                width: '10%',
                                exportable: false
                            },
                            {
                                text: 'Company Name',
                                datafield: 'Name',
                                width: '36%',
                                exportable: false
                            },
                            {
                                text: 'State',
                                datafield: 'State',
                                width: '8%',
                                exportable: false
                            },
                            {
                                text: 'Country',
                                datafield: 'Country',
                                width: '10%',
                                exportable: false
                            },
                            {
                                text: 'Brands',
                                datafield: 'Brands',
                                width: '12%',
                                exportable: false
                            },
                            {
                                text: 'Company Type',
                                datafield: 'CompanyType',
                                width: '12%',
                                exportable: false
                            },
                            {
                                text: 'Action',
                                datafield: 'ActionData',
                                exportable: false,
                                width: '9.7%',
                                cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {
                                    if (value) {
                                        var viewEditHtml = '<span onclick="CompanySearch.event.viewCompany(this)" class="edit-btn action-icons" companyid="' + value.CompanyId + '" title="Edit Company"></span>',
                                            displayDeactivate = "none",
                                            displayReactivate = "none";
                                        if (value.Status === 'Active') {
                                            displayDeactivate = "block-inline";
                                        } else if (value.Status === 'InActive') {
                                            displayReactivate = "block-inline";
                                        }
                                        var deactivateHtml = '<span onclick="CompanySearch.event.showPopUpDeactivateCompany(this)" class="delete-btn action-icons" style="display:' + displayDeactivate + '" companyid="' + value.CompanyId + '" companytypeid="' + value.CompanyTypeId + '" companydisplayid="' + value.CompanyDisplayId + '" companydisplayname="' + escape(value.CompanyDisplayName) + '" title="Delete Company"></span>',
                                            reactivateHtml = '<span onclick="CompanySearch.event.showPopUpReactivateCompany(this)" class="locator-btn action-icons" style="display:' + displayReactivate + '" companyid="' + value.CompanyId + '" companytypeid="' + value.CompanyTypeId + '" companydisplayid="' + value.CompanyDisplayId + '" companydisplayname="' + escape(value.CompanyDisplayName) + '" title="Reactivate Company"></span>';
                                        return viewEditHtml + deactivateHtml + reactivateHtml;
                                    }
                                    return '';
                                }
                            }
                        ]
                    });
                }
                if (data.companySearchResultCountMessage) {
                    var $companySearchResultCountMessageDiv = $(CompanySearch.config.selectors.companySearchGridRowCountMessageDiv);
                    $companySearchResultCountMessageDiv.html(data.companySearchResultCountMessage);
                    $companySearchResultCountMessageDiv.css("display", "block");
                }
            } else {
                $(CompanySearch.config.selectors.companySearchGridContainerDiv).css("display", "none");
                privateBindGridErrorMessage(data.serviceCallMessage);
                CompanySearch.render.setServerExceptionMessage(data.serverExceptionMessage);
            }
        },

        privateExportButtonEnable = function (enable) {
            if (enable) {
                $(CompanySearch.config.selectors.companyExportButton).attr('disabled', false);
            } else {
                $(CompanySearch.config.selectors.companyExportButton).attr('disabled', true);
            }
        },

        privateClearMessageDiv = function () {
            $(CompanySearch.config.selectors.companySearchSuccessMessageDiv).css("display", "none");
            $(CompanySearch.config.selectors.companySearchErrorMessageDiv).css("display", "none");
        },

        privateSetServerExceptionMessage = function (errorMessage) {
            if (errorMessage) {
                $(CompanySearch.config.selectors.errorExceptionMessageDiv).html(errorMessage);
            }
        };

    return {
        reRenderResultGrid: function (companyId, IsReactivation) {
            privateReRenderResultGrid(companyId, IsReactivation);
        },
        bindCompanySearchInitialData: function (data, context) {
            privateBindCompanySearchInitialData(data, context);
        },
        bindSearchResultGrid: function (data, context) {
            privateBindSearchGridData(data, context);
        },
        bindCompanyDeactivateData: function (data, context) {
            privateBindCompanyDeactivateData(data, context);
        },
        bindCompanyReactivateData: function (data, context) {
            privateBindCompanyReactivateData(data, context);
        },
        bindDistributorBranch: function (data) {
            privateBindDistributorBranch(data);
        },
        exportButtonVisibility: function (enable) {
            privateExportButtonEnable(enable);
        },
        bindGridErrorMessage: function (message) {
            privateBindGridErrorMessage(message);
        },
        clearMessageDiv: function () {
            privateClearMessageDiv();
        },
        setServerExceptionMessage: function (errorMessage) {
            privateSetServerExceptionMessage(errorMessage);
        }
    };
}());

CompanySearch.dataManager = (function () {
    var privateGridData = null,
        privateIsInternal = false,
        privateEditCompanyUrl = null,
        privateExportCompanyIds = [],
        privateServiceHostedServerName = function () {
            if (!window.location.origin) {
                window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
            }
            return window.location.origin;
        },
        privateExportCompanyRows = [],
        privateNonBrandedCompanyTypeId = null,
        privatePopupCompanyTypeIdArray = [],
        privateCompanySearchGridPageSize = 50,
        privateIsManagesRelationshipPopup = function (id) {
            var isRelationshipPopup = false,
                popupCompanyTypeIdArray = CompanySearch.dataManager.popupCompanyTypeIdArray;

            for (var i = 0; i < popupCompanyTypeIdArray.length; i++) {
                if (popupCompanyTypeIdArray[i] === id) {
                    isRelationshipPopup = true;
                    break;
                }
            }

            return isRelationshipPopup;
        };

    return {
        setGridData: function (data) {
            privateGridData = data;
        },
        getGridData: function () {
            return privateGridData;
        },
        setIsInternal: function (value) {
            privateIsInternal = value;
        },
        getIsInternal: function () {
            return privateIsInternal;
        },
        setEditCompanyUrl: function (value) {
            privateEditCompanyUrl = value;
        },
        getEditCompanyUrl: function () {
            return privateEditCompanyUrl;
        },
        setExportCompanyIds: function (data) {
            privateExportCompanyIds = data;
        },
        getExportCompanyIds: function () {
            return privateExportCompanyIds;
        },
        setExportCompanyRows: function (data) {
            privateExportCompanyRows = data;
        },
        getExportCompanyRows: function () {
            return privateExportCompanyRows;
        },
        getServiceHostedServerName: function () {
            return privateServiceHostedServerName();
        },
        getJqxAdapterDataSourceToBindGrid: function () {
            var privateDataSource = {
                localdata: CompanySearch.dataManager.getGridData(),
                datatype: "json",
                datafields: [{
                        name: 'CompanyColumnId',
                        type: 'string'
                    },
                    {
                        name: 'DisplayId',
                        type: 'int'
                    },
                    {
                        name: 'Name',
                        type: 'string'
                    },
                    {
                        name: 'State',
                        type: 'string'
                    },
                    {
                        name: 'Country',
                        type: 'string'
                    },
                    {
                        name: 'Brands',
                        type: 'string'
                    },
                    {
                        name: 'CompanyType',
                        type: 'string'
                    },
                    {
                        name: 'ActionData',
                        type: 'string'
                    }
                ]
            };
            return new $.jqx.dataAdapter(privateDataSource);
        },
        nonBrandedCompanyTypeId: privateNonBrandedCompanyTypeId,
        popupCompanyTypeIdArray: privatePopupCompanyTypeIdArray,
        companySearchGridPageSize: privateCompanySearchGridPageSize,
        isManagesRelationshipPopup: function (Id) {
            return privateIsManagesRelationshipPopup(Id);
        }
    };
}());

CompanySearch.event.dateFilter = (function () {
    var beforSuffix = " 00:00:00";
    var afterSuffix = " 23:59:59";

    var getSuffix = function (rule) {

       
        var suffix = '';
        var type = rule.operator.type;

        if (['greater', 'less_or_equal'].indexOf(type) > -1) {
            suffix = afterSuffix;
        } else if (['less', 'greater_or_equal'].indexOf(type) > -1) {
            suffix = beforSuffix;
        }

        return suffix;
    };

    var valueSetter = function (rule, value) {
        if (rule.operator.nb_inputs == 1) {
            value = [value];
        }
        rule.$el.find('.rule-value-container input').each(function (i) {
            var suffix = getSuffix(rule);
            $(this).val(value[i] + suffix || 0);
        });
    };

    var valueGetter = function (rule) {
        var value = [];

        rule.$el.find('.rule-value-container input').each(function () {
            value.push($(this).val());
        });

        if (rule.operator.nb_inputs == 1) {
            var suffix = getSuffix(rule);
            value[0] = value[0] + suffix;
        } else {
            // this is for 'between' operator
            value[0] = value[0] + afterSuffix;
            value[1] = value[1] + beforSuffix;
        }

        rule.$el.find('.rule-operator-container select').on('change', function () {
            rule.$el.find('.rule-value-container input').each(function () {
                $(this).val('');
            });
        });

        return rule.operator.nb_inputs == 1 ? value[0] : value;
    };

    return {
        ValueSetter: valueSetter,
        ValueGetter: valueGetter
    };
}());

$(document).ready(function () {
    CompanySearch.event.pageLoad();
    $(CompanySearch.config.selectors.companySearchInitialBusyImageDiv).show();
    $(CompanySearch.config.selectors.companySearchInitialBusyWrapperDiv).show();
});