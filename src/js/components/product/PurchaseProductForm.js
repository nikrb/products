import React from 'react';

export default class PurchaseProductForm extends React.Component{
  render() {
    return (
        <form className="well">
          <div className="form-group" >
            <label htmlFor="category" className="col-sm-2 control-label">Category</label>
            <select id="category" className="input-sm"  onChange={this.props.productChange}>
              {this.props.categories.map( cat =>
                <option key={cat._id} value={cat.title}>{cat.title}</option>)}
            </select>
          </div>
          <div className="form-group" >
            <label htmlFor="product_name" className="col-sm-2 control-label">Name</label>
            <input id="product_name" className="input-sm" onChange={this.props.productChange}/>
          </div>
          <div className="form-group" >
            <label htmlFor="amount" className="col-sm-2 control-label">Amount</label>
            <input id="amount" className="input-sm" onChange={this.props.productChange} />
          </div>
          <div className="form-group" >
            <label htmlFor="cost_per" className="col-sm-2 control-label" >Cost Per</label>
            <input id="cost_per" className="input-sm" onChange={this.props.productChange}/>
            <select id="item_or_weight" className="input-sm" onChange={this.props.productChange}>
              <option value="item">item</option>
              <option value="kilo">kilo</option>
              <option value="gram">gram</option>
            </select>
          </div>
          <div className="form-group" >
            <label htmlFor="cost" className="col-sm-2 control-label" >Cost</label>
            <input id="cost" className="input-sm"  onChange={this.props.productChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="create_button" className="col-sm-2"/>
            <button id="create_button" className="btn btn-primary"
                    onClick={this.props.createProduct}>Create</button>
          </div>
        </form>
    );
  }
}
