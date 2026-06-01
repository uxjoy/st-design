import PageHeader from "@/components/PageHeader";
import DesignSystemLayout from "../page";
import tokenization from "./tokenization";

const capitalize = (value) =>
  value.replace(
    /(^|-)([a-z])/g,
    (_, prefix, char) => `${prefix}${char.toUpperCase()}`,
  );

const Tokenization = () => {
  const groups = Object.entries(tokenization.groups);

  return (
    <DesignSystemLayout>
      <div className="md:side-pattern">
        <PageHeader
          label={"Design tokens"}
          title={"Font system"}
          description={
            "A searchable reference for the design system token groups used by ShareTrip. Each token includes the name, resolved color value, and token reference path."
          }
        />

        <div className="main-container py-12">
          {/* <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">
                  Collection
                </p>
                <p className="mt-2 text-xl font-semibold text-slate-900">
                  {tokenization.collection}
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">Mode</p>
                <p className="mt-2 text-xl font-semibold text-slate-900 capitalize">
                  {tokenization.mode}
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">
                  Total variables
                </p>
                <p className="mt-2 text-xl font-semibold text-slate-900">
                  {tokenization.totalvariables}
                </p>
              </div>
            </div> */}

          <div className="space-y-10">
            {groups.map(([groupName, tokens]) => (
              <section key={groupName} className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">
                      {capitalize(groupName)}
                    </h2>
                    <p className="text-sm text-slate-500">
                      {tokens.length} tokens in this group.
                    </p>
                  </div>
                </div>

                <table>
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th className="hidden md:table-cell">Value</th>
                      <th>Reference</th>
                    </tr>
                  </thead>

                  <tbody>
                    {tokens.map((token) => (
                      <tr key={token.name}>
                        <td className="text-base w-2/4">
                          <p>{token.name.replaceAll("/", "-")}</p>
                        </td>

                        <td className="w-1/4 hidden md:table-cell">
                          <p className="w-fit inline-flex items-center gap-2 font-mono text-sm uppercase">
                            <span
                              className="min-w-2 min-h-2 rounded-full inline-block border border-black/10"
                              style={{ backgroundColor: token.hex }}
                            ></span>
                            <span>{token.hex}</span>
                          </p>
                        </td>

                        <td className="w-1/4">
                          <p className="w-fit inline-flex items-center text-sm text-slate-700 gap-1.5 md:gap-2 font-mono border border-slate-200 rounded px-2 py-1 bg-slate-50">
                            <span
                              className="min-w-4 min-h-4 rounded inline-block border border-black/10"
                              style={{ backgroundColor: token.hex }}
                            ></span>
                            <span>{token.ref}</span>
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            ))}
          </div>
        </div>
      </div>
    </DesignSystemLayout>
  );
};

export default Tokenization;
