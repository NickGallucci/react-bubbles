import React, { useState, useEffect } from "react";
import axiosWithAuth from "../auth/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = props => {
  const [colorList, setColorList] = useState([]);

  const logout = e => {
    localStorage.removeItem('token');
    props.history.push('/');
  }

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/colors`)
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => console.log('NOT APPLICABLE!', err));
  }, []);

  return (
    <div className='BubblePage'>
      <div className="BubblePage--colors">
        <ColorList colors={colorList} updateColors={setColorList} />
        <Bubbles colors={colorList} />
      </div>
      <button onClick={logout}>LogOut</button>
    </div>
  );
};

export default BubblePage;
