const PostForm = () => {

    const submitData = async (formdata) => {
        'use server'
        const post = formdata.get('post')
        const res = await fetch("https://my-json-server.typicode.com/typicode/demo/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ post })
        })
        console.log(res)
    }

    return (
        <div>
            <form onSubmit={submitData}>
                <input type="text" placeholder="post" name="post" />
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default PostForm;