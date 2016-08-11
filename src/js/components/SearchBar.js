import React from 'react';

export default class SearchBar extends React.Component {
  handleChange( e){
    console.log( "search bar handleChange props:", this.props);
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    )
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange.bind(this)}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange.bind(this)}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
