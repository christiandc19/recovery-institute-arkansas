const navigation = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about-us" },
  { title: "Treatment", path: "/treatment" },
  {
    title: "Programs",
    path: "/programs",
    children: [
      { title: "Intensive Outpatient Program", path: "/iop-substance-abuse" },
      { title: "Group Therapy", path: "/programs/group-therapy" },
      { title: "Family Support", path: "/programs/family-support" },
      { title: "Relapse Prevention", path: "/programs/relapse-prevention" },
    ],
  },
  {
    title: "Addiction",
    path: "/addiction",
    children: [
      { title: "Alcohol Addiction", path: "/addiction/alcohol-addiction" },
      { title: "Cocaine Addiction", path: "/addiction/cocaine-addiction" },
      { title: "Fentanyl Addiction", path: "/addiction/fentanyl-addiction" },
      { title: "Heroin Addiction", path: "/addiction/heroin-addiction" },
      { title: "Opioid Addiction", path: "/addiction/opioid-addiction" },
      { title: "Meth Addiction", path: "/addiction/meth-addiction" },
      {
        title: "Prescription Drug Addiction",
        path: "/addiction/prescription-drug-addiction",
      },
      { title: "Marijuana Addiction", path: "/addiction/marijuana-addiction" },
      { title: "Xanax Addiction", path: "/addiction/xanax-addiction" },
    ],
  },
  { title: "Contact Us", path: "/contact-us" },
];

export default navigation;