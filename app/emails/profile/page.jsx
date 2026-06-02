import EmailLayout from "@/components/email/EmailLayout";
import EmailPageLayout from "../page";

const ProfileEmailList = () => {
  return (
    <EmailPageLayout>
      <EmailLayout serviceEmails={[]} />
    </EmailPageLayout>
  );
};

export default ProfileEmailList;
