import EmailLayout from "@/components/email/EmailLayout";
import EmailPageLayout from "../page";
import carEmails from "@/data/carEmails";

const CarEmailList = () => {
  return (
    <EmailPageLayout>
      <EmailLayout serviceEmails={carEmails} />
    </EmailPageLayout>
  );
};

export default CarEmailList;
