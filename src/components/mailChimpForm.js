import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const mailchimpUrl = process.env.REACT_APP_MAILCHIMP_URL;
  

  const postUrl = `${mailchimpUrl}`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => {
        if (status === 'error' && message instanceof Error) {
          console.error('Mailchimp Subscribe Error:', message.message);
        }

        return (
          <Newsletter
            status={status}
            message={typeof message === 'object' && message !== null ? message.message : message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
};
