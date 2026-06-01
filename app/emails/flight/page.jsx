import EmailLayout from "@/components/EmailLayout";
import flightEmailData from "../../../data/flightEmails";
import EmailPageLayout from "../page";

const FlightEmailList = () => {
  return (
    <EmailPageLayout>
      <EmailLayout serviceEmails={flightEmailData} />
    </EmailPageLayout>
  );
};

export default FlightEmailList;

{
  /* <aside className="sticky top-0 min-w-55 max-w-55 h-full border-r border-slate-200 overflow-y-auto p-3">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name/subject..."
            className="bg-slate-50 border border-slate-200 h-11 px-3 rounded-lg w-full mb-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />

          {filteredEmailData.length > 0 ? (
            filteredEmailData.map((item, index) => (
              <Link
                key={index}
                href={`#${item.section.toLowerCase().replace(/\s+/g, "-")}`}
                className="block rounded-md px-2 py-2 text-sm hover:bg-slate-100 capitalize transition-all ease-in-out duration-200 hover:pl-3"
              >
                {item.section}
              </Link>
            ))
          ) : (
            <p className="text-sm text-slate-500">
              No emails match your search.
            </p>
          )}
        </aside> */
}
