import React from "react";
import countries from "../data/countries";

export default class App extends React.Component {


  constructor() {
    super();
    this.state={
      username:'',
      password:'',
      repeatPassword:'',
      country:'1',
    }
  }
  onChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value,
    });
  };


  onSubmit=(event)=>{
    event.preventDefault();
    console.log(this.username.value,this.password.value);
    console.log(this.state)
  };

  getOptionsItems=(items)=>{
    return items.map(item => (
        <option key={item.id}
                value={item.id}>
          {item.name}
        </option>
    ))
  }

  render() {

    // const getOptionsCountries=countries.map(country => (
    //       <option key={country.id}
    //               value={country.id}>
    //         {country.name}
    //       </option>
    //   ))
    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              ref={node=>this.username=node}
              value={this.state.username}
              name='username'
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              ref={node=>this.password=node}
              value={this.state.password}
              name='password'
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Repeat password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter repeat password"
              ref={node=>this.repeatPassword=node}
              value={this.state.repeatPassword}
              name='repeatPassword'
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select className="form-control"
                    id="country"
                    value={this.state.country}
                    name="country"
                    onChange={this.onChange}
            >
               {this.getOptionsItems(countries)}
             </select>
          </div>
          <button type="submit" className="btn btn-primary w-100"
          onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
