import { useEffect, useState } from "react";

const useUSContacts = () => {
  const [usContacts, setUsContacts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsContacts = async () => {
      try {
        const response = await fetch(
          "https://contact.mediusware.com/api/country-contacts/united%20states/"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUsContacts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsContacts();
  }, []); // Empty dependency array ensures this effect runs only once

  return { usContacts, loading, error };
};

export default useUSContacts;
