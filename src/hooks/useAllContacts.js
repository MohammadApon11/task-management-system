import { useEffect, useState } from "react";

const useAllContacts = () => {
  const [allContacts, setAllContacts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllContacts = async () => {
      try {
        const response = await fetch(
          "https://contact.mediusware.com/api/contacts/"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAllContacts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllContacts();
  }, []); // Empty dependency array ensures this effect runs only once

  return { allContacts, loading, error };
};

export default useAllContacts;
