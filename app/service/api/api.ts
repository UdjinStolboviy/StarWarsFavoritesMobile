import { inject, injectable } from 'inversify';
import { makeObservable } from 'mobx';
import { IApiService } from './apiType';
import axios from "axios";


@injectable()
export class ApiService {
    private urlApi = 'https://swapi.dev/api/';
    getPeople(): void {
        axios.get(this.urlApi + 'people').then((response) => {
            return response.data;
        });
    }
}
