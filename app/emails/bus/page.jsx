import EmailLayout from "@/components/email/EmailLayout";
import EmailPageLayout from "../page";
import profileEmails from "@/data/profileEmail";
import busEmails from "@/data/busEmails";

const BusEmailList = () => {
  return (
    <EmailPageLayout>
      <EmailLayout serviceEmails={busEmails} />
    </EmailPageLayout>
  );
};

export default BusEmailList;
