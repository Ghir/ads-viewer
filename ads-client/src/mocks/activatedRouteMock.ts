import { of } from 'rxjs';

const activatedRouteMock = {
  queryParams: of({ name: 'Test Campaign' }),
  params: of({ id: 1 })
};

export default activatedRouteMock;