export interface ICarItem {
  _id: number;
  classifieds: {
    description: string;
  };
  feedData: {
    autoProbeg: number;
    equipmentVariantName: string;
    modelYear: number;
    vin: string;
    engine: {
      engineName: string;
    };
    equipmentVariantTransmissionType: string;
    colorByClassifierName: string;
    autoPrice: number;
	baseOptions: IBaseOption[];
  };
  photobank: {
	imgs: IImage[];
  }
}

interface IImage {
	url: string
}

interface IBaseOption {
	optionName: string
}