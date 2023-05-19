import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [toy, setToy] = useState([])
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/my-toy/${user?.email}`)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [user])

    const handleSearch = () => {
        fetch(`http://localhost:5000/toy-name/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToy(data);
          });
      };
    return (
        <div>
            <h2>My toy</h2>
            <div>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className=""
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default MyToy;