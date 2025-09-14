import PersonalInfoSection from "./personal-info/PersonalInfoSection";

export default function Resume({personalInfo}) {
    return (
        <div>
            <div>
                <PersonalInfoSection
                    fullName={personalInfo.fullName}
                    email={personalInfo.email}
                    phoneNumber={personalInfo.phoneNumber}
                    address={personalInfo.address}
                />
            </div>
        </div>
    )
}