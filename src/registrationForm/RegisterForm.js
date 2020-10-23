import React from 'react';
import './style.css';


class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["firstname"] = "";
          fields["lastname"] = "";
          fields["birthday"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          fields["repeatpassword"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["firstname"]) {
        formIsValid = false;
        errors["firstname"] = "*Please enter your firstname.";
      }

      if (typeof fields["firstname"] !== "undefined") {
        if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["firstname"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["lastname"]) {
        formIsValid = false;
        errors["lastname"] = "*Please enter your lastname.";
      }

      if (typeof fields["lastname"] !== "undefined") {
        if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["lastname"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["birthday"]) {
        formIsValid = false;
        errors["birthday"] = "*Please enter your birthday.";
      }

      if (typeof fields["birthday"] !== "undefined") {

        if (!fields["birthday"].match(/[1-9]\d{3}/)) {
          formIsValid = false;
          errors["birthday"] = "*Please enter  max(4)number  only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }
 // un majuscule au mons 8 lettre au moins deux caracteres au moins
      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }
      if (!fields["repeatpassword"]) {
        formIsValid = false;
        errors["repeatpassword"] = "*Please enter your repeatpassword.";
      }

      if (typeof fields["repeatpassword"] !== "undefined") {
          console.log("totoot", fields["repeatpassword"])
        if (fields["repeatpassword"] !==fields["password"]) {
          formIsValid = false;
          errors["repeatpassword"] = "*Please enter same passd word.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Registration page</h3>

        <img
          src="sambabhouria.jpeg"
          alt="profile-img"
          className="profile-img-card"
        />
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>FirstName</label>
        <input type="text" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.firstname}</div>
        <label>LastName</label>
        <input type="text" name="lastname" value={this.state.fields.lastname} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.lastname}</div>
        <label>Birthday</label>
        <input type="text" name="birthday" value={this.state.fields.birthday} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.birthday}</div>
        <label>Email:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Mobile Phone:</label>
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <label>Repeat Password</label>
        <input type="password" name="repeatpassword" value={this.state.fields.repeatpassword} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.repeatpassword}</div>
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>

      );
  }


}


export default RegisterForm;
