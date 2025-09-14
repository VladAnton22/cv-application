import uniqid from "uniqid";

const sampleData = {
  personalInfo: {
    fullName: "Vlad Anton",
    email: "vladanton@gmail.com",
    phoneNumber: "+353 86 987 6543",
    address: "Cork City, Ireland",
  },

  sections: {
    educations: [
      {
        degree: "Computer Science",
        schoolName: "University College Cork",
        location: "Cork City, Ireland",
        startDate: "09/2021",
        endDate: "09/2025",
        isCollapsed: true,
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "Tech Solutions Ltd.",
        positionTitle: "Software Developer Intern",
        location: "Dublin, Ireland",
        description:
          "Assisted in building internal tools using JavaScript and Python. Collaborated with the QA team to fix bugs and improve application performance.",
        startDate: "06/2023",
        endDate: "09/2023",
        isCollapsed: true,
        id: uniqid(),
      },
      {
        companyName: "University College Cork",
        positionTitle: "Part-Time IT Support",
        location: "Cork City, Ireland",
        description:
          "Provided technical support for students and faculty, resolved hardware/software issues, and maintained computer labs.",
        startDate: "09/2022",
        endDate: "05/2023",
        isCollapsed: true,
        id: uniqid(),
      },
    ],
  },
};

export default sampleData