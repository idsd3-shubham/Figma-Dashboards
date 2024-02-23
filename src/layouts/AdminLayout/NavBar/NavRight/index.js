import React, { useState } from 'react';
import {  ListGroup} from 'react-bootstrap';

import ChatList from './ChatList';


const NavRight = () => {
  const [listOpen, setListOpen] = useState(false);


  return (
    <React.Fragment>
      <ListGroup as="ul" bsPrefix=" " className="navbar-nav ml-auto" id="navbar-right">
      </ListGroup>
      <ChatList listOpen={listOpen} closed={() => setListOpen(false)} />
    </React.Fragment>
  );
};

export default NavRight;
