var ProgramEnrollmentFormCommon = {// program enrollment form common functionality name space
    config: {}, // configuration    
    event: {}, // static events 
    dataStore: {}, // data store
    dataManager: {}, // data manager
    webService: {}, // service          
    render: {}, // render
    load: {}, // load 
    helper: {},// helper
    dumy: {},
    submitData: {} // submit data
}

//#region Configurations
ProgramEnrollmentFormCommon.config = (function () {
    var privateConstant = {
        serviceUrl: '/_vti_bin/BlackjackService/ProgramManagementServices.svc/',
        dropdownWidth: '320px',
        dropdownHight: '25px'
    },

    privateServiceDataType = {
        xml: 'xml',
        json: 'json'
    },

    privateMethodName = {
        createEnrollmentForm: 'SaveUpdateEnrollmentFormData',
        getEnrollmentFormLoadData: 'GetEnrollmentFormLoadData'
    },

    privateSelectors = {
        enrollmentFormUniqueContentWrapperDiv: '#EnrollmentFormUniqueFieldWrapper'
    },

    privateRequestType = {
        get: 'GET',
        post: 'POST'
    },

        privateProgramControlsId = {
            EnrollmentFormProgramId: '#EnrollmentFormProgramIdValueLabel',
        },

    privateSalesControlsId = {
        currentYearTotalSalesVolume: "#currentYearTotalSalesVolume",
        firstYearTotalSalesVolume: "#firstYearTotalSalesVolume",
        secondYearTotalSalesVolume: "#secondYearTotalSalesVolume",
        /// Annual Equipment Purchases
        currentYearAnnualEquipmentPurchases: "#currentYearAnnualEquipmentPurchases",
        firstYearAnnualEquipmentPurchases: "#firstYearAnnualEquipmentPurchases",
        secondYearAnnualEquipmentPurchases: "#secondYearAnnualEquipmentPurchases",
        /// CBP Equipment Purchases
        currentYearCBPEquipmentPurchases: "#currentYearCBPEquipmentPurchases",
        firstYearCBPEquipmentPurchases: "#firstYearCBPEquipmentPurchases",
        secondYearCBPEquipmentPurchases: "#secondYearCBPEquipmentPurchases",
        /// AOR Purchase Volume
        currentYearAORPurchaseVolume: "#currentYearAORPurchaseVolume",
        firstYearAORPurchaseVolume: "#firstYearAORPurchaseVolume",
        secondYearAORPurchaseVolume: "#secondYearAORPurchaseVolume",
        /// Construction Purchase Volume
        currentYearConstructionPurchaseVolume: "#currentYearConstructionPurchaseVolume",
        firstYearConstructionPurchaseVolume: "#firstYearConstructionPurchaseVolume",
        /// Brand 1 Name
        currentYearBrandOneName: "#currentYearBrandOneName",
        firstYearBrandOneName: "#firstYearBrandOneName",
        /// Brand 1 Percentage
        currentYearBrandOnePercentage: "#currentYearBrandOnePercentage",
        firstYearBrandOnePercentage: "#firstYearBrandOnePercentage",
        /// Brand 2 Name
        currentYearBrandTwoName: "#currentYearBrandTwoName",
        firstYearBrandTwoName: "#firstYearBrandTwoName",
        /// Brand 2 Percentage
        currentYearBrandTwoPercentage: "#currentYearBrandTwoPercentage",
        firstYearBrandTwoPercentage: "#firstYearBrandTwoPercentage",
        /// CBP Brand Percentage
        currentYearCBPBrandPercentage: "#currentYearCBPBrandPercentage",
        firstYearCBPBrandPercentage: "#firstYearCBPBrandPercentage",
        //Conversion Expenditure
        vehicleIdentificationExpenses: "#vehicleIdentificationExpenses",
        outdoorSignExpenses: "#outdoorSignExpenses",
        otherMerchandiseExpenses: "#otherMerchandiseExpenses",
        otherMerchandisingExpenses: "#otherMerchandisingExpenses",
        equipmentExpenses: "#equipmentExpenses",
        serviceUniformsExpenses: "#serviceUniformsExpenses",
        otherBrandedClothesExpenses: "#otherBrandedClothesExpenses",
        showroomDisplayModelExpenses: "#showroomDisplayModelExpenses",
        consumerLiteratureExpenses: "#consumerLiteratureExpenses",
        technicalLiteratureExpenses: "#technicalLiteratureExpenses",
        technicalTrainingExpenses: "#technicalTrainingExpenses",
        salesTrainingExpenses: "#salesTrainingExpenses",
        digitalMarketingExpenses: "#digitalMarketingExpenses",
        nonDigitalAdvertisingExpenses: "#nonDigitalAdvertisingExpenses",
        promotionExpenses: "#promotionExpenses",
        otherExpenses: "#otherExpenses",
        otherExpensesComment: "#otherExpensesComment",
        marketingFundEstimate12PercentageFirstYear: '#marketingFundEstimate12PercentageFirstYear',
        marketingFundEstimate8PercentageFirstYear: '#marketingFundEstimate12PercentageFirstYear',
        marketingFundEstimateSevenPercentage: "#marketingFundEstimateSevenPercentage",// standad
        marketingFundEstimateFivePercentage: "#marketingFundEstimateFivePercentage", //dugluss

        /* Big fish */

        secondYearVehicleIdentificationExpenses: '#secondYearVehicleIdentificationExpenses',
        secondYearOutdoorSignExpenses: '#secondYearOutdoorSignExpenses',
        secondOtherMerchandiseExpenses: '#secondOtherMerchandiseExpenses',
        secondOtherMerchandisingExpenses: '#secondOtherMerchandisingExpenses',
        secondEquipmentExpenses: '#secondEquipmentExpenses',
        secondServiceUniformsExpenses: '#secondServiceUniformsExpenses',
        secondOtherBrandedClothesExpenses: '#secondOtherBrandedClothesExpenses',
        secondShowroomDisplayModelExpenses: '#secondShowroomDisplayModelExpenses',
        secondConsumerLiteratureExpenses: '#secondConsumerLiteratureExpenses',
        secondTechnicalLiteratureExpenses: '#secondTechnicalLiteratureExpenses',
        secondTechnicalTrainingExpenses: '#secondTechnicalTrainingExpenses',
        secondSalesTrainingExpenses: '#secondSalesTrainingExpenses',
        secondDigitalMarketingExpenses: '#secondDigitalMarketingExpenses',
        secondNonDigitalAdvertisingExpenses: '#secondNonDigitalAdvertisingExpenses',
        secondPromotionExpenses: '#secondPromotionExpenses',
        secondOtherExpenses: '#secondOtherExpenses',
        secondYearTotalSalesVolume: '#secondYearTotalSalesVolume',
        secondYearAnnualEquipmentPurchases: '#secondYearAnnualEquipmentPurchases',
        secondYearCBPEquipmentPurchases: '#secondYearCBPEquipmentPurchases',
        secondYearAORPurchaseVolume: '#secondYearAORPurchaseVolume',
        secondYearConstructionPurchaseVolume: '#secondYearConstructionPurchaseVolume',
        secondYearBrandOneName: '#secondYearBrandOneName',
        secondYearBrandOnePercentage: '#secondYearBrandOnePercentage',
        secondYearBrandTwoName: '#secondYearBrandTwoName',
        secondYearBrandTwoPercentage: '#secondYearBrandTwoPercentage',
        secondYearCBPBrandPercentage: '#secondYearCBPBrandPercentage'
    },

    privateDealerControlsId = {
        enrollmentFormDealerCompanyIdValueLabel: "#EnrollmentFormDealerCompanyIdValueLabel",
        dealerOwnerNamesDropdown: "#dealerOwnerNamesDropdown"

    },
    privateDistributorControlsId = {
        enrollmentFormDistributorNamesDropdown: "#EnrollmentFormDistributorNamesDropdown",
        enrollmentFormSalesManagerDropdown: "#EnrollmentFormSalesManagerDropdown",
        enrollmentFormTerritoryManagerDropdown: "#EnrollmentFormTerritoryManagerDropdown",
        enrollmentFormDistributorEmailTextbox: "#EnrollmentFormDistributorEmailTextbox",
        enrollmentFormSubmittedByValueLabel: "#EnrollmentFormSubmittedByValueLabel",
        enrollmentFormSubmittedByIdLabel: "#EnrollmentFormSubmittedByIdLabel"
    },
    privateApproverControlsId = {
        EnrollmentFormApproverSalesManagerDropdown: '#EnrollmentFormApproverSalesManagerDropdown',
        EnrollmentFormApproverCommentTextarea: '#EnrollmentFormApproverCommentTextarea',
        EnrollmentFormApproverActionDropdown: '#EnrollmentFormApproverActionDropdown',
        EnrollmentFormApproverWorkfolwStatusValueLabel: '#EnrollmentFormApproverWorkfolwStatusValueLabel'
        };

    return {
        constant: privateConstant,
        serviceDataType: privateServiceDataType,
        methodName: privateMethodName,
        selectors: privateSelectors,
        requestType: privateRequestType,
        salesControlsId: privateSalesControlsId,
        dealerControlsId: privateDealerControlsId,
        distributorControlsId: privateDistributorControlsId,
        approverControlsId: privateApproverControlsId,
        programControlsId: privateProgramControlsId
    }
}())
//#endregion Configurations

//#region DataStore
ProgramEnrollmentFormCommon.dataStore = (function () {
    var privateFieldMatrix = null,
        privateMessages = null,
        privateDealerData = null,
        privateDistributorData = null,
        privateApproveManagers = null,
        privateWorkflowActions = null,
        privateSalesInformationDivContent = null,
        privateSaleInformation = null,
        privateIsDuctless = null,
        privateFormType = null,
        privateMessages = null;
    return {
        storeFieldMatrix: function (matrix) { privateFieldMatrix = matrix; },
        storeMessages: function (messages) { privateMessages = messages; },
        storeDealerData: function (dealerData) { privateDealerData = dealerData; },
        storeDistributorData: function (distributorData) { privateDistributorData = distributorData; },
        storeApproveManagers: function (approveManagers) { privateApproveManagers = approveManagers; },
        storeWorkflowActions: function (actions) { privateWorkflowActions = actions; },
        storeSalesInformationDivContent: function (content) { privateSalesInformationDivContent = content; },
        storeSalesInformation: function (info) { privateSaleInformation = info; },
        storeIsDuctless: function (isDuctless) { privateIsDuctless = isDuctless; },
        storeFormtype: function (formType) { privateFormType = formType; },
        getFieldMatrix: function () { return privateFieldMatrix; },
        getMessages: function () { return privateMessages; },
        getDealerData: function () { return privateDealerData; },
        getDistributorData: function () { return privateDistributorData; },
        getApproveManagers: function () { return privateApproveManagers; },
        getWorkflowActions: function () { return privateWorkflowActions; },
        getSalesInformationDivContent: function () { return privateSalesInformationDivContent; },
        getSalesInformation: function () { return privateSaleInformation; },
        isDuctless: function () { return privateIsDuctless; },
        getFormType: function () { return privateFormType; }
    }
}());
//#endregion DataStore

//#region DataManager
ProgramEnrollmentFormCommon.dataManager = (function () {
    // get selected dropdwon value
    var privateGetDropdownSelectedItem = function (controllerId, property) {
        var item = $(controllerId).jqxDropDownList('getSelectedItem');
        if (item) {
            if (property)
                return item[property];
            else
                return item.value;
        }
    }

    return {
        getDropdownSelectedItem: privateGetDropdownSelectedItem
    }

}());


//#endregion DataManager

//#region WebService
ProgramEnrollmentFormCommon.webService = (function () {
    // call service
    var privateCall = function (serviceMethod, requestType, dataType, data, beforeSend, success, error, complete, contextObject) {

        $.ajax({
            url: ProgramEnrollmentFormCommon.config.constant.serviceUrl + serviceMethod,
            context: contextObject,
            dataType: dataType,
            cache: false,
            beforeSend: function () {
                beforeSend();
            },
            data: JSON.stringify(data),
            contentType: "application/json",
            type: requestType,
            success: function (data) {
                success(data, this);
            },
            error: function (errorData) {
                error(errorData);
            },
            complete: function () {
                complete();
            }
        });
    }

    return {
        call: function (serviceMethod, requestType, dataType, data, beforeSend, success, error, complete, contextObject) {
            privateCall(serviceMethod, requestType, dataType, data, beforeSend, success, error, complete, contextObject);
        }
    }
}());
//#endregion WebService

//#region Render
ProgramEnrollmentFormCommon.render = {

    controlls: {
        //Program info
        ProgramId: null,

        // dealer info
        DealerName: null,
        DealerCompanyId: null,
        DealerAddress: null,
        DealerPhone: null,
        DealerFax: null,
        DealerEmail: null,
        DealerOwnerNames: null,
        DealerOwnerEmail: null,

        // distributor info
        DistributorNames: null,
        DistributorCompanyId: null,
        DistributorAddress: null,
        DistributorSalesManagers: null,
        DistributorSalseManagerTitleLabel: null,
        DistributorTerritoryManagerNames: null,
        DistributorTerritoryManagerTitleLabel: null,
        DistributorEmail: null,
        DistributorSubmitedBy: null,
        DistributorSubmitedById: null,

        // approver info
        ApproverSalesManager: null,
        ApproverComment: null,
        ApproverActions: null,
        ApproverWorkflowStatus: null,

        // sales info
        SalesInformationDiv: null,

        // busy wrapper/image
        BusyWrapper: null,
        BusyImage: null,

        // cancel button
        CancelButton: null,
        CancelMessage: null,

        SubmitButton: null,
        SubmitMessage: null,

        // message dives
        errorMessage: null,
        successMessage: null
    },

    initializeHtmlObjects: function () {
        var fieldMatrix = ProgramEnrollmentFormCommon.dataStore.getFieldMatrix(),
            dealerData = ProgramEnrollmentFormCommon.dataStore.getDealerData(),
            distributorData = ProgramEnrollmentFormCommon.dataStore.getDistributorData(),
            approverSalesManagers = ProgramEnrollmentFormCommon.dataStore.getApproveManagers(),
            workflowActions = ProgramEnrollmentFormCommon.dataStore.getWorkflowActions(),
            salesInformationContent = ProgramEnrollmentFormCommon.dataStore.getSalesInformationDivContent(),
            salesInfo = ProgramEnrollmentFormCommon.dataStore.getSalesInformation(),
            messages = ProgramEnrollmentFormCommon.dataStore.getMessages(),

            /**
             * Initialze program Id value.
             */
            initializeProgramId = function () {
                ProgramEnrollmentFormCommon.render.controlls.programId =
                    $(ProgramEnrollmentFormCommon.config.programControlsId.EnrollmentFormProgramId);

                var programId = ProgramEnrollmentFormCommon.helper.analyzeQueryString('ProgramId');
                ProgramEnrollmentFormCommon.render.controlls.programId.text(programId);
            },

        // initialize dealer name
        instantiateDealerName = function () {
            ProgramEnrollmentFormCommon.render.controlls.DealerName = $('#EnrollmentFormDealerNameValueLabel');
            if (dealerData.DealerCompanyData.CompanyName) {
                ProgramEnrollmentFormCommon.render.controlls.DealerName.text(dealerData.DealerCompanyData.CompanyName);
            }
        },

        // initialize dealer company id
        instantiateDealerCompanyId = function () {
            ProgramEnrollmentFormCommon.render.controlls.DealerCompanyId = $('#EnrollmentFormDealerCompanyIdValueLabel');
            if (dealerData.DealerCompanyData.CompanyId)
                ProgramEnrollmentFormCommon.render.controlls.DealerCompanyId.text(dealerData.DealerCompanyData.CompanyId);
        },

        // initialize dealer address
        instantiateDealerAddress = function () {
            ProgramEnrollmentFormCommon.render.controlls.DealerAddress = $('#EnrollmentFormDealerAddressValueLable');
            if (dealerData.DealerCompanyData.CompanyAddress1) {
                var fulladdress = ProgramEnrollmentFormCommon.helper.setAddress(dealerData.DealerCompanyData.CompanyAddress1, dealerData.DealerCompanyData.CompanyAddress2, dealerData.DealerCompanyData.State, dealerData.DealerCompanyData.PostalCode, dealerData.DealerCompanyData.Country);
                ProgramEnrollmentFormCommon.render.controlls.DealerAddress.text(fulladdress);
            }
        },

        // initialize dealer phone
        instantiateDealerPhone = function () {
            ProgramEnrollmentFormCommon.render.controlls.DealerPhone = $('#EnrollmentFormDealerPhoneValueLabel');
            if (dealerData.DealerCompanyData.Phone)
                ProgramEnrollmentFormCommon.render.controlls.DealerPhone.text(dealerData.DealerCompanyData.Phone);
        },

        // initialize dealer fax
        instantiateDealerFax = function () {
            ProgramEnrollmentFormCommon.render.controlls.DealerFax = $('#EnrollmentFormDealerFaxValueLabel');
            if (dealerData.DealerCompanyData.Fax)
                ProgramEnrollmentFormCommon.render.controlls.DealerFax.text(dealerData.DealerCompanyData.Fax);
        },
        // initialize dealer email
        instantiateDealerEmail = function () {
            ProgramEnrollmentFormCommon.render.controlls.DealerEmail = $('#EnrollmentFormDealerEmailValueLabel');
            if (dealerData.DealerCompanyData.Email)
                ProgramEnrollmentFormCommon.render.controlls.DealerEmail.text(dealerData.DealerCompanyData.Email);
        },
        // initialize dealer owner names
        instantiateOwnerNames = function () {
            var disabled = false,
                selectedIndex = -1;
            ProgramEnrollmentFormCommon.render.controlls.DealerOwnerNames = $('#dealerOwnerNamesDropdown');
            if (dealerData && dealerData.Owners && dealerData.Owners.length === 1) {
                disabled = true;
                selectedIndex = 0;

            }
            ProgramEnrollmentFormCommon.render.controlls.DealerOwnerNames.jqxDropDownList({
                source: dealerData.Owners,
                displayMember: 'FullName',
                valueMember: 'UserId',
                autoDropDownHeight: true,
                disabled: disabled,
                width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                height: ProgramEnrollmentFormCommon.config.constant.dropdownHight
            });
            ProgramEnrollmentFormCommon.render.controlls.DealerOwnerNames.jqxDropDownList({ selectedIndex: selectedIndex });
            if (selectedIndex === 0)
                setDealerOwner(dealerData.Owners[0].UserId);
        },

        // set dealer owner
        setDealerOwner = function (id) {
            if (id) {
                // get owner item
                var owner = ProgramEnrollmentFormCommon.render.controlls.DealerOwnerNames.jqxDropDownList('getItemByValue', id),
                    // get owner object from dropdown source with other properties
                    ownerObject = ProgramEnrollmentFormCommon.helper.filterArray(
                    ProgramEnrollmentFormCommon.render.controlls.DealerOwnerNames.jqxDropDownList('source'),
                    'UserId',
                    id,
                    false
                    )[0];
                if (owner && ownerObject) {
                    ProgramEnrollmentFormCommon.render.controlls.DealerOwnerNames.jqxDropDownList('selectItem', owner);
                    ProgramEnrollmentFormCommon.render.controlls.DealerOwnerEmail.text(ownerObject.FullName);
                }

            }
        },

        // initialize dealer owner email
        instantiateDealerOwnerEmail = function () {
            ProgramEnrollmentFormCommon.render.controlls.DealerOwnerEmail = $('#EnrollmentFormOwnerEmailAddressValueLabel');
            /*if (dealerData.DealerCompanyData.Email)
                ProgramEnrollmentFormCommon.render.controlls.DealerOwnerEmail.text(dealerData.DealerCompanyData.Email);*/
        },

        // initialize distributor names
        instantiateDistributorNames = function () {
            ProgramEnrollmentFormCommon.render.controlls.DistributorNames = $('#EnrollmentFormDistributorNamesDropdown');
            if (distributorData) {

                var compnays = [];
                distributorData.forEach(function (distributor, index) {
                    distributor.DistributorCompanyData.Submittedby = distributorData[index].Submittedby;
                    compnays.push(distributor.DistributorCompanyData);
                });


                ProgramEnrollmentFormCommon.render.controlls.DistributorNames.jqxDropDownList({
                    source: compnays,
                    displayMember: 'CompanyName',
                    valueMember: 'CompanyId',
                    autoDropDownHeight: true,
                    width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                    height: ProgramEnrollmentFormCommon.config.constant.dropdownHight
                });
            }
        },

        // set selected distributor
        setSelectedDistributor = function () {
            if (distributorData.distributorId) {
                // get distributor item
                var distributor = ProgramEnrollmentFormCommon.render.controlls.DistributorNames.jqxDropDownList('getItemByValue', dealerData.distributorId),
                    // get distributor item from source with other properties
                    distributorObject = ProgramEnrollmentFormCommon.helper.filterArray(
                    ProgramEnrollmentFormCommon.render.controlls.DistributorNames.jqxDropDownList('source'),
                    'CompanyId',
                    distributorData.distributorId,
                    false
                    )[0];
                if (distributor && distributorObject) {
                    setDistributorDetails(distributorObject);
                    ProgramEnrollmentFormCommon.render.controlls.DistributorNames.jqxDropDownList('selectItem', distributor);
                }
            }
        },

        // set distributor details
        setDistributorDetails = function (distributor) {
            if (distributor) {
                instantiateDistributorId(distributor.CompanyId);

                var address = ProgramEnrollmentFormCommon.helper.setAddress(distributor.CompanyAddress1, distributor.CompanyAddress2, distributor.State, distributor.PostalCode, distributor.Country);
                instantiateDistributorAddress(address);
                instantiateDistributorEmail(distributor.Email)
                instantiateSubmitedBy(distributor.Submittedby.FullName, distributor.Submittedby.UserId);
                instantiateSalesManagers(distributor, distributor.SalesManagers, false);
            }
        },

        // initialize distributor CompanyId
        instantiateDistributorId = function (id) {
            ProgramEnrollmentFormCommon.render.controlls.DistributorCompanyId = $('#EnrollmentFormDistributorCompanyIdValueLabel');
            if (id) {
                ProgramEnrollmentFormCommon.render.controlls.DistributorCompanyId.text(id);
            }
        },

        // initialize distributor Address
        instantiateDistributorAddress = function (address) {
            ProgramEnrollmentFormCommon.render.controlls.DistributorAddress = $('#EnrollmentFormDistributorAddressValueLabel');
            if (address) {
                ProgramEnrollmentFormCommon.render.controlls.DistributorAddress.text(address);
            }
        },

        // initialize distributor SalesManagers
        instantiateSalesManagers = function (distrubutor, salesManagers, isDisabled) {
            if (!salesManagers || !salesManagers.length) {
                var _distributorData = ProgramEnrollmentFormCommon.dataStore.getDistributorData();
                var companydistributors = _distributorData.filter(function (company, index) {
                    return distrubutor.CompanyId === company.DistributorCompanyData.CompanyId;
                });

                var _currentSalesManagers = companydistributors.length && companydistributors[0].SalesManagers;
                var _currentTerritoryManagers = companydistributors.length && companydistributors[0].TerritoryManagers;
                if (_currentSalesManagers) {
                    salesManagers = _currentSalesManagers;
                    distrubutor.SalesManagers = _currentSalesManagers;
                }
                var _currentTerritoryManagers = companydistributors.length && companydistributors[0].TerritoryManagers;
                if (_currentTerritoryManagers) {
                    distrubutor.TerritoryManagers = _currentTerritoryManagers;
                }
            }

            if (salesManagers) {
                ProgramEnrollmentFormCommon.render.controlls.DistributorSalesManagers = $('#EnrollmentFormSalesManagerDropdown');
                ProgramEnrollmentFormCommon.render.controlls.DistributorSalesManagers.jqxDropDownList({
                    source: salesManagers,
                    displayMember: 'FullName',
                    valueMember: 'UserId',
                    autoDropDownHeight: true,
                    width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                    height: ProgramEnrollmentFormCommon.config.constant.dropdownHight,
                    disabled: isDisabled
                });
                if (salesManagers[0] && salesManagers[0].DisplayValue1 && salesManagers.length === 1)
                    ProgramEnrollmentFormCommon.render.controlls.DistributorSalesManagers.jqxDropDownList({ selectedIndex: 0 });
                else
                    ProgramEnrollmentFormCommon.render.controlls.DistributorSalesManagers.jqxDropDownList({ selectedIndex: -1 });
            }
        },

        // set distributor SalseManagerTitleLabel
        setDstributorSalseManagerTitleLabel = function (isDuctless) {
            ProgramEnrollmentFormCommon.render.controlls.DistributorSalseManagerTitleLabel = $('EnrollmentFormSalesManagerNameLabel');
            if (isDuctless)
                ProgramEnrollmentFormCommon.render.controlls.DistributorSalseManagerTitleLabel.text('');
        },

        // initialize distributor TerritoryManagerNames
        instantiateTerritoryManagers = function (managers, isDisabled) {
            if (managers) {
                ProgramEnrollmentFormCommon.render.controlls.DistributorTerritoryManagerNames = $('#EnrollmentFormTerritoryManagerDropdown');
                ProgramEnrollmentFormCommon.render.controlls.DistributorTerritoryManagerNames.jqxDropDownList({
                    source: managers,
                    displayMember: 'FullName',
                    valueMember: 'UserId',
                    autoDropDownHeight: true,
                    width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                    height: ProgramEnrollmentFormCommon.config.constant.dropdownHight,
                    disabled: isDisabled
                });
                if (managers[0] && managers[0].DisplayValue1 && managers.length === 1)
                    ProgramEnrollmentFormCommon.render.controlls.DistributorTerritoryManagerNames.jqxDropDownList({ selectedIndex: 0 });
                else
                    ProgramEnrollmentFormCommon.render.controlls.DistributorTerritoryManagerNames.jqxDropDownList({ selectedIndex: -1 });
            }
        },

        // initialize distributor TerritoryManagerTitleLabel

        // initialize distributor Email
        instantiateDistributorEmail = function (email) {
            ProgramEnrollmentFormCommon.render.controlls.DistributorEmail = $('#EnrollmentFormDistributorEmailTextbox');
            if (email) {
                ProgramEnrollmentFormCommon.render.controlls.DistributorEmail.val(email);
            }
        },

        // initialize distributor SubmitedBy
        instantiateSubmitedBy = function (submitedBy, userId) {
            ProgramEnrollmentFormCommon.render.controlls.DistributorSubmitedBy = $('#EnrollmentFormSubmittedByValueLabel');
            ProgramEnrollmentFormCommon.render.controlls.DistributorSubmitedById = $('#EnrollmentFormSubmittedByIdLabel');
            if (submitedBy)
                ProgramEnrollmentFormCommon.render.controlls.DistributorSubmitedBy.text(submitedBy);

            if (userId)
                ProgramEnrollmentFormCommon.render.controlls.DistributorSubmitedById.text(userId);
        },


        // initialize approver salesManager
        instantiateApproverSalesManagers = function (managers, isDisabled) {
            ProgramEnrollmentFormCommon.render.controlls.ApproverSalesManager = $('#EnrollmentFormApproverSalesManagerDropdown');
            ProgramEnrollmentFormCommon.render.controlls.ApproverSalesManager.jqxDropDownList({
                source: managers,
                displayMember: 'DisplayName',
                valueMember: 'Id',
                autoDropDownHeight: true,
                width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                height: ProgramEnrollmentFormCommon.config.constant.dropdownHight,
                disabled: isDisabled
            });
            ProgramEnrollmentFormCommon.render.controlls.ApproverSalesManager.jqxDropDownList({ selectedIndex: -1 });
        },
        // initialize approver comment
        //EnrollmentFormApproverCommentTextarea
        instantiateApproverCommnet = function (comment) {
            ProgramEnrollmentFormCommon.render.controlls.ApproverComment = $('#EnrollmentFormApproverCommentTextarea');
            if (comment) {
                ProgramEnrollmentFormCommon.render.controlls.ApproverComment.text(comment);
            }
        },

        // initialize approver action
        //EnrollmentFormApproverActionDropdown
        instantiateApproverActions = function (actions, isDisabled) {
            if (actions) {
                ProgramEnrollmentFormCommon.render.controlls.ApproverActions = $('#EnrollmentFormApproverActionDropdown');
                ProgramEnrollmentFormCommon.render.controlls.ApproverActions.jqxDropDownList({
                    source: actions,
                    displayMember: 'DisplayName',
                    valueMember: 'Id',
                    autoDropDownHeight: true,
                    width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                    height: ProgramEnrollmentFormCommon.config.constant.dropdownHight,
                    disabled: isDisabled
                });
            }
        },
        // initialize approver workflowStatus


        //EnrollmentFormApproverWorkfolwStatusValueLabel
        instantiateApproverWorkflowStatus = function (value) {
            ProgramEnrollmentFormCommon.render.controlls.ApproverWorkflowStatus = $('#EnrollmentFormApproverWorkfolwStatusValueLabel');
            if (value)
                ProgramEnrollmentFormCommon.render.controlls.ApproverWorkflowStatus.text(value);
        },

        // initialize sales info
        instantiateSalesInforamtionDiv = function (htmlContent, salesInfo) {
            ProgramEnrollmentFormCommon.render.controlls.SalesInformationDiv = $('#EnrollmentFormUniqueFieldWrapper');
            if (htmlContent) {
                ProgramEnrollmentFormCommon.render.controlls.SalesInformationDiv.html(htmlContent);
                if (typeof ProgramEnrollmentFormCommon.render.onSalesInformationDivRendered === 'function') {
                    ProgramEnrollmentFormCommon.render.onSalesInformationDivRendered(salesInfo);
                }
            }
        },

        // initialize busy content
        instantiateBusyContenet = function () {
            ProgramEnrollmentFormCommon.render.controlls.BusyImage = $('#EnrollmentFormInitialBusyImageDiv');
            ProgramEnrollmentFormCommon.render.controlls.BusyWrapper = $('#EnrollmentFormInitialBusyWrapperDiv');
        },

        instantiateCanclePopup = function () {
            ProgramEnrollmentFormCommon.render.controlls.CancelButton = $('#EnrollmentFormCalcelButton');
            ProgramEnrollmentFormCommon.render.controlls.CancelMessage = $('#EnrollmentFormCancelMessage');
            // set cancel message text
            ProgramEnrollmentFormCommon.render.controlls.CancelMessage.text(messages.CancelConfirmationMessage);
            ProgramEnrollmentFormCommon.render.controlls.CancelButton.click(function (e) {
                ProgramEnrollmentFormCommon.event.cancel();
            });
        },

        instantiatesubmit = function () {
            ProgramEnrollmentFormCommon.render.controlls.SubmitButton = $('#EnrollmentFormSubmitButton');
            ProgramEnrollmentFormCommon.render.controlls.SubmitButton.on('click', function (e) {
                ProgramEnrollmentFormCommon.event.submit();
            });
        }


        instantiateMessageDiv = function () {
            ProgramEnrollmentFormCommon.render.controlls.successMessage = $('#EnrollmentFormSuccessMessageDiv');
            ProgramEnrollmentFormCommon.render.controlls.errorMessage = $('#EnrollmentFormErrorMessageDiv');
        };



        instantiateBusyContenet();
        instantiateCanclePopup();
        instantiateMessageDiv();

        initializeProgramId();
        instantiateDealerName();
        instantiateDealerCompanyId();
        instantiateDealerAddress();
        instantiateDealerPhone();
        instantiateDealerFax();
        instantiateDealerOwnerEmail();
        instantiateDealerEmail();
        instantiateOwnerNames();
        setDealerOwner();

        instantiateDistributorNames();
        setSelectedDistributor();
        instantiateSubmitedBy(dealerData.submitedBy);
        instantiateSalesManagers([{}], true);
        instantiateTerritoryManagers([{}], true);

        instantiateApproverSalesManagers(approverSalesManagers, false);
        instantiateApproverCommnet();
        instantiateApproverActions([{}], true);
        //instantiateApproverActions(workflowActions, false);
        instantiateApproverWorkflowStatus();
        instantiateSalesInforamtionDiv(salesInformationContent, salesInfo);

        instantiatesubmit();

        // owner change event
        ProgramEnrollmentFormCommon.render.controlls.DealerOwnerNames.on('select', function (event) {
            var args = event.args;
            if (args) {
                // get selected owner object              
                var selectedOwner = ProgramEnrollmentFormCommon.helper.filterArray(
                    ProgramEnrollmentFormCommon.render.controlls.DealerOwnerNames.jqxDropDownList('source'),
                    'UserId',
                    args.item.value,
                    false
                    )[0];
                if (selectedOwner) {
                    ProgramEnrollmentFormCommon.render.controlls.DealerOwnerEmail.text(selectedOwner.Email);
                }
            }
        });

        // distributor change event
        ProgramEnrollmentFormCommon.render.controlls.DistributorNames.on('select', function (event) {
            var args = event.args;
            if (args) {
                // get selected distributor              
                var selectedDistributor = ProgramEnrollmentFormCommon.helper.filterArray(
                    ProgramEnrollmentFormCommon.render.controlls.DistributorNames.jqxDropDownList('source'),
                    'CompanyId',
                    args.item.value,
                    false
                    )[0];
                if (selectedDistributor) {
                    setDistributorDetails(selectedDistributor);

                    if (selectedDistributor.SalesManagers.length > 1)
                        instantiateSalesManagers(selectedDistributor.SalesManagers, false);
                    else
                        instantiateSalesManagers(selectedDistributor.SalesManagers, true);

                    if (selectedDistributor.TerritoryManagers.length > 1)
                        instantiateTerritoryManagers(selectedDistributor.TerritoryManagers, false);
                    else
                        instantiateTerritoryManagers(selectedDistributor.TerritoryManagers, true);
                }
            }
        });
    }
};
//#endregion Render

//#region Load
ProgramEnrollmentFormCommon.load = (function () {

    var privateBeforeSend = function () {
        ProgramEnrollmentFormCommon.helper.showBusyWrapper();
    },
    privateAfterSend = function () { },
    privateSuccess = function (data) {
        //console.log(data);
        if (data && data.status.Success) {
            /* ProgramEnrollmentFormCommon.dataStore.storeDealerData(data.initialData.Dealer);
             ProgramEnrollmentFormCommon.dataStore.storeDistributorData(data.initialData.Distributors);
             ProgramEnrollmentFormCommon.dataStore.storeApproveManagers(data.initialData.ApproverSalesManagers);
             ProgramEnrollmentFormCommon.dataStore.storeSalesInformationDivContent(data.salesInforamtionHtml);
             ProgramEnrollmentFormCommon.dataStore.storeMessages(data.messages);
             ProgramEnrollmentFormCommon.render.initializeHtmlObjects();*/
            ProgramEnrollmentFormCommon.dataStore.storeDealerData(data.dealer);
            ProgramEnrollmentFormCommon.dataStore.storeDistributorData(data.distributors);
            ProgramEnrollmentFormCommon.dataStore.storeApproveManagers(data.approverSalesManagers);
            ProgramEnrollmentFormCommon.dataStore.storeSalesInformationDivContent(data.salesInforamtionHtml);
            ProgramEnrollmentFormCommon.dataStore.storeSalesInformation(data.data);
            ProgramEnrollmentFormCommon.dataStore.storeWorkflowActions(data.actionTypes);
            ProgramEnrollmentFormCommon.dataStore.storeMessages(data.messages);
            ProgramEnrollmentFormCommon.render.initializeHtmlObjects();
        }


    },
    privateError = function (error) {
        console.log(error);
    },
    privateComplete = function () {
        ProgramEnrollmentFormCommon.helper.hideBusyWrapper();
    };

    return {
        beforeSend: function () { privateBeforeSend(); },
        afterSend: function () { privateAfterSend(); },
        success: function (data) { privateSuccess(data); },
        error: function (error) { privateError(error); },
        complete: function () { privateComplete(); }
    };
}());
//#endregion Load
/*
ProgramEnrollmentFormCommon.dumy = {
    data: {
        dealerName: '1 SOURCE HEAT & AIR 123',
        dealerCompanyId: '7675443',
        dealerAddress: 'aasf,a asdmfadsmf asfmaksmf askdmasm asdmaks sdsdu dsfuhdasfb asihdasbf aushdasb ausdhfas',
        dealerPhone: '0777418377',
        dealerFax: '0777418377',
        dealerEmail: 'nkkarunarathne@virtusapolaris.com',
        dealerOwners: [
            {
                DisplayValue1: 'Owner 1',
                DisplayValue2: 'email@email.com1',
                DisplayName: 'Owner 1',
                Id: 1
            },
            {
                DisplayValue1: 'Owner 2',
                DisplayValue2: 'email@email.com2',
                DisplayName: 'Owner 2',
                Id: 2
            },
        ],
        //dealerOwnerId: 1,
        //delaerOwnerEmail: 'nkkarunarathne@virtusapolaris.com',
        distributors: [
            {
                Name: 'Distributor 1',
                Id: 1,
                Address: 'aasf,a asdmfadsmf asfmaksmf askdmasm asdmaks sdsdu dsfuhdasfb asihdasbf aushdasb ausdhfas 111',
                Email: 'email@email.com 1',
                SalesManagers: [
                        {
                            Name: 'Sales Manager 11',
                            Id: 11
                        },
                        {
                            Name: 'Sales Manager 12',
                            Id: 12
                        }
                ],
                TerritoryManagers: [
                    {
                        Name: 'Territory Manager 11',
                        Id: 21
                    },
                    {
                        Name: 'Territory Manager 12',
                        Id: 22
                    }
                ]
            },
            {
                Name: 'Distributor 2',
                Id: 2,
                Address: 'aasf,a asdmfadsmf asfmaksmf askdmasm asdmaks sdsdu dsfuhdasfb asihdasbf aushdasb ausdhfas 222',
                Email: 'email@email.com2',
                SalesManagers: [
                        {
                            Name: 'Sales Manager 21',
                            Id: 31
                        },
                        {
                            Name: 'Sales Manager 22',
                            Id: 32
                        }
                ],
                TerritoryManagers: [
                    {
                        Name: 'Territory Manager 21',
                        Id: 1
                    },
                    {
                        Name: 'Territory Manager 22',
                        Id: 2
                    }
                ]
            }, {
                Name: 'Distributor 3',
                Id: 3,
                Address: 'aasf,a asdmfadsmf asfmaksmf askdmasm asdmaks sdsdu dsfuhdasfb asihdasbf aushdasb ausdhfas 333',
                Email: 'email@email.com3',
                SalesManagers: [
                        {
                            Name: 'Sales Manager 31',
                            Id: 1
                        },
                        {
                            Name: 'Sales Manager 32',
                            Id: 2
                        }
                ],
                TerritoryManagers: [
                    {
                        Name: 'Territory Manager 31',
                        Id: 1
                    },
                    {
                        Name: 'Territory Manager 32',
                        Id: 2
                    }
                ]
            }
        ],
        //distributorId: 2,
        submitedBy: 'damithS'
    },
    dummyInitial: function () {
        ProgramEnrollmentFormCommon.dataStore.storeDealerData(ProgramEnrollmentFormCommon.dumy.data);
        ProgramEnrollmentFormCommon.render.initializeHtmlObjects();
    }
};*/

//#region Event
ProgramEnrollmentFormCommon.event = (function () {
    var privateSubmitData = function (event) {
        //try {
        // TODO: call validation
        var error = "",
            data = {
                programId: 0,
                dealerId: 0,
                formId: 0,
                formData: {}
            }

        if (!error) {
            // TODO: add form type
            data.formData = ProgramEnrollmentFormCommon.helper.getFieldValues(ProgramEnrollmentFormCommon.dataStore.getFormType());

            /// add validation

            ProgramEnrollmentFormCommon.webService.call(
                ProgramEnrollmentFormCommon.config.methodName.createEnrollmentForm,
                ProgramEnrollmentFormCommon.config.requestType.post,
                ProgramEnrollmentFormCommon.config.serviceDataType.json,
                data,
                ProgramEnrollmentFormCommon.submitData.beforeSend,
                ProgramEnrollmentFormCommon.submitData.success,
                ProgramEnrollmentFormCommon.submitData.error,
                ProgramEnrollmentFormCommon.submitData.complete,
                null
                );
        }
        //}catch (e) { }
    },
    privateCancel = function () {
        // TODO implement this method.
        showlightbox('EnrollmentFormCancelPopup');
    }
    return {
        submit: function (e) { privateSubmitData(e); },
        cancel: function () { privateCancel(); }
    }
}());
//#endregion Event

//#region Helper
ProgramEnrollmentFormCommon.helper = (function () {
    /**
	*	Apply this function to enable numeric input for text fields.
	**/
    var privateFilterNumbers = function (evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /[0-9]/;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    },

    privateRegisterNumericControls = function (controlIdentifiers) {
        for (var index = 0; index < controlIdentifiers.length; index++) {
            try {
                var element = document.getElementById(controlIdentifiers[index]);
                if (element) {
                    $(element).on('keypress', function (evt) {
                        privateFilterNumbers(evt);
                    });
                }
            } catch (err) {
                ProgramEnrollmentFormCommon.helper.showErrorMessage('Sales form control not found.');
            }
        }
    },

    // starts with filter
    privatevarStringStartsWith = function (string, startsWith) {
        string = string || "";
        if (startsWith.length > string.length)
            return false;
        return string === startsWith;
    },

    // search array
    privateSearch = function (string, searchString) {
        string = string.toUpperCase() || "";
        if (searchString.length > string.length)
            return false;
        else if (string.indexOf(searchString.toUpperCase()) > -1)
            return string;
        else if (searchString.length === 0)
            return string;
    },

    // filter array using knockout filter util
    privateFilterFunction = function (array, filterProterty, filterValue, isSearch) {
        return ko.utils.arrayFilter(array, function (item) {

            if (filterValue) {
                if (isSearch) {
                    return privateSearch(item[filterProterty].toString(), filterValue.toString());
                }
                else {
                    return privatevarStringStartsWith(item[filterProterty].toString(), filterValue.toString());
                }
            }
        });
    },

    // get jqx dropdown selected value
    privateGetJqxDropdownListselectedItemValue = function (dropdownObject) {
        if (dropdownObject)
            return dropdownObject.jqxDropDownList('getSelectedItem').value;
    },

    // get common field entered values
    privateGetFieldData = function (formType) {
        /*var data = {};
        
        // common field data
        //data.Type 
        data.Action = privateGetJqxDropdownListselectedItemValue(ProgramEnrollmentFormCommon.render.controlls.ApproverActions);
        //data.Id = 
        //data.DistributorCompanyId = privateGetJqxDropdownListselectedItemValue(ProgramEnrollmentFormCommon.render.controlls.DistributorCompanyId)
        data.DistributorSalesManagerId = privateGetJqxDropdownListselectedItemValue(ProgramEnrollmentFormCommon.render.controlls.DistributorSalesManagers);
        data.DistributorTerritoryManagerId = privateGetJqxDropdownListselectedItemValue(ProgramEnrollmentFormCommon.render.controlls.DistributorTerritoryManagerNames);
        data.DistributorContactEmail = ProgramEnrollmentFormCommon.render.controlls.DistributorEmail.val();
        //data.DealerCompanyId = 
        data.DealerOwnerId = privateGetJqxDropdownListselectedItemValue(ProgramEnrollmentFormCommon.render.controlls.DealerOwnerNames);
        data.SalesManagerId = privateGetJqxDropdownListselectedItemValue(ProgramEnrollmentFormCommon.render.controlls.ApproverSalesManager);
        data.WorkflowStatus = ProgramEnrollmentFormCommon.render.controlls.ApproverWorkflowStatus.val();
        //data.EnrollmentStatus = 
        */

        var enrollmententity = {};

        //// Dealer information
        //#EnrollmentFormDealerCompanyIdValueLabel
        enrollmententity.DealerCompanyId = $(ProgramEnrollmentFormCommon.config.dealerControlsId.enrollmentFormDealerCompanyIdValueLabel).text();
        //#dealerOwnerNamesDropdown'
        enrollmententity.DealerOwnerId = ProgramEnrollmentFormCommon.dataManager.getDropdownSelectedItem(ProgramEnrollmentFormCommon.config.dealerControlsId.dealerOwnerNamesDropdown, 'index');

        /// #region Distributor information
        //'#EnrollmentFormDistributorNamesDropdown'
        enrollmententity.DistributorCompanyId = ProgramEnrollmentFormCommon.dataManager.getDropdownSelectedItem(ProgramEnrollmentFormCommon.config.distributorControlsId.enrollmentFormDistributorNamesDropdown, 'index');
        //'#EnrollmentFormSalesManagerDropdown'
        enrollmententity.DistributorSalesManagerId = ProgramEnrollmentFormCommon.dataManager.getDropdownSelectedItem(ProgramEnrollmentFormCommon.config.distributorControlsId.enrollmentFormDistributorNamesDropdown, 'index');
        //'#EnrollmentFormTerritoryManagerDropdown'
        enrollmententity.DistributorTerritoryManagerId = ProgramEnrollmentFormCommon.dataManager.getDropdownSelectedItem(ProgramEnrollmentFormCommon.config.distributorControlsId.enrollmentFormTerritoryManagerDropdown, 'index');
        //'#EnrollmentFormDistributorEmailTextbox'
        enrollmententity.DistributorContactEmail = $(ProgramEnrollmentFormCommon.config.distributorControlsId.enrollmentFormDistributorEmailTextbox).val();
        //'#EnrollmentFormSubmittedByValueLabel'
        enrollmententity.DistributorSubmittedBy = $(ProgramEnrollmentFormCommon.config.distributorControlsId.enrollmentFormSubmittedByIdLabel).val();
        ///#endregion

        /// #region Approver information
        //'#EnrollmentFormApproverSalesManagerDropdown'
        enrollmententity.ApproverSalesManagerId = ProgramEnrollmentFormCommon.dataManager.getDropdownSelectedItem(ProgramEnrollmentFormCommon.config.approverControlsId.EnrollmentFormApproverSalesManagerDropdown, 'index');
        //'#EnrollmentFormApproverCommentTextarea'
        enrollmententity.ApproverComment = $(ProgramEnrollmentFormCommon.config.approverControlsId.EnrollmentFormApproverCommentTextarea).val();
        //'#EnrollmentFormApproverActionDropdown'
        enrollmententity.ApproverAction = ProgramEnrollmentFormCommon.dataManager.getDropdownSelectedItem(ProgramEnrollmentFormCommon.config.approverControlsId.EnrollmentFormApproverActionDropdown, 'index');
        //'#EnrollmentFormApproverWorkfolwStatusValueLabel'
        enrollmententity.ApproverWorkflowStatus = 0;//$(ProgramEnrollmentFormCommon.config.approverControlsId.EnrollmentFormApproverWorkfolwStatusValueLabel).val();
        ///#endregion


        var salesinfomationValues = {};

        /*if (formType=='bigfish')
        {*/
        salesinfomationValues = ProgramEnrollmentFormBigfish.dataManager.getAllControlsValue();
        /*}
        else if (formType == 'dugless') {
            salesinfomationValues = ProgramEnrollmentFormDuctless.dataManager.getAllControlsValue;
        }
        else if (formType == 'standard') {
            salesinfomationValues = ProgramEnrollmentFormStandard.dataManager.getAllControlsValue;
        }*/

        // add sales information to entity

        var dummy = {
            "AllBrandsTotalSalesVolumeCurrentYear": "0",
            "AllBrandsTotalSalesVolumeFirstYear": "0",
            "AllBrandsAnnualEquipmentPurchasesCurrentYear": "0",
            "AllBrandsAnnualEquipmentPurchasesFirstYear": "0",
            "CBPAnnualEquipmentPurchasesCurrentYear": "0",
            "CBPAnnualEquipmentPurchasesFirstYear": "0",
            "AllBrandsAORPurchasesVolumeCurrentYear": "0",
            "AllBrandsAORPurchasesVolumeFirstYear": "0",
            "AllBrandsNewConstructionPurchaseVolumeCurrentYear": "0",
            "AllBrandsNewConstructionPurchaseVolumeFirstYear": "0",
            "CompetitiveBrand1NameCurrentYear": "0",
            "CompetitiveBrand1NameFirstYear": "0",
            "CompetitiveBrand1PercentageCurrentYear": "0",
            "CompetitiveBrand1PercentageFirstYear": "0",
            "CompetitiveBrand2NameCurrentYear": "0",
            "CompetitiveBrand2NameFirstYear": "0",
            "CompetitiveBrand2PercentageCurrentYear": "0",
            "CompetitiveBrand2PercentageFirstYear": "0",
            "CBPBrandPercentageCurrentYear": "0",
            "CBPBrandPercentageFirstYear": "0",
            "CBPBrandPercentageSecondYear": "0",
            "MarketingFundEstimateSevenPercentage": "0",
            "VehicleIdentificationFirstYear": "0",
            "VehicleIdentificationSecondYear": "0",
            "OutdoorSignFirstYear": "0",
            "OutdoorSignSecondYear": "0",
            "OtherMerchandiseFirstYear": "0",
            "OtherMerchandiseSecondYear": "0",
            "OtherMerchandisingFirstYear": "0",
            "OtherMerchandisingSecondYear": "0",
            "EquipmentFirstYear": "0",
            "EquipmentSecondYear": "0",
            "ServiceUniformsFirstYear": "0",
            "ServiceUniformsSecondYear": "0",
            "OtherBrandedClothesFirstYear": "0",
            "OtherBrandedClothesSecondYear": "0",
            "ShowRoomDisplayModelsFirstYear": "0",
            "ShowRoomDisplayModelsSecondYear": "0",
            "ConsumerLiteratureFirstYear": "0",
            "ConsumerLiteratureSecondYear": "0",
            "TechnicalLiteratureFirstYear": "0",
            "TechnicalLiteratureSecondYear": "0",
            "TechnicalTrainingFirstYear": "0",
            "TechnicalTrainingSecondYear": "0",
            "SalesTrainingFirstYear": "0",
            "SalesTrainingSecondYear": "0",
            "DigitalMarketingFirstYear": "0",
            "DigitalMarketingSecondYear": "0",
            "AdvertisingNonDigitalFirstYear": "0",
            "AdvertisingNonDigitalSecondYear": "0",
            "PromotionFirstYear": "0",
            "PromotionSecondYear": "0",
            "OtherFirstYear": "0",
            "OtherSecondYear": "0",
            "AllBrandsTotalSalesVolumnSecondYear": "0",
            "AllBrandsAnnualEquipmentPurchasesSecondYear": "0",
            "CBPAnnualEquipmentPurchasesSecondYear": "0",
            "AllBrandsAORPurchaseVolumnSecondYear": "0",
            "AllBrandsNewConstructionPurchaseVolumnSecondYear": "0",
            "CompetitiveBrand1NameSecondYear": "0",
            "CompetitiveBrand1PercentageSecondYear": "0",
            "CompetitiveBrand2NameSecondYear": "0",
            "CompetitiveBrand2PercentageSecondYear": "0",
            "MarketingFundEstimate12PercentageFirstYear": "0",
            "MarketingFundEstimate8PercentageFirstYear": "0",
            "Comment": "0",
            "AllBrandsTotalDuctlessSalesVolumeCurrentYear": "0",
            "AllBrandsTotalDuctlessSalesVolumeFirstYear": "0",
            "AllBrandsAnnualDustlessEquipmentPuchasesCurrentYear": "0",
            "AllBrandsAnnualDustlessEquipmentPuchasesFirstYear": "0",
            "CBPAnnualDuctlessEquipmentPurchasesCurrentYear": "0",
            "CBPAnnualDuctlessEquipmentPurchasesFirstYear": "0",
            "AllBrandsDuctlessAORPurchaseVolumnCurrentYear": "0",
            "AllBrandsDuctlessAORPurchaseVolumnFirstYear": "0",
            "AllBrandsNewConstructionDuctlessPurchasesVolumnCurrentYear": "0",
            "AllBrandsNewConstructionDuctlessPurchasesVolumnFirstYear": "0",
            "MarketingFundEstimateFivePercentage": "0",
            "DealerCompanyId": "0",
            "DealerOwnerId": "0",
            "DistributorCompanyId": "0",
            "DistributorSalesManagerId": "0",
            "DistributorTerritoryManagerId": "0",
            "DistributorContactEmail": "0",
            "DistributorSubmittedBy": "0",
            "ApproverSalesManagerId": "0",
            "ApproverComment": "0",
            "ApproverAction": "0",
            "ApproverWorkflowStatus": "0",
            "DealerCompanyID": "0",
            "DealerName": "0",
            "DealerAddress": "0",
            "DealerPhone": "0",
            "DealerFax": "0",
            "DealerEmailAddress": "0",
            "DealerOwnerEmailAddress": "0",
            "DistributorId": "0",
            "DistributorName": "0",
            "DistributorAddress": "0",
            "FormType": "0",
            "EnrollmentStatus": "0"
        };

        $.extend(dummy, enrollmententity, salesinfomationValues);


        return dummy;
    },
    // common method for validate the regExs
    privateRegXValidation = function (regX, value) {
        return regX.test(value);
    },

    // show busy wrapper content
    privateShowBusyWrapper = function () {
        $('#EnrollmentFormInitialBusyWrapperDiv').show();
        $('#EnrollmentFormInitialBusyImageDiv').show();
    },

    // hide busy wrapper content
    privateHideBusyWrapper = function () {
        $('#EnrollmentFormInitialBusyWrapperDiv').hide();
        $('#EnrollmentFormInitialBusyImageDiv').hide();
    },

    // validate email
    privateIsValidEmail = function (value) {
        var regX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z0-9_\-\.]*)$/;
        return privateRegXValidation(regX, value.trim());
    },

    privateValidateCommenFieldValues = function () {
        var isValid = false;


    },
    // check the whole number to avid decimal
    privateIsWholeNumber = function (number) {
        var number_regEx = /^\d*$/;

        if (number === "") {
            return false;
        }

        return privateRegXValidation(number_regEx, number);
    },
    // check the enter value contains any empty value or only spaces
    privateRequiedField = function (value) {
        var empty_string_regexp = /^\s*$/;

        if (value === "") {
            return false;
        }
        // check if entered value has only spaces
        if (privateRegXValidation(empty_string_regexp, value)) {
            return false;
        }
        return true;
    },

    // show success message
    privateShowSuccessMessage = function (message) {
        ProgramEnrollmentFormCommon.render.controlls.successMessage.text(message);
        ProgramEnrollmentFormCommon.render.controlls.successMessage.css("display", "block");
    },

    // show error message
    privateShowErrorMessage = function (message) {
        ProgramEnrollmentFormCommon.render.controlls.errorMessage.innerHTML = message;
        ProgramEnrollmentFormCommon.render.controlls.errorMessage.css("display", "block");
    },

    // hide messages
    privateHideMessages = function () {
        ProgramEnrollmentFormCommon.render.controlls.errorMessage.css("display", "none");
        ProgramEnrollmentFormCommon.render.controlls.successMessage.css("display", "none");
    },

    _setAddress = function (address1, address2, state, postalCode, country) {
        return address1 + " " + address1 + " " + state + " " + postalCode + " " + country;
    },

     _analyzeQueryString = function (parametername) {

         var parameterValue;

         if (window.location.href.indexOf('?') != -1) {
             var allQueryStrings = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
             for (var i = 0; i < allQueryStrings.length; i++) {
                 var queryString = allQueryStrings[i].split('=');
                 // if parameter found
                 if (parametername === queryString[0] && queryString.length > 1) {
                     parameterValue = queryString[1];
                 }
             }
         }

         return parameterValue;

     },


    priveteGetControlIdArray = function (formControls) {
        var controlIdenties = [];

        $.each(ProgramEnrollmentFormCommon.config.salesControlsId, function (allControlsIndex, allControlsValue) {
            $.each(formControls, function (index, values) {
                if (values === allControlsIndex) {
                    controlIdenties.push(allControlsValue);
                }
            });
        });



        return controlIdenties;
    },
    // set empty string whether value is null or undefined
    privateSetDefaultValue = function (value) {
        return (value !== null || value !== undefined) ? value : '';
    };

    return {
        filterArray: function (array, filterProterty, filterValue, isSearch) { return privateFilterFunction(array, filterProterty, filterValue, isSearch); },
        getFieldValues: function (formType) { return privateGetFieldData(formType); },
        showBusyWrapper: function () { privateShowBusyWrapper(); },
        hideBusyWrapper: function () { privateHideBusyWrapper(); },
        showSuccessMessage: function (message) { privateShowSuccessMessage(message); },
        showErrorMessage: function (message) { privateShowErrorMessage(message); },
        hideMessages: function () { privateHideMessages(); },
        isValidEmail: function (email) { return privateIsValidEmail(email); },
        getControlIdArray: function (formControls) { return priveteGetControlIdArray(formControls); },
        isWholeNumber: function (value) { return privateIsWholeNumber(value); },
        requiedField: function (value) { return privateRequiedField(value); },
        setDefaultValue: function (value) { return privateSetDefaultValue(value); },
        filterNumbers: function (evt) { privateFilterNumbers(evt); },
        registerNumericControls: function (ctrls) { privateRegisterNumericControls(ctrls); },
        setAddress: function (address1, address2, state, postalCode, country) { return _setAddress(address1, address2, state, postalCode, country); },
        analyzeQueryString: function (name) { return _analyzeQueryString(name); }
    }
}());
//#endregion Helper)

//#region Submit Data
ProgramEnrollmentFormCommon.submitData = (function () {

    // before send
    var privateBeforeSend = function () {
        ProgramEnrollmentFormCommon.helper.hideMessages();
        ProgramEnrollmentFormCommon.helper.showBusyWrapper();
    },

    // after send
    privateAfterSend = function () {

    },

    // success
    privateSuccess = function (data) {

    },

    // error
    privateError = function (error) {
        ProgramEnrollmentFormCommon.helper.showErrorMessage(error.responseText);
    },

    // complete
    privateComplete = function () {
        ProgramEnrollmentFormCommon.helper.hideBusyWrapper();
    }

    return {
        beforeSend: function () { privateBeforeSend(); },
        success: function (data) { privateSuccess(data); },
        error: function (error) { privateError(error); },
        complete: function () { privateComplete(); }
    }
}());
//#endregion Submit Data

$(document).ready(function () {
    var data = {
        programId: 123,
        dealerId: 123,
        formId: 0,
        formType: ''
    };

    data.programId = ProgramEnrollmentFormCommon.helper.analyzeQueryString('programId');
    data.formId = ProgramEnrollmentFormCommon.helper.analyzeQueryString('formId');
    data.formType = ProgramEnrollmentFormCommon.helper.analyzeQueryString('formType');

    ProgramEnrollmentFormCommon.webService.call(
        ProgramEnrollmentFormCommon.config.methodName.getEnrollmentFormLoadData,
        ProgramEnrollmentFormCommon.config.requestType.post,
        ProgramEnrollmentFormCommon.config.serviceDataType.json,
        data,
        ProgramEnrollmentFormCommon.load.beforeSend,
        ProgramEnrollmentFormCommon.load.success,
        ProgramEnrollmentFormCommon.load.error,
        ProgramEnrollmentFormCommon.load.complete,
        null
        );
});