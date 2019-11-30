import React from 'react';
import useForm from './hooks/useForm';
import '../../style/email/sendemail.css';
import emailjs from 'emailjs-com';

// import Message from './controls/Message';
import Name from './controls/Name';
import Email from './controls/Email';
import Textarea from './controls/Textarea';
import Button from './controls/Button';

export default function SendEmail() {
  const inputs = {
    name: React.createRef(),
    email: React.createRef(),
    textarea: React.createRef()
  };

  function sendEmail(e) {
    e.preventDefault();
    // const mess = document.querySelector('#user_name');

    const params = {
      contact_number: '123456789',
      name: 'Broli',
      email: 'dmanzi83@gmail.com',
      message: 'ciao 123'
    };
    // const params = {
    //   contact_number: document.querySelector('#contact_number').value,
    //   name: document.querySelector('#name').value,
    //   email: document.querySelector('#email').value,
    //   message: document.querySelector('#message').value
    // };

    console.log(params);

    emailjs
      .sendForm('gmail', 'contact_form', params, 'user_ZTRzrBGGGCRNnCppm5qjh')
      .then(
        result => {
          console.log('SUCCESS!', result.status, result.text);
        },
        error => {
          console.log('FAILED...', error);
        }
      );
  }

  const { onInputChange, values, errors, isDisabledButton } = useForm(inputs);

  return (
    <div className="sendemail">
      <form className="form" onSubmit={sendEmail} noValidate autoComplete="off">
        <input
          type="hidden"
          name="contact_number"
          id="contact_number"
          value={(Math.random() * 100000) | 0}
        />
        <Name
          name={values.name}
          error={errors.name}
          onInputChange={onInputChange}
          ref={inputs.name}
        />
        <Email
          email={values.email}
          error={errors.email}
          onInputChange={onInputChange}
          ref={inputs.email}
        />
        <Textarea
          message={values.message}
          error={errors.message}
          onInputChange={onInputChange}
          ref={inputs.textarea}
        />
        <Button isDisabledButton={isDisabledButton}>INVIA</Button>
      </form>
    </div>
  );
}
