import Empty from "../../../components/Empty";
import EmailPageLayout from "../page";
import MainLayout from "../../../components/MainLayout";
import EmailLayout from "@/components/EmailLayout";

const LifeStyleEmailList = () => {
  return (
    <EmailPageLayout>
      <EmailLayout serviceEmails={[]} />
    </EmailPageLayout>
  );
};

export default LifeStyleEmailList;
