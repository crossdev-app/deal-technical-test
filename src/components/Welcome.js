import React from "react";

const Welcome = () => {
  return (
    <div className='card p-4 welcome-section'>
      <h2 className='mb-3'>Hello! &#128075;</h2>
      <p>
        This website was created to fulfill the requirements of the technical
        test in the recruitment process by{" "}
        <a
          href='https://usedeall.com/'
          target='_blank'
          rel='noreferrer'
          className='text-primary'>
          Deall
        </a>{" "}
        as a <span className='fw-bold'>Senior FrontEnd Engineer</span>. You can
        see the source code that I uploaded to Github{" "}
        <a
          href='https://github.com/crossdev-app/deall-technical-test'
          target='_blank'
          rel='noreferrer'
          className='text-primary'>
          here
        </a>
        .
      </p>
      <div style={{ marginTop: "80px" }}>
        <p className='text-center'>Regards,</p>
        <p className='text-center'>Malik Abdul Aziz</p>
      </div>
    </div>
  );
};

export default Welcome;
