import EmailLayout from "@/components/email/EmailLayout";
import esimEmails from "@/data/esimEmails";
import EmailPageLayout from "../page";

const ESimEmailList = () => {
  return (
    <EmailPageLayout>
      <EmailLayout serviceEmails={esimEmails} />
    </EmailPageLayout>
  );
};

export default ESimEmailList;
