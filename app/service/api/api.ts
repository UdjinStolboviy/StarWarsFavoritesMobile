import { inject, injectable } from 'inversify';
import { makeObservable } from 'mobx';
import axios, { AxiosResponse } from "axios";


@injectable()
export class ApiService {
    private urlApi = 'https://swapi.dev/api/';
    public getPeople(): Promise<AxiosResponse<any, any>> {
        return axios.get(this.urlApi + 'people')
    }
}
