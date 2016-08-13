import React from "react";

export default class Purchase extends React.Component {
  render() {
    return (
      <div className="container" >
        <h1>Purchase</h1>
        <form className="well">
          <div className="form-group" >
            <label htmlFor="category" className="col-sm-2 control-label">Category</label>
              <select id="category" className="input-sm">
                <option>Food</option>
              </select>
          </div>
          <div className="form-group" >
            <label htmlFor="product_name" className="col-sm-2 control-label">Name</label>
            <input id="product-name" className="input-sm" />
          </div>
          <div className="form-group" >
            <label htmlFor="amount" className="col-sm-2 control-label">Amount</label>
            <input id="amount" className="input-sm" />
          </div>
          <div className="form-group" >
            <label htmlFor="cost_per" className="col-sm-2 control-label" >Cost Per</label>
            <input id="cost_per" className="input-sm"/>
            <select className="input-sm">
              <option>item</option>
              <option>kilo</option>
              <option>gram</option>
            </select>
          </div>
          <div className="form-group" >
            <label htmlFor="cost" className="col-sm-2 control-label" >Cost</label>
            <input className="input-sm" />
          </div>
          <div className="form-group">
            <label htmlFor="create_button" className="col-sm-2"/>
            <button id="create_button" className="btn btn-primary" >Create</button>
          </div>
        </form>
      </div>
    );
  }
}
