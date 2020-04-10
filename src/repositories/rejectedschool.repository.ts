import {DefaultCrudRepository} from '@loopback/repository';
import {Rejectedschool, RejectedschoolRelations} from '../models';
import {SchooldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RejectedschoolRepository extends DefaultCrudRepository<
  Rejectedschool,
  typeof Rejectedschool.prototype.id,
  RejectedschoolRelations
> {
  constructor(
    @inject('datasources.schooldb') dataSource: SchooldbDataSource,
  ) {
    super(Rejectedschool, dataSource);
  }
}
