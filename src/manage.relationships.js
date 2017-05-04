//<-- version HYP_PH2_1.0.1 -->
var ManageRelationships = { // Manage Relationships namespace

    //#region Objects
    config: {}, // configuration
    service: {}, //service
    events: {}, //static events
    dataManager: {}, //data manager
    gridEvents: {}, // grid related events
    validations: {}, //validations
    collections: {}, // collections to hold data
    //#endregion

}

ManageRelationships.config = (function () {

    //#region Constants
    // constant
    var privateConstant = {

            serviceUrl: '/_vti_bin/BlackjackService/CompanyManagementServices.svc/',
            brandedRelationshipGridId: "#brand-relationship-grid",
            pricingWarrantyRelationshipGridId: "#pricing-relationship-grid",
            activeStatusText: "Active",
            inactiveStatusText: "Inactive",
            deactivatedStatusText: "deactivated",
            rowTextKey: "row",
            getCellValueKey: "getcellvalue",
            setCellValueKey: "setcellvalue",
            cellBeginEditKey: "cellbeginedit",
            cellEndEditKey: "cellendedit",
            getBoundRowsKey: 'getboundrows',
            deactivateButtonClass: "delete-btn",
            activateButtonClass: "locator-btn",
            brandPlaceHolderText: "Select Brand",
            typePlaceHolderText: "Select Relationship Type",
            gridIdTextKey: 'gridId',
            beginCellEditKey: 'begincelledit',
            selectCellKey: 'selectcell',
            distributorSearchFilterDivId: '#distributorSearchFilterDiv',
            distributorSearchGridDiv: '#distributorSearchGridContainerDiv',
            distributorSearchDivId: 'distributorSearchPopup',
            relationshipPopupDivId: 'RelationshipPopupWrapper',
            manageRelationshipBusyWrapperDiv: '#manageRelationshipBusyWrapperDiv',
            manageRelationshipBusyImageDiv: "#manageRelationshipBusyImageDiv",
            manageRelationshipUpperMessageDiv: '#manageRelationshipUpperMessageDiv',
            manageRelationshipLowerMessageDiv: '#manageRelationshipLowerMessageDiv',
            gridCellValidationErrorClassName: 'gird-input-error',
            relationshipButtonsDivId: "#relationshipButtonsDiv",
            relationshipPopupOverlayDivId: '#relationship-popup-overlay',
            relationshipPopupMessageDivId: '#relationshipPopupMessageDiv',
            relationshipMessagePopupWrapperDivId: 'relationshipMessagePopupDiv',
            relationshipConfirmationPopupDivId: 'relationshipConfirmationPopupDiv',
            relationshipConfirmationMessageDivId: '#relationshipConfirmationMessageDiv',
            brandedRelationshipDivId: '#brandedRelationshipDiv',
            pricingWarrantyRelationshipDivId: '#pricing-warranty-relationship-div'

        },
        //#endregion

        //#region Data Types
        privateDataType = {

            xml: 'xml',
            json: 'json'
        },
        //#endregion

        //#region Ajax Data Types
        privateAjaxDataType = {

            arrayType: 'Array',
            objectType: 'Object'
        },
        //#endregion

        //#region Methods
        privateMethods = {

            LoadInitialData: 'LoadRelationshipManagementInitialData',
            UpdateRelationshipsForDealer: "UpdateRelationshipsForDealer",
            CreateCompany: 'CreateDealerCompany'
        },
        //#endregion

        //#region Content Types
        privateContentType = {

            json: 'application/json'
        },
        //#endregion

        //#region Request Methods
        privateRequestMethod = {

            Get: 'GET',
            Post: 'POST'
        },
        //#endregion

        //#region Separators
        privateSeperators = {
            equalSign: '='
        },
        //#endregion

        //#region Parameters
        privateParameters = {
            DealerCompanyId: 'dealercompanyid'
        },
        //#endregion

        //#region Grid Column Titles
        privateGridColumnTitles = {
            companyRelationshipId: "Company Relationship Id",
            companyName: 'Company Name',
            distributorCompanyDisplayId: 'Company ID',
            companyAddress1: 'Company Address',
            validTo: 'Valid To',
            comment: 'Comment',
            status: 'Status',
            action: 'Action',
            brand: 'Brand',
            city: 'City',
            country: 'Country',
            state: 'state',
            isSameHierarchy: 'Is Same Hierarchy'
        },
        //#endregion

        //#region Grid Column Data Fields
        privateGridColumnDataFields = {
            companyRelationshipId: "CompanyRelationshipId",
            companyName: 'DistributorCompanyName',
            companyDisplayId: 'DistributorCompanyDisplayId',
            companyAddress1: 'DistributorCompanyAddress',
            validTo: 'ValidTo',
            validToDisplayValue: 'ValidToDisplayValue',
            comment: 'Comment',
            status: 'DisplayStatus',
            statusId: 'Status',
            action: 'Action',
            brand: 'BrandName',
            relationshipTypeDisplayText: 'RelationshipTypeDisplayText',
            soldTo: 'SoldTo',
            cin: 'CIN',
            hvp: 'HvpNumber',
            distributorCompanyId: 'DistributorCompanyId',
            brandId: 'BrandId',
            relationshipTypeId: 'RelationshipTypeId',
            city: 'City',
            country: 'Country',
            state: 'State',
            tierLevel: 'TierLevel',
            tierLevelId: 'TierLevelId',
            addressOne: 'AddressOne',
            searchCompanyName: 'Name',
            isSameHierarchy: 'IsSameHierarchy'
        },
        //#endregion

        //#region Grid Column Types
        privateGridColumnTypes = {
            textBox: "textbox",
            dropdown: 'dropdownlist',
            date: "date",
            button: "button",
            number: 'number'
        },
        //#endregion

        //#region Properties
        privateParentDivId = '',
        privateDealerCompanyId = '',
        privateIsCompanySelectedForThisRow = false,
        privateLastSelectedBrandId,
        privateLastSelectedBrandedDistributorCompany = {},
        privateLastSelectedPricingWarrantyDistributorCompany = {},
        privateLastSelectedDistributorCompany = {},
        privateSelectedDistributorCompany = {},
        privateAllDistributorTypeIds,
        privateIsRelationshipEdit = false,
        privateCompanyCategoryId,
        privatelastSelectedRelationshipType,
        privateLastSelectedPricingWarrantyTypeId,
        privateKeys = {
            SearchCriteriaQueryBuilderKey: 'SearchCriteriaQueryBuilder'
        },
        privateLastSelectedGridId,
        privateScreenDataSubmitted = false;

    //#endregion

    //#region Return Statement
    return {

        constants: privateConstant,
        dataTypes: privateDataType,
        ajaxDataTypes: privateAjaxDataType,
        methods: privateMethods,
        contentTypes: privateContentType,
        requestMethods: privateRequestMethod,
        separators: privateSeperators,
        parameters: privateParameters,
        parentDivId: privateParentDivId,
        dealerCompanyId: privateDealerCompanyId,
        gridColumnTitles: privateGridColumnTitles,
        gridColumnDataFields: privateGridColumnDataFields,
        gridColumnTypes: privateGridColumnTypes,
        isCompanySelectedForThisRow: privateIsCompanySelectedForThisRow,
        lastSelectedBrandId: privateLastSelectedBrandId,
        lastSelectedBrandedDistributorCompany: privateLastSelectedDistributorCompany,
        keys: privateKeys,
        selectedDistributorCompany: privateSelectedDistributorCompany,
        allDistributorTypeIds: privateAllDistributorTypeIds,
        lastSelectedBrandedDistributorCompany: privateLastSelectedBrandedDistributorCompany,
        lastSelectedPricingWarrantyDistributorCompany: privateLastSelectedPricingWarrantyDistributorCompany,
        isRelationshipEdit: privateIsRelationshipEdit,
        companyCategoryId: privateCompanyCategoryId,
        lastSelectedRelationshipType: privatelastSelectedRelationshipType,
        lastSelectedGridId: privateLastSelectedGridId,
        lastSelectedPricingWarrantyTypeId: privateLastSelectedPricingWarrantyTypeId,
        screenDataSubmitted: privateScreenDataSubmitted
    }
    //#endregion

}())

//Service calls for relationship management
ManageRelationships.service = (function () {

    //#region Private Methods
    var
        privateCall = function (serviceMethod, data, ajaxDataType, requestMethod, successCallBack) {

            var requestData,
                url = ManageRelationships.config.constants.serviceUrl + serviceMethod;

            if (ajaxDataType === ManageRelationships.config.ajaxDataTypes.arrayType) {
                requestData = {
                    '': data
                };
            } else if (ajaxDataType === ManageRelationships.config.ajaxDataTypes.objectType) {
                requestData = data;
            }

            try {
                $.ajax({
                    url: url,
                    type: requestMethod,
                    contentType: ManageRelationships.config.contentTypes.json,
                    dataType: ManageRelationships.config.dataTypes.json,
                    data: requestData,
                    beforeSend: function () {
                        if (serviceMethod === ManageRelationships.config.methods.LoadInitialData) {
                            var initialInputParameters = ManageRelationships.collections.initialInputParameters;
                            if (initialInputParameters.busyWrapperDiv) {
                                $(initialInputParameters.busyWrapperDiv).show();
                                $(initialInputParameters.busyImageDiv).show();
                            }
                        } else {
                            var constants = ManageRelationships.config.constants;
                            $(constants.manageRelationshipBusyWrapperDiv).show();
                            $(constants.manageRelationshipBusyImageDiv).show();

                        }
                    },
                    complete: function () {
                        var initialInputParameters = ManageRelationships.collections.initialInputParameters;
                        if (initialInputParameters.busyWrapperDiv) {
                            $(initialInputParameters.busyWrapperDiv).hide();
                            $(initialInputParameters.busyImageDiv).hide();
                        }

                        var constants = ManageRelationships.config.constants;
                        $(constants.manageRelationshipBusyWrapperDiv).hide();
                        $(constants.manageRelationshipBusyImageDiv).hide();
                    },
                    success: successCallBack,
                    error: function (data) {
                        ManageRelationships.events.showServiceCallResponse(data.responseText, true);
                    }

                });
            } catch (error) {
                ManageRelationships.events.showServiceCallResponse(error.message, true);
            }
        },

        //Set the screen for initial success callback
        privateSetSuccessBehaviourForRelationshipInitialLoad = function (data) {
            var initialInputParameters = ManageRelationships.collections.initialInputParameters,
                constants = ManageRelationships.config.constants;

            //Setting initial data
            ManageRelationships.collections.initialData = data;
            ManageRelationships.config.screenDataSubmitted = false;
            ManageRelationships.collections.clearRelationships();
            $(initialInputParameters.parentDivId).html(data.HtmlContent);

            //Bind distributor search html and filters
            ManageRelationships.dataManager.bindDistributorSearchPopupData(data);

            //Bind brand related data. Hide if the company is non branded
            if (data.Entity.ShowBrandedRelationships) {
                $(constants.brandedRelationshipDivId).show();
                ManageRelationships.dataManager.bindBrandedRelationships(data);
            } else {
                $(constants.brandedRelationshipDivId).hide();
            }

            //Bind pricing & warranty related data
            if (data.Entity.ShowPricingWarrantyRelationships) {
                $(constants.pricingWarrantyRelationshipDivId).show();
                ManageRelationships.dataManager.bindPricingWarrantyRelationships(data);
            } else {
                $(constants.pricingWarrantyRelationshipDivId).hide();
            }

            //Register the events
            ManageRelationships.events.registerEvents();

            if (initialInputParameters.isPopup) {
                $(ManageRelationships.config.constants.relationshipButtonsDivId).show();
                showlightbox(ManageRelationships.events.getParentPopupWrapperDivId());
            } else {
                $(ManageRelationships.config.constants.relationshipButtonsDivId).hide();
            }
        },

        //Set the screen for save success callback
        privateSetSuccessBehaviourForSaveRelationship = function (data) {
            var events = ManageRelationships.events;
            if (data.SaveSucceeded) {
                events.setRelationshipsGridBehaviourAfterSave();
                events.showServiceCallResponse(ManageRelationships.collections.initialData.Entity.Messages.RelationshipUpdateSuccess, false);
                if (ManageRelationships.collections.initialInputParameters.parentIsCompanySearch) {
                    CompanySearch.render.reRenderResultGrid(parseInt(ManageRelationships.collections.initialInputParameters.companyId), true);
                }
            } else {
                events.showServiceCallResponse(data.ErrorMessage, true);
            }
            if (ManageRelationships.collections.initialInputParameters.isPopup) {
                var parentDiv = ManageRelationships.events.getParentPopupWrapperDivId();
                showlightbox(parentDiv);
                $('.popup-pinner').scrollTop(0);
            }

        },

        //Save behaviour after creating a company with relationships
        privateSetSuccessBehaviourForCreateRelationship = function (data) {
            var events = ManageRelationships.events;
            events.showServiceCallResponse(data.SuccessMessage, false);
            events.setRelationshipsGridBehaviourAfterSave();
        }
    //#endregion

    //#region Return Statement
    return {

        call: function (serviceMethod, data, ajaxDataType, requestMethod, successCallback) {
            privateCall(serviceMethod, data, ajaxDataType, requestMethod, successCallback);
        },
        initialLoadSuccessCallBack: function (data) {
            return privateSetSuccessBehaviourForRelationshipInitialLoad(data)
        },
        saveSuccessCallback: function (data) {
            return privateSetSuccessBehaviourForSaveRelationship(data)
        },
        saveSuccessCallbackForCreate: function (data) {
            return privateSetSuccessBehaviourForCreateRelationship(data)
        },
        setSuccessBehaviourForDistributorSearch: function (data) {
            return privateSetSuccessBehaviourForDistributorSearch(data)
        }
    }
    //#endregion

}())

//Event for relationship management
ManageRelationships.events = (function () {

    //#region Private Methods

    //Holds the last edited cell reference for doing a cellendedit call
    var privateLastEditedCell;

    //Returns the host name
    var
        privateGetServereHostedName = function () {
            if (!window.location.origin) {
                window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
            }
            return window.location.origin;
        },

        //Setting behaviour for save
        privateSetRelationshipsGridBehaviourAfterSave = function () {
            ManageRelationships.collections.initiateCollections();
            ManageRelationships.config.screenDataSubmitted = true;
            $(".company-create-buttons").attr("disabled", "disabled");
            $(".relationship-export-button").attr("disabled", "disabled");
            var brandedGrid = $(ManageRelationships.config.constants.brandedRelationshipGridId).jqxGrid();
            brandedGrid.jqxGrid('refresh');
            var pricinGrid = $(ManageRelationships.config.constants.pricingWarrantyRelationshipGridId).jqxGrid();
            pricinGrid.jqxGrid('refresh');
        },

        //Saves the data back to the database
        privateSaveData = function () {

            try {
                var brandedRelationships = ManageRelationships.collections.getBrandedRelationshipCollection(),
                    pricingWarrantyRelationships = ManageRelationships.collections.getPricingWarrantyRelationshipCollection(),
                    deactivatedRelationships = ManageRelationships.collections.getDeactivatedRelationships(),
                    dealerCompanyId = ManageRelationships.collections.initialInputParameters.companyId;

                var jsonData = {};
                jsonData.dealerCompanyId = dealerCompanyId || -1;
                jsonData.brandedRelationships = brandedRelationships || [];
                jsonData.pricingAndWarrantyRelationships = pricingWarrantyRelationships || [];
                jsonData.deactivatedRelationships = deactivatedRelationships;

                ManageRelationships.service.call(
                    ManageRelationships.config.methods.UpdateRelationshipsForDealer,
                    JSON.stringify(jsonData),
                    ManageRelationships.config.ajaxDataTypes.objectType,
                    ManageRelationships.config.requestMethods.Post,
                    ManageRelationships.service.saveSuccessCallback);
            } catch (error) {
                privateShowServiceCallResponse(error, true);
            }
        },

        // create dealer company
        privateCreateDealerCompany = function () {
            try {
                var brandedRelationships = ManageRelationships.collections.getBrandedRelationshipCollection(),
                    pricingWarrantyRelationships = ManageRelationships.collections.getPricingWarrantyRelationshipCollection(),
                    jsonData = self.getFieldData();
                jsonData.brandedRelationships = brandedRelationships || [];
                jsonData.pricingWarrantyRelationships = pricingWarrantyRelationships || [];

                ManageRelationships.service.call(
                    ManageRelationships.config.methods.CreateCompany,
                    JSON.stringify(jsonData),
                    ManageRelationships.config.ajaxDataTypes.objectType,
                    ManageRelationships.config.requestMethods.Post,
                    ManageRelationships.service.saveSuccessCallbackForCreate);
            } catch (error) {
                privateShowServiceCallResponse(error, true);
            }
        },

        //End the current edit
        privateEndCurrentCellEdit = function (gridId) {
            var grid = $(gridId);
            if (grid) {
                var currentCell = ManageRelationships.events.getLastEditedCell();
                $(gridId).jqxGrid('endcelledit', 0, currentCell, false);
            }
        },

        //Set values coming from company search popup
        privatePopulateSelectedCompanyData = function (companyData, gridId) {
            var CompanyData = companyData,
                grid = $(gridId);
            if (grid) {
                var constants = ManageRelationships.config.constants,
                    gridFields = ManageRelationships.config.gridColumnDataFields;

                grid.jqxGrid(constants.setCellValueKey, companyData.row, gridFields.companyDisplayId, CompanyData.HVACCompanyId);
                grid.jqxGrid(constants.setCellValueKey, companyData.row, gridFields.companyName, CompanyData.Name);
                grid.jqxGrid(constants.setCellValueKey, companyData.row, gridFields.companyAddress1, CompanyData.AddressOne);
                grid.jqxGrid(constants.setCellValueKey, companyData.row, gridFields.distributorCompanyId, CompanyData.CompanyId);
                grid.jqxGrid(constants.setCellValueKey, companyData.row, gridFields.brandId, ManageRelationships.config.lastSelectedBrandId);
                grid.jqxGrid(constants.setCellValueKey, companyData.row, gridFields.status, "Active");
                grid.jqxGrid(constants.setCellValueKey, companyData.row, gridFields.statusId, 1);
                if (gridId === constants.brandedRelationshipGridId) {
                    ManageRelationships.config.lastSelectedBrandedDistributorCompany = CompanyData;
                } else {
                    grid.jqxGrid(constants.setCellValueKey, companyData.row, gridFields.relationshipTypeId, ManageRelationships.config.lastSelectedPricingWarrantyTypeId);
                    grid.jqxGrid(constants.setCellValueKey, companyData.row, gridFields.soldTo, CompanyData.SoldTo);
                    ManageRelationships.config.lastSelectedPricingWarrantyDistributorCompany = CompanyData;
                }
                ManageRelationships.config.lastSelectedRelationshipType = 0;
            }
            $(ManageRelationships.config.relationshipPopupOverlayDivId).hide();
        },

        //Load the company search popup
        privateLoadCompanySearchPopup = function (data, gridId, row) {
            ManageRelationships.config.lastSelectedGridId = gridId;
            ManageRelationships.config.lastSelectedRelationshipType = -1;
            //End the current editing cell to make sure that the dropown value is selected into the cell
            privateEndCurrentCellEdit(gridId);
            var row = parseInt($(data).attr(ManageRelationships.config.constants.rowTextKey)),
                selectedBrandId,
                selectedRelationshipType;
            if (gridId === ManageRelationships.config.constants.brandedRelationshipGridId) {
                ManageRelationships.config.lastSelectedRelationshipType = 1;
                //Make sure brand is selected from the brand selector dropdown
                if (ManageRelationships.validations.validateBrand(data)) {
                    //Implement the popup call for company search
                    selectedBrandId = ManageRelationships.config.lastSelectedBrandId;
                } else {
                    return;
                }
            } else {
                if (!ManageRelationships.config.lastSelectedPricingWarrantyTypeId) {
                    ManageRelationships.events.showMessage(ManageRelationships.collections.initialData.Entity.Messages.RelationshipTypeRequired)
                    return;
                }
                var rowData = $(ManageRelationships.config.constants.pricingWarrantyRelationshipGridId).jqxGrid('getrowdata', row),
                    selectedRelationshipType = rowData.RelationshipTypeDisplayText;
                if (selectedRelationshipType === 'Pricing')
                    ManageRelationships.config.lastSelectedRelationshipType = 2;
                else if (selectedRelationshipType === 'Warranty')
                    ManageRelationships.config.lastSelectedRelationshipType = 3;
            }
            if (selectedBrandId || ManageRelationships.config.lastSelectedRelationshipType > 0) {
                var searchProperties = {},
                    categoryId = ManageRelationships.collections.initialInputParameters.categoryId;
                searchProperties.CategoryId = !categoryId || categoryId === -1 ? ManageRelationships.collections.initialData.Entity.CategoryId : categoryId;
                searchProperties.SelectedBrandId = selectedBrandId;
                searchProperties.SelectedRelationshipGridRow = row;
                searchProperties.SelectedRelationGridId = gridId;
                searchProperties.SelectedRelationshipType = ManageRelationships.config.lastSelectedRelationshipType;
                DistributorSearch.render.loadSearchFilters(searchProperties);
            }
            $(ManageRelationships.config.constants.relationshipPopupOverlayDivId).show();
        },

        //returns the parent div id of the popup wrapper
        privateGetParentPopupWrapperDivId = function () {
            var popupWrapperDivId = $(ManageRelationships.collections.initialInputParameters.parentDivId).closest('.popup_content');
            if (popupWrapperDivId) {
                return popupWrapperDivId.attr("id");
            }
            return '';
        },

        //Ensure item is removed from array
        privateEnsureItemRemoved = function (itemArray, itemtoRemove) {
            itemArray.splice(itemArray.indexOf(itemtoRemove), 1);
        },

        //Mark the item for deactivation
        privateDeactivateRelationship = function () {

            var data = $('span.delete-btn.action-icons[data-processing=true]');

            if (!data.length) return;

            var constants = ManageRelationships.config.constants;

            //Get the row data
            var row = parseInt($(data).attr(constants.rowTextKey));

            //Get the relationship data
            var relationshipId = $(data).attr("relationshipId");

            //Get the relationship data
            var gridId = $(data).attr(ManageRelationships.config.constants.gridIdTextKey);

            var deactivatedRelationships = ManageRelationships.collections.getDeactivatedRelationships();

            // Add attribute to the button to recognize after confirm.
            $(data).attr('data-processing', false);

            if (deactivatedRelationships.indexOf(relationshipId) === -1) {

                //Mark the item to deactivate
                deactivatedRelationships.push(relationshipId);

                //Set the buttons and texts on the grid
                $(data).removeClass(constants.deactivateButtonClass).addClass(constants.activateButtonClass);
                $(data).attr("onclick", "ManageRelationships.events.confirmationActivate(this)");
                $(gridId).jqxGrid(constants.setCellValueKey, row, ManageRelationships.config.gridColumnDataFields.status, constants.deactivatedStatusText);
                $(gridId).jqxGrid(constants.setCellValueKey, row, ManageRelationships.config.gridColumnDataFields.statusId, 3);
                privateCloseMessage();
            }
        },

        privateConfirmationDeactivateMessage = function (data) {
            // Add attribute to the button to recognize after confirm.
            $(data).attr('data-processing', true);

            var constants = ManageRelationships.config.constants;

            var gridId = $(data).attr(constants.gridIdTextKey);

            //if pricing relationship removal
            if (gridId === constants.pricingWarrantyRelationshipGridId) {

                //Deactivate first.
                privateDeactivateRelationship();

                //Show Message.
                privateShowMessage(ManageRelationships.collections.initialData.Entity.Messages.PricingDeactivated,
                    constants.relationshipPopupMessageDivId,
                    constants.relationshipMessagePopupWrapperDivId);
            } else {
                privateShowMessage(ManageRelationships.collections.initialData.Entity.Messages.Deactivation,
                    constants.relationshipPopupMessageDivId,
                    constants.relationshipMessagePopupWrapperDivId);
            }
        },

        privateConfirmationActivateMessage = function (data) {
            // Add attribute to the button to recognize after confirm.
            $(data).attr('data-processing', true);
            var constants = ManageRelationships.config.constants;
            privateActivateRelationship();
            privateShowMessage(ManageRelationships.collections.initialData.Entity.Messages.Activation,
                constants.relationshipPopupMessageDivId,
                constants.relationshipMessagePopupWrapperDivId);
        },

        //Mark the item for activation
        privateActivateRelationship = function () {

            var data = $('span.locator-btn.action-icons[data-processing=true]');

            if (!data.length) return;

            var constants = ManageRelationships.config.constants;

            //Get the row data
            var row = parseInt($(data).attr(constants.rowTextKey));

            //Get the relationship data
            var relationshipId = $(data).attr("relationshipId");

            //Get the relationship data
            var gridId = $(data).attr(constants.gridIdTextKey);

            var deactivatedRelationships = ManageRelationships.collections.getDeactivatedRelationships();
            if (deactivatedRelationships.indexOf(relationshipId) !== -1) {

                //Remove from deactivated item list
                privateEnsureItemRemoved(deactivatedRelationships, relationshipId);

                //Set the button on the grid
                $(data).removeClass(constants.activateButtonClass).addClass(constants.deactivateButtonClass);
                $(data).attr("onclick", "ManageRelationships.events.confirmDeactivate(this)");
                $(gridId).jqxGrid(constants.setCellValueKey, row, ManageRelationships.config.gridColumnDataFields.status, constants.activeStatusText);
                $(gridId).jqxGrid(constants.setCellValueKey, row, ManageRelationships.config.gridColumnDataFields.statusId, 1);

                privateCloseMessage();
            }
        },

        //Register the events
        //cellbeginedit to mark the last edited cell which is used in row add event
        privateRegisterEvents = function () {

            var relationshipGrid = $(ManageRelationships.config.constants.brandedRelationshipGridId),
                pricingAndWarrantyGrid = $(ManageRelationships.config.constants.pricingWarrantyRelationshipGridId),
                constants = ManageRelationships.config.constants;

            relationshipGrid.unbind(constants.cellBeginEditKey).on(constants.cellBeginEditKey, function (event) {
                privateLastEditedCell = event.args.datafield;
            });

            pricingAndWarrantyGrid.unbind(constants.cellBeginEditKey).on(constants.cellBeginEditKey, function (event) {
                privateLastEditedCell = event.args.datafield;
            });

        },

        //Load the inital data for the form
        privateLoadInitialData = function (data) {
            try {
                ManageRelationships.collections.initialInputParameters = data;
                ManageRelationships.config.parentDivId = data.parentDivId;
                ManageRelationships.config.isRelationshipEdit = data.isRelationshipEdit || self.isEdit();
                var serviceMethod = ManageRelationships.config.methods.LoadInitialData,
                    companyId = data.companyId ? parseInt(data.companyId) : -1,
                    typeId = data.typeId || -1,
                    services = data.services || [],
                    companyCategoryId = data.categoryId || -1,
                    requestType = ManageRelationships.config.requestMethods.Post,
                    ajaxDataType = ManageRelationships.config.ajaxDataTypes.objectType,
                    successCallback = ManageRelationships.service.initialLoadSuccessCallBack,
                    dealerCompanyObject = {
                        dealerCompany: {
                            CompanyId: companyId,
                            TypeId: typeId,
                            Services: services,
                            CompanyCategoryId: companyCategoryId
                        }
                    },
                    requestData = JSON.stringify(dealerCompanyObject);

                //Call web service to get data
                ManageRelationships.service.call(serviceMethod, requestData, ajaxDataType, requestType, successCallback);
            } catch (error) {
                privateShowServiceCallResponse(error, true);
            }
        },

        //Close the currently open popup
        privateClosePopup = function (isDistributorSearchPopup) {
            if (isDistributorSearchPopup) {
                var constants = ManageRelationships.config.constants;
                closelightbox(ManageRelationships.config.constants.distributorSearchDivId);
                $(constants.relationshipPopupOverlayDivId).hide();
                if (ManageRelationships.collections.initialInputParameters.isPopup) {
                    showlightbox(ManageRelationships.events.getParentPopupWrapperDivId());
                }
            } else
                closelightbox(ManageRelationships.config.constants.relationshipPopupDivId);
        },

        //Filter unused brands for distributor users
        privateGetUnusedBrandsForDistributorUser = function (data) {
            var primaryBrands = data.PrimaryCompanyBrands,
                filteredBrands = [],
                grid = $(ManageRelationships.config.constants.brandedRelationshipGridId),
                rows = grid.jqxGrid('getrows');

            if (rows.length === 1) {
                filteredBrands = data.PrimaryCompanyBrands;
            } else {
                for (var i = 0; i < primaryBrands.length; i++) {
                    var itemInArray = false;
                    var currentdBrand = primaryBrands[i];

                    for (var j = 0; j < rows.length; j++) {

                        var brandId = grid.jqxGrid(ManageRelationships.config.constants.getCellValueKey, j,
                                ManageRelationships.config.gridColumnDataFields.brandId),

                            statusId = grid.jqxGrid(ManageRelationships.config.constants.getCellValueKey, j,
                                ManageRelationships.config.gridColumnDataFields.statusId);

                        if (currentdBrand.Id === brandId && statusId === 1) {
                            itemInArray = true;
                            break;
                        }
                    }

                    if (!itemInArray) {
                        filteredBrands.push({
                            Id: currentdBrand.Id,
                            Name: currentdBrand.Name
                        });
                    }
                }
            }
            return filteredBrands;
        },

        //Export grid data
        privateExportSelectedData = function (gridId) {
            try {
                var exportDataUrl = privateGetServereHostedName().trim() +
                    ManageRelationships.config.constants.serviceUrl.trim() +
                    "ExportRelationshipData",
                    grid = $(gridId);
                if (grid) {
                    var rows = grid.jqxGrid(ManageRelationships.config.constants.getBoundRowsKey);
                    var tempArray = JSON.parse(JSON.stringify(rows));
                    if (tempArray[0].DistributorCompanyId === '') {
                        tempArray.shift();
                    }
                    grid.jqxGrid('exportdata', 'csv', 'jqxGrid', true, tempArray, false, exportDataUrl);
                }
            } catch (error) {
                privateShowServiceCallResponse(error, true);
            }
        },
        //#endregion

        //#region Button Clicks

        // save button click method
        privateSaveButtonClick = function () {
            var atLeastOneRowEntered = false,
                allBrandsDeactivated = true,
                pricingWarrantyRowExist = false,
                brandedGridId = ManageRelationships.config.constants.brandedRelationshipGridId,
                pricingWarrantyGridId = ManageRelationships.config.constants.pricingWarrantyRelationshipGridId,
                Messages = ManageRelationships.collections.initialData.Entity.Messages;


            //Validate brand grid for at least one row for branded companies
            if (ManageRelationships.collections.initialData.Entity.ShowBrandedRelationships) {
                var brandedGrid = $(brandedGridId);
                if (brandedGrid) {
                    var brandedGridRows = $(brandedGridId).jqxGrid("getboundrows");
                    var currentItem = brandedGridRows[0];
                    if (brandedGridRows.length === 1) {
                        if (currentItem.BrandId !== '' && currentItem.BrandId !== undefined && currentItem.DistributorCompanyId !== '' && currentItem.DistributorCompanyId !== undefined) {
                            atLeastOneRowEntered = true;
                            allBrandsDeactivated = false;
                            ManageRelationships.gridEvents.addRowToTop(brandedGridId);
                        }
                        //Commented to address the new requirement to enable brand-less customers
                        //else {
                        //    privateShowMessage(Messages.NoBrandedRelationshipFound);
                        //    return;
                        //}
                    } else {
                        atLeastOneRowEntered = true;
                        if (currentItem.DistributorCompanyId !== '') {
                            ManageRelationships.gridEvents.addRowToTop(brandedGridId);
                        }

                        //Check whether all brands are deactivated
                        for (var x = 0; x < brandedGridRows.length; x++) {
                            var currentRow = brandedGridRows[x];
                            if (currentRow.Status === 1 && currentRow.DistributorCompanyId !== '') {
                                allBrandsDeactivated = false;
                                break;
                            }
                        }
                    }
                }
            }

            //Validate pricing grid for at least one row
            if (ManageRelationships.collections.initialData.Entity.ShowPricingWarrantyRelationships) {
                var pricingGrid = $(pricingWarrantyGridId);
                if (pricingGrid) {
                    var pricingGridRows = pricingGrid.jqxGrid("getboundrows");
                    var currentItem = pricingGridRows[0];
                    if (pricingGridRows.length == 1) {
                        if (currentItem.SoldTo !== '' && currentItem.DistributorCompanyId !== '' && currentItem.RelationshipTypeId !== '') {
                            atLeastOneRowEntered = true;
                            pricingWarrantyRowExist = true;
                            if (currentItem.CIN !== '') {
                                ManageRelationships.gridEvents.addRowToTop(pricingWarrantyGridId);
                            }
                        }
                    } else {
                        if (currentItem.DistributorCompanyId !== '') {
                            ManageRelationships.gridEvents.addRowToTop(pricingWarrantyGridId);
                        }
                        atLeastOneRowEntered = true;
                        for (var x = 0; x < pricingGridRows.length; x++) {
                            var currentRow = pricingGridRows[x];
                            if (currentRow.Status === 1 && currentRow.DistributorCompanyId != '') {
                                pricingWarrantyRowExist = true;
                                break;
                            }
                        }

                    }
                }
            }

            if (!atLeastOneRowEntered) {
                privateShowMessage(Messages.NoRelationshipFound);
                return;
            }
            //Commented to address the new requirement to enable brand-less customers
            //if (pricingWarrantyRowExist && allBrandsDeactivated && ManageRelationships.collections.initialData.Entity.ShowBrandedRelationships) {
            //    privateShowMessage(Messages.NoBrandedRelationshipFound);
            //    return;
            //}

            if (!ManageRelationships.validations.validateBrandRelationshipGridForDuplicates() || !ManageRelationships.validations.validatePricingWarrantyGridForDuplicates()) {
                return;
            }
            if (!ManageRelationships.config.isRelationshipEdit)
                privateCreateDealerCompany();
            else
                privateSaveData();
        },

        //Cancel button click
        privateCancelButtonClick = function () {
            if (!ManageRelationships.config.screenDataSubmitted) {
                privateShowConfirmationMessage(ManageRelationships.collections.initialData.Entity.Messages.RelationshipCancel);
            } else {
                ManageRelationships.collections.initiateCollections();
                closelightbox(ManageRelationships.events.getParentPopupWrapperDivId());
            }
        },

        // back button click function. reload create company div
        privateBackButtonClick = function () {
            self.isCreateFormVisible(true);
            self.isRelationshipVisible(false);
            self.isFromManageRelationships(true);
            self.companyWizardStepText('Step 1 of 2: Company Information');
        },

        //#endregion

        //#region Message handling

        //Shows the confirmation message
        privateShowConfirmationMessage = function (message) {
            var constants = ManageRelationships.config.constants;
            privateShowMessage(message, constants.relationshipConfirmationMessageDivId, constants.relationshipConfirmationPopupDivId);
        },

        //close the confirmation message
        privateCloseConfirmationMessage = function () {
            privateCloseMessage(ManageRelationships.config.constants.relationshipConfirmationPopupDivId);
        },

        //Set message for service call
        privateShowServiceCallResponse = function (message, isError) {
            var cssClass = isError ? "errorMessage" : "alert-success";
            var messageDiv = ManageRelationships.collections.initialInputParameters.isPopup ?
                $(ManageRelationships.config.constants.manageRelationshipUpperMessageDiv) :
                $(ManageRelationships.config.constants.manageRelationshipLowerMessageDiv);
            if (ManageRelationships.collections.initialData) {
                messageDiv.html(message);
                messageDiv.attr("class", cssClass);
            } else {
                var popupHtml = '<div id="relationshipMessagePopupDiv" class="popup_content"> ' +
                    '<div class="popup-header">' +
                    'Manage Relationships<a href="#" class="txt-close " onclick="ManageRelationships.events.closeMessage(); return false;">&times;</a>' +
                    '</div>' +
                    '<div class="popup-pinner">' +
                    ' <div id="relationshipPopupMessageDiv"></div>' +
                    ' <div class="popup_btnWrapper">' +
                    ' <input type="button" class="btn right-floating btn-submit cancel-button" onclick="ManageRelationships.events.closeMessage(); return false;" value="Cancel" />' +
                    ' <input type="button" class="btn right-floating btn-submit ok-button" onclick="ManageRelationships.events.deactivateRelationship(); return false;" value="Ok" />' +
                    '</div>' +
                    ' </div>' +
                    '</div>';
                var parentDiv = $(ManageRelationships.collections.initialInputParameters.parentDivId);
                if (parentDiv.length) {
                    if (!parentDiv.find('#relationshipMessagePopupDiv').length) {
                        var holder = parentDiv.closest(".holder");
                        if (holder.length) {
                            holder.append(popupHtml);
                        } else {
                            parentDiv.append(popupHtml);
                        }
                    }
                    if (ManageRelationships.collections.initialInputParameters.isPopup && !ManageRelationships.collections.initialData) {
                        closelightbox(ManageRelationships.events.getParentPopupWrapperDivId());
                    }
                    privateShowMessage("Error : " + message);
                } else {
                    alert(message);
                }

            }
        },

        //Close popup message
        privateCloseMessage = function (popupDivId) {
            $(ManageRelationships.config.constants.relationshipPopupOverlayDivId).hide();
            closelightbox(popupDivId || ManageRelationships.config.constants.relationshipMessagePopupWrapperDivId);
            if (ManageRelationships.collections.initialInputParameters.isPopup && ManageRelationships.collections.initialData) {
                showlightbox(ManageRelationships.events.getParentPopupWrapperDivId());
            }
            // if (!ManageRelationships.collections.initialInputParameters.isPopup && !ManageRelationships.collections.initialData ) {
            else {
                if (!ManageRelationships.collections.initialData) {
                    privateBackButtonClick();
                }
            }
        },

        //Show message on the screen
        privateShowMessage = function (message, messageDivId, popupDivId) {
            var constants = ManageRelationships.config.constants,
                localMessageDivId = messageDivId || constants.relationshipPopupMessageDivId,
                localPopupDivId = popupDivId || constants.relationshipMessagePopupWrapperDivId;
            $(localMessageDivId).html(message);

            privateFormatPopupButtonActions(message, localPopupDivId);

            $(ManageRelationships.config.constants.relationshipPopupOverlayDivId).show();
            showlightbox(localPopupDivId);
        },

        privateFormatPopupButtonActions = function (message, localPopupDivId) {
            //Show Activate Confirm Message
            if (message === ManageRelationships.collections.initialData.Entity.Messages.Deactivation) {
                $('#' + localPopupDivId)
                    .find('.ok-button')
                    .attr('onclick', 'ManageRelationships.events.deactivateRelationship(); return false;');

                $('#' + localPopupDivId)
                    .find('.cancel-button').show();
            } else {
                $('#' + localPopupDivId)
                    .find('.ok-button')
                    .attr('onclick', 'ManageRelationships.events.closeMessage(); return false;');

                $('#' + localPopupDivId)
                    .find('.cancel-button').hide();
            }
        },

        //Function to execute once user clicks on the ok button
        privateConfirmationOk = function (message) {
            privateCloseMessage(ManageRelationships.config.constants.relationshipConfirmationPopupDivId);
            closelightbox(ManageRelationships.events.getParentPopupWrapperDivId());
            ManageRelationships.collections.initiateCollections();
        };


    //#endregion

    //#region Return Statement
    return {

        getLastEditedCell: function () {
            return privateLastEditedCell;
        },
        loadManageRelationshipScreen: function (data) {
            privateLoadInitialData(data);
        },
        registerEvents: function () {
            return privateRegisterEvents();
        },
        deactivateRelationship: function (data) {
            return privateDeactivateRelationship(data);
        },
        activateRelationship: function (data) {
            return privateActivateRelationship(data);
        },
        loadCompanySearchPopup: function (data, gridId, row) {
            return privateLoadCompanySearchPopup(data, gridId, row);
        },
        populateSelectedCompanyData: function (companyData, gridId) {
            return privatePopulateSelectedCompanyData(companyData, gridId);
        },
        endCurrentCellEdit: function (gridId) {
            return privateEndCurrentCellEdit(gridId);
        },
        showMessage: function (message) {
            return privateShowMessage(message);
        },
        saveData: function () {
            return privateSaveData();
        },
        closePopup: function (isDistributorSearchPopup) {
            privateClosePopup(isDistributorSearchPopup);
        },
        getUnusedBrandsForDistributorUser: function (data) {
            return privateGetUnusedBrandsForDistributorUser(data);
        },
        saveButtonClick: function () {
            return privateSaveButtonClick();
        },
        backButtonClick: function () {
            return privateBackButtonClick();
        },
        cancelButtonClick: function () {
            return privateCancelButtonClick();
        },
        showServiceCallResponse: function (message, isError) {
            return privateShowServiceCallResponse(message, isError);
        },
        setRelationshipsGridBehaviourAfterSave: function () {
            return privateSetRelationshipsGridBehaviourAfterSave();
        },
        closeMessage: function (popupDivId) {
            return privateCloseMessage(popupDivId);
        },
        confirmationOk: function () {
            return privateConfirmationOk();
        },
        exportSelectedData: function (gridId) {
            return privateExportSelectedData(gridId);
        },
        getParentPopupWrapperDivId: function () {
            return privateGetParentPopupWrapperDivId();
        },
        confirmDeactivate: function (data) {
            privateConfirmationDeactivateMessage(data);
        },
        confirmActivate: function (data) {
            privateConfirmationActivateMessage(data);
        }
    }
    //#endregion

}());

//Data manager for relationship management
ManageRelationships.dataManager = (function () {

    //#region Private Methods
    var
        //Get RelationshipId
        privateGetRelationshipId = function (gridId, row) {
            var relationshipId = $(gridId).jqxGrid(
                ManageRelationships.config.constants.getCellValueKey,
                row,
                ManageRelationships.config.gridColumnDataFields.companyRelationshipId);
            return relationshipId;
        },

        //returns true if the relationship row is in same hierarchy
        privateIsSameHierarchy = function (row) {
            var isSameHierarchy = $(ManageRelationships.config.constants.brandedRelationshipGridId).jqxGrid(
                ManageRelationships.config.constants.getCellValueKey,
                row,
                ManageRelationships.config.gridColumnDataFields.isSameHierarchy);
            return isSameHierarchy;
        },

        //Disables the cell
        privateDisableCell = function (gridId, row) {
            if (row === 0) {
                return true;
            }
            var relationshipId = privateGetRelationshipId(gridId, row);
            if (relationshipId === undefined || relationshipId === '')
                return true;
            else
                return false;
        },

        //Populate common columns for both grids
        privateGetCommonColumns = function (data, gridId) {

            //Array to keep the set of columns
            var commonGridColumns = [];

            //#region Company Relationship Id Column
            //Define hidden column to keep the id
            var companyRelationshipIdColumn = {};
            companyRelationshipIdColumn.text = ManageRelationships.config.gridColumnTitles.companyRelationshipId;
            companyRelationshipIdColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            companyRelationshipIdColumn.datafield = ManageRelationships.config.gridColumnDataFields.companyRelationshipId;
            companyRelationshipIdColumn.hidden = "true";
            commonGridColumns.push(companyRelationshipIdColumn);
            //#endregion

            //#region Distributor Company Id Column
            //Define hidden column to keep the distributor company id
            var distributorCompanyIdColumn = {};
            distributorCompanyIdColumn.text = ManageRelationships.config.gridColumnTitles.distributorCompanyDisplayId;
            distributorCompanyIdColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            distributorCompanyIdColumn.datafield = ManageRelationships.config.gridColumnDataFields.distributorCompanyId;
            distributorCompanyIdColumn.hidden = "true";
            commonGridColumns.push(distributorCompanyIdColumn);
            //#endregion

            //#region Brand Id Column
            //Define hidden column to keep the brand id
            var brandIdColumn = {};
            brandIdColumn.text = ManageRelationships.config.gridColumnTitles.distributorCompanyDisplayId;
            brandIdColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            brandIdColumn.datafield = ManageRelationships.config.gridColumnDataFields.brandId;
            brandIdColumn.hidden = "true";
            commonGridColumns.push(brandIdColumn);
            //#endregion

            //#region Is Same Hierarchy Column
            //Define hidden column to keep the brand id
            var isSameHierarchyColumn = {};
            isSameHierarchyColumn.text = ManageRelationships.config.gridColumnTitles.isSameHierarchy;
            isSameHierarchyColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            isSameHierarchyColumn.datafield = ManageRelationships.config.gridColumnDataFields.isSameHierarchy;
            isSameHierarchyColumn.hidden = "true";
            commonGridColumns.push(isSameHierarchyColumn);
            //#endregion

            //#region Relationship Type Id Column
            //Define hidden column to keep the type id
            var relationshipTypeIdColumn = {};
            relationshipTypeIdColumn.text = "Relationship Type id";
            relationshipTypeIdColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            relationshipTypeIdColumn.datafield = ManageRelationships.config.gridColumnDataFields.relationshipTypeId;
            relationshipTypeIdColumn.hidden = "true";
            commonGridColumns.push(relationshipTypeIdColumn);
            //#endregion

            //#region Company Name Column
            //Define Name column
            var companyNameColumn = {};
            companyNameColumn.text = ManageRelationships.config.gridColumnTitles.companyName;
            companyNameColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            companyNameColumn.datafield = ManageRelationships.config.gridColumnDataFields.companyName;
            companyNameColumn.width = "15%";
            companyNameColumn.editable = false;
            companyNameColumn.cellsrenderer = function (row, column, value) {

                if (row === 0) {
                    if (ManageRelationships.config.screenDataSubmitted) {
                        return '<span/>'
                    }
                    var buttonText = 'Select Company';
                    if (value && value !== '') {
                        buttonText = value;
                    }
                    return String.format("<input type='Button' onclick=ManageRelationships.events.loadCompanySearchPopup(this,'{0}','{2}'); row='{1}'  class='btn btn-grid' value='{3}' title='{4}'/>", gridId, row, row, buttonText, buttonText);
                }
            };
            commonGridColumns.push(companyNameColumn);
            //#endregion

            //#region Distributor Company Display Id
            //Define company display id column
            var companyIdColumn = {};
            companyIdColumn.text = ManageRelationships.config.gridColumnTitles.distributorCompanyDisplayId;
            companyIdColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            companyIdColumn.datafield = ManageRelationships.config.gridColumnDataFields.companyDisplayId;
            companyIdColumn.width = "10%";
            companyIdColumn.editable = false;
            companyIdColumn.cellsformat = "n";
            commonGridColumns.push(companyIdColumn);
            //#endregion

            //#region Company Address1 Column
            //Define address 1 column
            var companyAddress1Column = {};
            companyAddress1Column.text = ManageRelationships.config.gridColumnTitles.companyAddress1;
            companyAddress1Column.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            companyAddress1Column.datafield = ManageRelationships.config.gridColumnDataFields.companyAddress1;
            companyAddress1Column.width = "15%";
            companyAddress1Column.editable = false;
            commonGridColumns.push(companyAddress1Column);
            //#endregion

            //#region Valid To Column
            //Define valid to column
            var validToColumn = {};
            validToColumn.text = ManageRelationships.config.gridColumnTitles.validTo;
            validToColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            validToColumn.datafield = ManageRelationships.config.gridColumnDataFields.validToDisplayValue;
            validToColumn.width = "10%";
            validToColumn.editable = false;
            validToColumn.cellsrenderer = function (row, column, value) {
                if (ManageRelationships.config.screenDataSubmitted && row === 0) {
                    return '<span/>';
                }
            };
            commonGridColumns.push(validToColumn);
            //#endregion

            //#region Comment Column
            //Define comment column
            var commentColumn = {};
            commentColumn.text = ManageRelationships.config.gridColumnTitles.comment;
            commentColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            commentColumn.datafield = ManageRelationships.config.gridColumnDataFields.comment;
            commentColumn.width = gridId === ManageRelationships.config.constants.brandedRelationshipGridId ? data.Entity.ShowTierLevel ? "15%" : "25%" : "15%";
            commentColumn.initeditor = function (row, cellvalue, editor) {
                editor.jqxInput({
                    maxLength: parseInt(ManageRelationships.collections.initialData.Entity.CommentsMaxLength)
                });
            };
            commentColumn.cellbeginedit = function (row, datafield, columntype, value) {
                if (ManageRelationships.config.screenDataSubmitted) {
                    return false;
                }
                return true;
            }
            commonGridColumns.push(commentColumn);
            //#endregion

            //#region Status Column
            //Define status column
            var statusColumn = {};
            statusColumn.text = ManageRelationships.config.gridColumnTitles.status;
            statusColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            statusColumn.datafield = ManageRelationships.config.gridColumnDataFields.status;
            statusColumn.width = gridId === ManageRelationships.config.constants.brandedRelationshipGridId ? "10%" : "5%";
            statusColumn.editable = false;
            statusColumn.cellsrenderer = function (row, column, value) {
                if (ManageRelationships.config.screenDataSubmitted && row === 0) {
                    return '<span/>';
                }
            };
            commonGridColumns.push(statusColumn);
            //#endregion

            //#region Status Id hidden Column
            //Define status id hidden column
            var statusIdColumn = {};
            statusIdColumn.text = "Status Id";
            statusIdColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            statusIdColumn.datafield = ManageRelationships.config.gridColumnDataFields.statusId;
            statusIdColumn.editable = false;
            statusIdColumn.hidden = "true";
            commonGridColumns.push(statusIdColumn);
            //#endregion

            //return populated column array
            return commonGridColumns;
        },

        //Populate common fields for both grids
        privateGetCommonDataFields = function () {

            //Array to keep the set of fields
            var commonGridFields = [];

            //#region Company Relationship Id Field
            //Define relationship id field
            var companyRelationshipIdField = {};
            companyRelationshipIdField.name = ManageRelationships.config.gridColumnDataFields.companyRelationshipId;
            commonGridFields.push(companyRelationshipIdField);
            //#endregion

            //#region Distributor Company Id Field
            //Define relationship id field
            var distributorCompanyIdField = {};
            distributorCompanyIdField.name = ManageRelationships.config.gridColumnDataFields.distributorCompanyId;
            commonGridFields.push(distributorCompanyIdField);
            //#endregion

            //#region Brand Id Field
            //Define brand Id Field
            var brandIdField = {};
            brandIdField.name = ManageRelationships.config.gridColumnDataFields.brandId;
            commonGridFields.push(brandIdField);
            //#endregion

            //#region Is Same Hierarchy Field
            //Define Is Same Hierarchy Field
            var isSameHierarchyField = {};
            isSameHierarchyField.name = ManageRelationships.config.gridColumnDataFields.isSameHierarchy;
            commonGridFields.push(isSameHierarchyField);
            //#endregion

            //#region Relationship Type Id Field
            //Define relationship type id field
            var relationshipTypeIdField = {};
            relationshipTypeIdField.name = ManageRelationships.config.gridColumnDataFields.relationshipTypeId
            commonGridFields.push(relationshipTypeIdField);
            //#endregion

            //#region Company Name Field
            //Define Name field
            var companyNameField = {};
            companyNameField.name = ManageRelationships.config.gridColumnDataFields.companyName;
            commonGridFields.push(companyNameField);
            //#endregion

            //#region Company Id Field
            //Define Id field
            var companyIdField = {};
            companyIdField.name = ManageRelationships.config.gridColumnDataFields.companyDisplayId;
            companyIdField.type = ManageRelationships.config.gridColumnTypes.number;
            commonGridFields.push(companyIdField);
            //#endregion

            //#region Company Address Field
            //Define address field
            var companyAddressField = {};
            companyAddressField.name = ManageRelationships.config.gridColumnDataFields.companyAddress1;
            commonGridFields.push(companyAddressField);
            //#endregion

            //#region Valid To Field
            //Define valid to field
            var validToField = {};
            validToField.name = ManageRelationships.config.gridColumnDataFields.validToDisplayValue;
            commonGridFields.push(validToField);
            //#endregion

            //#region Comment Field
            //Define comment field
            var commentField = {};
            commentField.name = ManageRelationships.config.gridColumnDataFields.comment;
            commonGridFields.push(commentField);
            //#endregion

            //#region Status Field
            //Define status field
            var statusField = {};
            statusField.name = ManageRelationships.config.gridColumnDataFields.status;
            commonGridFields.push(statusField);
            //#endregion

            //#region Status Id Field
            //Define status field
            var statusIdField = {};
            statusIdField.name = ManageRelationships.config.gridColumnDataFields.statusId;
            commonGridFields.push(statusIdField);
            //#endregion

            //Return populated fields array
            return commonGridFields;
        },

        // Binding the distributor search related data
        privateBindDistributorSearchPopupData = function (data) {
            $("#" + ManageRelationships.config.constants.distributorSearchDivId).hide();
            privateBindFilterControl(data);
        },

        // Binding the distributor search filters
        privateBindFilterControl = function (data) {
            var filterCriteria = data[ManageRelationships.config.keys.SearchCriteriaQueryBuilderKey];
            if (filterCriteria) {
                filterCriteria.sort_filters = true;
                var $companySearchFilter = $(ManageRelationships.config.constants.distributorSearchFilterDivId);
                $companySearchFilter.QueryBuilderWrapper(filterCriteria);
            }
        },

        //Binding branded relationships to the grid
        privateBindBrandedRelationships = function (data) {

            //#region Columns
            //Getting common grid columns
            var brandedRelationshipGridColumns = privateGetCommonColumns(data, ManageRelationships.config.constants.brandedRelationshipGridId);

            //#region brandColumn
            //Insert brand as the first column
            var brandColumn = {};
            brandColumn.text = ManageRelationships.config.gridColumnTitles.brand;
            brandColumn.columntype = ManageRelationships.config.gridColumnTypes.dropdown;
            brandColumn.datafield = "BrandName";
            brandColumn.width = "10%";
            brandColumn.cellbeginedit = function (row) {
                return row === 0;
            };
            brandColumn.placeHolder = "Select Brand";
            brandColumn.cellsrenderer = function (row, column, value) {
                if (ManageRelationships.config.screenDataSubmitted && row === 0) {
                    return '<span/>';
                }

                return value;
            };
            brandColumn.initeditor = function (row, cellvalue, editor) {
                if (!ManageRelationships.config.screenDataSubmitted) {
                    if (data.PrimaryCompanyBrands)
                        editor.jqxDropDownList({
                            source: !data.Entity.UserIsInternal ? ManageRelationships.events.getUnusedBrandsForDistributorUser(data) : data.PrimaryCompanyBrands,
                            displayMember: 'Name',
                            valueMember: 'Id',
                            placeHolder: ManageRelationships.config.constants.brandPlaceHolderText
                        });
                    editor.bind('change', function (event) {
                        var grid = $(ManageRelationships.config.constants.brandedRelationshipGridId),
                            constants = ManageRelationships.config.constants,
                            gridFields = ManageRelationships.config.gridColumnDataFields;
                        if (grid) {
                            var brandId = grid.jqxGrid(constants.getCellValueKey, row, ManageRelationships.config.gridColumnDataFields.brandId);
                            if (brandId && brandId !== '') {
                                grid.jqxGrid(constants.setCellValueKey, row, gridFields.brandId, '');
                            }
                            var tierLevelId = grid.jqxGrid(constants.getCellValueKey, row, ManageRelationships.config.gridColumnDataFields.tierLevelId);
                            if (tierLevelId && tierLevelId !== '-1') {
                                grid.jqxGrid(constants.setCellValueKey, row, ManageRelationships.config.gridColumnDataFields.tierLevelId, '-1');
                                grid.jqxGrid(constants.setCellValueKey, row, ManageRelationships.config.gridColumnDataFields.tierLevel, '');
                            }
                            var distributorId = grid.jqxGrid(constants.getCellValueKey, row, ManageRelationships.config.gridColumnDataFields.distributorCompanyId);
                            if (distributorId !== '') {
                                var item = editor.jqxDropDownList('getSelectedItem');
                                if (item && item.value !== ManageRelationships.config.lastSelectedBrandId) {
                                    ManageRelationships.config.lastSelectedBrandedDistributorCompany = null;
                                    ManageRelationships.config.lastSelectedBrandId = null;
                                    grid.jqxGrid(constants.setCellValueKey, row, gridFields.companyDisplayId, '');
                                    grid.jqxGrid(constants.setCellValueKey, row, gridFields.companyName, '');
                                    grid.jqxGrid(constants.setCellValueKey, row, gridFields.companyAddress1, '');
                                    grid.jqxGrid(constants.setCellValueKey, row, gridFields.distributorCompanyId, '');
                                }
                            }
                        }
                    });
                }
            };
            brandColumn.geteditorvalue = function (row, cellvalue, editor) {
                // return the editor's value.
                var item = editor.jqxDropDownList('getSelectedItem');
                if (item) {
                    ManageRelationships.config.lastSelectedBrandId = item.value;
                    var grid = $(ManageRelationships.config.constants.brandedRelationshipGridId);
                    if (grid) {
                        grid.jqxGrid(
                            ManageRelationships.config.constants.setCellValueKey,
                            row,
                            ManageRelationships.config.gridColumnDataFields.brandId,
                            item.value);
                    }
                    return item.label;
                } else {
                    ManageRelationships.config.lastSelectedBrandId = null;
                    return ManageRelationships.config.constants.brandPlaceHolderText;
                }
            };
            brandedRelationshipGridColumns.splice(2, 0, brandColumn);
            //#endregion

            //#region tierLevelColumn

            //Insert tier level at 5th position
            //Tier level is visible only when Company Type=Dealer/Contractor with Service=Residential if Brand selected =Carrier or Bryant
            if (data.Entity.ShowTierLevel) {
                var tierLevelColumn = {};
                tierLevelColumn.text = "Tier Level";
                tierLevelColumn.columntype = ManageRelationships.config.gridColumnTypes.dropdown;
                tierLevelColumn.datafield = "TierLevel";
                tierLevelColumn.width = "10%";
                tierLevelColumn.cellsrenderer = function (row, column, value) {
                    if (ManageRelationships.config.screenDataSubmitted && row === 0) {
                        return '<span/>';
                    }
                };
                tierLevelColumn.cellbeginedit = function (row, datafield, columntype, value) {
                    //Enabling tier level dropdown when selected brands are carrier or bryant
                    if (ManageRelationships.config.screenDataSubmitted) {
                        return false;
                    }
                    var tierLevelControlsIds = ManageRelationships.collections.initialData.Entity.TierLevelControlBrandIds;
                    var editable = false;
                    var grid = $(ManageRelationships.config.constants.brandedRelationshipGridId);
                    if (grid) {
                        var barndId = grid.jqxGrid(ManageRelationships.config.constants.getCellValueKey, row, ManageRelationships.config.gridColumnDataFields.brandId);
                        if (tierLevelControlsIds && tierLevelControlsIds.length > 0) {
                            for (var i = 0; i < tierLevelControlsIds.length; i++) {
                                //Check the ids are a match
                                if (tierLevelControlsIds[i] === barndId) {
                                    editable = true;
                                    break;
                                }
                            }
                        }
                    }
                    return editable;
                }
                tierLevelColumn.createeditor = function (row, cellvalue, editor) {
                    if (data.DealerTierLevels)
                        editor.jqxDropDownList({
                            source: data.DealerTierLevels,
                            displayMember: 'TierLevelDescription',
                            valueMember: 'TierLevelId',
                            placeHolder: 'Select Tier Level'
                        });
                }
                tierLevelColumn.geteditorvalue = function (row, cellvalue, editor) {
                    // return the editor's value.
                    var item = editor.jqxDropDownList('getSelectedItem');
                    if (item) {
                        var grid = $(ManageRelationships.config.constants.brandedRelationshipGridId);
                        if (grid) {
                            grid.jqxGrid(ManageRelationships.config.constants.setCellValueKey,
                                row,
                                ManageRelationships.config.gridColumnDataFields.tierLevelId,
                                item.value);
                        }
                        return item.label;
                    }
                };
                brandedRelationshipGridColumns.splice(10, 0, tierLevelColumn);

                //#region Tier Level Id Column
                //Define hidden column to keep the Tier Level id
                var tierLevelIdColumn = {};
                tierLevelIdColumn.text = "Tier Level Id";
                tierLevelIdColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
                tierLevelIdColumn.datafield = ManageRelationships.config.gridColumnDataFields.tierLevelId;
                tierLevelIdColumn.hidden = "true";
                brandedRelationshipGridColumns.push(tierLevelIdColumn);
                //#endregion
            }
            //#endregion

            //#region actionColumn
            //Action column
            var actionColumn = {};
            actionColumn.text = "Action";
            actionColumn.width = "5%";
            actionColumn.editable = false;
            actionColumn.cellsrenderer = function (row, column, value) {
                if (ManageRelationships.config.screenDataSubmitted) {
                    return '<span/>';
                }
                var gridId = ManageRelationships.config.constants.brandedRelationshipGridId;
                if (row === 0)
                    return '<span onclick="ManageRelationships.gridEvents.addBrandedRow(this)"  row="' + row + '" class="add-btn action-icons" title="Add New Relationship">';
                else {
                    var relationshipId = privateGetRelationshipId(gridId, row);
                    if (relationshipId === undefined || relationshipId === '') {
                        return '<span onclick="ManageRelationships.gridEvents.deleteBrandedRow(this)" gridId="' + gridId + '" row="' + row + '" class="inactive-btn action-icons" title="Remove Relationship"></span>';
                    } else {
                        if (privateIsSameHierarchy(row)) {
                            var status = $(gridId).jqxGrid(
                                ManageRelationships.config.constants.getCellValueKey,
                                row,
                                ManageRelationships.config.gridColumnDataFields.status);
                            if (status === ManageRelationships.config.constants.activeStatusText) {
                                return '<span onclick="ManageRelationships.events.confirmDeactivate(this)" relationshipId="' + relationshipId + '"  gridId="' + gridId + '"  row="' + row + '" class="delete-btn action-icons" title="Deactivate Relationship"></span>';
                            } else if (status === ManageRelationships.config.constants.deactivatedStatusText) {
                                return '<span onclick="ManageRelationships.events.confirmActivate(this)" relationshipId="' + relationshipId + '" gridId="' + gridId + '"  row="' + row + '"  class="locator-btn action-icons" title="Reactivate Relationship"></span>';
                            }
                        } else {
                            return '<span/>';
                        }
                    }
                }
            };
            brandedRelationshipGridColumns.push(actionColumn);
            //#endregion

            //#endregion

            //#region Data Fields
            //Getting common data fields
            var brandedRelationshipGridDataFields = privateGetCommonDataFields();

            //Insert brand name as the first field
            var brandField = {};
            brandField.name = ManageRelationships.config.gridColumnDataFields.brand;
            brandedRelationshipGridDataFields.splice(2, 0, brandField);

            //Insert tier level into 5th position
            var tierLevelField = {};
            tierLevelField.name = "TierLevel";
            brandedRelationshipGridDataFields.splice(9, 0, tierLevelField);

            var tierLevelIdField = {};
            tierLevelIdField.name = ManageRelationships.config.gridColumnDataFields.tierLevelId;
            brandedRelationshipGridDataFields.splice(10, 0, tierLevelIdField);

            //#endregion

            //#region Grid Data Bind
            //Call the common bind grid function with columns fields and data
            ManageRelationships.gridEvents.bindDatagridWithColumns(
                ManageRelationships.config.constants.brandedRelationshipGridId,
                data.BrandedRelationships,
                brandedRelationshipGridColumns,
                brandedRelationshipGridDataFields,
                true);

            //#endregion
        },

        //Bind pricing & Warranty relationships
        privateBindPricingWarrantyRelationships = function (data) {

            //Getting common grid columns
            var pricingRelationshipGridColumns = privateGetCommonColumns(data, ManageRelationships.config.constants.pricingWarrantyRelationshipGridId);

            //#region Type Column
            //Insert type as the first column
            var typeColumn = {};
            typeColumn.text = "Type";
            typeColumn.columntype = ManageRelationships.config.gridColumnTypes.dropdown;
            typeColumn.datafield = ManageRelationships.config.gridColumnDataFields.relationshipTypeDisplayText;
            typeColumn.width = "10%";
            typeColumn.cellsrenderer = function (row, column, value) {
                if (ManageRelationships.config.screenDataSubmitted && row === 0) {
                    return '<span/>';
                }
            };
            typeColumn.cellbeginedit = function (row) {
                return row === 0;
            };
            typeColumn.placeHolder = ManageRelationships.config.constants.typePlaceHolderText;
            typeColumn.initeditor = function (row, cellvalue, editor) {
                if (data.PricingWarrantyRelationshipTypes && !ManageRelationships.config.screenDataSubmitted)
                    editor.jqxDropDownList({
                        source: data.PricingWarrantyRelationshipTypes,
                        displayMember: 'Name',
                        valueMember: 'RelationshipTypeId',
                        placeHolder: ManageRelationships.config.constants.typePlaceHolderText
                    });
            };
            typeColumn.geteditorvalue = function (row, cellvalue, editor) {
                // return the editor's value.
                var item = editor.jqxDropDownList('getSelectedItem');
                if (item) {
                    ManageRelationships.config.lastSelectedPricingWarrantyTypeId = item.value;
                    return item.label;
                } else {
                    ManageRelationships.config.lastSelectedPricingWarrantyTypeId = null;
                    return ManageRelationships.config.constants.typePlaceHolderText;
                }
            };
            typeColumn.cellvaluechanging = function (row, column, columntype, oldvalue, newvalue) {
                if (newvalue !== oldvalue && oldvalue !== '' && oldvalue !== undefined) {
                    var constants = ManageRelationships.config.constants,
                        grid = $(constants.pricingWarrantyRelationshipGridId);
                    if (ManageRelationships.config.lastSelectedPricingWarrantyDistributorCompany) {
                        if (confirm(ManageRelationships.collections.initialData.Entity.Messages.RelationshipTypeChangeWarning)) {
                            //Resetting the distributor information when dropdown change
                            ManageRelationships.config.lastSelectedPricingWarrantyDistributorCompany = null;
                            ManageRelationships.config.lastSelectedPricingWarrantyTypeId = null;
                            //Clearing cell values in the row
                            if (grid) {
                                var gridFields = ManageRelationships.config.gridColumnDataFields;
                                grid.jqxGrid(constants.setCellValueKey, row, gridFields.companyDisplayId, '');
                                grid.jqxGrid(constants.setCellValueKey, row, gridFields.companyName, '');
                                grid.jqxGrid(constants.setCellValueKey, row, gridFields.companyAddress1, '');
                                grid.jqxGrid(constants.setCellValueKey, row, gridFields.relationshipTypeId, '');
                            }
                        } else {
                            return oldvalue;
                        }
                    }
                }
                if (newvalue == "") return oldvalue;
            };
            pricingRelationshipGridColumns.splice(2, 0, typeColumn);



            //#endregion

            //#region Sold To Column
            //Sold To Column
            var soldToColumn = {};
            soldToColumn.text = "Sold To";
            soldToColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            soldToColumn.datafield = ManageRelationships.config.gridColumnDataFields.soldTo;
            soldToColumn.width = "5%";
            soldToColumn.editable = false;
            pricingRelationshipGridColumns.splice(10, 0, soldToColumn);
            //#endregion

            //#region CIN Column
            //Sold To Column
            var cinColumn = {};
            cinColumn.text = "CIN";
            cinColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            cinColumn.datafield = ManageRelationships.config.gridColumnDataFields.cin;
            cinColumn.width = "5%";
            cinColumn.cellbeginedit = function (row) {
                return privateDisableCell(ManageRelationships.config.constants.pricingWarrantyRelationshipGridId, row);
            };
            cinColumn.cellclassname = function (row, column, value, data) {
                if (row !== 0 && (value === '' || value === undefined)) {
                    return ManageRelationships.config.constants.gridCellValidationErrorClassName;
                }
            }
            cinColumn.initeditor = function (row, cellvalue, editor) {
                editor.jqxInput({
                    maxLength: parseInt(ManageRelationships.collections.initialData.Entity.CINLength)
                });
            };
            pricingRelationshipGridColumns.splice(11, 0, cinColumn);
            //#endregion

            //#region HVP Number Column
            //Sold To Column
            var hvpColumn = {};
            hvpColumn.text = "HVP #";
            hvpColumn.columntype = ManageRelationships.config.gridColumnTypes.textBox;
            hvpColumn.datafield = ManageRelationships.config.gridColumnDataFields.hvp;
            hvpColumn.width = "5%";
            hvpColumn.editable = false;
            pricingRelationshipGridColumns.splice(12, 0, hvpColumn);
            //#endregion

            //#region Action Column
            //Action column
            var actionColumn = {};
            actionColumn.text = "Action";
            actionColumn.width = "5%";
            actionColumn.editable = false;
            actionColumn.cellsrenderer = function (row, column, value) {
                if (ManageRelationships.config.screenDataSubmitted) {
                    return '<span/>';
                }
                var gridId = ManageRelationships.config.constants.pricingWarrantyRelationshipGridId;
                if (row === 0)
                    return '<span onclick="ManageRelationships.gridEvents.addPricingWarrantyRow(this)" gridId="' + gridId + '" row=' + "'" + row + "'" + 'class="add-btn action-icons" title="Add New Relationship">';
                else {
                    var relationshipId = privateGetRelationshipId(gridId, row);
                    if (relationshipId === undefined || relationshipId === '') {
                        return '<span onclick="ManageRelationships.gridEvents.deletePricingWarrantyRow(this)" gridId="' + gridId + '" row=' + "'" + row + "'" + 'class="inactive-btn action-icons" title="Remove Relationship"></span>';
                    } else {
                        var status = $(gridId).jqxGrid(
                            ManageRelationships.config.constants.getCellValueKey,
                            row,
                            ManageRelationships.config.gridColumnDataFields.status);
                        if (status === ManageRelationships.config.constants.activeStatusText) {
                            return '<span onclick="ManageRelationships.events.confirmDeactivate(this)" gridId="' + gridId + '"  relationshipId="' + relationshipId + '" row="' + row + '" class="delete-btn action-icons" title="Deactivate Relationship"></span>';
                        } else if (status === ManageRelationships.config.constants.deactivatedStatusText) {
                            return '<span onclick="ManageRelationships.events.confirmActivate(this)" gridId="' + gridId + '" relationshipId="' + relationshipId + '" row="' + row + '" class="locator-btn action-icons" title="Reactivate Relationship"></span>';
                        }
                    }
                }
            };
            pricingRelationshipGridColumns.push(actionColumn);
            //#endregion

            //#region Data Fields

            //Getting common data fields
            var pricingRelationshipGridDataFields = privateGetCommonDataFields();

            //#region Type Field
            //Insert relationship type data field
            var typeField = {};
            typeField.name = ManageRelationships.config.gridColumnDataFields.relationshipTypeDisplayText;
            pricingRelationshipGridDataFields.splice(2, 0, typeField);
            //#endregion

            //#region Sold To Field
            //Insert sold to data field
            var soldToField = {};
            soldToField.name = ManageRelationships.config.gridColumnDataFields.soldTo;
            pricingRelationshipGridDataFields.splice(7, 0, soldToField);
            //#endregion

            //#region CIN Field
            //Insert cin data field
            var cinField = {};
            cinField.name = ManageRelationships.config.gridColumnDataFields.cin;
            pricingRelationshipGridDataFields.splice(8, 0, cinField);
            //#endregion

            //#region HVP # Field
            //Insert hvp number data field
            var hvpField = {};
            hvpField.name = ManageRelationships.config.gridColumnDataFields.hvp;
            pricingRelationshipGridDataFields.splice(8, 0, hvpField);
            //#endregion

            //#endregion

            //#region Grid Data Bind
            //Call the common bind grid function with columns fields and data
            var pricingWarrantyRelationships = data.PricingWarrantyRelationships;
            ManageRelationships.gridEvents.bindDatagridWithColumns(
                ManageRelationships.config.constants.pricingWarrantyRelationshipGridId,
                pricingWarrantyRelationships,
                pricingRelationshipGridColumns,
                pricingRelationshipGridDataFields,
                false);
            //#endregion

            //#region Sync Error Message
            //Shows the error messages is the sync job is failed
            var errorMessages = "";
            for (var i = 0; i < pricingWarrantyRelationships.length; i++) {
                var relationship = pricingWarrantyRelationships[i];
                if (relationship.SyncMessage !== '' && relationship.IsSameHierarchy) {
                    errorMessages = errorMessages + String.format("<li>{0} ({1}) : {2} </li>", relationship.DistributorCompanyName, relationship.DistributorCompanyDisplayId, relationship.SyncMessage);
                }
            }
            if (errorMessages !== "") {
                errorMessages = String.format("<ol type='1'>{0}</ol>", errorMessages);
                errorMessages = "SAP Returned below error related to pricing relationships. Please take necessary actions : <br/>" + errorMessages;
                ManageRelationships.events.showServiceCallResponse(errorMessages, true);
            }
            //#endregion
        }

    //#endregion

    //#region Return Statement
    return {
        bindBrandedRelationships: function (data) {
            return privateBindBrandedRelationships(data);
        },
        bindPricingWarrantyRelationships: function (data) {
            return privateBindPricingWarrantyRelationships(data);
        },
        bindDistributorSearchPopupData: function (data) {
            return privateBindDistributorSearchPopupData(data);
        }
    }
    //#endregion

}())

//Grid event for relationship management
ManageRelationships.gridEvents = (function () {

    //#region Private Methods
    var
        //Bind the data grid with given columns
        privateBindDatagridWithColumns = function (gridId, source, columns, dataFields, showBusyDIv) {

            ManageRelationships.config.lastSelectedGridId = gridId;

            var constants = ManageRelationships.config.constants;
            if (showBusyDIv) {
                setTimeout(function () {
                    $(constants.manageRelationshipBusyWrapperDiv).show()
                }, 20);
                setTimeout(function () {
                    $(constants.manageRelationshipBusyImageDiv).show()
                }, 20);
            }


            //define the data source from the incoming source
            var gridSource = {
                datatype: "json",
                datafields: dataFields,
                localdata: source
            };

            //Populate the grid with local data source
            var dataAdapter = new $.jqx.dataAdapter(gridSource);
            var gridRendered = false;
            var grid = $(gridId);
            var interval;
            if (grid) {

                ManageRelationships.renderCount = 0;

                grid.jqxGrid({
                    width: "100%",
                    source: dataAdapter,
                    pagesize: 50,
                    pageable: true,
                    autoheight: false,
                    height: 200,
                    altrows: true,
                    enabletooltips: true,
                    editable: true,
                    sortable: true,
                    filterable: true,
                    showfilterrow: true,
                    localization: {
                        thousandsSeparator: ""
                    },
                    pagerrenderer: pagerrenderer,
                    selectionmode: 'singlecell',
                    editmode: 'click',
                    columnsresize: true,
                    columns: columns,
                    ready: function () {
                        if (ManageRelationships.collections.initialInputParameters.companyCategoryId !== '') {
                            privateAddRowToTop(gridId);
                            var constants = ManageRelationships.config.constants;
                            var grid = $(gridId)
                            if (grid) {
                                grid.jqxGrid(constants.setCellValueKey, 0, ManageRelationships.config.gridColumnDataFields.statusId, 1);
                                //
                            }
                        }
                        setTimeout(function () {
                            $(constants.manageRelationshipBusyWrapperDiv).hide()
                        }, 10);
                        setTimeout(function () {
                            $(constants.manageRelationshipBusyImageDiv).hide()
                        }, 10);

                    },
                    rendered: function (type) {
                        if (type == "full") {
                            ManageRelationships.renderCount = ManageRelationships.renderCount || 0;
                            if (ManageRelationships.renderCount === 3) {
                                gridRendered = true;
                            }
                            ManageRelationships.renderCount++;
                        }
                    },
                });

                // setTimeout(function () {
                //     $(ManageRelationships.config.constants.brandedRelationshipGridId).jqxGrid('begincelledit', 0, "BrandName");
                //     console.count('begincelledit');
                // }, 3000);

                interval = setInterval(function () {
                    console.count('checkRendered');
                    if ($(ManageRelationships.config.constants.brandedRelationshipGridId).jqxGrid('updating') === false && gridRendered) {
                        clearInterval(interval);
                        setTimeout(function () {
                            $(ManageRelationships.config.constants.brandedRelationshipGridId).jqxGrid('begincelledit', 0, "BrandName");

                            console.count('begincelledit');
                        }, 25);

                    }
                }, 25);

                if (source.length < 4) {
                    grid.jqxGrid({
                        autoheight: true
                    });
                }
            }
        },

        //Add new row to the top
        privateAddRowToTop = function (gridId) {
            var grid = $(gridId);
            if (grid) {
                var constants = ManageRelationships.config.constants;
                grid.jqxGrid("addrow", null, {}, "first");
                grid.jqxGrid(constants.setCellValueKey, 0, ManageRelationships.config.gridColumnDataFields.validToDisplayValue, "12/31/9999");
                grid.jqxGrid(constants.setCellValueKey, 0, ManageRelationships.config.gridColumnDataFields.status, "Active");
                privateRefreshPages(gridId);
                var rows = grid.jqxGrid("getrows");
                if (rows.length < 4) {
                    grid.jqxGrid({
                        autoheight: true
                    });
                }
            }
        },

        //Add branded relationship
        privateAddBrandedRelationship = function (data) {
            var gridId = ManageRelationships.config.constants.brandedRelationshipGridId,
                grid = $(gridId);
            if (grid) {
                ManageRelationships.events.endCurrentCellEdit(gridId);
                if (ManageRelationships.validations.validateBrandRelationshipRow(data)) {
                    privateAddRowToTop(gridId);
                    ManageRelationships.config.lastSelectedBrandedDistributorCompany = null;
                    ManageRelationships.config.lastSelectedBrandId = null;
                }
            }
        },

        //Add pricing & Warranty relationship
        privateAddPricingWarrantyRelationship = function (data) {
            var gridId = ManageRelationships.config.constants.pricingWarrantyRelationshipGridId,
                grid = $(gridId);
            if (grid) {
                ManageRelationships.events.endCurrentCellEdit(gridId);
                if (ManageRelationships.validations.validatePricingWarrantyRelationshipRow(data)) {
                    privateAddRowToTop(gridId);
                    ManageRelationships.config.lastSelectedPricingWarrantyDistributorCompany = null;
                    ManageRelationships.config.lastSelectedPricingWarrantyTypeId = null;
                }
            }
        },

        //Refresh grid row count based on page size
        privateRefreshPages = function (gridId) {
            var grid = $(gridId);
            if (grid) {
                var datainfo = grid.jqxGrid('getdatainformation');
                var paginginfo = datainfo.paginginformation;
                var labelId = gridId + "-pager-text";
                var label = $(labelId);
                if (label) {
                    if (paginginfo.pagenum === 0) {
                        var startFigure = (datainfo.rowscount - 1) > 0 ? 1 : 0;
                        label.text(startFigure + "-" + ((Math.min(datainfo.rowscount, (paginginfo.pagenum + 1) * paginginfo.pagesize)) - 1) + ' of ' + (datainfo.rowscount - 1));
                    } else {
                        label.text(((1 + paginginfo.pagenum * paginginfo.pagesize) - 1) + "-" + ((Math.min(datainfo.rowscount, (paginginfo.pagenum + 1) * paginginfo.pagesize)) - 1) + ' of ' + (datainfo.rowscount - 1));
                    }
                }
            }
        };

    //Custom pager
    var pagerrenderer = function () {
            var element = $("<div class='pager-wrapper' ></div>");

            //Export button
            var exportButton = $("<div class='left-btn left-floating grid-export-btn btn' gridId='" + ManageRelationships.config.lastSelectedGridId + "'><div>Export All</div></div>");
            exportButton.width(100);
            exportButton.jqxButton();
            exportButton.click(function () {
                var gridId = $(this).attr('gridId');
                ManageRelationships.events.exportSelectedData(gridId);
            });

            //Right button of the pager
            var rightButton = $("<div class='right-btn right-floating pager-btn' gridId='" + ManageRelationships.config.lastSelectedGridId + "'><div></div></div>");
            rightButton.find('div').addClass('jqx-icon-arrow-right');
            rightButton.width(27);
            rightButton.jqxButton();

            //Left button of the pager
            var leftButton = $("<div class='left-btn right-floating pager-btn' gridId='" + ManageRelationships.config.lastSelectedGridId + "'><div></div></div>");
            leftButton.find('div').addClass('jqx-icon-arrow-left');
            leftButton.width(27);
            leftButton.jqxButton();

            //Show row count option
            var dropdownLabel = $("<div class='right-floating lbl-pager'>Show rows: </div>");
            var dropdown = $("<div class='right-floating' gridId='" + ManageRelationships.config.lastSelectedGridId + "'></div>");
            dropdown.jqxDropDownList({
                source: ['10', '20', '50', '100', '200', '250', '500'],
                width: 50,
                height: 17,
                autoDropDownHeight: true
            });
            var grid = $(ManageRelationships.config.lastSelectedGridId);
            var datainfo = grid.jqxGrid('getdatainformation');
            var paginginfo = datainfo.paginginformation;
            dropdown.jqxDropDownList('val', paginginfo.pagesize);
            dropdown.on('change', function (event) {
                var args = event.args;
                if (args) {
                    var item = args.item;
                    var label = item.label;
                    var pageSize = parseInt(label);
                    var gridId = $(this).attr('gridId');
                    ManageRelationships.config.lastSelectedGridId = gridId;
                    $(gridId).jqxGrid({
                        pagesize: pageSize
                    });
                    privateRefreshPages(gridId);
                    // setTimeout(function () { $(this).jqxDropDownList({ selectedIndex: 2 }) }, 50);
                }
            });

            //Textbox to navigate in pages
            var inputBoxLabel = $("<div class='right-floating lbl-pager'>Go to page : </div>");
            var inputBox = $("<div class='right-floating go-to-input' gridId='" + ManageRelationships.config.lastSelectedGridId + "'></div>");
            inputBox.jqxNumberInput({
                width: '25px',
                height: '15px',
                min: 1,
                spinButtons: false,
                decimalDigits: 0,
                textAlign: 'center',
                inputMode: 'simple'
            });
            inputBox.jqxNumberInput('val', '1');
            inputBox.on('valueChanged', function (event) {
                var value = event.args.value;
                var gridId = $(this).attr('gridId');
                ManageRelationships.config.lastSelectedGridId = gridId;
                $(gridId).jqxGrid("gotopage", (parseInt(value) - 1));
                privateRefreshPages(gridId);
            });



            var pageInformationLabel = $("<div class='right-floating lbl-pager lbl-result' id='" + ManageRelationships.config.lastSelectedGridId.replace("#", "") + "-pager-text'></div>");
            exportButton.appendTo(element);
            rightButton.appendTo(element);
            leftButton.appendTo(element);
            pageInformationLabel.appendTo(element);
            dropdown.appendTo(element);
            dropdownLabel.appendTo(element);
            inputBox.appendTo(element);
            inputBoxLabel.appendTo(element);

            // update buttons states.
            var handleStates = function (event, button, className, add) {
                button.on(event, function () {
                    if (add == true) {
                        button.find('div').addClass(className);
                    } else button.find('div').removeClass(className);
                });
            }

            rightButton.click(function (e) {
                var gridId = $(this).attr('gridId');
                ManageRelationships.config.lastSelectedGridId = gridId;
                $(gridId).jqxGrid('gotonextpage');
                privateRefreshPages(gridId);
            });

            leftButton.click(function (e) {
                var gridId = $(this).attr('gridId');
                ManageRelationships.config.lastSelectedGridId = gridId;
                $(gridId).jqxGrid('gotoprevpage');
                privateRefreshPages(gridId);
            });

            return element;
        },

        //Delete newly added pricing or warranty relationship from grid and collection
        privateDeleteRow = function (data) {
            var constants = ManageRelationships.config.constants;
            var grid = $($(data).attr(constants.gridIdTextKey));
            if (grid) {
                var rowId = grid.jqxGrid('getrowid', parseInt($(data).attr(ManageRelationships.config.constants.rowTextKey)));
                grid.jqxGrid('deleterow', rowId);
            }
        };

    //#endregion

    //#region Return Statement
    return {
        addRowToTop: function (gridId) {
            return privateAddRowToTop(gridId);
        },
        addBrandedRow: function (data) {
            return privateAddBrandedRelationship(data);
        },
        addPricingWarrantyRow: function (data) {
            return privateAddPricingWarrantyRelationship(data);
        },
        deletePricingWarrantyRow: function (data) {
            return privateDeleteRow(data);
        },
        deleteBrandedRow: function (data) {
            return privateDeleteRow(data);
        },
        bindDatagridWithColumns: function (gridId, source, columns, dataFields, showBusyDiv) {
            return privateBindDatagridWithColumns(gridId, source, columns, dataFields, showBusyDiv);
        }
    }
    //#endregion

}())

//Handle all the validations for the grid
ManageRelationships.validations = (function () {

    //#region Private Methods
    var
        //#region Brand Validations
        //Validate whether the row has brand selected
        privateValidateBrand = function (data) {
            var Messages = ManageRelationships.collections.initialData.Entity.Messages;
            if (ManageRelationships.config.lastSelectedBrandId == null) {
                ManageRelationships.events.showMessage(Messages.BrandRequired);
                return false;
            }
            var grid = $(ManageRelationships.config.constants.brandedRelationshipGridId);
            if (grid) {
                var value;
                var row = parseInt($(data).attr(ManageRelationships.config.constants.rowTextKey));
                //Validate company information
                value = grid.jqxGrid(
                    ManageRelationships.config.constants.getCellValueKey,
                    row,
                    ManageRelationships.config.gridColumnDataFields.brand);
                if (value === undefined || value === '') {
                    ManageRelationships.events.showMessage(Messages.BrandRequired);
                    return false;
                }
                return true;
            }
        },

        //Check duplicate brands exist in grid
        privateBrandedDuplicatesExistInGrid = function (rowCollection, currentRow, rowId) {
            for (var i = 0; i < rowCollection.length; i++) {
                if (i === rowId) {
                    continue;
                }
                var currentRelationship = rowCollection[i];
                if (currentRelationship.Status !== 1) {
                    continue;
                }
                if (currentRelationship.BrandId === currentRow.BrandId) {
                    if (currentRelationship.DistributorCompanyId === currentRow.DistributorCompanyId) {
                        ManageRelationships.events.showMessage(ManageRelationships.collections.initialData.Entity.Messages.DuplicateBrandsFound);
                        return true;
                    }
                }
            }
            return false;
        },

        //Check the grid for branded duplicates. return true if no duplicates found
        privateValidateBrandGridForDuplicates = function () {
            if (!ManageRelationships.collections.initialData.Entity.ShowBrandedRelationships) {
                return true;
            }
            var grid = $(ManageRelationships.config.constants.brandedRelationshipGridId);
            if (grid) {
                var dataRows = grid.jqxGrid(ManageRelationships.config.constants.getBoundRowsKey);
                for (var i = 0; i < dataRows.length; i++) {
                    var currentItem = dataRows[i];
                    if (currentItem.CompanyRelationshipId === '') {
                        if (privateBrandedDuplicatesExistInGrid(dataRows, currentItem, i)) {
                            return false;
                        }
                    }
                }
            }
            return true;
        },

        //Validate the add ro in brand relationships
        privateValidateBrandRelationshipRow = function (data) {
            if (!ManageRelationships.config.lastSelectedBrandedDistributorCompany) {
                ManageRelationships.events.showMessage(ManageRelationships.collections.initialData.Entity.Messages.DistributorRequired);
                return false;
            }
            return privateValidateBrandGridForDuplicates();

        },

        //#endregion

        //#region Pricing & Warranty Validations

        //Check if the give CIN sold to combination exist
        privatePricingWarrantyDuplicatesExistInGrid = function (rowCollection, currentRow, rowId) {
            for (var i = 0; i < rowCollection.length; i++) {
                if (i === rowId) {
                    continue;
                }
                var currentRelationship = rowCollection[i];
                if (currentRelationship.Status !== 1) {
                    continue;
                }

                if (currentRelationship.CIN === currentRow.CIN) {
                    if (currentRelationship.SoldTo === currentRow.SoldTo) {
                        if (currentRelationship.RelationshipTypeId === currentRow.RelationshipTypeId) {
                            ManageRelationships.events.showMessage(ManageRelationships.collections.initialData.Entity.Messages.DuplicateCINandSoldToFound);
                            return true;
                        }
                    }
                }
            }
            return false;
        },

        //Validate the grid for duplicatesd
        privateValidatePricingWarrantyGridForDuplicates = function () {

            if (!ManageRelationships.collections.initialData.Entity.ShowPricingWarrantyRelationships) {
                return true;
            }
            var grid = $(ManageRelationships.config.constants.pricingWarrantyRelationshipGridId);
            if (grid) {

                var dataRows = grid.jqxGrid(ManageRelationships.config.constants.getBoundRowsKey);
                for (var i = 0; i < dataRows.length; i++) {
                    var currentItem = dataRows[i];
                    if (currentItem.CompanyRelationshipId === '') {
                        if (currentItem.RelationshipTypeId !== '') {
                            if (currentItem.DistributorCompanyId !== '' && currentItem.CIN === '') {
                                ManageRelationships.events.showMessage(ManageRelationships.collections.initialData.Entity.Messages.CINEmpty);
                                grid.jqxGrid(ManageRelationships.config.constants.selectCellKey, i, ManageRelationships.config.gridColumnDataFields.cin);
                                return false;
                            }
                            if (privatePricingWarrantyDuplicatesExistInGrid(dataRows, currentItem, i)) {
                                return false;
                            }
                        }
                    }
                }
            }
            return true;
        },

        //Validates the business logic for pricing and warranty
        privateValidatePricingWarrantyRelationshipRow = function (data) {
            var row = parseInt($(data).attr(ManageRelationships.config.constants.rowTextKey)),
                constants = ManageRelationships.config.constants,
                gridColumnDataFields = ManageRelationships.config.gridColumnDataFields,
                grid = $(constants.pricingWarrantyRelationshipGridId),
                cin = grid.jqxGrid(constants.getCellValueKey, row, gridColumnDataFields.cin),
                soldTo = grid.jqxGrid(constants.getCellValueKey, row, gridColumnDataFields.soldTo);

            if (!ManageRelationships.config.lastSelectedPricingWarrantyDistributorCompany) {
                ManageRelationships.events.showMessage(ManageRelationships.collections.initialData.Entity.Messages.DistributorRequired);
                return false;
            }

            if (soldTo === '' || soldTo === undefined) {
                ManageRelationships.events.showMessage(ManageRelationships.collections.initialData.Entity.Messages.SoldToEmpty);
                grid.jqxGrid(constants.selectCellKey, 0, gridColumnDataFields.soldTo);
                return false;
            }

            if (cin === '' || cin === undefined) {
                ManageRelationships.events.showMessage(ManageRelationships.collections.initialData.Entity.Messages.CINEmpty);
                grid.jqxGrid(constants.selectCellKey, 0, gridColumnDataFields.cin);
                return false;
            }

            return privateValidatePricingWarrantyGridForDuplicates();
        };
    //#endregion

    //#endregion

    //#region Return Statement
    return {
        validateBrandRelationshipRow: function (data) {
            return privateValidateBrandRelationshipRow(data);
        },
        validateBrandRelationshipGridForDuplicates: function () {
            return privateValidateBrandGridForDuplicates();
        },
        validatePricingWarrantyRelationshipRow: function (data) {
            return privateValidatePricingWarrantyRelationshipRow(data);
        },
        validatePricingWarrantyGridForDuplicates: function () {
            return privateValidatePricingWarrantyGridForDuplicates();
        },
        validateBrand: function (data) {
            return privateValidateBrand(data);
        },
    }
    //#endregion

}())

//Keep the collection of newly added branded & pricing &warranty relationships
ManageRelationships.collections = (function () {

    //#region Properties

    //Initial input parameters
    var privateInitialInputParameters;

    //Holds initial data coming form server
    var privateInitialData;

    //Array to hold newly added branded relationships
    var privateNewBrandedRelationshipCollection = [];

    //Array to hold newly added Pricing & Warranty Relationship
    var privateNewPricingWarrantyRelationshipCollection = [];

    //Array to hold deactivated relationships
    var privateDeactivatedRelationships = [];

    //#endregion

    //#region Private Methods
    //Method to check whether the item exist in array
    var existInArray = function (array, item) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (array[i].DistributorCompanyId === item.DistributorCompanyId)
                    true; // Return as soon as the object is found
            }
            return false; // The object was not found
        },

        //Keep newly added branded relationships
        privateAddNewBrandedRelationship = function (data) {
            if (!existInArray(privateNewBrandedRelationshipCollection, data)) {
                privateNewBrandedRelationshipCollection.push(data);
            }
        },

        //Keep newly added pricing & warranty relationships
        privateAddNewPricingWarrantyRelationship = function (data) {
            if (!existInArray(privateNewPricingWarrantyRelationshipCollection, data)) {
                privateNewPricingWarrantyRelationshipCollection.push(data);
            }
        },

        //initiate the collections for page load
        privateInitiateCollections = function () {
            privateInitialData = {};
            privateInitialInputParameters = {};
            privateNewBrandedRelationshipCollection = [];
            privateNewPricingWarrantyRelationshipCollection = [];
            privateDeactivatedRelationships = [];
            ManageRelationships.config.lastSelectedBrandedDistributorCompany = null;
            ManageRelationships.config.lastSelectedBrandId = null;
            ManageRelationships.config.lastSelectedPricingWarrantyDistributorCompany = null;
            ManageRelationships.config.lastSelectedPricingWarrantyTypeId = null;
        },

        // clear relationship selections
        privateClearRelationships = function () {
            privateNewBrandedRelationshipCollection = [];
            privateNewPricingWarrantyRelationshipCollection = [];
            privateDeactivatedRelationships = [];
        },

        //Generate new pricing & Warranty relationship list
        privateGetNewPricingWarrantyRows = function () {
            if (!ManageRelationships.collections.initialData.Entity.ShowPricingWarrantyRelationships) {
                var emptyArray = [];
                return emptyArray;
            }
            if (ManageRelationships.validations.validatePricingWarrantyGridForDuplicates()) {
                var allDataRows = $(ManageRelationships.config.constants.pricingWarrantyRelationshipGridId).jqxGrid(ManageRelationships.config.constants.getBoundRowsKey),
                    NewRows = [];
                for (var i = 0; i < allDataRows.length; i++) {
                    var currentItem = allDataRows[i];
                    if (currentItem.RelationshipTypeId && currentItem.DistributorCompanyId) {
                        var pricingWarrantyRelationship = {};
                        pricingWarrantyRelationship.CompanyRelationshipId = currentItem.CompanyRelationshipId ? currentItem.CompanyRelationshipId : 0;
                        pricingWarrantyRelationship.RelationshipTypeId = currentItem.RelationshipTypeId;
                        pricingWarrantyRelationship.CIN = currentItem.CIN;
                        pricingWarrantyRelationship.SoldTo = currentItem.SoldTo;
                        pricingWarrantyRelationship.Comment = currentItem.Comment;
                        pricingWarrantyRelationship.DistributorCompanyId = currentItem.DistributorCompanyId;
                        pricingWarrantyRelationship.Status = currentItem.Status ? currentItem.Status : 1;
                        pricingWarrantyRelationship.IsSameHierarchy = currentItem.IsSameHierarchy ? currentItem.IsSameHierarchy : true;
                        NewRows.push(pricingWarrantyRelationship);
                    }
                }
                return NewRows;
            }
        },

        //Generate new branded relationship list
        privateGetNewBrandedRows = function () {
            if (!ManageRelationships.collections.initialData.Entity.ShowBrandedRelationships) {
                var emptyArray = [];
                return emptyArray;
            }
            var allDataRows = $(ManageRelationships.config.constants.brandedRelationshipGridId).jqxGrid(ManageRelationships.config.constants.getBoundRowsKey),
                NewRows = [];
            for (var i = 0; i < allDataRows.length; i++) {
                var currentItem = allDataRows[i];
                if (currentItem.BrandId && currentItem.DistributorCompanyId) {
                    var brandedRelationship = {};
                    var tierLevel = -1;
                    if (ManageRelationships.collections.initialData.Entity.ShowTierLevel && currentItem.TierLevelId) {
                        tierLevel = currentItem.TierLevelId;
                    }
                    brandedRelationship.CompanyRelationshipId = currentItem.CompanyRelationshipId ? currentItem.CompanyRelationshipId : 0;
                    brandedRelationship.BrandId = currentItem.BrandId;
                    brandedRelationship.DistributorCompanyId = currentItem.DistributorCompanyId;
                    brandedRelationship.Comment = currentItem.Comment;
                    brandedRelationship.TierLevelId = tierLevel;
                    brandedRelationship.Status = currentItem.Status ? currentItem.Status : 1;
                    brandedRelationship.IsSameHierarchy = currentItem.IsSameHierarchy !== '' ? currentItem.IsSameHierarchy : true;
                    NewRows.push(brandedRelationship);
                }
            }
            return NewRows;
        }
    //#endregion

    //#region Return Statement
    return {
        getBrandedRelationshipCollection: function () {
            return privateGetNewBrandedRows();
        },
        getDeactivatedRelationships: function () {
            return privateDeactivatedRelationships;
        },
        getPricingWarrantyRelationshipCollection: function () {
            return privateGetNewPricingWarrantyRows();
        },
        addNewBrandedRelationship: function (data) {
            return privateAddNewBrandedRelationship(data);
        },
        addNewPricingWarrantyRelationship: function (data) {
            return privateAddNewPricingWarrantyRelationship(data);
        },
        initialData: privateInitialData,
        initialInputParameters: privateInitialInputParameters,
        initiateCollections: function () {
            return privateInitiateCollections();
        },
        clearRelationships: function () {
            return privateClearRelationships();
        }
    }
    //#endregion

}())

//String formatting
if (!String.format) {
    String.format = function (format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ?
                args[number] :
                match;
        });
    };
}

//Page load
$(document).ready(function () {
    ManageRelationships.collections.initiateCollections();
});