export default function PersonalInfoSection({email, fullName, phoneNumber, address}) {
    return (
        <div>
            <h1>{fullName}</h1>
            <div>
                {email && (
                    <span>{email}</span>
                )}
                {phoneNumber && (
                    <span>{phoneNumber}</span>
                )}
                {address && (
                    <span>{address}</span>
                )}
            </div>
        </div>
    );
}