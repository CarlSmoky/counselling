
const PageNotFound: React.FC = () => {
  return (
    <section className="margin-global relative mb-10 min-h-[calc(100vh-380px)] md:mb-16 lg:mb-20 lg:min-h-[calc(100vh-475px)] xl:mb-24">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-xl text-black-100/40">Page Not Found</p>
      </div>
    </section>
  );
};

export default PageNotFound;
