var ProgramEnrollmentFormBigfish = {// program enrollment form standard functionality name space
    config: {},
    validate: {}, // validate 
    dataManager: {}
};

///#region Configurations
ProgramEnrollmentFormBigfish.config = (function () {

    var
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

    return {
        requiredFieldControls: requiredFieldControls,
        decimalFieldControls: decimalFieldControls,
        allFieldControls: allFieldControls
    }

})();
///#endregion Configurations

///#region Validation
ProgramEnrollmentFormBigfish.validate = (function () {
    var
        requiredControls = ProgramEnrollmentFormBigfish.config.requiredFieldControls,
        rangeControls = ProgramEnrollmentFormBigfish.config.rangeFieldControls,
        decimalControls = ProgramEnrollmentFormBigfish.config.decimalFieldControls;

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
        };



    return {
        isValid: validateAll
    }

})();
///#endregion Validation

///#region DataManager
ProgramEnrollmentFormBigfish.dataManager = (function () {

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
        entity.MarketingFundEstimate12PercentageFirstYear = $(salesControlsId.marketingFundEstimate12PercentageFirstYear).val();
        entity.MarketingFundEstimate8PercentageFirstYear = $(salesControlsId.marketingFundEstimate8PercentageFirstYear).val();
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

        }

    var _enableNumericInputs = function () {
        ProgramEnrollmentFormCommon.helper.registerNumericControls(ProgramEnrollmentFormBigfish.config.decimalFieldControls);
    };

    return {
        getAllControlsValue: getAllControlsValue,
        setAllControlsValue: setAllControlsValue,
        enableNumericInputs: _enableNumericInputs
    }

})();
///#endregion DataManager

ProgramEnrollmentFormCommon.render.onSalesInformationDivRendered = function (entity) {
    ProgramEnrollmentFormBigfish.dataManager.enableNumericInputs();
    ProgramEnrollmentFormBigfish.dataManager.setAllControlsValue(entity);
    ProgramEnrollmentFormCommon.dataManager.getSalesInformationValues = function () {
        return ProgramEnrollmentFormBigfish.dataManager.getAllControlsValue();
    }
}