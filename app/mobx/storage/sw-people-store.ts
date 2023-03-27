import { inject, injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';
import { People } from '../dto/people';
import { Types } from '../../ioc/types';
import { ApiService } from '../../service/api/api';


const _ = require('lodash');


@injectable()
export class PeopleStorage {
    @inject(Types.ApiService) private ApiService: ApiService;

    @observable private allPeoples: People[];
    @observable private favoritePeoples: People[];


    constructor() {
        makeObservable(this);
        this.allPeoples = [];
        this.favoritePeoples = [];
    }

    public getLoadedPeoplesByPeopleName(name: string): People | undefined {
        return this.allPeoples.find(item => item.getName() === name);
    }

    @action
    public addToLoadedPeoples(people: People) {
        const existing = this.allPeoples.find(item => item.getName() === people.getName());
        if (!existing) {
            this.allPeoples.push(people);
        }
    }

    public getFavoritePeoples(): People[] {
        return this.favoritePeoples;
    }

    @action
    public addToFavoritePeoples(people: People) {
        const existing = this.favoritePeoples.find(item => item.getName() === people.getName());
        if (!existing) {
            this.favoritePeoples.push(people);
        }
    }

    @action
    public removeFromFavoritePeoples(people: People) {
        _.remove(this.favoritePeoples, item => item.getName() === people.getName());
    }

    public isFavorite(people: People): boolean {
        return this.favoritePeoples.find(item => item.getName() === people.getName()) !== undefined;
    }


    public getAllPeoples(): People[] {
        return this.allPeoples;
    }

    @action
    public setAllPeoples(value: People[]) {
        this.allPeoples = value;
    }
}
