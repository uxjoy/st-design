import EmailLayout from "@/components/email/EmailLayout";
import emailsData from "@/data/emailsData";
import { notFound } from "next/navigation";

// Generate static paths for all slugs
export function generateStaticParams() {
  return Object.keys(emailsData).map((slug) => ({ slug }));
}

// Dynamic route: /emails/flight, /emails/hotel, /emails/car, etc.
const SlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = emailsData[slug as keyof typeof emailsData];

  if (!data) {
    notFound();
  }

  return <EmailLayout serviceEmails={data} />;
};

export default SlugPage;
