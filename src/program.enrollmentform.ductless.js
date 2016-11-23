﻿var ProgramEnrollmentFormDuctless = { // program enrollment form standard functionality name space
    config: {},
    validate: {}, // validate 
    dataManager: {}
};

///#region Configurations
ProgramEnrollmentFormDuctless.config = (function () {
    var
        requiredFieldControls = [
            'currentYearTotalSalesVolume',
            'firstYearTotalSalesVolume',
            'currentYearAnnualEquipmentPurchases',
            'firstYearAnnualEquipmentPurchases',
            'currentYearCBPEquipmentPurchases',
            'firstYearCBPEquipmentPurchases',
            'currentYearAORPurchaseVolume',
            'firstYearAORPurchaseVolume',
            'currentYearConstructionPurchaseVolume',
            'firstYearConstructionPurchaseVolume'
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
            "currentYearAnnualEquipmentPurchases",
            "firstYearAnnualEquipmentPurchases",
            "currentYearCBPEquipmentPurchases",
            "firstYearCBPEquipmentPurchases",
            "currentYearAORPurchaseVolume",
            "firstYearAORPurchaseVolume",
            "currentYearConstructionPurchaseVolume",
            "firstYearConstructionPurchaseVolume",
            "currentYearBrandOnePercentage",
            "firstYearBrandOnePercentage",
            "currentYearBrandTwoPercentage",
            "firstYearBrandTwoPercentage",
            "currentYearCBPBrandPercentage",
            "firstYearCBPBrandPercentage",
            "vehicleIdentificationExpenses",
            "outdoorSignExpenses",
            "otherMerchandiseExpenses",
            "otherMerchandisingExpenses",
            "equipmentExpenses",
            "serviceUniformsExpenses",
            "otherBrandedClothesExpenses",
            "showroomDisplayModelExpenses",
            "consumerLiteratureExpenses",
            "technicalLiteratureExpenses",
            "technicalTrainingExpenses",
            "salesTrainingExpenses",
            "digitalMarketingExpenses",
            "nonDigitalAdvertisingExpenses",
            "promotionExpenses",
            "otherExpenses",

        ];

    return {
        requiredFieldControls: requiredFieldControls,
        decimalFieldControls: decimalFieldControls,
        rangeFieldControls: rangeFieldControls
    }
})();
///#endregion Configurations

///#region Validation
ProgramEnrollmentFormDuctless.validate = (function () {
    var
        requiredControls = ProgramEnrollmentFormDuctless.config.requiredFieldControls,
        rangeControls = ProgramEnrollmentFormDuctless.config.rangeFieldControls,
        decimalControls = ProgramEnrollmentFormDuctless.config.decimalFieldControls;

    var requiedField = function () {
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
                console.log('No Controls');
            }
            return true;
        },
        validateAll = function () {

            var result = true;

            if (!requiedField()) {
                result = false;
            }
            if (!decimalfields()) {
                result = false;
            }
            if (!rangeFields()) {
                result = false;
            }
            return result;
        }

    return {
        isValid: validateAll
    }

})();
///#endregion Validation

///#region DataManager
ProgramEnrollmentFormDuctless.dataManager = (function () {
    var setDefaultValue = ProgramEnrollmentFormCommon.helper.setDefaultValue;
    var salesControlsId = ProgramEnrollmentFormCommon.config.salesControlsId;

    var getAllControlsValue = function () {

            var entity = {};

            entity.AllBrandsTotalSalesVolumeCurrentYear = null;
            entity.AllBrandsTotalSalesVolumeFirstYear = null;
            entity.AllBrandsAnnualEquipmentPurchasesCurrentYear = null;
            entity.AllBrandsAnnualEquipmentPurchasesFirstYear = null;
            entity.CBPAnnualEquipmentPurchasesCurrentYear = null;
            entity.CBPAnnualEquipmentPurchasesFirstYear = null;
            entity.AllBrandsAORPurchasesVolumeCurrentYear = null;
            entity.AllBrandsAORPurchasesVolumeFirstYear = null;
            entity.AllBrandsNewConstructionPurchaseVolumeCurrentYear = null;
            entity.AllBrandsNewConstructionPurchaseVolumeFirstYear = null;
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
            entity.AllBrandsTotalSalesVolumnSecondYear = null;
            entity.AllBrandsAnnualEquipmentPurchasesSecondYear = null;
            entity.CBPAnnualEquipmentPurchasesSecondYear = null;
            entity.AllBrandsAORPurchaseVolumnSecondYear = null;
            entity.AllBrandsNewConstructionPurchaseVolumnSecondYear = null;
            entity.CompetitiveBrand1NameSecondYear = null;
            entity.CompetitiveBrand1PercentageSecondYear = null;
            entity.CompetitiveBrand2NameSecondYear = null;
            entity.CompetitiveBrand2PercentageSecondYear = null;
            entity.MarketingFundEstimate12PercentageFirstYear = null;
            entity.MarketingFundEstimate8PercentageFirstYear = null;
            entity.Comment = $(salesControlsId.otherExpensesComment).val();
            entity.AllBrandsTotalDuctlessSalesVolumeCurrentYear = $(salesControlsId.currentYearTotalSalesVolume).val();
            entity.AllBrandsTotalDuctlessSalesVolumeFirstYear = $(salesControlsId.firstYearTotalSalesVolume).val();
            entity.AllBrandsAnnualDustlessEquipmentPuchasesCurrentYear = $(salesControlsId.currentYearAnnualEquipmentPurchases).val();
            entity.AllBrandsAnnualDustlessEquipmentPuchasesFirstYear = $(salesControlsId.firstYearAnnualEquipmentPurchases).val();
            entity.CBPAnnualDuctlessEquipmentPurchasesCurrentYear = $(salesControlsId.currentYearCBPEquipmentPurchases).val();
            entity.CBPAnnualDuctlessEquipmentPurchasesFirstYear = $(salesControlsId.firstYearCBPEquipmentPurchases).val();
            entity.AllBrandsDuctlessAORPurchaseVolumnCurrentYear = $(salesControlsId.currentYearAORPurchaseVolume).val();
            entity.AllBrandsDuctlessAORPurchaseVolumnFirstYear = $(salesControlsId.firstYearAORPurchaseVolume).val();
            entity.AllBrandsNewConstructionDuctlessPurchasesVolumnCurrentYear = $(salesControlsId.currentYearConstructionPurchaseVolume).val();
            entity.AllBrandsNewConstructionDuctlessPurchasesVolumnFirstYear = $(salesControlsId.firstYearConstructionPurchaseVolume).val();
            entity.MarketingFundEstimateFivePercentage = $(salesControlsId.marketingFundEstimateFivePercentage).val();


            return entity;

        },
        setAllControlsValue = function (entity) {

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

            /* $(salesControlsId.secondOtherExpenses).val(entity.OtherSecondYear);
             $(salesControlsId.secondYearTotalSalesVolume).val(entity.AllBrandsTotalSalesVolumnSecondYear);
             $(salesControlsId.secondYearAnnualEquipmentPurchases).val(entity.AllBrandsAnnualEquipmentPurchasesSecondYear);
             $(salesControlsId.secondYearCBPEquipmentPurchases).val(entity.CBPAnnualEquipmentPurchasesSecondYear);
             $(salesControlsId.secondYearAORPurchaseVolume).val(entity.AllBrandsAORPurchaseVolumnSecondYear);
             $(salesControlsId.secondYearConstructionPurchaseVolume).val(entity.AllBrandsNewConstructionPurchaseVolumnSecondYear);
             $(salesControlsId.secondYearBrandOneName).val(entity.CompetitiveBrand1NameSecondYear);
             $(salesControlsId.secondYearBrandOnePercentage).val(entity.CompetitiveBrand1PercentageSecondYear);
             $(salesControlsId.secondYearBrandTwoName).val(entity.CompetitiveBrand2NameSecondYear);
             $(salesControlsId.secondYearBrandTwoPercentage).val(entity.CompetitiveBrand2PercentageSecondYear);*/

            $(salesControlsId.otherExpensesComment).val(entity.Comment);

            $(salesControlsId.currentYearTotalSalesVolume).val(entity.AllBrandsTotalDuctlessSalesVolumeCurrentYear);
            $(salesControlsId.firstYearTotalSalesVolume).val(entity.AllBrandsTotalDuctlessSalesVolumeFirstYear);
            $(salesControlsId.currentYearAnnualEquipmentPurchases).val(entity.AllBrandsAnnualDustlessEquipmentPuchasesCurrentYear);
            $(salesControlsId.firstYearAnnualEquipmentPurchases).val(entity.AllBrandsAnnualDustlessEquipmentPuchasesFirstYear);
            $(salesControlsId.currentYearCBPEquipmentPurchases).val(entity.CBPAnnualDuctlessEquipmentPurchasesCurrentYear);
            $(salesControlsId.firstYearCBPEquipmentPurchases).val(entity.CBPAnnualDuctlessEquipmentPurchasesFirstYear);
            $(salesControlsId.currentYearAORPurchaseVolume).val(entity.AllBrandsDuctlessAORPurchaseVolumnCurrentYear);
            $(salesControlsId.firstYearAORPurchaseVolume).val(entity.AllBrandsDuctlessAORPurchaseVolumnFirstYear);
            $(salesControlsId.currentYearConstructionPurchaseVolume).val(entity.AllBrandsNewConstructionDuctlessPurchasesVolumnCurrentYear);
            $(salesControlsId.firstYearConstructionPurchaseVolume).val(entity.AllBrandsNewConstructionDuctlessPurchasesVolumnFirstYear);
            $(salesControlsId.marketingFundEstimateFivePercentage).val(entity.marketingFundEstimateFivePercentage);
        }
    var _enableNumericInputs = function () {
        ProgramEnrollmentFormCommon.helper.registerNumericControls(ProgramEnrollmentFormDuctless.config.decimalFieldControls);
    };

    return {
        getAllControlsValue: getAllControlsValue,
        setAllControlsValue: setAllControlsValue,
        enableNumericInputs: _enableNumericInputs
    }

})();
///#endregion DataManager

ProgramEnrollmentFormCommon.render.onSalesInformationDivRendered = function (entity) {
    ProgramEnrollmentFormDuctless.dataManager.enableNumericInputs();
    ProgramEnrollmentFormDuctless.dataManager.setAllControlsValue(entity);
    ProgramEnrollmentFormCommon.dataManager.getSalesInformationValues = function () {
        return ProgramEnrollmentFormDuctless.dataManager.getAllControlsValue();
    }
}