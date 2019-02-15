import RestUtilities from "./RestUtilities";
import IPerson from "../models/IPerson";
import { config } from "../common/config";

export default class PeopleService {

    private restUtilities: RestUtilities = null;

    constructor() {
        this.restUtilities = new RestUtilities();
    }

    public getAll(): Promise<IPerson[]> {
        return this.restUtilities.get<IPerson[]>(config.apiUrl + `/people`);
    }

    public get(id: number): Promise<IPerson> {
        return this.restUtilities.get<IPerson>(config.apiUrl + `/people/` + id);
    }
}