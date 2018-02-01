import React from 'react';
import { Helmet } from 'react-helmet';

import avatars from '../assets/avatars.png';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home page title</title>
      </Helmet>
      <h1>Home page</h1>
      <div className="flex">
        <div className="col-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat amet natus eveniet est. Quis, dolorem inventore eius neque obcaecati
          similique sequi eligendi omnis eos necessitatibus quisquam nostrum.
          Reprehenderit, culpa dolores.
        </div>
        <div className="col-6">
          <img src={avatars} alt="avatars" />
        </div>
      </div>
    </div>
  );
}
