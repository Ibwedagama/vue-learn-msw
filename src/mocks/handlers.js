/* eslint-disable prettier/prettier */
import { rest } from 'msw';

const handlers = [
  /**
   *  Cegat segala network request ke url ini,
   *  dan berikan response dengan status 200 beserta mock datanya
   */
  rest.get('https://jsonplaceholder.typicode.com/posts', (request, response, context) => {
    return response(
      context.status(200),
      context.json([
        {
          userId: 1,
          id: 1,
          title: 'mock title 1',
          body: 'mock body 1',
        },
        {
          userId: 1,
          id: 2,
          title: 'mock title 2',
          body: 'mock body 2',
        },
        {
          userId: 1,
          id: 3,
          title: 'mock title 3',
          body: 'mock body 3',
        },
        {
          userId: 1,
          id: 4,
          title: 'mock title 4',
          body: 'mock body 4',
        },
        {
          userId: 1,
          id: 5,
          title: 'mock title 5',
          body: 'mock body 5',
        },
      ]),
    );
  }),
];

export { handlers };
