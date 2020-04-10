import {DefaultCrudRepository} from '@loopback/repository';
import {Acceptedschool, AcceptedschoolRelations} from '../models';
import {SchooldbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AcceptedschoolRepository extends DefaultCrudRepository<
  Acceptedschool,
  typeof Acceptedschool.prototype.id,
  AcceptedschoolRelations
> {
  constructor(
    @inject('datasources.schooldb') dataSource: SchooldbDataSource,
  ) {
    super(Acceptedschool, dataSource);
  }
}
