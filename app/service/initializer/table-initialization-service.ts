import { inject, injectable } from 'inversify';
import { Types } from '../../ioc/types';
import { ProductQuery } from '../../db/product/query/product-query';
import { CategoryQuery } from '../../db/category/query/category-query';
import { CategoryParameterQuery } from '../../db/category/query/category-parameter-query';
import { DbClient } from '../../db/common/db-client';
import { ParameterTypeQuery } from '../../db/parameter-type/query/parameter-type-query';
import { MainParameterQuery } from '../../db/main-parameter/query/main-parameter-query';
import { ObjectParameterQuery } from '../../db/object-parameter/query/object-parameter-query';
import { ParameterValueQuery } from '../../db/parameter-value/query/parameter-value-query';
import { BrandQuery } from '../../db/brand/query/brand-query';
import { EmployeeQuery } from '../../db/employee/query/employee-query';
import { ContactQuery } from '../../db/contact/query/contact-query';
import { CountryQuery } from '../../db/country/query/country-query';
import { StateQuery } from '../../db/state/query/state-query';
import { DistrictQuery } from '../../db/district/query/district-query';
import { DealerQuery } from '../../db/dealer/query/dealer-query';
import { CropQuery } from '../../db/crops/query/crop-query';
import { InfoQuery } from '../../db/info/query/info-query';
import { MppAliasesQuery } from '../../db/mpp_aliases/query/mpp-aliases-query';
import { PlotQuery } from '../../db/plot/query/plot-query';
import { AdditQuery } from '../../db/addit/query/addit-query';
import { NotificationQuery } from '../../db/notification/query/notification-query';

@injectable()
export class TableInitializationService {

  @inject(Types.DbClient) private dbClient: DbClient;

  public async dropAllTables() {
    try {
      const jobs = [
        this.dropProductsTable.bind(this),
        this.dropPlotsTable.bind(this),
        this.dropCategoriesTable.bind(this),
        this.dropCategoryParametersTable.bind(this),
        this.dropParameterTypesTable.bind(this),
        this.dropMainParametersTable.bind(this),
        this.dropObjectParametersTable.bind(this),
        this.dropParameterValuesTable.bind(this),
        this.dropBrandsTable.bind(this),
        this.dropEmployeesTable.bind(this),
        this.dropContactsTable.bind(this),
        this.dropCountriesTable.bind(this),
        this.dropStatesTable.bind(this),
        this.dropDistrictsTable.bind(this),
        this.dropDealersTable.bind(this),
        this.dropCropsTable.bind(this),
        this.dropInfoTable.bind(this),
        this.dropAdditsTable.bind(this),
        this.dropMppAliasesTable.bind(this)
      ];
      await Promise.all(jobs.map(async job => await job()));
    } catch (e) {
      console.error('Drop tables error', e);
      throw e;
    }
  }

  public async createTablesIfNotExist() {
    try {
      const jobs = [
        this.initializeProductsTable.bind(this),
        this.initializePlotsTable.bind(this),
        this.initializeCategoriesTable.bind(this),
        this.initializeCategoryParametersTable.bind(this),
        this.initializeParameterTypesTable.bind(this),
        this.initializeMainParametersTable.bind(this),
        this.initializeObjectParametersTable.bind(this),
        this.initializeParameterValuesTable.bind(this),
        this.initializeBrandsTable.bind(this),
        this.initializeEmployeesTable.bind(this),
        this.initializeContactsTable.bind(this),
        this.initializeCountriesTable.bind(this),
        this.initializeStatesTable.bind(this),
        this.initializeDistrictsTable.bind(this),
        this.initializeDealersTable.bind(this),
        this.initializeCropsTable.bind(this),
        this.initializeInfoTable.bind(this),
        this.initializeAdditsTable.bind(this),
        this.initializeMppAliasesTable.bind(this),
        this.initializeNotificationsTable.bind(this)
      ];
      await Promise.all(jobs.map(async job => await job()));
    } catch (e) {
      console.error('Initialize tables error', e);
      throw e;
    }
  }

  public async initializeNotificationsTable() {
    try {
      await this.dbClient.executeSql(NotificationQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize notifications table error', e);
      throw e;
    }
  }

  private async initializeProductsTable() {
    try {
      await this.dbClient.executeSql(ProductQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize products table error', e);
      throw e;
    }
  }

  private async initializePlotsTable() {
    try {
      await this.dbClient.executeSql(PlotQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize plot table error', e);
      throw e;
    }
  }

  private async initializeCategoriesTable() {
    try {
      await this.dbClient.executeSql(CategoryQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize categories table error', e);
      throw e;
    }
  }

  private async initializeParameterTypesTable() {
    try {
      await this.dbClient.executeSql(ParameterTypeQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize parameter_types table error', e);
      throw e;
    }
  }

  private async initializeCategoryParametersTable() {
    try {
      await this.dbClient.executeSql(CategoryParameterQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize categories table error', e);
      throw e;
    }
  }

  private async initializeMainParametersTable() {
    try {
      await this.dbClient.executeSql(MainParameterQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize main_parameters table error', e);
      throw e;
    }
  }

  private async initializeObjectParametersTable() {
    try {
      await this.dbClient.executeSql(ObjectParameterQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize object_parameters table error', e);
      throw e;
    }
  }

  private async initializeParameterValuesTable() {
    try {
      await this.dbClient.executeSql(ParameterValueQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize parameter_values table error', e);
      throw e;
    }
  }

  private async initializeBrandsTable() {
    try {
      await this.dbClient.executeSql(BrandQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize brands table error', e);
      throw e;
    }
  }

  private async initializeEmployeesTable() {
    try {
      await this.dbClient.executeSql(EmployeeQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize employees table error', e);
      throw e;
    }
  }

  private async initializeContactsTable() {
    try {
      await this.dbClient.executeSql(ContactQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize contacts table error', e);
      throw e;
    }
  }

  private async initializeCountriesTable() {
    try {
      await this.dbClient.executeSql(CountryQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize countries table error', e);
      throw e;
    }
  }

  private async initializeDistrictsTable() {
    try {
      await this.dbClient.executeSql(DistrictQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize districts table error', e);
      throw e;
    }
  }

  private async initializeStatesTable() {
    try {
      await this.dbClient.executeSql(StateQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize states table error', e);
      throw e;
    }
  }

  private async initializeDealersTable() {
    try {
      await this.dbClient.executeSql(DealerQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize dealers table error', e);
      throw e;
    }
  }

  private async initializeCropsTable() {
    try {
      await this.dbClient.executeSql(CropQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize crops table error', e);
      throw e;
    }
  }

  private async initializeInfoTable() {
    try {
      await this.dbClient.executeSql(InfoQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize info table error', e);
      throw e;
    }
  }

  private async initializeAdditsTable() {
    try {
      await this.dbClient.executeSql(AdditQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize addits table error', e);
      throw e;
    }
  }

  private async dropProductsTable() {
    try {
      await this.dbClient.executeSql(ProductQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop products table error', e);
      throw e;
    }
  }

  private async dropPlotsTable() {
    try {
      await this.dbClient.executeSql(PlotQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop plot table error', e);
      throw e;
    }
  }

  private async initializeMppAliasesTable() {
    try {
      await this.dbClient.executeSql(MppAliasesQuery.createTableIfNotExist, []);
    } catch (e) {
      console.error('Initialize mpp_aliases table error', e);
      throw e;
    }
  }

  private async dropMppAliasesTable() {
    try {
      await this.dbClient.executeSql(MppAliasesQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop mpp_aliases table error', e);
      throw e;
    }
  }

  private async dropCategoriesTable() {
    try {
      await this.dbClient.executeSql(CategoryQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop categories table error', e);
      throw e;
    }
  }

  private async dropCategoryParametersTable() {
    try {
      await this.dbClient.executeSql(CategoryParameterQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop category_parameters table error', e);
      throw e;
    }
  }

  private async dropParameterTypesTable() {
    try {
      await this.dbClient.executeSql(ParameterTypeQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop parameter_types table error', e);
      throw e;
    }
  }

  private async dropMainParametersTable() {
    try {
      await this.dbClient.executeSql(MainParameterQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop main_parameters table error', e);
      throw e;
    }
  }

  private async dropObjectParametersTable() {
    try {
      await this.dbClient.executeSql(ObjectParameterQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop object_parameters table error', e);
      throw e;
    }
  }

  private async dropParameterValuesTable() {
    try {
      await this.dbClient.executeSql(ParameterValueQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop parameter_values table error', e);
      throw e;
    }
  }

  private async dropBrandsTable() {
    try {
      await this.dbClient.executeSql(BrandQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop brands table error', e);
      throw e;
    }
  }

  private async dropEmployeesTable() {
    try {
      await this.dbClient.executeSql(EmployeeQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop employees table error', e);
      throw e;
    }
  }

  private async dropContactsTable() {
    try {
      await this.dbClient.executeSql(ContactQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop contacts table error', e);
      throw e;
    }
  }

  private async dropCountriesTable() {
    try {
      await this.dbClient.executeSql(CountryQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop countries table error', e);
      throw e;
    }
  }

  private async dropStatesTable() {
    try {
      await this.dbClient.executeSql(StateQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop states table error', e);
      throw e;
    }
  }

  private async dropDistrictsTable() {
    try {
      await this.dbClient.executeSql(DistrictQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop districts table error', e);
      throw e;
    }
  }

  private async dropDealersTable() {
    try {
      await this.dbClient.executeSql(DealerQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop dealers table error', e);
      throw e;
    }
  }

  private async dropCropsTable() {
    try {
      await this.dbClient.executeSql(CropQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop crops table error', e);
      throw e;
    }
  }

  private async dropInfoTable() {
    try {
      await this.dbClient.executeSql(InfoQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop info table error', e);
      throw e;
    }
  }

  private async dropAdditsTable() {
    try {
      await this.dbClient.executeSql(AdditQuery.dropTableIfExists, []);
    } catch (e) {
      console.error('Drop addits table error', e);
      throw e;
    }
  }

}
