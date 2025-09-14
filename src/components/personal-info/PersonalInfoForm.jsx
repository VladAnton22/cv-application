import InputDiv from "../InputDiv.jsx";

export default function PersonalInfoForm({
    onChange,
    email,
    fullName,
    phoneNumber,
    address,
}) {
    return (
        <form>
            <h2>Personal Info</h2>
            <InputDiv
                type="text"
                id="full-name"
                labelText="Full Name"
                placeholder="First and last name"
                value={fullName}
                onChange={onChange}
                data-key="fullName"
            />
            <InputDiv
                type="email"
                id="email"
                labelText="Email"
                placeholder="Enter email"
                value={email}
                onChange={onChange}
                data-key="email"
            />
            <InputDiv
                type="tel"
                id="phone-number"
                labelText="Phone Number"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={onChange}
                data-key="phoneNumber"
            />
            <InputDiv
                type="text"
                id="address"
                labelText="Address"
                placeholder="City, Country"
                value={address}
                onChange={onChange}
                data-key="address"
            />
        </form>
    );
}
