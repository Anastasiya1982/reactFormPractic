import React from "react";
import countries from "../data/countries";


// for validation
//must be more then 5 characters
//Required
//must be equal password

export default class App extends React.Component {
  constructor() {
    super();
    this.state={
      username:'',
      password:'',
      repeatPassword:'',
      country:'1',
      gender:'mail',
      agree:true,
      avatar:'',
      errors:{}
    };
  }
  onChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value,
    });
  };

  onChangeAgree=(event)=>{
    this.setState({
      [event.target.name]:event.target.checked,
      //либо можно написать так, обратить внимание что True при возврате получается строка  строка
      //[event.target.name]:event.target.value=="true"?false:true
    })
  };

  onChangeAvatar = (event) => {
    const reader = new FileReader();
    reader.onload = event => {
      this.setState({
        avatar:event.target.result
      });
    };
    // console.log(event.target.files[0]);
    reader.readAsDataURL(event.target.files[0]);
  };

  onSubmit=(event)=> {
    event.preventDefault();
    // console.log(this.username.value,this.password.value);
    const errors={}
    if (this.state.username.length < 5) {
     errors.username="Must be more then 5 characters";
      }
     if(this.state.password.length<3){
      errors.password="Required more than 3 simbols";
    }
    if(this.state.password !==this.state.repeatPassword){
      errors.repeatPassword="Must be equal password";
    }
    if(Object.keys(errors).length>0){
      //error
      this.setState({
        errors:errors
      });
    } else{
      this.setState({
        errors:{}
      });
      console.log(this.state);
    }
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
                ref={node => this.username = node}
                value={this.state.username}
                name='username'
                onChange={this.onChange}
            />
            {this.state.errors.username ? (
                <div className="invalid-feedback">
                  {this.state.errors.username}
                </div>)
                : null}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              ref={node=>this.password=node}
              value={this.state.password}
              name='password'
              placeholder="Enter password"
              onChange={this.onChange}
            />
            {this.state.errors.password ? (
                    <div className="invalid-feedback">
                      {this.state.errors.password}
                    </div>)
                : null}
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
            {this.state.errors.repeatPassword ? (
                    <div className="invalid-feedback">
                      {this.state.errors.repeatPassword}
                    </div>)
                : null}
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
          <fieldset className='form-group'>
            <div>Gender</div>
            <div className="form-check">
              <input className="form-check-input"
                     type="radio"  id="male"
                     name="gender"
                     value="male"
                     checked={this.state.gender==="male"}
              onChange={this.onChange}/>
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
            </div>
            <div className="form-check">
              <input className="form-check-input"
                     type="radio" id="female"
                     name="gender"
                     value="female"
                     checked={this.state.gender==="female"}
                     onChange={this.onChange}/>
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
            </div>
          </fieldset>
          <div className="form-group">
            <label htmlFor="avatar">Avatar</label>
            <input
                type="file"
                className="form-control-file"
                id="avatar"
                name='avatar'
                onChange={this.onChangeAvatar}
            />
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input"
                   type="checkbox"
                   id="agree"
                   name="agree"
                   value={this.state.agree===true}
                   onChange={this.onChangeAgree}
                   checked={this.state.agree}
            />
              <label className="form-check-label" htmlFor="agree">
               Confirm </label>
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
