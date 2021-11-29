import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";
import { Input, MessageInput, Button } from "./ContactFormStyles";

const ContactForm = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Get In Touch...</SectionTitle>
    <br />
    <SectionText>
      Should you need to get hold of me, simply drop me an email or feel free to
      use any of the social media platforms below and I will get back to you as
      soon as possible.
    </SectionText>
    <div>
      <form action="https://formsubmit.co/riazkarolia@gmail.com" method="POST">
        <Input type="text" name="name" placeholder="Name" required />
        <Input type="email" name="email" placeholder="Email Address" required />
        <MessageInput
          type="text"
          name="message"
          placeholder="Message"
          required
        />
        <input
          type="hidden"
          name="_next"
          value="http://riazkarolia.co.za/thankyou"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  </Section>
);

export default ContactForm;
