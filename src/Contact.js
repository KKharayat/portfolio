import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My mobile no is ${data.phone}`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact</h1>
      </div>
      <div className="container container-div my-4">
        <div className="row">
          <dib className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">FullName</label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder=" Enter your name"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder=" Enter your number"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder=" Enter your Email address"
                />
              </div>
              <div className="mb-3">
                <label for="exampleformControlTextarea" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <div className="col-12">
                  <button type="submit" className="btn btn-outline-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </dib>
        </div>
      </div>
    </>
  );
};

export default Contact;

/* <div className="container-fuild nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
                
               <button type="submit" className="btn btn-primary">
                  Submit
                </button>
            </div>
        </div>
    </div> */
