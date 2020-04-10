import {Entity, model, property} from '@loopback/repository';

@model()
export class Acceptedschool extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  constructor(data?: Partial<Acceptedschool>) {
    super(data);
  }
}

export interface AcceptedschoolRelations {
  // describe navigational properties here
}

export type AcceptedschoolWithRelations = Acceptedschool &
  AcceptedschoolRelations;
