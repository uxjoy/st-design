import EmailCard from "@/components/EmailCard";
import Empty from "@/components/Empty";
import MainLayout from "@/components/MainLayout";
import flightEmailData from "../../../data/flightEmails";
import EmailPageLayout from "../page";

const FlightEmailList = () => {
  return (
    <EmailPageLayout>
      <div className="max-w-3xl mx-auto pt-8 pb-12">
        {flightEmailData.length > 0 ? (
          flightEmailData?.map((email, i) => {
            return (
              <div key={email.section} className="mb-10">
                <h2 className="text-lg font-bold uppercase flex items-center gap-2">
                  {i + 1}. {email.section} Emails
                  <span className="text-base font-normal text-slate-500">
                    {email.frames.length > 0 && `(${email.frames.length})`}
                  </span>
                </h2>

                <div className="flex flex-col">
                  {email.frames.map((frame) => {
                    return (
                      <EmailCard
                        key={frame.name}
                        name={frame.name}
                        link={frame.link}
                        section={email.section}
                        subject={frame.subject}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <Empty />
        )}
      </div>
    </EmailPageLayout>
  );
};

export default FlightEmailList;
