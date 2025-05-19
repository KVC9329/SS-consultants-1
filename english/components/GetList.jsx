import React from 'react';

const getData = async () => {
    const res = await fetch("https://my-json-server.typicode.com/typicode/demo/posts");
    const data = await res.json();
    console.log(data);
    return (
        <div>
            <h1>Post List</h1>
            {data.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default getData;
