import SITE from "../constants/site";

const baseUrl = SITE.domain || "https://therecoveryinstituteofarkansas.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],

  name: SITE.name,
  url: baseUrl,
  logo: `${baseUrl}${SITE.logo || "/images/trioa.png"}`,
  image: `${baseUrl}${SITE.logo || "/images/trioa.png"}`,

  description:
    "Outpatient substance abuse treatment, intensive outpatient programs, addiction recovery support, and relapse prevention services.",

  telephone: SITE.phone,
  email: SITE.email,

  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    postalCode: SITE.zip,
    addressCountry: "US",
  },

  areaServed: {
    "@type": "State",
    name: SITE.stateFull || "Arkansas",
  },

  medicalSpecialty: [
    "Substance Abuse Treatment",
    "Addiction Recovery",
    "Outpatient Treatment",
  ],

  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Intensive Outpatient Program",
      description:
        "Structured outpatient substance abuse treatment designed to support recovery while maintaining daily responsibilities.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Group Therapy",
      description:
        "Supportive group therapy for individuals working toward recovery.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Relapse Prevention",
      description:
        "Recovery education and planning to help individuals maintain long-term sobriety.",
    },
    {
      "@type": "MedicalTherapy",
      name: "Family Support",
      description:
        "Support and education for families affected by substance use.",
    },
  ],
};

export default organizationSchema;