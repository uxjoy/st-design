import EmailLayout from "@/components/email/EmailLayout";
import EmailPageLayout from "../page";
import visaEmails from "@/data/visaEmails";

const VisaEmailList = () => {
  return (
    <EmailPageLayout>
      <EmailLayout serviceEmails={visaEmails} />
    </EmailPageLayout>
  );
};

export default VisaEmailList;
