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
import {Acceptedschool} from '../models';
import {AcceptedschoolRepository} from '../repositories';

export class AcceptedschoolController {
  constructor(
    @repository(AcceptedschoolRepository)
    public acceptedschoolRepository : AcceptedschoolRepository,
  ) {}

  @post('/acceptedschools', {
    responses: {
      '200': {
        description: 'Acceptedschool model instance',
        content: {'application/json': {schema: getModelSchemaRef(Acceptedschool)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acceptedschool, {
            title: 'NewAcceptedschool',
            exclude: ['id'],
          }),
        },
      },
    })
    acceptedschool: Omit<Acceptedschool, 'id'>,
  ): Promise<Acceptedschool> {
    return this.acceptedschoolRepository.create(acceptedschool);
  }

  @get('/acceptedschools/count', {
    responses: {
      '200': {
        description: 'Acceptedschool model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Acceptedschool) where?: Where<Acceptedschool>,
  ): Promise<Count> {
    return this.acceptedschoolRepository.count(where);
  }

  @get('/acceptedschools', {
    responses: {
      '200': {
        description: 'Array of Acceptedschool model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Acceptedschool, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Acceptedschool) filter?: Filter<Acceptedschool>,
  ): Promise<Acceptedschool[]> {
    return this.acceptedschoolRepository.find(filter);
  }

  @patch('/acceptedschools', {
    responses: {
      '200': {
        description: 'Acceptedschool PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acceptedschool, {partial: true}),
        },
      },
    })
    acceptedschool: Acceptedschool,
    @param.where(Acceptedschool) where?: Where<Acceptedschool>,
  ): Promise<Count> {
    return this.acceptedschoolRepository.updateAll(acceptedschool, where);
  }

  @get('/acceptedschools/{id}', {
    responses: {
      '200': {
        description: 'Acceptedschool model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Acceptedschool, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Acceptedschool, {exclude: 'where'}) filter?: FilterExcludingWhere<Acceptedschool>
  ): Promise<Acceptedschool> {
    return this.acceptedschoolRepository.findById(id, filter);
  }

  @patch('/acceptedschools/{id}', {
    responses: {
      '204': {
        description: 'Acceptedschool PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acceptedschool, {partial: true}),
        },
      },
    })
    acceptedschool: Acceptedschool,
  ): Promise<void> {
    await this.acceptedschoolRepository.updateById(id, acceptedschool);
  }

  @put('/acceptedschools/{id}', {
    responses: {
      '204': {
        description: 'Acceptedschool PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() acceptedschool: Acceptedschool,
  ): Promise<void> {
    await this.acceptedschoolRepository.replaceById(id, acceptedschool);
  }

  @del('/acceptedschools/{id}', {
    responses: {
      '204': {
        description: 'Acceptedschool DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.acceptedschoolRepository.deleteById(id);
  }
}
