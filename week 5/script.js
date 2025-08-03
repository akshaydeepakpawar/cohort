async function getRecentPost()
{
    // console.log("before sending request");
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    // const data=await response.json();
    // console.log(data);
    // console.log("request has been processed"); 
    // document.getElementById("post").innerHTML=data.body;
    const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
    const arr=response.data; //.data used as the convention as the axios
    for(let i=0;i<arr.length;i++)
    {
        document.getElementById("post").innerHTML +="<div>"+ arr[i].title+"</div>"
    }
    // console.log(response.data);
}
// getRecentPost();