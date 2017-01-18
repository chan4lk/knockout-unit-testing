//Version QAR 2.4.2
'use strict';
var ProgramEnrollmentFormBigfish = { // program enrollment form standard functionality name space
    config: (function () {

        var
            decimalfieldMaxLength = ProgramEnrollmentFormCommon.config.constant.decimalfieldMaxLength,
            customValidatedProps = [{
                id: "currentYearBrandTwoName",
                maxLength: 50
            }, {
                id: "firstYearBrandTwoName",
                maxLength: 50
            }, {
                id: "currentYearBrandOneName",
                maxLength: 50
            }, {
                id: "firstYearBrandOneName",
                maxLength: 50
            },
            {
                id: "secondYearBrandTwoName",
                maxLength: 50
            },
            {
                id: "secondYearBrandOneName",
                maxLength: 50
            }, {
                id: "EnrollmentFormApproverCommentTextarea",
                maxLength: 500
            }, {
                id: "otherExpensesComment",
                maxLength: 500
            }],
            requiredFieldControls = [
                "firstYearCBPBrandPercentage",
                "secondYearCBPBrandPercentage",
                "currentYearTotalSalesVolume",
                "firstYearTotalSalesVolume",
                "secondYearTotalSalesVolume",
                "currentYearAnnualEquipmentPurchases",
                "firstYearAnnualEquipmentPurchases",
                "secondYearAnnualEquipmentPurchases",
                "currentYearCBPEquipmentPurchases",
                "firstYearCBPEquipmentPurchases",
                "secondYearCBPEquipmentPurchases",
                "currentYearAORPurchaseVolume",
                "firstYearAORPurchaseVolume",
                "secondYearAORPurchaseVolume",
                "currentYearConstructionPurchaseVolume",
                "firstYearConstructionPurchaseVolume",
                "secondYearConstructionPurchaseVolume",

            ],
            rangeFieldControls = [
                "secondYearBrandOnePercentage",
                "secondYearBrandTwoPercentage",
                "secondYearCBPBrandPercentage",
                "currentYearBrandOnePercentage",
                "firstYearBrandOnePercentage",
                "currentYearBrandTwoPercentage",
                "firstYearBrandTwoPercentage",
                "currentYearCBPBrandPercentage",
                "firstYearCBPBrandPercentage"
            ],
            decimalFieldControls = [
                "currentYearTotalSalesVolume",
                "firstYearTotalSalesVolume",
                "secondYearTotalSalesVolume",
                "currentYearAnnualEquipmentPurchases",
                "firstYearAnnualEquipmentPurchases",
                "secondYearAnnualEquipmentPurchases",
                "currentYearCBPEquipmentPurchases",
                "firstYearCBPEquipmentPurchases",
                "secondYearCBPEquipmentPurchases",
                "currentYearAORPurchaseVolume",
                "firstYearAORPurchaseVolume",
                "secondYearAORPurchaseVolume",
                "currentYearConstructionPurchaseVolume",
                "firstYearConstructionPurchaseVolume",
                "secondYearConstructionPurchaseVolume",
                "vehicleIdentificationExpenses",
                "secondYearVehicleIdentificationExpenses",
                "outdoorSignExpenses",
                "secondYearOutdoorSignExpenses",
                "otherMerchandiseExpenses",
                "secondOtherMerchandiseExpenses",
                "otherMerchandisingExpenses",
                "secondOtherMerchandisingExpenses",
                "equipmentExpenses",
                "secondEquipmentExpenses",
                "serviceUniformsExpenses",
                "secondServiceUniformsExpenses",
                "otherBrandedClothesExpenses",
                "secondOtherBrandedClothesExpenses",
                "showroomDisplayModelExpenses",
                "secondShowroomDisplayModelExpenses",
                "consumerLiteratureExpenses",
                "secondConsumerLiteratureExpenses",
                "technicalLiteratureExpenses",
                "secondTechnicalLiteratureExpenses",
                "technicalTrainingExpenses",
                "secondTechnicalTrainingExpenses",
                "salesTrainingExpenses",
                "secondSalesTrainingExpenses",
                "digitalMarketingExpenses",
                "secondDigitalMarketingExpenses",
                "nonDigitalAdvertisingExpenses",
                "secondNonDigitalAdvertisingExpenses",
                "promotionExpenses",
                "secondPromotionExpenses",
                "otherExpenses",
                "secondOtherExpenses"
            ],
            allFieldControls = [
                "currentYearTotalSalesVolume",
                "firstYearTotalSalesVolume",
                "secondYearTotalSalesVolume",
                "currentYearAnnualEquipmentPurchases",
                "firstYearAnnualEquipmentPurchases",
                "secondYearAnnualEquipmentPurchases",
                "currentYearCBPEquipmentPurchases",
                "firstYearCBPEquipmentPurchases",
                "secondYearCBPEquipmentPurchases",
                "currentYearAORPurchaseVolume",
                "firstYearAORPurchaseVolume",
                "secondYearAORPurchaseVolume",
                "currentYearConstructionPurchaseVolume",
                "firstYearConstructionPurchaseVolume",
                "secondYearConstructionPurchaseVolume",
                "currentYearBrandOnePercentage",
                "firstYearBrandOnePercentage",
                "secondYearBrandOnePercentage",
                "currentYearBrandTwoPercentage",
                "firstYearBrandTwoPercentage",
                "secondYearBrandTwoPercentage",
                "currentYearCBPBrandPercentage",
                "firstYearCBPBrandPercentage",
                "secondYearCBPBrandPercentage",
                "vehicleIdentificationExpenses",
                "secondYearvehicleIdentificationExpenses",
                "outdoorSignExpenses",
                "secondYearOutdoorSignExpenses",
                "otherMerchandiseExpenses",
                "secondOtherMerchandiseExpenses",
                "otherMerchandisingExpenses",
                "secondOtherMerchandisingExpenses",
                "equipmentExpenses",
                "secondEquipmentExpenses",
                "serviceUniformsExpenses",
                "secondServiceUniformsExpenses",
                "otherBrandedClothesExpenses",
                "secondOtherBrandedClothesExpenses",
                "showroomDisplayModelExpenses",
                "secondShowroomDisplayModelExpenses",
                "consumerLiteratureExpenses",
                "secondConsumerLiteratureExpenses",
                "technicalLiteratureExpenses",
                "secondTechnicalLiteratureExpenses",
                "technicalTrainingExpenses",
                "secondTechnicalTrainingExpenses",
                "salesTrainingExpenses",
                "secondSalesTrainingExpenses",
                "digitalMarketingExpenses",
                "secondDigitalMarketingExpenses",
                "nonDigitalAdvertisingExpenses",
                "secondNonDigitalAdvertisingExpenses",
                "promotionExpenses",
                "secondPromotionExpenses",
                "otherExpenses",
                "secondOtherExpenses",
                "otherExpensesComment"
            ];


        var _marketingPercentages = {
            //Marketing Fund Estimate Second Year  (8%) 
            secondYearFundEstimate: 0.08,
            //Marketing Fund Estimate First Year (12%)
            firstYearFundEstimate: 0.12
        };

        return {
            decimalfieldMaxLenth: decimalfieldMaxLength,
            requiredFieldControls: requiredFieldControls,
            decimalFieldControls: decimalFieldControls,
            allFieldControls: allFieldControls,
            rangeFieldControls: rangeFieldControls,
            marketingPercentages: _marketingPercentages,
            customValidatedProps: customValidatedProps
        }

    })()
    ///#endregion Configurations

    ///#region Validation
    ,
    validate: (function () {
        var clean = ProgramEnrollmentFormCommon.helper.CleanNumberField;
        var requiedField = function () {
            var requiredControls = ProgramEnrollmentFormBigfish.config.requiredFieldControls;
            var controlIdenties = ProgramEnrollmentFormCommon.helper.getControlIdArray(requiredControls);
            if (controlIdenties.length > 0) {
                for (var index = 0; index < controlIdenties.length; index++) {
                    var control = $(controlIdenties[index]);
                    if (control.length === 0) continue;
                    var controlValue = control.val();
                    if (!ProgramEnrollmentFormCommon.helper.requiedField(controlValue)) {
                        return false;
                    }
                }
            }
            return true;
        },
            decimalfields = function () {
                var decimalControls = ProgramEnrollmentFormBigfish.config.decimalFieldControls;
                var controlIdenties = ProgramEnrollmentFormCommon.helper.getControlIdArray(decimalControls);

                if (controlIdenties.length > 0) {
                    for (var index = 0; index < controlIdenties.length; index++) {
                        var control = $(controlIdenties[index]);
                        if (control.length === 0) continue;
                        var controlValue = control.val();
                        if (!ProgramEnrollmentFormCommon.helper.isWholeNumber(clean(controlValue))) {
                            return false;
                        }

                    }
                }
                return true;
            },
            rangeFields = function () {
                var rangeControls = ProgramEnrollmentFormBigfish.config.rangeFieldControls;
                var controlIdenties = ProgramEnrollmentFormCommon.helper.getControlIdArray(rangeControls);
                var minValue = 0;
                var maxValue = 100;
                if (controlIdenties.length > 0) {
                    for (var index = 0; index < controlIdenties.length; index++) {
                        var control = $(controlIdenties[index]);
                        if (control.length === 0) continue;
                        var controlValue = control.val();
                        if (!ProgramEnrollmentFormCommon.helper.inRange(clean(controlValue), minValue, maxValue)) {
                            return false;
                        }
                    }
                } else {
                    window.console && console.log('No Controls');
                }
                return true;
            },

            validateAll = function () {
                var result = true;

                if (!requiedField() || !rangeFields()) {
                    result = false;
                }
                if (!decimalfields()) {
                    result = false;
                }


                return result;
            };

        return {
            execute: validateAll
        }

    })()
    ///#endregion Validation

    ///#region DataManager
    ,
    dataManager: (function () {

        var setDefaultValue = ProgramEnrollmentFormCommon.helper.setDefaultValue;
        var salesControlsId = ProgramEnrollmentFormCommon.config.salesControlsId;
        var currency = ProgramEnrollmentFormCommon.helper.FormatCurrency;
        var clean = ProgramEnrollmentFormCommon.helper.CleanNumberField;

        //get all values from HTML input and label value and returns entity object
        var getAllControlsValue = function () {

            var entity = {};

            entity.AllBrandsTotalSalesVolumeCurrentYear = clean($(salesControlsId.currentYearTotalSalesVolume).val());
            entity.AllBrandsTotalSalesVolumeFirstYear = clean($(salesControlsId.firstYearTotalSalesVolume).val());
            entity.AllBrandsAnnualEquipmentPurchasesCurrentYear = clean($(salesControlsId.currentYearAnnualEquipmentPurchases).val());
            entity.AllBrandsAnnualEquipmentPurchasesFirstYear = clean($(salesControlsId.firstYearAnnualEquipmentPurchases).val());
            entity.CBPAnnualEquipmentPurchasesCurrentYear = clean($(salesControlsId.currentYearCBPEquipmentPurchases).val());
            entity.CBPAnnualEquipmentPurchasesFirstYear = clean($(salesControlsId.firstYearCBPEquipmentPurchases).val());
            entity.AllBrandsAORPurchasesVolumeCurrentYear = clean($(salesControlsId.currentYearAORPurchaseVolume).val());
            entity.AllBrandsAORPurchasesVolumeFirstYear = clean($(salesControlsId.firstYearAORPurchaseVolume).val());
            entity.AllBrandsNewConstructionPurchaseVolumeCurrentYear = clean($(salesControlsId.currentYearConstructionPurchaseVolume).val());
            entity.AllBrandsNewConstructionPurchaseVolumeFirstYear = clean($(salesControlsId.firstYearConstructionPurchaseVolume).val());
            entity.CompetitiveBrand1NameCurrentYear = $(salesControlsId.currentYearBrandOneName).val();
            entity.CompetitiveBrand1NameFirstYear = $(salesControlsId.firstYearBrandOneName).val();
            entity.CompetitiveBrand1PercentageCurrentYear = ($(salesControlsId.currentYearBrandOnePercentage).val());
            entity.CompetitiveBrand1PercentageFirstYear = ($(salesControlsId.firstYearBrandOnePercentage).val());
            entity.CompetitiveBrand2NameCurrentYear = $(salesControlsId.currentYearBrandTwoName).val();
            entity.CompetitiveBrand2NameFirstYear = $(salesControlsId.firstYearBrandTwoName).val();
            entity.CompetitiveBrand2PercentageCurrentYear = ($(salesControlsId.currentYearBrandTwoPercentage).val());
            entity.CompetitiveBrand2PercentageFirstYear = ($(salesControlsId.firstYearBrandTwoPercentage).val());
            entity.CBPBrandPercentageCurrentYear = ($(salesControlsId.currentYearCBPBrandPercentage).val());
            entity.CBPBrandPercentageFirstYear = ($(salesControlsId.firstYearCBPBrandPercentage).val());
            entity.CBPBrandPercentageSecondYear = ($(salesControlsId.secondYearCBPBrandPercentage).val());
            entity.MarketingFundEstimateSevenPercentage = null;
            entity.VehicleIdentificationFirstYear = clean($(salesControlsId.vehicleIdentificationExpenses).val());
            entity.VehicleIdentificationSecondYear = clean($(salesControlsId.secondYearVehicleIdentificationExpenses).val());
            entity.OutdoorSignFirstYear = clean($(salesControlsId.outdoorSignExpenses).val());
            entity.OutdoorSignSecondYear = clean($(salesControlsId.secondYearOutdoorSignExpenses).val());
            entity.OtherMerchandiseFirstYear = clean($(salesControlsId.otherMerchandiseExpenses).val());
            entity.OtherMerchandiseSecondYear = clean($(salesControlsId.secondOtherMerchandiseExpenses).val());
            entity.OtherMerchandisingFirstYear = clean($(salesControlsId.otherMerchandisingExpenses).val());
            entity.OtherMerchandisingSecondYear = clean($(salesControlsId.secondOtherMerchandisingExpenses).val());
            entity.EquipmentFirstYear = clean($(salesControlsId.equipmentExpenses).val());
            entity.EquipmentSecondYear = clean($(salesControlsId.secondEquipmentExpenses).val());
            entity.ServiceUniformsFirstYear = clean($(salesControlsId.serviceUniformsExpenses).val());
            entity.ServiceUniformsSecondYear = clean($(salesControlsId.secondServiceUniformsExpenses).val());
            entity.OtherBrandedClothesFirstYear = clean($(salesControlsId.otherBrandedClothesExpenses).val());
            entity.OtherBrandedClothesSecondYear = clean($(salesControlsId.secondOtherBrandedClothesExpenses).val());
            entity.ShowRoomDisplayModelsFirstYear = clean($(salesControlsId.showroomDisplayModelExpenses).val());
            entity.ShowRoomDisplayModelsSecondYear = clean($(salesControlsId.secondShowroomDisplayModelExpenses).val());
            entity.ConsumerLiteratureFirstYear = clean($(salesControlsId.consumerLiteratureExpenses).val());
            entity.ConsumerLiteratureSecondYear = clean($(salesControlsId.secondConsumerLiteratureExpenses).val());
            entity.TechnicalLiteratureFirstYear = clean($(salesControlsId.technicalLiteratureExpenses).val());
            entity.TechnicalLiteratureSecondYear = clean($(salesControlsId.secondTechnicalLiteratureExpenses).val());
            entity.TechnicalTrainingFirstYear = clean($(salesControlsId.technicalTrainingExpenses).val());
            entity.TechnicalTrainingSecondYear = clean($(salesControlsId.secondTechnicalTrainingExpenses).val());
            entity.SalesTrainingFirstYear = clean($(salesControlsId.salesTrainingExpenses).val());
            entity.SalesTrainingSecondYear = clean($(salesControlsId.secondSalesTrainingExpenses).val());
            entity.DigitalMarketingFirstYear = clean($(salesControlsId.digitalMarketingExpenses).val());
            entity.DigitalMarketingSecondYear = clean($(salesControlsId.secondDigitalMarketingExpenses).val());
            entity.AdvertisingNonDigitalFirstYear = clean($(salesControlsId.nonDigitalAdvertisingExpenses).val());
            entity.AdvertisingNonDigitalSecondYear = clean($(salesControlsId.secondNonDigitalAdvertisingExpenses).val());
            entity.PromotionFirstYear = clean($(salesControlsId.promotionExpenses).val());
            entity.PromotionSecondYear = clean($(salesControlsId.secondPromotionExpenses).val());
            entity.OtherFirstYear = clean($(salesControlsId.otherExpenses).val());
            entity.OtherSecondYear = clean($(salesControlsId.secondOtherExpenses).val());
            entity.AllBrandsTotalSalesVolumnSecondYear = clean($(salesControlsId.secondYearTotalSalesVolume).val());
            entity.AllBrandsAnnualEquipmentPurchasesSecondYear = clean($(salesControlsId.secondYearAnnualEquipmentPurchases).val());
            entity.CBPAnnualEquipmentPurchasesSecondYear = clean($(salesControlsId.secondYearCBPEquipmentPurchases).val());
            entity.AllBrandsAORPurchaseVolumnSecondYear = clean($(salesControlsId.secondYearAORPurchaseVolume).val());
            entity.AllBrandsNewConstructionPurchaseVolumnSecondYear = clean($(salesControlsId.secondYearConstructionPurchaseVolume).val());
            entity.CompetitiveBrand1NameSecondYear = $(salesControlsId.secondYearBrandOneName).val();
            entity.CompetitiveBrand1PercentageSecondYear = $(salesControlsId.secondYearBrandOnePercentage).val();
            entity.CompetitiveBrand2NameSecondYear = $(salesControlsId.secondYearBrandTwoName).val();
            entity.CompetitiveBrand2PercentageSecondYear = $(salesControlsId.secondYearBrandTwoPercentage).val();
            entity.MarketingFundEstimate12PercentageFirstYear = clean(_fundEstimateFirstYearFormula($(salesControlsId.marketingFundEstimate12PercentageFirstYear).val()));
            entity.MarketingFundEstimate8PercentageFirstYear = clean(_fundEstimateFirstYearFormula($(salesControlsId.marketingFundEstimate8PercentageFirstYear).val()));
            entity.Comment = $(salesControlsId.otherExpensesComment).val();
            entity.AllBrandsTotalDuctlessSalesVolumeCurrentYear = null;
            entity.AllBrandsTotalDuctlessSalesVolumeFirstYear = null;
            entity.AllBrandsAnnualDustlessEquipmentPuchasesCurrentYear = null;
            entity.AllBrandsAnnualDustlessEquipmentPuchasesFirstYear = null;
            entity.CBPAnnualDuctlessEquipmentPurchasesCurrentYear = null;
            entity.CBPAnnualDuctlessEquipmentPurchasesFirstYear = null;
            entity.AllBrandsDuctlessAORPurchaseVolumnCurrentYear = null;
            entity.AllBrandsDuctlessAORPurchaseVolumnFirstYear = null;
            entity.AllBrandsNewConstructionDuctlessPurchasesVolumnCurrentYear = null;
            entity.AllBrandsNewConstructionDuctlessPurchasesVolumnFirstYear = null;
            entity.MarketingFundEstimateFivePercentage = null;


            return entity;

        },
            // set entity values to Html inputs and labels
            setAllControlsValue = function (entity) {

                $(salesControlsId.currentYearTotalSalesVolume).val(currency(setDefaultValue(entity.AllBrandsTotalSalesVolumeCurrentYear)));
                $(salesControlsId.firstYearTotalSalesVolume).val(currency(setDefaultValue(entity.AllBrandsTotalSalesVolumeFirstYear)));
                $(salesControlsId.currentYearAnnualEquipmentPurchases).val(currency(setDefaultValue(entity.AllBrandsAnnualEquipmentPurchasesCurrentYear)));
                $(salesControlsId.firstYearAnnualEquipmentPurchases).val(currency(setDefaultValue(entity.AllBrandsAnnualEquipmentPurchasesFirstYear)));
                $(salesControlsId.currentYearCBPEquipmentPurchases).val(currency(setDefaultValue(entity.CBPAnnualEquipmentPurchasesCurrentYear)));
                $(salesControlsId.firstYearCBPEquipmentPurchases).val(currency(setDefaultValue(entity.CBPAnnualEquipmentPurchasesFirstYear)));
                $(salesControlsId.currentYearAORPurchaseVolume).val(currency(setDefaultValue(entity.AllBrandsAORPurchasesVolumeCurrentYear)));
                $(salesControlsId.firstYearAORPurchaseVolume).val(currency(setDefaultValue(entity.AllBrandsAORPurchasesVolumeFirstYear)));
                $(salesControlsId.currentYearConstructionPurchaseVolume).val(currency(setDefaultValue(entity.AllBrandsNewConstructionPurchaseVolumeCurrentYear)));
                $(salesControlsId.firstYearConstructionPurchaseVolume).val(currency(setDefaultValue(entity.AllBrandsNewConstructionPurchaseVolumeFirstYear)));
                $(salesControlsId.currentYearBrandOneName).val(setDefaultValue(entity.CompetitiveBrand1NameCurrentYear));
                $(salesControlsId.firstYearBrandOneName).val(setDefaultValue(entity.CompetitiveBrand1NameFirstYear));
                $(salesControlsId.currentYearBrandOnePercentage).val(setDefaultValue(entity.CompetitiveBrand1PercentageCurrentYear));
                $(salesControlsId.firstYearBrandOnePercentage).val(setDefaultValue(entity.CompetitiveBrand1PercentageFirstYear));
                $(salesControlsId.currentYearBrandTwoName).val(setDefaultValue(entity.CompetitiveBrand2NameCurrentYear));
                $(salesControlsId.firstYearBrandTwoName).val(setDefaultValue(entity.CompetitiveBrand2NameFirstYear));
                $(salesControlsId.currentYearBrandTwoPercentage).val(setDefaultValue(entity.CompetitiveBrand2PercentageCurrentYear));
                $(salesControlsId.firstYearBrandTwoPercentage).val(setDefaultValue(entity.CompetitiveBrand2PercentageFirstYear));
                $(salesControlsId.currentYearCBPBrandPercentage).val(setDefaultValue(entity.CBPBrandPercentageCurrentYear));
                $(salesControlsId.firstYearCBPBrandPercentage).val(setDefaultValue(entity.CBPBrandPercentageFirstYear));
                $(salesControlsId.secondYearCBPBrandPercentage).val(setDefaultValue(entity.CBPBrandPercentageSecondYear));
                entity.MarketingFundEstimateSevenPercentage = null;
                $(salesControlsId.vehicleIdentificationExpenses).val(currency(entity.VehicleIdentificationFirstYear));

                $(salesControlsId.secondYearVehicleIdentificationExpenses).val(currency(entity.VehicleIdentificationSecondYear));
                $(salesControlsId.outdoorSignExpenses).val(currency(entity.OutdoorSignFirstYear));
                $(salesControlsId.secondYearOutdoorSignExpenses).val(currency(entity.OutdoorSignSecondYear));
                $(salesControlsId.otherMerchandiseExpenses).val(currency(entity.OtherMerchandiseFirstYear));
                $(salesControlsId.secondOtherMerchandiseExpenses).val(currency(entity.OtherMerchandiseSecondYear));
                $(salesControlsId.otherMerchandisingExpenses).val(currency(entity.OtherMerchandisingFirstYear));
                $(salesControlsId.secondOtherMerchandisingExpenses).val(currency(entity.OtherMerchandisingSecondYear));
                $(salesControlsId.equipmentExpenses).val(currency(entity.EquipmentFirstYear));
                $(salesControlsId.secondEquipmentExpenses).val(currency(entity.EquipmentSecondYear));
                $(salesControlsId.serviceUniformsExpenses).val(currency(entity.ServiceUniformsFirstYear));
                $(salesControlsId.secondServiceUniformsExpenses).val(currency(entity.ServiceUniformsSecondYear));
                $(salesControlsId.otherBrandedClothesExpenses).val(currency(entity.OtherBrandedClothesFirstYear));
                $(salesControlsId.secondOtherBrandedClothesExpenses).val(currency(entity.OtherBrandedClothesSecondYear));
                $(salesControlsId.showroomDisplayModelExpenses).val(currency(entity.ShowRoomDisplayModelsFirstYear));
                $(salesControlsId.secondShowroomDisplayModelExpenses).val(currency(entity.ShowRoomDisplayModelsSecondYear));
                $(salesControlsId.consumerLiteratureExpenses).val(currency(entity.ConsumerLiteratureFirstYear));
                $(salesControlsId.secondConsumerLiteratureExpenses).val(currency(entity.ConsumerLiteratureSecondYear));
                $(salesControlsId.technicalLiteratureExpenses).val(currency(entity.TechnicalLiteratureFirstYear));
                $(salesControlsId.secondTechnicalLiteratureExpenses).val(currency(entity.TechnicalLiteratureSecondYear));
                $(salesControlsId.technicalTrainingExpenses).val(currency(entity.TechnicalTrainingFirstYear));
                $(salesControlsId.secondTechnicalTrainingExpenses).val(currency(entity.TechnicalTrainingSecondYear));
                $(salesControlsId.salesTrainingExpenses).val(currency(entity.SalesTrainingFirstYear));
                $(salesControlsId.secondSalesTrainingExpenses).val(currency(entity.SalesTrainingSecondYear));
                $(salesControlsId.digitalMarketingExpenses).val(currency(entity.DigitalMarketingFirstYear));
                $(salesControlsId.secondDigitalMarketingExpenses).val(currency(entity.DigitalMarketingSecondYear));
                $(salesControlsId.nonDigitalAdvertisingExpenses).val(currency(entity.AdvertisingNonDigitalFirstYear));
                $(salesControlsId.secondNonDigitalAdvertisingExpenses).val(currency(entity.AdvertisingNonDigitalSecondYear));
                $(salesControlsId.promotionExpenses).val(currency(entity.PromotionFirstYear));
                $(salesControlsId.secondPromotionExpenses).val(currency(entity.PromotionSecondYear));
                $(salesControlsId.otherExpenses).val(currency(entity.OtherFirstYear));
                $(salesControlsId.secondOtherExpenses).val(currency(entity.OtherSecondYear));
                $(salesControlsId.secondYearTotalSalesVolume).val(currency(entity.AllBrandsTotalSalesVolumnSecondYear));
                $(salesControlsId.secondYearAnnualEquipmentPurchases).val(currency(entity.AllBrandsAnnualEquipmentPurchasesSecondYear));
                $(salesControlsId.secondYearCBPEquipmentPurchases).val(currency(entity.CBPAnnualEquipmentPurchasesSecondYear));
                $(salesControlsId.secondYearAORPurchaseVolume).val(currency(entity.AllBrandsAORPurchaseVolumnSecondYear));
                $(salesControlsId.secondYearConstructionPurchaseVolume).val(currency(entity.AllBrandsNewConstructionPurchaseVolumnSecondYear));
                $(salesControlsId.secondYearBrandOneName).val(entity.CompetitiveBrand1NameSecondYear);
                $(salesControlsId.secondYearBrandOnePercentage).val(entity.CompetitiveBrand1PercentageSecondYear);
                $(salesControlsId.secondYearBrandTwoName).val(entity.CompetitiveBrand2NameSecondYear);
                $(salesControlsId.secondYearBrandTwoPercentage).val(entity.CompetitiveBrand2PercentageSecondYear);
                $(salesControlsId.marketingFundEstimate12PercentageFirstYear).val(entity.MarketingFundEstimate12PercentageFirstYear);
                $(salesControlsId.marketingFundEstimate8PercentageFirstYear).val(entity.MarketingFundEstimate8PercentageFirstYear);
                $(salesControlsId.otherExpensesComment).val(entity.Comment);
                _setCBPLabels();
                //Register event listener
                $('.formula').on("keyup", _updateMarketingEstimates);

                //Update on load
                _updateMarketingEstimates();
            },

            _formatCurrency = function (number) {

                //comment out following line to format numbers as $4,000
                if (!number) return '';
                var currencySymbol = '$';
                var formatted = currencySymbol + number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                return formatted;
            },

            _updateMarketingEstimates = function () {
                var firstYearCBPBrandPercentage = $(salesControlsId.firstYearCBPBrandPercentage).val();
                var firstYearAnnualEquipmentPurchases = $(salesControlsId.firstYearAnnualEquipmentPurchases).val();
                var firstYearFormula = _fundEstimateFirstYearFormula(firstYearAnnualEquipmentPurchases, firstYearCBPBrandPercentage);
                $(salesControlsId.marketingFundEstimate12PercentageFirstYear).text(_formatCurrency(firstYearFormula));

                var secondYearAnnualEquipmentPurchases = $(salesControlsId.secondYearAnnualEquipmentPurchases).val();
                var secondYearCBPBrandPercentage = $(salesControlsId.secondYearCBPBrandPercentage).val();
                var secondYearFormula = _fundEstimateSecondYearFormula(secondYearAnnualEquipmentPurchases, secondYearCBPBrandPercentage);
                $(salesControlsId.marketingFundEstimate8PercentageFirstYear).text(_formatCurrency(secondYearFormula));
            },

            //Marketing Fund Estimate First Year (12%) 
            _fundEstimateFirstYearFormula = function (annualPurchasesValue, cdbBrandPercentValue) {

                var annualPurchases = parseInt(annualPurchasesValue, 10);
                var cdbpercent = parseFloat(cdbBrandPercentValue);
                var fundEstimateValue = annualPurchases * cdbpercent * ProgramEnrollmentFormBigfish.config.marketingPercentages.firstYearFundEstimate;
                return fundEstimateValue;
            },

            //(First Year All Brands Annual Equipment Purchases" x "First Year CBP Brand percent) x 12%
            _fundEstimateSecondYearFormula = function (annualPurchasesValue, cdbBrandPercentValue) {
                //Formula:  (Second Year All Brands Annual Equipment Purchases" x "Second Year CBP Brand percent) x 8%
                var annualPurchases = parseInt(annualPurchasesValue, 10);
                var cdbpercent = parseFloat(cdbBrandPercentValue);
                var fundEstimateValue = annualPurchases * cdbpercent * ProgramEnrollmentFormBigfish.config.marketingPercentages.secondYearFundEstimate;
                return fundEstimateValue;
            }

        var _bindInputValidations = function () {
            ProgramEnrollmentFormCommon.helper.registerNumericControls(
                ProgramEnrollmentFormBigfish.config.decimalFieldControls,
                ProgramEnrollmentFormBigfish.config.decimalfieldMaxLenth,
                false);
            ProgramEnrollmentFormCommon.helper.registerNumericControls(
                ProgramEnrollmentFormBigfish.config.rangeFieldControls,
                3,
                true);
            ProgramEnrollmentFormCommon.helper.SetMaxLength(ProgramEnrollmentFormBigfish.config.customValidatedProps);
        },
            _setCBPLabels = function () {
                var annualPurchase = ProgramEnrollmentFormCommon.helper.replaceBrand($(salesControlsId.annualPurchaseLabel).text());
                var brandPercentage = ProgramEnrollmentFormCommon.helper.replaceBrand($(salesControlsId.brandPercentageLabel).text());

                $(salesControlsId.annualPurchaseLabel).text(annualPurchase);
                $(salesControlsId.brandPercentageLabel).text(brandPercentage);
            };




        return {
            getAllControlsValue: getAllControlsValue,
            setAllControlsValue: setAllControlsValue,
            bindInputValidations: _bindInputValidations
        }

    })()
};
///#endregion DataManager

ProgramEnrollmentFormCommon.render.onSalesInformationDivRendered = function (entity) {
    ProgramEnrollmentFormBigfish.dataManager.bindInputValidations();
    ProgramEnrollmentFormBigfish.dataManager.setAllControlsValue(entity);
    ProgramEnrollmentFormCommon.dataManager.getSalesInformationValues = function () {
        return ProgramEnrollmentFormBigfish.dataManager.getAllControlsValue();
    }
    ProgramEnrollmentFormCommon.validate.salesInfomation.execute = function () {
        return ProgramEnrollmentFormBigfish.validate.execute();
    }
}