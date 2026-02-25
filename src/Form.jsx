import React from "react";

const Form = () => {
    const submitHandler=(e)=>{
      e.preventDefault();
    }
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Register Here!</h1>
      </div>
      <Form onSubmit={submitHandler}>
        <input type="text" placeholder="enter your name:" />
        <input type="email" placeholder="enter your email" />
        <input type="number" placeholder="enter your Phone:" />
        <input type="text" placeholder="enter your password:" />
        <input type="text" placeholder="enter your confirm password"/>
        <button >
          Submit
        </button>

      </Form>
    </>
  );
};

export default Form;
