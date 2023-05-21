import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const ErrorPage = () => {
    const { error, status } = useRouteError()
    useTitle('Error Page');
    return (
        <div>
                
            <div className='flex mt-5'>
                
                <img src="error.png" className="w-1/2" alt="" />

                <div className='w-1/2 p-10'>
                    <h2 className=''>
                        <span className=''>Error</span> {status || 404}
                    </h2>
                    <p className=''>
                        {error?.message}
                    </p>
                </div>
            </div>
            <div className="mt-10 text-center text-red-400">
            <Link to='/' >Back to Home</Link>
            </div>
            
        
            
        </div>
    );
};

export default ErrorPage;