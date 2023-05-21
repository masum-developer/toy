import useTitle from "../../hooks/useTitle";


const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            <h2 className="text-5xl text-center mb-10">Blog</h2>
            <div className='mb-5'>
                <h4 className="text-2xl mb-3">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                <p>
                    Access Token:
                    An access token is a credential that represents the authorization granted to a client such as a user or an application to access specific resources. It is typically a JSON Web Token  that contains information about the clients identity and permissions. Access tokens are usually short-lived and have an expiration time. They are used to authenticate and authorize requests to access protected resources on the server.
                </p>
                <p>
                    Refresh Token:
                    A refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. Unlike access tokens, refresh tokens are not meant to be sent with every request to the server. Instead, they are securely stored on the client-side and sent to the server only when requesting a new access token. Refresh tokens help mitigate security risks by reducing the exposure of access tokens since they have longer lifetimes.
                </p>


            </div>
            <div className='mb-5'>
                <h4 className="text-2xl mb-3">Compare SQL and NoSQL databases?</h4>
                
                <p>
                    SQL databases use Structured Query Language to interact with data. SQL provides a standardized and powerful querying language for manipulating and retrieving data using operations like SELECT, INSERT, UPDATE, and DELETE. Joins can be used to combine data from multiple tables.
                </p>
                <p>
                    NoSQL databases may use different query languages or APIs depending on the data model. For example, key-value stores often offer simple get and set operations, document stores use JSON-like queries.
                </p>
                <p>SQL databases generally scale vertically, meaning they are designed to handle increased workload by adding more resources to a single server, such as CPU, RAM, or storage.</p>
                <p>
                    NoSQL databases are often designed to scale horizontally. They distribute data across multiple servers, allowing for easy scalability by adding more nodes to the cluster. This makes them suitable for handling large amounts of data and high traffic loads.
                </p>
                <p>
                    SQL databases have a fixed schema, meaning the structure of the data must be defined upfront.
                </p>
                <p>
                    NoSQL databases offer schema flexibility. They can handle unstructured or semi-structured data, allowing for easy modifications to the data model without requiring a predefined schema.
                </p>

            </div>
            <div className='mb-5'>
                <h4 className="text-2xl mb-3">What is express js? What is Nest JS ? </h4>
                <p>
                    Express.js is a popular and lightweight web application framework for Node.js. Express.js is known for its simplicity, flexibility and allowing developers to quickly create server-side applications.

                    Express.js provides an easy and flexible routing mechanism that allows developers to define routes for handling incoming HTTP requests. It supports various HTTP methods like GET, POST, PUT, DELETE, etc.

                    Middleware functions in Express.js are the building blocks of handling requests and responses. They can be used to perform tasks such as authentication, logging, error handling, parsing request bodies and more. Middleware functions are executed sequentially and they can modify the request or response objects before passing them to the next middleware or route handler.

                    Express.js enables serving static files, such as HTML, CSS, JavaScript, and images through its built-in middleware. This feature simplifies the delivery of static assets to the client.

                    Express.js provides mechanisms for handling errors and exceptions. Developers can define error-handling middleware to catch and process errors that occur during request processing.

                    Express.js is widely used for creating various types of web applications, including APIs, web services, single-page applications and server-rendered applications. Its simplicity and flexibility make it a popular choice for both small-scale projects and large-scale enterprise applications.

                </p>
                <p>

                    Nest.js is a progressive  Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built on top of Express.js.

                    Nest.js promotes a modular architecture, allowing developers to organize their code into reusable modules that encapsulate related functionality.

                    Nest.js utilizes decorators and metadata to define and configure various application components such as controllers, providers, middleware, and routes. This approach simplifies the code structure and provides a declarative way of defining the applications behavior.

                    Nest.js provides a similar routing mechanism to Express.js, allowing developers to define routes using decorators on controller classes. These routes can handle incoming HTTP requests and map them to specific controller methods for processing. 
                </p>
            </div>
            <div className='mb-5'>
                <h4 className="text-2xl mb-3">What is MongoDB aggregate and how does it work?</h4>
                <p>

                    In MongoDB, the aggregate operation is a powerful and flexible way to process and analyze data within a collection. It allows you to perform complex operations and transformations on the data, such as filtering, grouping, sorting and joining.

                    The aggregate operation in MongoDB follows the concept of a pipeline, which consists of a sequence of stages that are applied to the data. Each stage performs a specific operation on the data and passes the results to the next stage in the pipeline. The output of the previous stage serves as the input for the next stage.

                    A pipeline stage represents a specific operation that is applied to the data. MongoDB provides various pipeline stages, including:

                    $match: Filters the documents based on specified criteria, similar to the find operation.
                    $group: Groups documents based on specified keys and performs aggregations within each group.
                    $sort: Sorts the documents based on specified fields.
                    $project: Shapes the documents, allowing you to include, exclude, or modify specific fields.
                    $limit and $skip: Controls the number of documents returned and allows for pagination.
                
                </p>
            </div>
        </div>
    );
};

export default Blog;