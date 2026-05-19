import EmailCard from "@/components/EmailCard";
import MainLayout from "@/components/MainLayout";
import flightEmail from "@/data/flightEmails";

export default function EmailsPage() {
  return (
    <MainLayout>
      <section className="flex w-full h-full">
        <div className="w-[220px] h-full border-r border-slate-200"></div>

        <div className="w-full h-full p-5">
          <div className="max-w-4xl mx-auto">
            {flightEmail.length > 0 ? (
              flightEmail?.map((email) => {
                return (
                  <div key={email.section} className="mb-10">
                    <h2 className="text-xl font-bold">{email.section}</h2>

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
        </div>
      </section>
    </MainLayout>
  );
}
