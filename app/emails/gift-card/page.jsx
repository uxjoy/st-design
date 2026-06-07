import EmailLayout from "@/components/email/EmailLayout";
import giftCardEmails from "@/data/giftCardEmails";
import EmailPageLayout from "../page";

const GiftCardEmailList = () => {
  return (
    <EmailPageLayout>
      <EmailLayout serviceEmails={giftCardEmails} />
    </EmailPageLayout>
  );
};

export default GiftCardEmailList;
