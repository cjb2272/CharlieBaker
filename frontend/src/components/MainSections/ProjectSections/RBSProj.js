const RBSProj = () => {
  return (
    <>
      <h1 className="text-2xl font-bold pb-2">Reporting Tool</h1>
      <p className="written-content-centering-width "> Under my Software Development Co-Op with Retail Business
        Services (Ahold Delhaize) I worked on the Merchandising Solutions team. This team provides software aiming to support the
        technical details of how ADUSA merchandises products across their east coast grocery retail brands.
      </p>
      <div className="py-4">
        <iframe className="reporting-tool-iframe" src="https://1drv.ms/p/c/287aef5d7048c2e1/IQSqZ3rzpgV7R4skFUpfs2Z5AakKP0O1FqCpfjpCl67DgFk?em=2&amp;wdAr=1.7770833333333333&wdSlideIndex=5" width="2380px" height="1440px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
      </div>
      <p className="written-content-centering-width mb-2">Revamping the Reporting Tool application was a primary project of mine
        during my time with the Merchandising Solutions team. The two main avenues through which I worked on the Reporting Tool are as follows.</p>
      <ol className="list-decimal written-content-centering-width mb-2 pl-10">
        <li className>Building out a new Dynamic Reporting methodology.</li>
        <li className>Working through the UAT Rollout of the Reporting Tool for Hannaford & Food Lion.</li>
      </ol>
      <p className="written-content-centering-width mb-2">With the old methodology, each report and any new ones would require numerous
        steps to be taken- all before becoming available to our users:</p>
      <ul className="list-disc written-content-centering-width mb-2 pl-10">
        <li className>First, entirely coding the front and back end of a new Form</li>
        <li className>The SQL work to pull the specific data</li>
        <li className>Thorough testing phases</li>
      </ul>
      <p className="written-content-centering-width">Each new report needed, took up valuable time and effort. With the Dynamic
        Reporting solution I implemented, the team gained the ability to instantaneously provide a specific data representation
        in the form of a Report, by only having to make a new SQL Stored Procedure in our Database. No Code Needed.</p>
    </>
  );
};

export default RBSProj;