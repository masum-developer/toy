import { useLoaderData } from "react-router-dom";

const AllToy = () => {

    const data =  useLoaderData();
    return (
        <div>
            <h2>All Toy: {data.length}</h2>
        </div>
    );
};

export default AllToy;