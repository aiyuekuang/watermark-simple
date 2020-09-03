/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import WM from "@components/index"
import "../style/ztao.scss"




export default class Index extends React.Component {
  constructor(arg) {
    super(arg);
  }

  state = {
    data: []
  }


  componentDidMount = () => {

  }


  render() {
    return (
      <div className="up_index">
        <WM/>
      </div>
    )
  }
}


