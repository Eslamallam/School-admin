import {Entity, model, property} from '@loopback/repository';

@model()
export class Rejectedschool extends Entity {
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

  constructor(data?: Partial<Rejectedschool>) {
    super(data);
  }
}

export interface RejectedschoolRelations {
  // describe navigational properties here
}

export type RejectedschoolWithRelations = Rejectedschool &
  RejectedschoolRelations;
