const PageHeader = ({ label, title, description }) => {
  return (
    <div className="page-header w-full border-b bg-slate-50 border-slate-100">
      <div className="main-container space-y-2 py-10">
        <p className="text-sm uppercase tracking-[0.25em] text-blue-500 pl-0.5">
          {label}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 mt-2">
          {title}
        </h1>
        <p className="max-w-2xl text-slate-600">{description}</p>
      </div>

      {/* <div className="h-8 w-full slash-pattern border-t border-x-0 border-slate-100"></div> */}
    </div>
  );
};

export default PageHeader;
