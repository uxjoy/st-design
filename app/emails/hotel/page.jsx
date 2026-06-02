import EmailLayout from "@/components/email/EmailLayout";
import hotelEmails from "@/data/hotelEmails";
import EmailPageLayout from "../page";

const HotelEmailList = () => {
  return (
    <EmailPageLayout>
      <EmailLayout serviceEmails={hotelEmails} />
    </EmailPageLayout>
  );
};

export default HotelEmailList;
