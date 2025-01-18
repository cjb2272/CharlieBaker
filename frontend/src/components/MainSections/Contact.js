const Contact = ({sectionRefs}) => {
    return (
      // <section id="sectionContact" ref={(el) => (sectionRefs.current[0] = el)} className="flex flex-col items-center justify-center ">
      <section id="sectionContact" className="flex flex-col items-center justify-center ">
        <h1 className="text-4xl font-bold text-light">Say Hello</h1>
        <p className="p-tag-default">cell: (1) 508-259-1167</p>
        <p className="p-tag-default">personal: charlie.baker777@yahoo.com</p>
        <p className="p-tag-default">home: Boston, MA</p>
        {/*
        <p className="p-tag-default">life: I'm currently living in Brighton, MA. Find me out 
          at ______, ______, or _________</p> 
        */}
        {/* in  my room listening to vinyl ... */}

      </section>
    );
  };
  
  export default Contact;