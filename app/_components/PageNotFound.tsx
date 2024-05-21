
import Navbar from "./Header/Navbar";

const PageNotFound:React.FC =()=> {
  return (
    <>
    <Navbar top={0}/>
    <section className="margin-global mb-10 md:mb-16 lg:mb-20 xl:mb-24 min-h-[calc(100vh-380px)] lg:min-h-[calc(100vh-475px)] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-xl text-black-100/40">Page Not Found</p>
      </div>
    </section>
    </>
  );
};

export default PageNotFound;
