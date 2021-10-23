import React from 'react';

import { withLayout } from '../layout/Layout';
import { Htag } from '../componetns';

function Error500(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Ошибка 500</Htag>
    </>
  );
}

export default withLayout(Error500);
