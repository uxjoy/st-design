import EmailLayout from "@/components/email/EmailLayout";
import holidayEmails from "@/data/holidayEmails";
import EmailPageLayout from "../page";

const HolidayEmailList = () => {
  return (
    <EmailPageLayout>
      <EmailLayout serviceEmails={holidayEmails} />
    </EmailPageLayout>
  );
};

export default HolidayEmailList;
