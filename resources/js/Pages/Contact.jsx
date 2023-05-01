import React from 'react';
import Layout from './master/Layout';
import ContactComponent from './Frontend/Contact/ContactComponent';

const Contact = () => {
    return (
        <>
          <ContactComponent/>  
        </>
    );
}
Contact.layout=(page) => <Layout title="Contact Us" children={page}/>;
export default Contact;
