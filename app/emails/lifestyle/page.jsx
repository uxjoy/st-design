import EmailLayout from "@/components/email/EmailLayout";
import EmailPageLayout from "../page";
import lifestyle from "@/data/lifestyleEmails";

const LifeStyleEmailList = () => {
  return (
    <EmailPageLayout>
      <EmailLayout serviceEmails={lifestyle} />
    </EmailPageLayout>
  );
};

export default LifeStyleEmailList;
