import { useSelector } from "react-redux";
import { selectError } from "../../redux/contacts/contactsSlice";

export default function Error() {
  const errorMessage = useSelector(selectError);
  return (
    <div>
      <p>Error: {errorMessage}</p>
    </div>
  );
}
