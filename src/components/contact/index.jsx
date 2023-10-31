//tempelate id -- template_v4gkapt
//service id -- service_3z6iteu
//public key-- 8J33kby1cJy-CRHUv

import React from "react";

import Section from "../shared/section";
import ContactInfo from "./contact-info";
import Form from "./form";

import "./style.scss";

const Contact = () => {
    return (
        <Section
            id="contact"
            title="Any Question? Feel Free to Contact"
            background="light"
        >
            <div className="contact-content-wrapper">
                <ContactInfo />
                <Form />
            </div>
        </Section>
    );
};

export default Contact;