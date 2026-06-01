import EmailLayout from "@/components/EmailLayout";
import genericEmails from "@/data/genericEmails";
import EmailPageLayout from "../page";

const GenericEmailList = () => {
  return (
    <EmailPageLayout>
      <EmailLayout serviceEmails={genericEmails} />
    </EmailPageLayout>
  );
};

export default GenericEmailList;
