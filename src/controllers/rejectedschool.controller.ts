import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Rejectedschool} from '../models';
import {RejectedschoolRepository} from '../repositories';

export class RejectedschoolController {
  constructor(
    @repository(RejectedschoolRepository)
    public rejectedschoolRepository : RejectedschoolRepository,
  ) {}

  @post('/rejectedschools', {
    responses: {
      '200': {
        description: 'Rejectedschool model instance',
        content: {'application/json': {schema: getModelSchemaRef(Rejectedschool)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rejectedschool, {
            title: 'NewRejectedschool',
            exclude: ['id'],
          }),
        },
      },
    })
    rejectedschool: Omit<Rejectedschool, 'id'>,
  ): Promise<Rejectedschool> {
    return this.rejectedschoolRepository.create(rejectedschool);
  }

  @get('/rejectedschools/count', {
    responses: {
      '200': {
        description: 'Rejectedschool model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Rejectedschool) where?: Where<Rejectedschool>,
  ): Promise<Count> {
    return this.rejectedschoolRepository.count(where);
  }

  @get('/rejectedschools', {
    responses: {
      '200': {
        description: 'Array of Rejectedschool model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Rejectedschool, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Rejectedschool) filter?: Filter<Rejectedschool>,
  ): Promise<Rejectedschool[]> {
    return this.rejectedschoolRepository.find(filter);
  }

  @patch('/rejectedschools', {
    responses: {
      '200': {
        description: 'Rejectedschool PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rejectedschool, {partial: true}),
        },
      },
    })
    rejectedschool: Rejectedschool,
    @param.where(Rejectedschool) where?: Where<Rejectedschool>,
  ): Promise<Count> {
    return this.rejectedschoolRepository.updateAll(rejectedschool, where);
  }

  @get('/rejectedschools/{id}', {
    responses: {
      '200': {
        description: 'Rejectedschool model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Rejectedschool, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Rejectedschool, {exclude: 'where'}) filter?: FilterExcludingWhere<Rejectedschool>
  ): Promise<Rejectedschool> {
    return this.rejectedschoolRepository.findById(id, filter);
  }

  @patch('/rejectedschools/{id}', {
    responses: {
      '204': {
        description: 'Rejectedschool PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rejectedschool, {partial: true}),
        },
      },
    })
    rejectedschool: Rejectedschool,
  ): Promise<void> {
    await this.rejectedschoolRepository.updateById(id, rejectedschool);
  }

  @put('/rejectedschools/{id}', {
    responses: {
      '204': {
        description: 'Rejectedschool PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() rejectedschool: Rejectedschool,
  ): Promise<void> {
    await this.rejectedschoolRepository.replaceById(id, rejectedschool);
  }

  @del('/rejectedschools/{id}', {
    responses: {
      '204': {
        description: 'Rejectedschool DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.rejectedschoolRepository.deleteById(id);
  }
}
