import EmailLayout from "@/components/email/EmailLayout";
import loungeEmails from "@/data/loungeEmails";
import EmailPageLayout from "../page";

const LoungeEmailList = () => {
  return (
    <EmailPageLayout>
      <EmailLayout serviceEmails={loungeEmails} />
    </EmailPageLayout>
  );
};

export default LoungeEmailList;
