//<-- version UAT 2.1.5 -->
'use strict';

var ProgramEnrollmentFormCommon = {
    // program enrollment form common functionality name space

    //#region Configurations
    config: (function () {
            var privateConstant = {
                    serviceUrl: '/_vti_bin/BlackjackService/ProgramManagementServices.svc/',
                    dropdownWidth: '300px',
                    dropdownHight: '28px',
                    submissionFailureErrorMessagePart1: 'Submission failure,',
                    systemErrorMessagePart1: 'System error occurred,',
                    errorMessagePart2: 'Please contact your administrator for further assistance.',
                    decimalfieldMaxLength: 9,
                    percentageFieldMaxLength: 3
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
                    marketingFundEstimate8PercentageFirstYear: '#marketingFundEstimate8PercentageFirstYear',
                    marketingFundEstimateSevenPercentage: "#marketingFundEstimateSevenPercentage", // standad
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
                    secondYearConstructionPurchaseVolume: '#secondYearConstructionPurchaseVolume',
                    secondYearBrandOneName: '#secondYearBrandOneName',
                    secondYearBrandOnePercentage: '#secondYearBrandOnePercentage',
                    secondYearBrandTwoName: '#secondYearBrandTwoName',
                    secondYearBrandTwoPercentage: '#secondYearBrandTwoPercentage',
                    secondYearCBPBrandPercentage: '#secondYearCBPBrandPercentage',
                    annualPurchaseLabel: '#annualPurchaseLabel',
                    brandPercentageLabel: '#brandPercentageLabel'
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
                    EnrollmentFormApproverCommentTextarea: '#EnrollmentFormApproverCommentTextarea',
                    EnrollmentFormApproverActionDropdown: '#EnrollmentFormApproverActionDropdown',
                    EnrollmentFormApproverWorkfolwStatusValueLabel: '#EnrollmentFormApproverWorkfolwStatusValueLabel'
                },
                _labelNames = {
                    ductlessSMLabel: "Ductless Sales Manager",
                    residentialSMLabel: "Residential Sales Manager",
                    annaualPurchaesLabel: "Carrier Annual Equipment Purchases ($)",
                    bryantPurchaseLabel: "Bryant Annual Equipment Purchases ($)"
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
        ,
    dataStore: (function () {
            var messages = null,
                dealerData = null,
                distributorData = null,
                approveManagers = null,
                workflowActions = null,
                salesInformationDivContent = null,
                salesInformation = null,
                isDuctless = null,
                programData = null,
                brandData = null,
                verticals = null,
                queryStringData = null,
                visibility = null


            return {

                StoreVisibility: function (data) {
                    visibility = data;
                },
                StoreMessages: function (data) {
                    messages = data;
                },
                StoreDealerData: function (data) {
                    dealerData = data;
                },
                StoreDistributorData: function (data) {
                    distributorData = data;
                },
                StoreApproveManagers: function (data) {
                    approveManagers = data;
                },
                StoreWorkflowActions: function (data) {
                    workflowActions = data;
                },
                StoreSalesInformationDivContent: function (content) {
                    salesInformationDivContent = content;
                },
                StoreSalesInformation: function (info) {
                    salesInformation = info;
                },
                StoreIsDuctless: function (data) {
                    isDuctless = data;
                },
                StoreProgram: function (data) {
                    programData = data;
                },
                StoreBrands: function (data) {
                    brandData = data;
                },
                StoreVerticals: function (data) {
                    verticals = data;
                },
                StoreQueryStringData: function (data) {
                    queryStringData = data;
                },
                GetVisibility: function () {
                    return visibility;
                },
                GetMessages: function () {
                    return messages;
                },
                GetDealerData: function () {
                    return dealerData;
                },
                GetDistributorData: function () {
                    return distributorData;
                },
                GetApproveManagers: function () {
                    return approveManagers;
                },
                GetWorkflowActions: function () {
                    return workflowActions;
                },
                GetSalesInformationDivContent: function () {
                    return salesInformationDivContent;
                },
                GetSalesInformation: function () {
                    return salesInformation;
                },
                GetProgram: function () {
                    return programData;
                },
                IsDuctless: function () {
                    return isDuctless;
                },
                GetBrands: function () {
                    return brandData;
                },
                GetVerticals: function () {
                    return verticals;
                },
                GetQueryStringData: function () {
                    return queryStringData;
                },
            }
        }())
        //#endregion DataStore

        //#region DataManager
        ,
    dataManager: (function () {
            // get selected dropdown value
            var privateGetDropdownSelectedItem = function (controllerId, property) {
                    var item = $(controllerId).jqxDropDownList('getSelectedItem');
                    if (item) {
                        if (property)
                            return item[property];
                        else
                            return item.value;
                    }
                },

                getOriginalItemValue = function (controllerId, property) {
                    var item = $(controllerId).jqxDropDownList('getSelectedItem');
                    if (item && item.originalItem) {
                        if (property)
                            return item.originalItem[property];
                        else
                            return item.originalItem;
                    }
                }



            return {
                getDropdownSelectedItem: privateGetDropdownSelectedItem,
                getOriginalItemValue: getOriginalItemValue
            }

        }())

        //#endregion DataManager

        //#region WebService
        ,
    webService: (function () {
            // call service
            var call = function (serviceMethod, requestType, dataType, data, beforeSend, success, error, complete, contextObject) {

                $.ajax({
                    url: ProgramEnrollmentFormCommon.config.constant.serviceUrl + serviceMethod,
                    context: contextObject,
                    dataType: dataType,
                    cache: false,
                    beforeSend: function () {
                        if (beforeSend) {
                            beforeSend();
                        }
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
                        if (complete) {
                            complete();
                        }
                    }
                });
            }

            return {
                Call: function (serviceMethod, requestType, dataType, data, beforeSend, success, error, complete, contextObject) {
                    call(serviceMethod, requestType, dataType, data, beforeSend, success, error, complete, contextObject);
                }
            }
        }())
        //#endregion WebService

        //#region Render
        ,
    render: {
        programControl: {
            //Program info
            ProgramId: null
        },
        dealerControl: {
            // dealer info
            DealerName: null,
            DealerCompanyId: null,
            DealerAddress: null,
            DealerPhone: null,
            DealerFax: null,
            DealerEmail: null,
            DealerOwnerNames: null,
            DealerOwnerEmail: null,
        },
        distributorControl: {
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

        },
        approverControl: {
            // approver info        
            ApproverComment: null,
            ApproverActions: null,
            ApproverWorkflowStatus: null,
            ApproverWorkflowStatusIndex: null,
            EnrollmentStatusIndex: null,

            // sales info
            SalesInformationDiv: null,
            SalesMangerLabel: null
        },
        generalControl: {
            // busy wrapper/image
            BusyWrapper: null,
            BusyImage: null,

            // cancel button
            CancelButton: null,
            CancelMessage: null,

            SubmitButton: null,
            SubmitMessage: null,

            // message dives
            ErrorMessage: null,
            SuccessMessage: null,
        },
        freezeAll: function () {

            function freezeControls(controlIds) {
                try {
                    for (var key in controlIds) {
                        if (controlIds[key] && controlIds.hasOwnProperty(key)) {
                            var control = $(controlIds[key]);
                            if (control && control.length > 0) {
                                //If Text Field
                                if (control[0].nodeName === "INPUT" || control[0].nodeName === "TEXTAREA") {
                                    control.attr('disabled', 'disable');
                                }
                                //else if JQX DropDown
                                else if (control[0].nodeName === "DIV") {
                                    control.jqxDropDownList && control.jqxDropDownList({
                                        disabled: true
                                    });
                                }
                            }
                        }
                    }
                } catch (e) {
                    ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(e.message);
                }
            }

            freezeControls(ProgramEnrollmentFormCommon.config.dealerControlsId);
            freezeControls(ProgramEnrollmentFormCommon.config.salesControlsId);
            freezeControls(ProgramEnrollmentFormCommon.config.distributorControlsId);
            freezeControls(ProgramEnrollmentFormCommon.config.approverControlsId);

            // Disable Submit and Cancel button.
            freezeControls(["#EnrollmentFormSubmitButton", "#EnrollmentFormCancelButton"]);

        },
        InitializeHtmlObjects: function () {
            try {
                var dealerData = ProgramEnrollmentFormCommon.dataStore.GetDealerData(),
                    distributorData = ProgramEnrollmentFormCommon.dataStore.GetDistributorData(),
                    workflowActions = ProgramEnrollmentFormCommon.dataStore.GetWorkflowActions(),
                    salesInformationContent = ProgramEnrollmentFormCommon.dataStore.GetSalesInformationDivContent(),
                    salesInfo = ProgramEnrollmentFormCommon.dataStore.GetSalesInformation(),
                    messages = ProgramEnrollmentFormCommon.dataStore.GetMessages(),
                    visibility = ProgramEnrollmentFormCommon.dataStore.GetVisibility(),
                    /**
                     * Initialize program Id value.
                     */
                    initializeProgramId = function () {
                        ProgramEnrollmentFormCommon.render.programControl.ProgramId =
                            $(ProgramEnrollmentFormCommon.config.programControlsId.EnrollmentFormProgramId);
                        var program = ProgramEnrollmentFormCommon.dataStore.GetProgram();
                        var programTitle = program.Name + " (" + program.Code + ")";
                        ProgramEnrollmentFormCommon.render.programControl.ProgramId.text(programTitle);
                    },


                    // initialize dealer name
                    instantiateDealerName = function () {
                        ProgramEnrollmentFormCommon.render.dealerControl.DealerName = $('#EnrollmentFormDealerNameValueLabel');
                        if (dealerData.DealerCompanyData.CompanyName) {
                            ProgramEnrollmentFormCommon.render.dealerControl.DealerName.text(dealerData.DealerCompanyData.CompanyName);
                        }
                    },
                    // initialize dealer company id
                    instantiateDealerCompanyId = function () {
                        ProgramEnrollmentFormCommon.render.dealerControl.DealerCompanyId = $('#EnrollmentFormDealerCompanyIdValueLabel');
                        if (dealerData.DealerCompanyData.CompanyId)
                            ProgramEnrollmentFormCommon.render.dealerControl.DealerCompanyId.text(dealerData.DealerCompanyData.CompanyId);
                    },
                    // initialize dealer address
                    instantiateDealerAddress = function () {
                        ProgramEnrollmentFormCommon.render.dealerControl.DealerAddress = $('#EnrollmentFormDealerAddressValueLable');
                        if (dealerData.DealerCompanyData.CompanyAddress1) {
                            var fulladdress = ProgramEnrollmentFormCommon.helper.setAddress(dealerData.DealerCompanyData.CompanyAddress1, dealerData.DealerCompanyData.CompanyAddress2, dealerData.DealerCompanyData.State, dealerData.DealerCompanyData.PostalCode, dealerData.DealerCompanyData.Country);
                            ProgramEnrollmentFormCommon.render.dealerControl.DealerAddress.text(fulladdress);
                        }
                    },
                    // initialize dealer phone
                    instantiateDealerPhone = function () {
                        ProgramEnrollmentFormCommon.render.dealerControl.DealerPhone = $('#EnrollmentFormDealerPhoneValueLabel');
                        if (dealerData.DealerCompanyData.Phone)
                            ProgramEnrollmentFormCommon.render.dealerControl.DealerPhone.text(dealerData.DealerCompanyData.Phone);
                    },
                    // initialize dealer fax
                    instantiateDealerFax = function () {
                        ProgramEnrollmentFormCommon.render.dealerControl.DealerFax = $('#EnrollmentFormDealerFaxValueLabel');
                        if (dealerData.DealerCompanyData.Fax)
                            ProgramEnrollmentFormCommon.render.dealerControl.DealerFax.text(dealerData.DealerCompanyData.Fax);
                    },
                    // initialize dealer email
                    instantiateDealerEmail = function () {
                        ProgramEnrollmentFormCommon.render.dealerControl.DealerEmail = $('#EnrollmentFormDealerEmailValueLabel');
                        if (dealerData.DealerCompanyData.Email)
                            ProgramEnrollmentFormCommon.render.dealerControl.DealerEmail.text(dealerData.DealerCompanyData.Email);
                    },
                    // initialize dealer owner names
                    instantiateOwnerNames = function () {
                        var disabled = false,
                            selectedIndex = -1;

                        if (!dealerData || !dealerData.Owners || dealerData.Owners.length === 0) {
                            selectedIndex = -1;
                            ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerNames.jqxDropDownList({
                                source: [],
                                autoDropDownHeight: true,
                                width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                                height: ProgramEnrollmentFormCommon.config.constant.dropdownHight
                            });
                        } else {
                            if (dealerData.Owners.length === 1) {
                                disabled = true;
                                selectedIndex = 0;
                            } else {
                                var ownerSelectedId = ProgramEnrollmentFormCommon.helper.GetIndexFromDropDownSource(dealerData.Owners, salesInfo.DealerOwnerId);
                                selectedIndex = ownerSelectedId;
                            }

                            ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerNames.jqxDropDownList({
                                source: dealerData.Owners,
                                displayMember: 'DisplayName',
                                valueMember: 'UserId',
                                autoDropDownHeight: true,
                                width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                                height: ProgramEnrollmentFormCommon.config.constant.dropdownHight
                            });
                            ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerNames.jqxDropDownList({
                                selectedIndex: selectedIndex
                            });

                            if (dealerData.Owners && dealerData.Owners.length > 5) {
                                ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerNames.jqxDropDownList({
                                    autoDropDownHeight: false,
                                    dropDownHeight: 200
                                });
                            } else {
                                ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerNames.jqxDropDownList({
                                    autoDropDownHeight: true,
                                });
                            }

                            if (selectedIndex === 0) {
                                setDealerOwner(dealerData.Owners[0].UserId);
                            }
                        }
                    },
                    // set dealer owner
                    setDealerOwner = function (id) {
                        if (id) {
                            // get owner item
                            var owner = ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerNames.jqxDropDownList('getItemByValue', id),
                                // get owner object from dropdown source with other properties
                                ownerObject = ProgramEnrollmentFormCommon.helper.GetSelectedObject(
                                    ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerNames.jqxDropDownList('source'),
                                    'UserId',
                                    id
                                );
                            if (owner && ownerObject) {
                                ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerNames.jqxDropDownList('selectItem', owner);
                                instantiateDealerOwnerEmail(ownerObject.Email);
                            }

                        }
                    },
                    // initialize dealer owner email
                    instantiateDealerOwnerEmail = function (email) {
                        ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerEmail = $('#EnrollmentFormOwnerEmailAddressValueLabel');
                        ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerEmail.text(email);
                    },

                    // initialize distributor names
                    instantiateDistributorNames = function () {
                        ProgramEnrollmentFormCommon.render.distributorControl.DistributorNames = $('#EnrollmentFormDistributorNamesDropdown');
                        if (distributorData) {

                            var companies = [];


                            distributorData.forEach(function (distributor, index) {
                                distributor.DistributorCompanyData.Submittedby = distributorData[index].Submittedby;
                                companies.push(distributor.DistributorCompanyData);
                            });


                            ProgramEnrollmentFormCommon.render.distributorControl.DistributorNames.jqxDropDownList({
                                source: companies,
                                displayMember: 'CompanyName',
                                valueMember: 'CompanyId',
                                autoDropDownHeight: true,
                                width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                                height: ProgramEnrollmentFormCommon.config.constant.dropdownHight
                            });

                            if (companies && companies.length > 5) {
                                ProgramEnrollmentFormCommon.render.distributorControl.DistributorNames.jqxDropDownList({
                                    autoDropDownHeight: false,
                                    dropDownHeight: 200
                                });
                            } else {
                                ProgramEnrollmentFormCommon.render.distributorControl.DistributorNames.jqxDropDownList({
                                    autoDropDownHeight: true,
                                });
                            }

                        } else {
                            ProgramEnrollmentFormCommon.render.distributorControl.DistributorNames.jqxDropDownList({
                                source: [],
                                autoDropDownHeight: true,
                                width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                                height: ProgramEnrollmentFormCommon.config.constant.dropdownHight
                            });
                        }
                    },

                    // set selected distributor
                    setSelectedDistributor = function () {
                        var selectedDistributorId = salesInfo.DistributorId;
                        if (selectedDistributorId) {
                            // get distributor item
                            var distributor = ProgramEnrollmentFormCommon.render.distributorControl.DistributorNames.jqxDropDownList('getItemByValue', selectedDistributorId),
                                // get distributor item from source with other properties
                                distributorObject = ProgramEnrollmentFormCommon.helper.GetSelectedObject(
                                    ProgramEnrollmentFormCommon.render.distributorControl.DistributorNames.jqxDropDownList('source'),
                                    'CompanyId',
                                    selectedDistributorId
                                );
                            if (distributor && distributorObject) {
                                setDistributorDetails(distributorObject);
                                ProgramEnrollmentFormCommon.render.distributorControl.DistributorNames.jqxDropDownList('selectItem', distributor);
                            }
                        } else {
                            // New form No distributor is selected.
                            var selectedIndex = -1;
                            if (distributorData && distributorData.length === 1) {
                                // select first distributor if one is only available
                                selectedIndex = 0;
                            }

                            ProgramEnrollmentFormCommon.render.distributorControl.DistributorNames.jqxDropDownList({
                                selectedIndex: selectedIndex
                            });
                        }
                    },

                    // set distributor details
                    setDistributorDetails = function (distributor) {
                        if (distributor) {
                            instantiateDistributorId(distributor.CompanyDisplayId);

                            var address = ProgramEnrollmentFormCommon.helper.setAddress(distributor.CompanyAddress1, distributor.CompanyAddress2, distributor.State, distributor.PostalCode, distributor.Country);
                            instantiateDistributorAddress(address);
                            instantiateDistributorEmail(salesInfo.DistributorContactEmail);
                            mapDistributorManagers(distributor);
                            if (distributor.Submittedby) {
                                instantiateSubmitedBy(distributor.Submittedby.FullName, distributor.Submittedby.UserId);
                            }

                        }
                    },

                    // initialize distributor CompanyId
                    instantiateDistributorId = function (id) {
                        ProgramEnrollmentFormCommon.render.distributorControl.DistributorCompanyId = $('#EnrollmentFormDistributorCompanyIdValueLabel');
                        if (id) {
                            ProgramEnrollmentFormCommon.render.distributorControl.DistributorCompanyId.text(id);
                        }
                    },

                    // initialize distributor Address
                    instantiateDistributorAddress = function (address) {
                        ProgramEnrollmentFormCommon.render.distributorControl.DistributorAddress = $('#EnrollmentFormDistributorAddressValueLabel');
                        if (address) {
                            ProgramEnrollmentFormCommon.render.distributorControl.DistributorAddress.text(address);
                        }
                    },

                    mapDistributorManagers = function (distrubutor) {
                        var _distributorData = ProgramEnrollmentFormCommon.dataStore.GetDistributorData();
                        var companydistributors = _distributorData.filter(function (company) {
                            return distrubutor.CompanyId === company.DistributorCompanyData.CompanyId;
                        });

                        var _currentSalesManagers = companydistributors.length && companydistributors[0].SalesManagers;
                        var _currentTerritoryManagers = companydistributors.length && companydistributors[0].TerritoryManagers;
                        if (_currentSalesManagers) {
                            distrubutor.SalesManagers = _currentSalesManagers;
                            distrubutor.selectedSalesManagerId = salesInfo.DistributorSalesManagerId;
                        }
                        var _currentTerritoryManagers = companydistributors.length && companydistributors[0].TerritoryManagers;
                        if (_currentTerritoryManagers) {
                            distrubutor.TerritoryManagers = _currentTerritoryManagers;
                            distrubutor.selectedTerritoryManagerId = salesInfo.DistributorTerritoryManagerId;
                        }

                    },

                    // initialize distributor SalesManagers
                    instantiateSalesManagers = function (salesManagers, isDisabled, selectedSalesManagerId) {
                        ProgramEnrollmentFormCommon.render.distributorControl.DistributorSalesManagers = $('#EnrollmentFormSalesManagerDropdown');
                        if (salesManagers) {

                            ProgramEnrollmentFormCommon.render.distributorControl.DistributorSalesManagers.jqxDropDownList({
                                source: salesManagers,
                                displayMember: 'DisplayName',
                                valueMember: 'UserId',
                                autoDropDownHeight: true,
                                width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                                height: ProgramEnrollmentFormCommon.config.constant.dropdownHight,
                                disabled: isDisabled,
                                selectedIndex: -1
                            });

                            if (salesManagers && salesManagers.length > 5) {
                                ProgramEnrollmentFormCommon.render.distributorControl.DistributorSalesManagers.jqxDropDownList({
                                    autoDropDownHeight: false,
                                    dropDownHeight: 200
                                });
                            } else {
                                ProgramEnrollmentFormCommon.render.distributorControl.DistributorSalesManagers.jqxDropDownList({
                                    autoDropDownHeight: true,
                                });
                            }

                            if (salesManagers.length === 1) {
                                ProgramEnrollmentFormCommon.render.distributorControl.DistributorSalesManagers.jqxDropDownList({
                                    selectedIndex: 0
                                });
                            } else if (salesManagers.length > 1) {
                                if (selectedSalesManagerId) {
                                    var selectedSalesManagerIndex = ProgramEnrollmentFormCommon.helper.GetIndexFromDropDownSource(salesManagers, selectedSalesManagerId, "UserId");
                                    ProgramEnrollmentFormCommon.render.distributorControl.DistributorSalesManagers.jqxDropDownList({
                                        selectedIndex: selectedSalesManagerIndex
                                    });
                                }
                            } else {
                                ProgramEnrollmentFormCommon.render.distributorControl.DistributorSalesManagers.jqxDropDownList({
                                    selectedIndex: -1
                                });
                            }
                        } else {
                            ProgramEnrollmentFormCommon.render.distributorControl.DistributorSalesManagers.jqxDropDownList({
                                source: [],
                                autoDropDownHeight: true,
                                width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                                height: ProgramEnrollmentFormCommon.config.constant.dropdownHight,
                                disabled: false
                            });
                        }
                    },

                    // set distributor SalseManagerTitleLabel
                    setDstributorSalseManagerTitleLabel = function (isDuctless) {
                        ProgramEnrollmentFormCommon.render.distributorControl.DistributorSalseManagerTitleLabel = $('EnrollmentFormSalesManagerNameLabel');
                        if (isDuctless)
                            ProgramEnrollmentFormCommon.render.distributorControl.DistributorSalseManagerTitleLabel.text('');
                    },

                    // initialize distributor TerritoryManagerNames
                    instantiateTerritoryManagers = function (managers, isDisabled, selectedTerritoryManagerId) {
                        ProgramEnrollmentFormCommon.render.distributorControl.DistributorTerritoryManagerNames = $('#EnrollmentFormTerritoryManagerDropdown');
                        if (managers) {
                            ProgramEnrollmentFormCommon.render.distributorControl.DistributorTerritoryManagerNames.jqxDropDownList({
                                source: managers,
                                displayMember: 'DisplayName',
                                valueMember: 'UserId',
                                autoDropDownHeight: true,
                                width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                                height: ProgramEnrollmentFormCommon.config.constant.dropdownHight,
                                disabled: isDisabled,
                                selectedIndex: -1
                            });

                            if (managers && managers.length > 5) {
                                ProgramEnrollmentFormCommon.render.distributorControl.DistributorTerritoryManagerNames.jqxDropDownList({
                                    autoDropDownHeight: false,
                                    dropDownHeight: 200
                                });
                            } else {
                                ProgramEnrollmentFormCommon.render.distributorControl.DistributorTerritoryManagerNames.jqxDropDownList({
                                    autoDropDownHeight: true,
                                });
                            }

                            if (managers.length >= 1) {
                                if (managers.length === 1) {
                                    ProgramEnrollmentFormCommon.render.distributorControl.DistributorTerritoryManagerNames.jqxDropDownList({
                                        selectedIndex: 0
                                    });
                                } else {
                                    if (selectedTerritoryManagerId) {
                                        var selectedTerritoryManagerIndex = ProgramEnrollmentFormCommon.helper.GetIndexFromDropDownSource(managers, selectedTerritoryManagerId, "UserId");
                                        ProgramEnrollmentFormCommon.render.distributorControl.DistributorTerritoryManagerNames.jqxDropDownList({
                                            selectedIndex: selectedTerritoryManagerIndex
                                        });
                                    }
                                }
                            } else {
                                ProgramEnrollmentFormCommon.render.distributorControl.DistributorTerritoryManagerNames.jqxDropDownList({
                                    selectedIndex: -1
                                });
                            }
                        } else {
                            ProgramEnrollmentFormCommon.render.distributorControl.DistributorTerritoryManagerNames.jqxDropDownList({
                                source: [],
                                autoDropDownHeight: true,
                                width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                                height: ProgramEnrollmentFormCommon.config.constant.dropdownHight,
                                disabled: false
                            });
                        }
                    },

                    // initialize distributor TerritoryManagerTitleLabel

                    // initialize distributor Email
                    instantiateDistributorEmail = function (email) {
                        /**
                         * DB store the email field in varchar
                         */
                        ProgramEnrollmentFormCommon.helper.SetMaxLength([{
                            id: "EnrollmentFormDistributorEmailTextbox",
                            maxLength: 100
                        }]);

                        ProgramEnrollmentFormCommon.render.distributorControl.DistributorEmail = $('#EnrollmentFormDistributorEmailTextbox');
                        if (email) {
                            ProgramEnrollmentFormCommon.render.distributorControl.DistributorEmail.val(email);
                        }
                    },

                    // initialize distributor SubmitedBy
                    instantiateSubmitedBy = function () {
                        ProgramEnrollmentFormCommon.render.distributorControl.DistributorSubmitedBy = $('#EnrollmentFormSubmittedByValueLabel');
                        ProgramEnrollmentFormCommon.render.distributorControl.DistributorSubmitedById = $('#EnrollmentFormSubmittedByIdLabel');
                        if (salesInfo.DistributorSubmittedBy && salesInfo.DistributorSubmittedByUserId) {
                            ProgramEnrollmentFormCommon.render.distributorControl.DistributorSubmitedBy.text(salesInfo.DistributorSubmittedBy);
                            ProgramEnrollmentFormCommon.render.distributorControl.DistributorSubmitedById.val(salesInfo.DistributorSubmittedByUserId);
                        }
                    },

                    // initialize approver comment
                    //EnrollmentFormApproverCommentTextarea
                    instantiateApproverCommnet = function () {
                        ProgramEnrollmentFormCommon.render.approverControl.ApproverComment = $('#EnrollmentFormApproverCommentTextarea');
                        if (salesInfo.ApproverComment) {
                            ProgramEnrollmentFormCommon.render.approverControl.ApproverComment.text(salesInfo.ApproverComment);
                        }
                    },

                    // initialize approver action
                    //EnrollmentFormApproverActionDropdown
                    instantiateApproverActions = function (actions, isDisabled) {
                        if (actions) {
                            ProgramEnrollmentFormCommon.render.approverControl.ApproverActions = $('#EnrollmentFormApproverActionDropdown');
                            ProgramEnrollmentFormCommon.render.approverControl.ApproverActions.jqxDropDownList({
                                source: actions,
                                displayMember: 'DisplayName',
                                valueMember: 'Id',
                                autoDropDownHeight: true,
                                width: ProgramEnrollmentFormCommon.config.constant.dropdownWidth,
                                height: ProgramEnrollmentFormCommon.config.constant.dropdownHight,
                                disabled: isDisabled
                            });

                            // For distributor role Approver action will be set to 1 from server code.
                            if (salesInfo.ApproverAction && salesInfo.ApproverAction > 0) {
                                if (!salesInfo.ApproverWorkflowStatusId) {
                                    hideApproverSection();
                                }

                                ProgramEnrollmentFormCommon.render.approverControl.ApproverActions.jqxDropDownList({
                                    selectedIndex: 0
                                });
                            }
                        }
                    },
                    // initialize approver workflowStatus


                    //EnrollmentFormApproverWorkfolwStatusValueLabel
                    instantiateApproverWorkflowStatus = function () {
                        ProgramEnrollmentFormCommon.render.approverControl.ApproverWorkflowStatus = $('#EnrollmentFormApproverWorkfolwStatusValueLabel');
                        ProgramEnrollmentFormCommon.render.approverControl.ApproverWorkflowStatusIndex = $('#EnrollmentFormApproverWorkfolwStatusIndexLabel');
                        ProgramEnrollmentFormCommon.render.approverControl.EnrollmentStatusIndex = $('#EnrollmentFormEnrollmentStatusIndexLabel');

                        if (salesInfo.ApproverWorkflowStatusText) {
                            ProgramEnrollmentFormCommon.render.approverControl.ApproverWorkflowStatus.text(salesInfo.ApproverWorkflowStatusText);
                            ProgramEnrollmentFormCommon.render.approverControl.ApproverWorkflowStatusIndex.text(salesInfo.ApproverWorkflowStatusId);
                            ProgramEnrollmentFormCommon.render.approverControl.EnrollmentStatusIndex.text(salesInfo.EnrollmentStatusId);
                        }
                    },

                    // initialize sales info
                    instantiateSalesInforamtionDiv = function (htmlContent, salesInfo) {
                        ProgramEnrollmentFormCommon.render.generalControl.SalesInformationDiv = $('#EnrollmentFormUniqueFieldWrapper');
                        if (htmlContent) {
                            ProgramEnrollmentFormCommon.render.generalControl.SalesInformationDiv.html(htmlContent);
                            if (typeof ProgramEnrollmentFormCommon.render.onSalesInformationDivRendered === 'function') {
                                ProgramEnrollmentFormCommon.render.onSalesInformationDivRendered(salesInfo);

                                // After data is rendered apply visibility matrix;
                                applyVisibilityMatrix();
                            }
                        }
                    },

                    instantiateCanclePopup = function () {
                        ProgramEnrollmentFormCommon.render.generalControl.CancelButton = $('#EnrollmentFormCancelButton');
                        ProgramEnrollmentFormCommon.render.generalControl.CancelMessage = $('#EnrollmentFormCancelMessage');
                        // set cancel message text
                        ProgramEnrollmentFormCommon.render.generalControl.CancelMessage.text(messages.CancelConfirmationMessage);
                        ProgramEnrollmentFormCommon.render.generalControl.CancelButton.click(function () {
                            ProgramEnrollmentFormCommon.event.cancel();
                        });
                    },

                    instantiatesubmit = function () {
                        ProgramEnrollmentFormCommon.render.generalControl.SubmitButton = $('#EnrollmentFormSubmitButton');
                        ProgramEnrollmentFormCommon.render.generalControl.SubmitButton.on('click', function () {
                            ProgramEnrollmentFormCommon.event.submit();
                        });
                    },

                    instantiateSalesMangerLabel = function () {
                        ProgramEnrollmentFormCommon.render.approverControl.SalesMangerLabel = $('#EnrollmentFormSalesManagerNameLabel');
                        var salesValue = ProgramEnrollmentFormCommon.helper.appendVertical(ProgramEnrollmentFormCommon.render.approverControl.SalesMangerLabel.text());
                        ProgramEnrollmentFormCommon.render.approverControl.SalesMangerLabel.text(salesValue);
                    },

                    applyVisibilityMatrix = function () {
                        var visibleKey = 'Visible';
                        var disableKey = 'Disable';
                        for (var fieldInfo in visibility) {
                            if (visibility[fieldInfo] && visibility.hasOwnProperty(fieldInfo)) {
                                var isVisible = visibility[fieldInfo].hasOwnProperty(visibleKey) && visibility[fieldInfo][visibleKey];
                                var isDisabled = visibility[fieldInfo].hasOwnProperty(disableKey) && visibility[fieldInfo][disableKey];

                                // Format id by first Letter to Lower case.
                                var id = fieldInfo[0].toLowerCase() + fieldInfo.substring(1, fieldInfo.length);

                                var control = document.getElementById(fieldInfo) || document.getElementById(id);
                                if (control) {
                                    if (!isVisible) {
                                        var wrapper = $(control).closest('.program-input-wrapper');
                                        wrapper.css('display', 'none');
                                    }

                                    if (isDisabled) {
                                        if (control.nodeName === "INPUT" || control.nodeName === "TEXTAREA") {
                                            /* Disable Text inputs */
                                            control.disabled = 'disabled';
                                        } else if (control.nodeName === "DIV") {
                                            /**
                                             * Disable DropDowns
                                             */
                                            $(control).jqxDropDownList({
                                                disabled: true
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    },
                    registerDistributorSelectEvent = function () {

                        ProgramEnrollmentFormCommon.render.distributorControl.DistributorNames = $('#EnrollmentFormDistributorNamesDropdown');

                        // distributor change event
                        ProgramEnrollmentFormCommon.render.distributorControl.DistributorNames.on('select', function (event) {
                            try {
                                var args = event.args;
                                if (args) {
                                    // get selected distributor              
                                    var selectedDistributor = ProgramEnrollmentFormCommon.helper.GetSelectedObject(
                                        ProgramEnrollmentFormCommon.render.distributorControl.DistributorNames.jqxDropDownList('source'),
                                        'CompanyId',
                                        args.item.value
                                    );
                                    if (selectedDistributor) {
                                        setDistributorDetails(selectedDistributor);

                                        if (selectedDistributor.SalesManagers && selectedDistributor.SalesManagers.length > 0)
                                            instantiateSalesManagers(selectedDistributor.SalesManagers, false, selectedDistributor.selectedSalesManagerId);
                                        else
                                            instantiateSalesManagers(selectedDistributor.SalesManagers, true);

                                        if (selectedDistributor.TerritoryManagers && selectedDistributor.TerritoryManagers.length > 0)
                                            instantiateTerritoryManagers(selectedDistributor.TerritoryManagers, false, selectedDistributor.selectedTerritoryManagerId);
                                        else
                                            instantiateTerritoryManagers(selectedDistributor.TerritoryManagers, true);
                                    }
                                }
                            } catch (exception) {
                                ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(exception.message);
                            }
                        });
                    },
                    registerDealerSelectEvent = function () {

                        // owner change event
                        ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerNames = $('#dealerOwnerNamesDropdown');
                        ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerNames.on('select', function (event) {
                            try {
                                var args = event.args;
                                if (args) {
                                    // get selected owner object              
                                    var selectedOwner = ProgramEnrollmentFormCommon.helper.GetSelectedObject(
                                        ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerNames.jqxDropDownList('source'),
                                        'UserId',
                                        args.item.value
                                    );
                                    if (selectedOwner) {
                                        instantiateDealerOwnerEmail(selectedOwner.Email);
                                    }
                                }
                            } catch (exception) {
                                ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(exception.message);
                            }
                        });
                    },
                    registerMobileTweaks = function () {
                        var isMobile;
                        if ($(window).width() <= 751) {
                            isMobile = true;
                        }
                        if (isMobile) {
                            $(".mobile-lbl").bind("click", function () {
                                $(this).siblings(".input-right-wrapper").slideToggle(1000);
                                $(this).toggleClass("active");
                            });
                        }
                    },
                    hideApproverSection = function () {
                        var approverSection = $('#EnrollmentFormApproverSection');
                        approverSection.css('display', 'none');
                    };

                instantiateCanclePopup();

                initializeProgramId();
                instantiateDealerName();
                instantiateDealerCompanyId();
                instantiateDealerAddress();
                instantiateDealerPhone();
                instantiateDealerFax();
                instantiateDealerEmail();
                registerDealerSelectEvent();

                instantiateOwnerNames();
                registerDistributorSelectEvent();
                instantiateDistributorNames();
                setSelectedDistributor();

                instantiateSubmitedBy();
                instantiateDistributorEmail("");

                instantiateApproverCommnet();
                instantiateApproverActions(workflowActions, false);
                instantiateApproverWorkflowStatus();

                instantiateSalesInforamtionDiv(salesInformationContent, salesInfo);

                instantiateSalesMangerLabel();
                instantiatesubmit();
                registerMobileTweaks();
                ProgramEnrollmentFormCommon.helper.HideBusyWrapper();
            } catch (exception) {
                ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(
                    ProgramEnrollmentFormCommon.helper.GetDefinedErrorMessage(
                        exception.message, true));

                ProgramEnrollmentFormCommon.helper.HideBusyWrapper();
            }
        }
    }
    //#endregion Render

    //#region Load
    ,
    load: (function () {

            var beforeSend = function () {
                    ProgramEnrollmentFormCommon.helper.HideMessages();
                    ProgramEnrollmentFormCommon.helper.ShowBusyWrapper();
                },
                success = function (data) {

                    try {
                        if (!data) {
                            ProgramEnrollmentFormCommon.helper.HidePageInfo();
                            ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(
                                ProgramEnrollmentFormCommon.helper.GetDefinedErrorMessage("Data object is null", true));
                            ProgramEnrollmentFormCommon.helper.HideBusyWrapper();
                        } else if (!data.status) {
                            ProgramEnrollmentFormCommon.helper.HidePageInfo();
                            ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(
                                ProgramEnrollmentFormCommon.helper.GetDefinedErrorMessage("Status object is null", true));
                            ProgramEnrollmentFormCommon.helper.HideBusyWrapper();
                        } else if (!data.status.Success) {
                            ProgramEnrollmentFormCommon.helper.HidePageInfo();
                            ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(
                                ProgramEnrollmentFormCommon.helper.GetDefinedErrorMessage(data.status.Message, true));
                            ProgramEnrollmentFormCommon.helper.HideBusyWrapper();
                        } else {
                            ProgramEnrollmentFormCommon.dataStore.StoreProgram(data.program);
                            ProgramEnrollmentFormCommon.dataStore.StoreBrands(data.brands);
                            ProgramEnrollmentFormCommon.dataStore.StoreVerticals(data.verticals);
                            ProgramEnrollmentFormCommon.dataStore.StoreDealerData(data.dealer);
                            ProgramEnrollmentFormCommon.dataStore.StoreDistributorData(data.distributors);
                            ProgramEnrollmentFormCommon.dataStore.StoreSalesInformationDivContent(data.salesInforamtionHtml);
                            ProgramEnrollmentFormCommon.dataStore.StoreSalesInformation(data.data);
                            ProgramEnrollmentFormCommon.dataStore.StoreWorkflowActions(data.actionTypes);
                            ProgramEnrollmentFormCommon.dataStore.StoreMessages(data.messages);
                            ProgramEnrollmentFormCommon.dataStore.StoreVisibility(data.visibility);


                            ProgramEnrollmentFormCommon.formType = data.formType;

                            ProgramEnrollmentFormCommon.helper.DynamicallyLoadJsFile(data.jsFileLocation,
                                ProgramEnrollmentFormCommon.render.InitializeHtmlObjects);
                        }
                    } catch (exception) {
                        ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(
                            ProgramEnrollmentFormCommon.helper.GetDefinedErrorMessage(exception.message, true));

                        ProgramEnrollmentFormCommon.helper.HideBusyWrapper();
                    }
                },
                onerror = function (error) {
                    //Hide Page content.
                    ProgramEnrollmentFormCommon.helper.HidePageInfo();
                    ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(
                        ProgramEnrollmentFormCommon.helper.GetDefinedErrorMessage(
                            ProgramEnrollmentFormCommon.helper.GetErrorMessageUsingAjaxErrorObject(error),
                            true));
                    ProgramEnrollmentFormCommon.helper.HideBusyWrapper();
                },
                complete = function () {
                    ProgramEnrollmentFormCommon.helper.HideBusyWrapper();
                }

            return {
                BeforeSend: function () {
                    beforeSend();
                },
                Success: function (data) {
                    success(data);
                },
                Error: function (error) {
                    onerror(error);
                },
                Complete: function () {
                    complete();
                }
            };
        }())

        //#endregion Load

        //#region Event
        ,
    event: (function () {
            var submitData = function () {


                    if (!ProgramEnrollmentFormCommon.validate.Execute()) {

                        var data = {
                            programId: -1,
                            dealerId: -1,
                            formData: {}
                        };

                        data.programId = ProgramEnrollmentFormCommon.dataStore.GetQueryStringData().programId;
                        data.dealerId = ProgramEnrollmentFormCommon.dataStore.GetQueryStringData().dealerId;
                        data.formData = ProgramEnrollmentFormCommon.helper.GetFieldValues();

                        /// add validation
                        ProgramEnrollmentFormCommon.helper.NullifyEmpty(data.formData);

                        ProgramEnrollmentFormCommon.webService.Call(
                            ProgramEnrollmentFormCommon.config.methodName.createEnrollmentForm,
                            ProgramEnrollmentFormCommon.config.requestType.post,
                            ProgramEnrollmentFormCommon.config.serviceDataType.json,
                            data,
                            ProgramEnrollmentFormCommon.submitData.BeforeSend,
                            ProgramEnrollmentFormCommon.submitData.Success,
                            ProgramEnrollmentFormCommon.submitData.Error,
                            ProgramEnrollmentFormCommon.submitData.Complete,
                            null
                        );
                    }
                },
                cancel = function () {
                    /* eslint-disable */
                    showlightbox('EnrollmentFormCancelPopup');
                    /* eslint-enable */
                }
            return {
                submit: function (e) {
                    submitData(e);
                },
                cancel: function () {
                    cancel();
                }
            }
        }())
        //#endregion Event

        //#region Helper
        ,
    helper: (function () {
            /**
             *	Apply this function to enable numeric input for text fields.
             **/
            var
                formatCurrency = function (number) {
                    return number;

                    //comment out following line to format numbers as $4,000
                    // if(!number) return '';
                    // currencySymbol = currencySymbol || '$';                   
                    // var fomatted = currencySymbol + number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                    // return fomatted;
                },
                clearSelectedText = function (evt) {
                    alert(evt.target.selectionStart + "" + evt.target.selectionEnd);
                    if (evt && evt.target.value) {
                        var value = evt.target.value;
                        if (evt.target.selectionStart !== evt.target.selectionEnd) {
                            var replaceText = value.substring(0, evt.target.selectionStart) + "" + value.substring(evt.target.selectionEnd);
                            evt.target.value = replaceText;
                        }
                    }
                },
                privateFilterKey = function (evt, maxLenth, isPercentage, isNotDecimal) {
                    //clear selected text
                    //clearSelectedText(evt);
                    maxLenth = maxLenth || 9;
                    isNotDecimal = isNotDecimal || false;
                    var ctrlKey = evt.ctrlKey;
                    var theEvent = evt || window.event;
                    var key = theEvent.keyCode || theEvent.which;
                    var charCode = theEvent.charCode;
                    var isValid = true;
                    var currentValue = theEvent.target.value;
                    //if not delete and backspace or ctrl or tab key(firefox)
                    if (!ctrlKey) {
                        if (!(charCode === 0 && (key === 8 || key === 9 || key === 46))) {
                            key = String.fromCharCode(key);
                            var regex = /^\d+$/;

                            if (!regex.test(key) && !isNotDecimal) {
                                isValid = invalidate(isValid, theEvent);
                            }

                            /**
                             * If Percentage value
                             */
                            if (isPercentage && !isNotDecimal) {
                                if (!ProgramEnrollmentFormCommon.helper.inRange(currentValue + key, 0, 100)) {
                                    isValid = invalidate(isValid, theEvent);
                                }
                            }

                            //Maximum lenght is 9 digits
                            if (currentValue.length > maxLenth - 1) {
                                isValid = invalidate(isValid, theEvent);
                            }

                            //format currecy
                            // if (!isNotDecimal && isValid && !isPercentage) {
                            //     theEvent.target.value = formatCurrency(currentValue + key);
                            //     //preventDefault
                            //     if (theEvent.preventDefault) theEvent.preventDefault();
                            // }
                        }

                    }
                },
                /**
                 * invalidate the event.
                 */
                invalidate = function (isValid, theEvent) {
                    isValid = false;
                    if (theEvent) theEvent.returnValue = false;
                    if (theEvent.preventDefault) theEvent.preventDefault();
                    return isValid;
                },
                bindInput = function (maxLenth, isPercentage, isNotDecimal, callback) {
                    return function (evt) {
                        callback(evt, maxLenth, isPercentage, isNotDecimal);
                    }
                },
                /**
                 * max-length custom function.
                 */
                setMaxLength = function (controlInfo) {
                    for (var index = 0; index < controlInfo.length; index++) {
                        var info = controlInfo[index];
                        var element = document.getElementById(info.id);
                        if (element) {
                            $(element).on('keypress', bindInput(info.maxLength, false, true, privateFilterKey));
                            element.onpaste = bindInput(info.maxLength, false, true, filterPasteData);
                        }

                    }
                },
                nullifyEmptyValues = function (values) {
                    for (var key in values) {
                        if (values.hasOwnProperty(key) && values[key] === "") {
                            values[key] = null;
                        }
                    }
                },
                cleanNumberField = function (value) {
                    if (value) {
                        return value.replace(/[^\d]+/gi, "");
                    }

                    return '';
                },
                filterPasteData = function (e, maxLength, isPercentage, isNotDecimal) {
                    //clear selected text
                    //clearSelectedText(e);
                    maxLength = maxLength || 9;
                    isNotDecimal = isNotDecimal || false;
                    var pastedData;
                    var isTrimmed = false;
                    var currentValue = e.target.value;
                    if (e.clipboardData) {
                        // Look for access to data if types array is missing 
                        pastedData = e.clipboardData.getData('text/plain');
                    }

                    // IE event is attached to the window object
                    if (window.clipboardData) {
                        pastedData = window.clipboardData.getData('Text');
                    }

                    if (pastedData) {


                        var regex = /^\d+$/;
                        /**
                         * if not a number
                         */
                        if (!regex.test(pastedData) && !isNotDecimal) {
                            if (e.preventDefault) e.preventDefault();
                            return false;
                        }


                        /**
                         * If Percentage value
                         */
                        if (isPercentage && !isNotDecimal) {
                            if (!ProgramEnrollmentFormCommon.helper.inRange(currentValue + pastedData, 0, 100)) {
                                if (e.preventDefault) e.preventDefault();
                                return false;
                            }
                        }

                        /**
                         * if length exceed max length
                         */
                        if (currentValue.length + pastedData.length > maxLength) {
                            e.target.value = (currentValue + pastedData).substr(0, maxLength);
                            if (e.preventDefault) e.preventDefault();
                            isTrimmed = true;
                        }

                        //format decimal but not percentage (currency)
                        // if (!isNotDecimal && !isPercentage) {
                        //     var value = isTrimmed ? e.target.value : currentValue + pastedData;
                        //     e.target.value = value;
                        //     //preventDefault
                        //     if (e.preventDefault) e.preventDefault();
                        // }

                    }

                },
                /**
                 * Mannual validate every key stroke and paste event
                 * To allow only numbers with maximum length.
                 */
                privateRegisterNumericControls = function (controlIdentifiers, maxLength, isPercentage) {
                    for (var index = 0; index < controlIdentifiers.length; index++) {

                        var element = document.getElementById(controlIdentifiers[index]);
                        if (element) {
                            $(element).on('keypress', function (evt) {
                                privateFilterKey(evt, maxLength, isPercentage);
                            });

                            element.onpaste = function (evt) {
                                filterPasteData(evt, maxLength, isPercentage);
                            };
                        }
                    }
                },

                getIndexFromDropDownSource = function (source, selectedId, property) {
                    var index = -1;
                    property = property || 'UserId';
                    if (source && source.length > 0) {
                        var len = source.length;
                        for (var i = 0; i < len; i++) {
                            if (parseInt(source[i][property]) === selectedId) {
                                index = i;
                                break;
                            }
                        }

                    }
                    return index;
                },

                // filter array
                getSelectedObject = function (array, filterProterty, filterValue) {

                    if (!array || array.length === 0) {
                        return null;
                    }
                    var len = array.length,
                        tempObject = null,
                        selectedObject = null;
                    for (var i = 0; i < len; i++) {
                        tempObject = array[i];
                        if (tempObject[filterProterty] === parseInt(filterValue, 10)) {
                            selectedObject = array[i];
                            break;
                        }
                    }
                    return selectedObject;
                },

                // get jqx dropdown selected value
                privateGetJqxDropdownListselectedItemValue = function (dropdownObject) {
                    if (dropdownObject)
                        return dropdownObject.jqxDropDownList('getSelectedItem').value;
                },

                // get entered values
                getFieldData = function () {

                    var enrollmententity = {};
                    //// Program information
                    enrollmententity.ProgramVertical = ProgramEnrollmentFormCommon.helper.GetVertical();
                    enrollmententity.ProgramName = ProgramEnrollmentFormCommon.dataStore.GetProgram().Name;
                    enrollmententity.ProgramCode = ProgramEnrollmentFormCommon.dataStore.GetProgram().Code;
                    enrollmententity.ProgramBrandId = ProgramEnrollmentFormCommon.dataStore.GetProgram().Brand;
                    enrollmententity.ProgramManagers = ProgramEnrollmentFormCommon.dataStore.GetProgram().ProgramManagers;
                    //// Dealer information
                    enrollmententity.DealerCompanyId = ProgramEnrollmentFormCommon.dataStore.GetQueryStringData().dealerId;
                    enrollmententity.DealerDisplayId = ProgramEnrollmentFormCommon.dataStore.GetDealerData().DealerCompanyData.CompanyId;
                    enrollmententity.DealerOwnerId = ProgramEnrollmentFormCommon.dataManager.getDropdownSelectedItem(ProgramEnrollmentFormCommon.config.dealerControlsId.dealerOwnerNamesDropdown);
                    enrollmententity.DealerName = ProgramEnrollmentFormCommon.render.dealerControl.DealerName.text();
                    /*enrollmententity.DealerAddress = ProgramEnrollmentFormCommon.render.dealerControl.DealerAddress.text();
                    enrollmententity.DealerPhone = ProgramEnrollmentFormCommon.render.dealerControl.DealerPhone.text();
                    enrollmententity.DealerFax = ProgramEnrollmentFormCommon.render.dealerControl.DealerFax.text();
                    enrollmententity.DealerEmailAddress = ProgramEnrollmentFormCommon.render.dealerControl.DealerEmail.text();*/
                    enrollmententity.DealerOwnerEmailAddress = ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerEmail.text();

                    /// #region Distributor information
                    //'#EnrollmentFormDistributorNamesDropdown'
                    enrollmententity.DistributorCompanyId = ProgramEnrollmentFormCommon.dataManager.getDropdownSelectedItem(ProgramEnrollmentFormCommon.config.distributorControlsId.enrollmentFormDistributorNamesDropdown, 'value');
                    enrollmententity.DistributorDisplayId = ProgramEnrollmentFormCommon.dataManager.getOriginalItemValue(ProgramEnrollmentFormCommon.config.distributorControlsId.enrollmentFormDistributorNamesDropdown, 'CompanyDisplayId');
                    enrollmententity.DistributorName = ProgramEnrollmentFormCommon.dataManager.getDropdownSelectedItem(ProgramEnrollmentFormCommon.config.distributorControlsId.enrollmentFormDistributorNamesDropdown, 'label');
                    //enrollmententity.DistributorAddress = ProgramEnrollmentFormCommon.render.distributorControl.DistributorAddress.text();

                    enrollmententity.DistributorSalesManagerId = ProgramEnrollmentFormCommon.dataManager.getDropdownSelectedItem(ProgramEnrollmentFormCommon.config.distributorControlsId.enrollmentFormSalesManagerDropdown, 'value');

                    //'#EnrollmentFormTerritoryManagerDropdown'
                    enrollmententity.DistributorTerritoryManagerId = ProgramEnrollmentFormCommon.dataManager.getDropdownSelectedItem(ProgramEnrollmentFormCommon.config.distributorControlsId.enrollmentFormTerritoryManagerDropdown, 'value');
                    //'#EnrollmentFormDistributorEmailTextbox'
                    enrollmententity.DistributorContactEmail = ProgramEnrollmentFormCommon.render.distributorControl.DistributorEmail.val();
                    //'#EnrollmentFormSubmittedByValueLabel'
                    enrollmententity.DistributorSubmittedByUserId = ProgramEnrollmentFormCommon.render.distributorControl.DistributorSubmitedById.val();

                    ///#endregion Distributor info

                    /// #region Approver information           
                    //'#EnrollmentFormApproverCommentTextarea
                    enrollmententity.ApproverComment = $(ProgramEnrollmentFormCommon.config.approverControlsId.EnrollmentFormApproverCommentTextarea).val();
                    //'#EnrollmentFormApproverActionDropdown'
                    enrollmententity.ApproverAction = ProgramEnrollmentFormCommon.dataManager.getDropdownSelectedItem(ProgramEnrollmentFormCommon.config.approverControlsId.EnrollmentFormApproverActionDropdown, 'value');
                    //'#EnrollmentFormApproverWorkfolwStatusValueLabel'
                    enrollmententity.ApproverWorkflowStatusId = ProgramEnrollmentFormCommon.render.approverControl.ApproverWorkflowStatusIndex.text();
                    enrollmententity.EnrollmentStatusId = ProgramEnrollmentFormCommon.render.approverControl.EnrollmentStatusIndex.text();
                    ///#endregion


                    var salesinfomationValues = {};

                    /**
                     * ProgramEnrollmentFormCommon.dataManager.getSalesInformationValues function 
                     * will be overridden within form specific js file.
                     */
                    if (typeof ProgramEnrollmentFormCommon.dataManager.getSalesInformationValues === 'function') {
                        salesinfomationValues = ProgramEnrollmentFormCommon.dataManager.getSalesInformationValues();
                    }

                    // add sales information to entity

                    var defaultEntity = {
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
                        "CompetitiveBrand1NameCurrentYear": "",
                        "CompetitiveBrand1NameFirstYear": "",
                        "CompetitiveBrand1PercentageCurrentYear": "0",
                        "CompetitiveBrand1PercentageFirstYear": "0",
                        "CompetitiveBrand2NameCurrentYear": "",
                        "CompetitiveBrand2NameFirstYear": "",
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
                        "CompetitiveBrand1NameSecondYear": "",
                        "CompetitiveBrand1PercentageSecondYear": "0",
                        "CompetitiveBrand2NameSecondYear": "",
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
                        "DistributorSubmittedByUserId": null,
                        "ApproverComment": "0",
                        "ApproverAction": "0",
                        "ApproverWorkflowStatus": "0",
                        "ApproverWorkflowStatusText": null,
                        "DealerCompanyID": "0",
                        "DealerName": "",
                        "DealerAddress": "0",
                        "DealerPhone": "0",
                        "DealerFax": "0",
                        "DealerEmailAddress": "0",
                        "DealerOwnerEmailAddress": "0",
                        "DistributorId": "0",
                        "DistributorName": "",
                        "DistributorAddress": "0",
                        "FormType": "0",
                        "EnrollmentStatus": "0",
                        "ProgramName": "",
                        "ProgramVertical": ""
                    };

                    $.extend(defaultEntity, enrollmententity, salesinfomationValues);


                    return defaultEntity;
                },
                // common method for validate the regExs
                regXValidation = function (regX, value) {
                    return regX.test(value);
                },

                // show busy wrapper content
                showBusyWrapper = function () {
                    ProgramEnrollmentFormCommon.render.generalControl.BusyImage.show();
                    ProgramEnrollmentFormCommon.render.generalControl.BusyWrapper.show();
                },

                // hide busy wrapper content
                hideBusyWrapper = function () {
                    ProgramEnrollmentFormCommon.render.generalControl.BusyImage.hide();
                    ProgramEnrollmentFormCommon.render.generalControl.BusyWrapper.hide();
                },

                // validate email
                isValidEmail = function (value) {
                    var regX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z0-9_\-\.]*)$/;
                    return regXValidation(regX, value.trim());
                },

                // check the whole number to avoid decimal
                privateIsWholeNumber = function (number) {
                    var number_regEx = /^\d*$/;

                    //ignore empty fields
                    if (number === "") {
                        return true;
                    }

                    return regXValidation(number_regEx, number);
                },
                // check the enter value contains any empty value or only spaces
                privateRequiedField = function (value) {
                    var empty_string_regexp = /^\s*$/;

                    if (value === "") {
                        return false;
                    }
                    // check if entered value has only spaces
                    if (regXValidation(empty_string_regexp, value)) {
                        return false;
                    }
                    return true;
                },

                _setAddress = function (address1, address2, state, postalCode, country) {
                    return address1 + " " + address2 + " " + state + " " + postalCode + " " + country;
                },

                analyzeQueryString = function () {

                    var data = {
                        programId: -1,
                        dealerId: -1
                    };

                    if (window.location.href.indexOf('?') != -1) {
                        var allQueryStrings = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
                        for (var i = 0; i < allQueryStrings.length; i++) {
                            var queryString = allQueryStrings[i].split('=');
                            // if type found
                            if (queryString.length > 1 && 'programid' === queryString[0].toLowerCase()) {
                                data.programId = parseInt(queryString[1], 10);
                            } else if (queryString.length > 1 && 'dealerid' === queryString[0].toLowerCase()) {
                                data.dealerId = parseInt(queryString[1], 10);
                            }
                        }
                    }

                    ProgramEnrollmentFormCommon.dataStore.StoreQueryStringData(data);
                },

                _toFixed = function (value) {
                    //return Number(value).toFixed(8).replace(/\.?0+$/, "");
                    if (Math.abs(value) < 1.0) {
                        var e = parseInt(value.toString().split('e-')[1]);
                        if (e) {
                            value *= Math.pow(10, e - 1);
                            value = '0.' + (new Array(e)).join('0') + value.toString().substring(2);
                        }
                    } else {
                        var e = parseInt(value.toString().split('+')[1]);
                        if (e > 20) {
                            e -= 20;
                            value /= Math.pow(10, e);
                            value += (new Array(e + 1)).join('0');
                        }
                    }
                    return value;
                },

                _round = function (number, precision) {
                    if (isNaN(number) || isNaN(precision)) {
                        return '';
                    }

                    var factor = Math.pow(10, precision);
                    var tempNumber = number * factor;
                    var roundedTempNumber = Math.round(tempNumber);
                    return _toFixed(roundedTempNumber / factor);
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
                /**
                 * Check if the value within the range.
                 * @param value The value as string.
                 * @param min The minimum value of the range.
                 * @param max The maximum value of the range.
                 * @return true if in range. otherwise false.
                 */
                _inRange = function (value, min, max) {
                    if (!value) {
                        return true; // ignore empty fields
                    }

                    var num = parseInt(value, 10);
                    if (min <= num && num <= max) {
                        return true;
                    }


                    return false;
                },
                // set empty string whether value is null or undefined
                privateSetDefaultValue = function (value) {
                    return (value !== null || value !== undefined) ? value : '';
                },

                _getBrand = function (program, brandList) {
                    var programParentBrandId = program.Brand;
                    for (var index = 0; index < brandList.length; index++) {
                        if (brandList[index].Id == programParentBrandId) {
                            return brandList[index].DisplayName;
                        }
                    }
                    return "";
                },
                _replaceBrand = function (htmlText) {
                    var brand = ProgramEnrollmentFormCommon.dataStore.GetBrands();
                    var program = ProgramEnrollmentFormCommon.dataStore.GetProgram();
                    var brandofProgram = _getBrand(program, brand);

                    return _titleCase(htmlText.replace('{CBP}', brandofProgram));
                },
                _getVerticals = function (program, verticalArray) {
                    var programParentVerticalId = program.Vertical;
                    for (var index = 0; index < verticalArray.length; index++) {
                        if (verticalArray[index].Id == programParentVerticalId) {
                            return verticalArray[index].DisplayName;
                        }
                    }
                    return "";
                },
                _getVertical = function () {
                    var program = ProgramEnrollmentFormCommon.dataStore.GetProgram();
                    var vertical = ProgramEnrollmentFormCommon.dataStore.GetVerticals();
                    var verticalOfProgram = _getVerticals(program, vertical);
                    return verticalOfProgram;
                },
                _appendVertical = function (text) {
                    var verticalOfProgram = _getVertical();
                    return verticalOfProgram + ' ' + text;
                },
                _titleCase = function (str) {
                    var splitStr = str.toLowerCase().split(' ');
                    for (var i = 0; i < splitStr.length; i++) {
                        // You do not need to check if i is larger than splitStr length, as your for does that for you
                        // Assign it back to the array
                        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
                    }
                    // Directly return the joined string
                    return splitStr.join(' ');
                },


                displayErrorMessage = function (message) {
                    if (!message) {
                        ProgramEnrollmentFormCommon.render.generalControl.ErrorMessage.text(message);
                        ProgramEnrollmentFormCommon.render.generalControl.ErrorMessage.css('display', 'block');
                    } else {
                        if (!message.endsWith('.')) {
                            message = message + '.';
                        }
                        ProgramEnrollmentFormCommon.render.generalControl.ErrorMessage.text(message);
                        ProgramEnrollmentFormCommon.render.generalControl.ErrorMessage.css('display', 'block');
                    }
                },
                hideErrorMessage = function () {
                    ProgramEnrollmentFormCommon.render.generalControl.ErrorMessage.text('');
                    ProgramEnrollmentFormCommon.render.generalControl.ErrorMessage.css('display', 'none');
                },

                displaySuccessMessage = function (message) {
                    ProgramEnrollmentFormCommon.render.generalControl.SuccessMessage.text(message);
                    ProgramEnrollmentFormCommon.render.generalControl.SuccessMessage.css('display', 'block');
                },
                hideSuccessMessage = function () {
                    ProgramEnrollmentFormCommon.render.generalControl.SuccessMessage.text('');
                    ProgramEnrollmentFormCommon.render.generalControl.SuccessMessage.css('display', 'none');
                },

                getErrorMessageUsingAjaxErrorObject = function (errorData) {
                    var msg = '';
                    if (errorData.status) {
                        msg += "Status:" + errorData.status;
                    }
                    if (errorData.statusText) {
                        if (msg.length > 0) {
                            msg += ", " + "Description:" + errorData.statusText;
                        } else {
                            msg += "Description:" + errorData.statusText;
                        }
                    }

                    if (msg.length === 0) {
                        msg = errorData.responseText;
                    }


                    if (msg && msg.length > 0) {
                        msg = msg.trim();
                        if (!msg.endsWith('.')) {
                            msg = msg + '. ';
                        }
                    }
                    return msg;
                },
                getDefinedErrorMessage = function (message, isSystemError) {

                    if (!message)
                        return '';

                    message = message.trim();

                    if (!message.endsWith('.')) {
                        message = message + ". ";
                    } else if (!message.endsWith(' ')) {
                        message = message + " ";
                    }

                    if (isSystemError) {
                        return ProgramEnrollmentFormCommon.config.constant.systemErrorMessagePart1 + message + ProgramEnrollmentFormCommon.config.constant.errorMessagePart2;
                    } else {
                        return ProgramEnrollmentFormCommon.config.constant.submissionFailureErrorMessagePart1 + message + ProgramEnrollmentFormCommon.config.constant.errorMessagePart2;
                    }

                },
                //dynamicallyLoadJsFile = function (filePath) {
                //    var fileref = document.createElement('script');
                //    fileref.setAttribute("type", "text/javascript");
                //    fileref.setAttribute("src", filePath);

                //    document.getElementsByTagName("head")[0].appendChild(fileref)
                //},
                dynamicallyLoadJsFile = function (filePath, callback) {

                    var script = document.createElement("script")
                    script.type = "text/javascript";

                    if (script.readyState) { //IE
                        script.onreadystatechange = function () {
                            if (script.readyState == "loaded" ||
                                script.readyState == "complete") {
                                script.onreadystatechange = null;
                                callback();
                            }
                        };
                    } else { //Others
                        script.onload = function () {
                            callback();
                        };
                    }

                    script.src = filePath;
                    document.getElementsByTagName("head")[0].appendChild(script);
                },
                hideProgramInfo = function () {
                    //Hide Page content.
                    $('.program-information').css('display', 'none');
                };

            return {
                FormatCurrency: function (number, symbol) {
                    return formatCurrency(number, symbol);
                },
                CleanNumberField: function (value) {
                    return cleanNumberField(value);
                },
                SetMaxLength: function (controlInfo) {
                    setMaxLength(controlInfo)
                },
                HidePageInfo: function () {
                    hideProgramInfo();
                },
                NullifyEmpty: function (values) {
                    nullifyEmptyValues(values);
                },
                GetIndexFromDropDownSource: function (source, selectedId, property) {
                    return getIndexFromDropDownSource(source, selectedId, property);
                },
                GetSelectedObject: function (array, filterProterty, filterValue) {
                    return getSelectedObject(array, filterProterty, filterValue);
                },
                GetFieldValues: function () {
                    return getFieldData();
                },
                IsValidEmail: function (email) {
                    return isValidEmail(email);
                },
                getControlIdArray: function (formControls) {
                    return priveteGetControlIdArray(formControls);
                },
                isWholeNumber: function (value) {
                    return privateIsWholeNumber(value);
                },
                inRange: function (value, min, max) {
                    return _inRange(value, min, max);
                },
                requiedField: function (value) {
                    return privateRequiedField(value);
                },
                setDefaultValue: function (value) {
                    return privateSetDefaultValue(value);
                },
                filterNumbers: function (evt, maxLength) {
                    privateFilterKey(evt, maxLength);
                },
                registerNumericControls: function (ctrls, maxLength, isPercentage) {
                    privateRegisterNumericControls(ctrls, maxLength, isPercentage);
                },
                setAddress: function (address1, address2, state, postalCode, country) {
                    return _setAddress(address1, address2, state, postalCode, country);
                },
                AnalyzeQueryString: function () {
                    analyzeQueryString();
                },
                valueRound: function (number, precision) {
                    return _round(number, precision);
                },
                replaceBrand: function (htmlText) {
                    return _replaceBrand(htmlText);
                },
                GetVertical: function () {
                    return _getVertical();
                },
                appendVertical: function (text) {
                    return _appendVertical(text)
                },

                ShowBusyWrapper: function () {
                    showBusyWrapper();
                },
                HideBusyWrapper: function () {
                    hideBusyWrapper();
                },

                DisplayErrorMessage: function (message) {
                    return displayErrorMessage(message);
                },
                DisplaySuccessMessage: function (message) {
                    return displaySuccessMessage(message);
                },

                HideMessages: function () {
                    hideErrorMessage();
                    hideSuccessMessage();
                },
                GetErrorMessageUsingAjaxErrorObject: function (obj) {
                    return getErrorMessageUsingAjaxErrorObject(obj);
                },
                GetDefinedErrorMessage: function (message, isSystemError) {
                    return getDefinedErrorMessage(message, isSystemError);
                },
                DynamicallyLoadJsFile: function (filePath, callBack) {
                    dynamicallyLoadJsFile(filePath, callBack);
                }
            }
        }())
        //#endregion Helper

        //#region Submit Data
        ,
    submitData: (function () {

            // before send
            var beforeSend = function () {
                    ProgramEnrollmentFormCommon.helper.ShowBusyWrapper();
                    ProgramEnrollmentFormCommon.helper.HideMessages();
                },

                // success
                success = function (data) {
                    // display message
                    if (!data) {
                        ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(
                            ProgramEnrollmentFormCommon.helper.GetDefinedErrorMessage("Returned data is null", false)
                        );
                    } else if (!data.status.Success) {
                        ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(
                            ProgramEnrollmentFormCommon.helper.GetDefinedErrorMessage(data.status.Message, false)
                        );
                    } else {
                        ProgramEnrollmentFormCommon.helper.DisplaySuccessMessage(data.status.Message);
                        ProgramEnrollmentFormCommon.render.freezeAll();
                    }

                    ProgramEnrollmentFormCommon.helper.HideBusyWrapper();
                },

                // error
                onerror = function (error) {

                    ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(
                        ProgramEnrollmentFormCommon.helper.GetDefinedErrorMessage(
                            ProgramEnrollmentFormCommon.helper.GetErrorMessageUsingAjaxErrorObject(error),
                            false));

                    ProgramEnrollmentFormCommon.helper.HideBusyWrapper();
                },

                // complete
                complete = function () {
                    //ProgramEnrollmentFormCommon.helper.HideBusyWrapper();
                }

            return {
                BeforeSend: function () {
                    beforeSend();
                },
                Success: function (data) {
                    success(data);
                },
                Error: function (error) {
                    onerror(error);
                },
                Complete: function () {
                    complete();
                }
            }
        }())
        //#endregion Submit Data

        //#region validate
        ,
    validate: (function () {
        var errorMessage = {
                emailFormatError: "Invalid email format",
                noDealerOwner: "No Owner exists for this Dealer Company",
                noSalesManager: "No <Ductless/Residential> Sales Manager exists for this Distributor Company",
                noTerritoryManager: "No Territory Manager exists for this Distributor Company",
                requiredFieldError: "Please provide valid information to all the required fields to proceed."
            },
            message = '',
            isErrorFound = false;

        var execute = function () {

            ProgramEnrollmentFormCommon.helper.HideMessages();

            //(Dealer section)
            //validate Dealer Owner Name
            var validateDealerOwnerName = function () {
                    var message = null;
                    if (!ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerNames) {
                        message = errorMessage.noDealerOwner;
                    } else {
                        var owners = ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerNames.jqxDropDownList('source');
                        var dealerOwner = ProgramEnrollmentFormCommon.render.dealerControl.DealerOwnerNames.jqxDropDownList('getSelectedItem');


                        // dealerOwner is required
                        if (!owners || owners && !owners.length) {
                            message = errorMessage.noDealerOwner;
                        } else if (owners && owners.length && !dealerOwner) {
                            message = errorMessage.requiredFieldError;
                        }
                    }

                    if (message && message.length > 0) {
                        isErrorFound = true;
                        ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(message);
                    }
                },

                //(Distributor Section)
                //validate Distributor Name
                validateDistributorName = function () {
                    if (!ProgramEnrollmentFormCommon.render.distributorControl) {
                        message = errorMessage.requiredFieldError;
                    } else {
                        var distributor = ProgramEnrollmentFormCommon.render.distributorControl.DistributorNames.jqxDropDownList('getSelectedItem'),
                            message = null;

                        // distributor is required
                        if (!distributor) {
                            message = errorMessage.requiredFieldError;
                        }
                    }
                    if (message && message.length > 0) {
                        isErrorFound = true;
                        ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(message);
                    }
                },

                //Sales Manager Name (Distributor Section)
                validateSalesManager = function () {
                    var message = null;
                    var vertical = ProgramEnrollmentFormCommon.helper.GetVertical();
                    if (!ProgramEnrollmentFormCommon.render.distributorControl.DistributorSalesManagers) {
                        message = errorMessage.noSalesManager.replace("<Ductless/Residential>", vertical);
                    } else {
                        var managers = ProgramEnrollmentFormCommon.render.distributorControl.DistributorSalesManagers.jqxDropDownList('source');
                        var salesManager = ProgramEnrollmentFormCommon.render.distributorControl.DistributorSalesManagers.jqxDropDownList('getSelectedItem');

                        // salesManager is required
                        if (!managers || (managers && !managers.length)) {
                            message = errorMessage.noSalesManager.replace("<Ductless/Residential>", vertical);
                        } else if (!salesManager && managers && managers.length) {
                            message = errorMessage.requiredFieldError;
                        }
                    }

                    if (message && message.length > 0) {
                        isErrorFound = true;
                        ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(message);
                    }
                },

                //"Territory Manager Name
                validateTerritoryManager = function () {
                    var message = '';
                    if (!ProgramEnrollmentFormCommon.render.distributorControl.DistributorTerritoryManagerNames) {
                        message = errorMessage.noTerritoryManager;
                    } else {
                        var managers = ProgramEnrollmentFormCommon.render.distributorControl.DistributorTerritoryManagerNames.jqxDropDownList('source');

                        var territoryManager = ProgramEnrollmentFormCommon.render.distributorControl.DistributorTerritoryManagerNames.jqxDropDownList('getSelectedItem');

                        if (!managers || (managers && !managers.length)) {
                            // if managers no manager is available.
                            message = errorMessage.noTerritoryManager;
                        } else if (!territoryManager && managers && managers.length) {
                            //if manager is not selected.
                            message = errorMessage.requiredFieldError;
                        }
                    }

                    if (message && message.length > 0) {
                        isErrorFound = true;
                        ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(message);
                    }
                },

                //Distributor Email
                validateDistributorEmail = function () {
                    var distributorEmail = ProgramEnrollmentFormCommon.render.distributorControl.DistributorEmail.val();

                    if (distributorEmail && !ProgramEnrollmentFormCommon.helper.IsValidEmail(distributorEmail)) {
                        isErrorFound = true;
                        message = errorMessage.emailFormatError;
                        ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(message);
                    }
                },

                //(action )
                validateApproverAction = function () {
                    var action = ProgramEnrollmentFormCommon.render.approverControl.ApproverActions.jqxDropDownList('getSelectedItem'),
                        message = null;

                    // action is required
                    if (!action) {
                        message = errorMessage.requiredFieldError;
                    }

                    if (message && message.length > 0) {
                        isErrorFound = true;
                        ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(message);
                    }
                },

                //Sales information section
                validateSalesInformation = function () {
                    // validate BigFish Standard or Ductless controls (if validation fails pass false)
                    isErrorFound = isErrorFound || !ProgramEnrollmentFormCommon.validate.salesInfomation.execute();

                    if (isErrorFound) {
                        message = errorMessage.requiredFieldError;
                        ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(message);
                    }
                },

                validations = [],
                self = this;

            isErrorFound = false;

            validations.push(
                validateDealerOwnerName,
                validateDistributorName,
                validateSalesManager,
                validateTerritoryManager,
                validateDistributorEmail,
                validateApproverAction,
                validateSalesInformation);

            validations.forEach(function (validator) {
                if (isErrorFound) {
                    return;
                }
                validator.call(self);

            });

            return isErrorFound;
        }

        return {
            Execute: function () {
                return execute();
            },
            salesInfomation: function () {
                return {};
            }
        }
    })()
    //#endregion validate
};

$(document).ready(function () {
    try {
        ProgramEnrollmentFormCommon.render.generalControl.BusyImage = $('#EnrollmentFormInitialBusyWrapperDiv');
        ProgramEnrollmentFormCommon.render.generalControl.BusyWrapper = $('#EnrollmentFormInitialBusyImageDiv');

        ProgramEnrollmentFormCommon.render.generalControl.ErrorMessage = $('#loadErrorMessageDiv');
        ProgramEnrollmentFormCommon.render.generalControl.SuccessMessage = $('#success-message-lbl');

        ProgramEnrollmentFormCommon.helper.AnalyzeQueryString();
        //  initial call
        ProgramEnrollmentFormCommon.webService.Call(
            ProgramEnrollmentFormCommon.config.methodName.getEnrollmentFormLoadData,
            ProgramEnrollmentFormCommon.config.requestType.post,
            ProgramEnrollmentFormCommon.config.serviceDataType.json,
            ProgramEnrollmentFormCommon.dataStore.GetQueryStringData(),
            ProgramEnrollmentFormCommon.load.BeforeSend,
            ProgramEnrollmentFormCommon.load.Success,
            ProgramEnrollmentFormCommon.load.Error,
            null,
            null
        );


    } catch (exception) {
        ProgramEnrollmentFormCommon.helper.DisplayErrorMessage(
            ProgramEnrollmentFormCommon.helper.GetDefinedErrorMessage(exception.message, true));
    }
});