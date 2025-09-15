export default function PersonalInfoSection({ email, fullName, phoneNumber, address }) {
  return (
    <div className="text-center p-3 border-2 rounded-md border-gray-300">
      <div className="border-b-2 border-gray-600 pb-2">
        <h1 className="text-2xl font-semibold">{fullName}</h1>
      </div>
      <div className="flex justify-center gap-6 mt-3 text-gray-700 text-sm">
        {email && <span>{email}</span>}
        {phoneNumber && <span>{phoneNumber}</span>}
        {address && <span>{address}</span>}
      </div>
    </div>
  );
}


