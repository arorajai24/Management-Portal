export class ChartDataModel {
    public data: SeriesModel[];
    constructor(data:  SeriesModel[]) {
        this.data = data;
    }
}

export class SeriesModel {
    public name: string;
    public value : number;
    constructor(name:  string, value : number) {
        this.name = name;
        this.value = value;
    }
}
