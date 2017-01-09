'use strict';
//Version QAR 2.3.2
var ProgramEnrollmentFormBigfish = { // program enrollment form standard functionality name space
    config: (function () {

            var
                decimalfieldMaxLenth = ProgramEnrollmentFormCommon.config.constant.decimalfieldMaxLenth,
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
                }, {
                    id: "EnrollmentFormApproverCommentTextarea",
                    maxLength: 500
                }, {
                    id: "otherExpensesComment",
                    maxLength: 500
                }],
                requiredFieldControls = [
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
                    "secondYearConstructionPurchaseVolume"
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
                decimalfieldMaxLenth: decimalfieldMaxLenth,
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
                            if (!ProgramEnrollmentFormCommon.helper.isWholeNumber(controlValue)) {
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
                            if (!ProgramEnrollmentFormCommon.helper.inRange(controlValue, minValue, maxValue)) {
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
        //get all values from HTML input and label value and returns entity object
        var getAllControlsValue = function () {

                var entity = {};

                entity.AllBrandsTotalSalesVolumeCurrentYear = $(salesControlsId.currentYearTotalSalesVolume).val();
                entity.AllBrandsTotalSalesVolumeFirstYear = $(salesControlsId.firstYearTotalSalesVolume).val();
                entity.AllBrandsAnnualEquipmentPurchasesCurrentYear = $(salesControlsId.currentYearAnnualEquipmentPurchases).val();
                entity.AllBrandsAnnualEquipmentPurchasesFirstYear = $(salesControlsId.firstYearAnnualEquipmentPurchases).val();
                entity.CBPAnnualEquipmentPurchasesCurrentYear = $(salesControlsId.currentYearCBPEquipmentPurchases).val();
                entity.CBPAnnualEquipmentPurchasesFirstYear = $(salesControlsId.firstYearCBPEquipmentPurchases).val();
                entity.AllBrandsAORPurchasesVolumeCurrentYear = $(salesControlsId.currentYearAORPurchaseVolume).val();
                entity.AllBrandsAORPurchasesVolumeFirstYear = $(salesControlsId.firstYearAORPurchaseVolume).val();
                entity.AllBrandsNewConstructionPurchaseVolumeCurrentYear = $(salesControlsId.currentYearConstructionPurchaseVolume).val();
                entity.AllBrandsNewConstructionPurchaseVolumeFirstYear = $(salesControlsId.firstYearConstructionPurchaseVolume).val();
                entity.CompetitiveBrand1NameCurrentYear = $(salesControlsId.currentYearBrandOneName).val();
                entity.CompetitiveBrand1NameFirstYear = $(salesControlsId.firstYearBrandOneName).val();
                entity.CompetitiveBrand1PercentageCurrentYear = $(salesControlsId.currentYearBrandOnePercentage).val();
                entity.CompetitiveBrand1PercentageFirstYear = $(salesControlsId.firstYearBrandOnePercentage).val();
                entity.CompetitiveBrand2NameCurrentYear = $(salesControlsId.currentYearBrandTwoName).val();
                entity.CompetitiveBrand2NameFirstYear = $(salesControlsId.firstYearBrandTwoName).val();
                entity.CompetitiveBrand2PercentageCurrentYear = $(salesControlsId.currentYearBrandTwoPercentage).val();
                entity.CompetitiveBrand2PercentageFirstYear = $(salesControlsId.firstYearBrandTwoPercentage).val();
                entity.CBPBrandPercentageCurrentYear = $(salesControlsId.currentYearCBPBrandPercentage).val();
                entity.CBPBrandPercentageFirstYear = $(salesControlsId.firstYearCBPBrandPercentage).val();
                entity.CBPBrandPercentageSecondYear = $(salesControlsId.secondYearCBPBrandPercentage).val();
                entity.MarketingFundEstimateSevenPercentage = null;
                entity.VehicleIdentificationFirstYear = $(salesControlsId.vehicleIdentificationExpenses).val();
                entity.VehicleIdentificationSecondYear = $(salesControlsId.secondYearVehicleIdentificationExpenses).val();
                entity.OutdoorSignFirstYear = $(salesControlsId.outdoorSignExpenses).val();
                entity.OutdoorSignSecondYear = $(salesControlsId.secondYearOutdoorSignExpenses).val();
                entity.OtherMerchandiseFirstYear = $(salesControlsId.otherMerchandiseExpenses).val();
                entity.OtherMerchandiseSecondYear = $(salesControlsId.secondOtherMerchandiseExpenses).val();
                entity.OtherMerchandisingFirstYear = $(salesControlsId.otherMerchandisingExpenses).val();
                entity.OtherMerchandisingSecondYear = $(salesControlsId.secondOtherMerchandisingExpenses).val();
                entity.EquipmentFirstYear = $(salesControlsId.equipmentExpenses).val();
                entity.EquipmentSecondYear = $(salesControlsId.secondEquipmentExpenses).val();
                entity.ServiceUniformsFirstYear = $(salesControlsId.serviceUniformsExpenses).val();
                entity.ServiceUniformsSecondYear = $(salesControlsId.secondServiceUniformsExpenses).val();
                entity.OtherBrandedClothesFirstYear = $(salesControlsId.otherBrandedClothesExpenses).val();
                entity.OtherBrandedClothesSecondYear = $(salesControlsId.secondOtherBrandedClothesExpenses).val();
                entity.ShowRoomDisplayModelsFirstYear = $(salesControlsId.showroomDisplayModelExpenses).val();
                entity.ShowRoomDisplayModelsSecondYear = $(salesControlsId.secondShowroomDisplayModelExpenses).val();
                entity.ConsumerLiteratureFirstYear = $(salesControlsId.consumerLiteratureExpenses).val();
                entity.ConsumerLiteratureSecondYear = $(salesControlsId.secondConsumerLiteratureExpenses).val();
                entity.TechnicalLiteratureFirstYear = $(salesControlsId.technicalLiteratureExpenses).val();
                entity.TechnicalLiteratureSecondYear = $(salesControlsId.secondTechnicalLiteratureExpenses).val();
                entity.TechnicalTrainingFirstYear = $(salesControlsId.technicalTrainingExpenses).val();
                entity.TechnicalTrainingSecondYear = $(salesControlsId.secondTechnicalTrainingExpenses).val();
                entity.SalesTrainingFirstYear = $(salesControlsId.salesTrainingExpenses).val();
                entity.SalesTrainingSecondYear = $(salesControlsId.secondSalesTrainingExpenses).val();
                entity.DigitalMarketingFirstYear = $(salesControlsId.digitalMarketingExpenses).val();
                entity.DigitalMarketingSecondYear = $(salesControlsId.secondDigitalMarketingExpenses).val();
                entity.AdvertisingNonDigitalFirstYear = $(salesControlsId.nonDigitalAdvertisingExpenses).val();
                entity.AdvertisingNonDigitalSecondYear = $(salesControlsId.secondNonDigitalAdvertisingExpenses).val();
                entity.PromotionFirstYear = $(salesControlsId.promotionExpenses).val();
                entity.PromotionSecondYear = $(salesControlsId.secondPromotionExpenses).val();
                entity.OtherFirstYear = $(salesControlsId.otherExpenses).val();
                entity.OtherSecondYear = $(salesControlsId.secondOtherExpenses).val();
                entity.AllBrandsTotalSalesVolumnSecondYear = $(salesControlsId.secondYearTotalSalesVolume).val();
                entity.AllBrandsAnnualEquipmentPurchasesSecondYear = $(salesControlsId.secondYearAnnualEquipmentPurchases).val();
                entity.CBPAnnualEquipmentPurchasesSecondYear = $(salesControlsId.secondYearCBPEquipmentPurchases).val();
                entity.AllBrandsAORPurchaseVolumnSecondYear = $(salesControlsId.secondYearAORPurchaseVolume).val();
                entity.AllBrandsNewConstructionPurchaseVolumnSecondYear = $(salesControlsId.secondYearConstructionPurchaseVolume).val();
                entity.CompetitiveBrand1NameSecondYear = $(salesControlsId.secondYearBrandOneName).val();
                entity.CompetitiveBrand1PercentageSecondYear = $(salesControlsId.secondYearBrandOnePercentage).val();
                entity.CompetitiveBrand2NameSecondYear = $(salesControlsId.secondYearBrandTwoName).val();
                entity.CompetitiveBrand2PercentageSecondYear = $(salesControlsId.secondYearBrandTwoPercentage).val();
                entity.MarketingFundEstimate12PercentageFirstYear = _fundEstimateFirstYearFormula($(salesControlsId.marketingFundEstimate12PercentageFirstYear).val());
                entity.MarketingFundEstimate8PercentageFirstYear = _fundEstimateFirstYearFormula($(salesControlsId.marketingFundEstimate8PercentageFirstYear).val());
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

                $(salesControlsId.currentYearTotalSalesVolume).val(setDefaultValue(entity.AllBrandsTotalSalesVolumeCurrentYear));
                $(salesControlsId.firstYearTotalSalesVolume).val(setDefaultValue(entity.AllBrandsTotalSalesVolumeFirstYear));
                $(salesControlsId.currentYearAnnualEquipmentPurchases).val(setDefaultValue(entity.AllBrandsAnnualEquipmentPurchasesCurrentYear));
                $(salesControlsId.firstYearAnnualEquipmentPurchases).val(setDefaultValue(entity.AllBrandsAnnualEquipmentPurchasesFirstYear));
                $(salesControlsId.currentYearCBPEquipmentPurchases).val(setDefaultValue(entity.CBPAnnualEquipmentPurchasesCurrentYear));
                $(salesControlsId.firstYearCBPEquipmentPurchases).val(setDefaultValue(entity.CBPAnnualEquipmentPurchasesFirstYear));
                $(salesControlsId.currentYearAORPurchaseVolume).val(setDefaultValue(entity.AllBrandsAORPurchasesVolumeCurrentYear));
                $(salesControlsId.firstYearAORPurchaseVolume).val(setDefaultValue(entity.AllBrandsAORPurchasesVolumeFirstYear));
                $(salesControlsId.currentYearConstructionPurchaseVolume).val(setDefaultValue(entity.AllBrandsNewConstructionPurchaseVolumeCurrentYear));
                $(salesControlsId.firstYearConstructionPurchaseVolume).val(setDefaultValue(entity.AllBrandsNewConstructionPurchaseVolumeFirstYear));
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
                $(salesControlsId.vehicleIdentificationExpenses).val(entity.VehicleIdentificationFirstYear);

                $(salesControlsId.secondYearVehicleIdentificationExpenses).val(entity.VehicleIdentificationSecondYear);
                $(salesControlsId.outdoorSignExpenses).val(entity.OutdoorSignFirstYear);
                $(salesControlsId.secondYearOutdoorSignExpenses).val(entity.OutdoorSignSecondYear);
                $(salesControlsId.otherMerchandiseExpenses).val(entity.OtherMerchandiseFirstYear);
                $(salesControlsId.secondOtherMerchandiseExpenses).val(entity.OtherMerchandiseSecondYear);
                $(salesControlsId.otherMerchandisingExpenses).val(entity.OtherMerchandisingFirstYear);
                $(salesControlsId.secondOtherMerchandisingExpenses).val(entity.OtherMerchandisingSecondYear);
                $(salesControlsId.equipmentExpenses).val(entity.EquipmentFirstYear);
                $(salesControlsId.secondEquipmentExpenses).val(entity.EquipmentSecondYear);
                $(salesControlsId.serviceUniformsExpenses).val(entity.ServiceUniformsFirstYear);
                $(salesControlsId.secondServiceUniformsExpenses).val(entity.ServiceUniformsSecondYear);
                $(salesControlsId.otherBrandedClothesExpenses).val(entity.OtherBrandedClothesFirstYear);
                $(salesControlsId.secondOtherBrandedClothesExpenses).val(entity.OtherBrandedClothesSecondYear);
                $(salesControlsId.showroomDisplayModelExpenses).val(entity.ShowRoomDisplayModelsFirstYear);
                $(salesControlsId.secondShowroomDisplayModelExpenses).val(entity.ShowRoomDisplayModelsSecondYear);
                $(salesControlsId.consumerLiteratureExpenses).val(entity.ConsumerLiteratureFirstYear);
                $(salesControlsId.secondConsumerLiteratureExpenses).val(entity.ConsumerLiteratureSecondYear);
                $(salesControlsId.technicalLiteratureExpenses).val(entity.TechnicalLiteratureFirstYear);
                $(salesControlsId.secondTechnicalLiteratureExpenses).val(entity.TechnicalLiteratureSecondYear);
                $(salesControlsId.technicalTrainingExpenses).val(entity.TechnicalTrainingFirstYear);
                $(salesControlsId.secondTechnicalTrainingExpenses).val(entity.TechnicalTrainingSecondYear);
                $(salesControlsId.salesTrainingExpenses).val(entity.SalesTrainingFirstYear);
                $(salesControlsId.secondSalesTrainingExpenses).val(entity.SalesTrainingSecondYear);
                $(salesControlsId.digitalMarketingExpenses).val(entity.DigitalMarketingFirstYear);
                $(salesControlsId.secondDigitalMarketingExpenses).val(entity.DigitalMarketingSecondYear);
                $(salesControlsId.nonDigitalAdvertisingExpenses).val(entity.AdvertisingNonDigitalFirstYear);
                $(salesControlsId.secondNonDigitalAdvertisingExpenses).val(entity.AdvertisingNonDigitalSecondYear);
                $(salesControlsId.promotionExpenses).val(entity.PromotionFirstYear);
                $(salesControlsId.secondPromotionExpenses).val(entity.PromotionSecondYear);
                $(salesControlsId.otherExpenses).val(entity.OtherFirstYear);
                $(salesControlsId.secondOtherExpenses).val(entity.OtherSecondYear);
                $(salesControlsId.secondYearTotalSalesVolume).val(entity.AllBrandsTotalSalesVolumnSecondYear);
                $(salesControlsId.secondYearAnnualEquipmentPurchases).val(entity.AllBrandsAnnualEquipmentPurchasesSecondYear);
                $(salesControlsId.secondYearCBPEquipmentPurchases).val(entity.CBPAnnualEquipmentPurchasesSecondYear);
                $(salesControlsId.secondYearAORPurchaseVolume).val(entity.AllBrandsAORPurchaseVolumnSecondYear);
                $(salesControlsId.secondYearConstructionPurchaseVolume).val(entity.AllBrandsNewConstructionPurchaseVolumnSecondYear);
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

            _updateMarketingEstimates = function () {
                var firstYearCBPBrandPercentage = $(salesControlsId.firstYearCBPBrandPercentage).val();
                var firstYearAnnualEquipmentPurchases = $(salesControlsId.firstYearAnnualEquipmentPurchases).val();
                var firstYearFormula = _fundEstimateFirstYearFormula(firstYearAnnualEquipmentPurchases, firstYearCBPBrandPercentage);
                $(salesControlsId.marketingFundEstimate12PercentageFirstYear).text(firstYearFormula);

                var secondYearAnnualEquipmentPurchases = $(salesControlsId.secondYearAnnualEquipmentPurchases).val();
                var secondYearCBPBrandPercentage = $(salesControlsId.secondYearCBPBrandPercentage).val();
                var secondYearFormula = _fundEstimateSecondYearFormula(secondYearAnnualEquipmentPurchases, secondYearCBPBrandPercentage);
                $(salesControlsId.marketingFundEstimate8PercentageFirstYear).text(secondYearFormula);
            },

            //Marketing Fund Estimate First Year (12%) 
            _fundEstimateFirstYearFormula = function (annualPurchasesValue, cdbBrandPercentValue) {

                var annualPurchases = parseInt(annualPurchasesValue, 10);
                var cdbpercent = parseFloat(cdbBrandPercentValue);
                var fundEstimateValue = annualPurchases * cdbpercent * ProgramEnrollmentFormBigfish.config.marketingPercentages.firstYearFundEstimate;
                return ProgramEnrollmentFormCommon.helper.valueRound(fundEstimateValue, 2);
            },

            //(First Year All Brands Annual Equipment Purchases" x "First Year CBP Brand percent) x 12%
            _fundEstimateSecondYearFormula = function (annualPurchasesValue, cdbBrandPercentValue) {
                //Formula:  (Second Year All Brands Annual Equipment Purchases" x "Second Year CBP Brand percent) x 8%
                var annualPurchases = parseInt(annualPurchasesValue, 10);
                var cdbpercent = parseFloat(cdbBrandPercentValue);
                var fundEstimateValue = annualPurchases * cdbpercent * ProgramEnrollmentFormBigfish.config.marketingPercentages.secondYearFundEstimate;
                return ProgramEnrollmentFormCommon.helper.valueRound(fundEstimateValue, 2);
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
                    ProgramEnrollmentFormCommon.helper.SetMaxLength (ProgramEnrollmentFormStandard.config.customValidatedProps);
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