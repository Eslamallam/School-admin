import {DefaultCrudRepository} from '@loopback/repository';
import {School, SchoolRelations} from '../models';
import {SchooldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SchoolRepository extends DefaultCrudRepository<
  School,
  typeof School.prototype.id,
  SchoolRelations
> {
  constructor(
    @inject('datasources.schooldb') dataSource: SchooldbDataSource,
  ) {
    super(School, dataSource);
  }
}
