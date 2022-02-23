const getDogs = async () => {
    const res = await fetch("https://api.thedogapi.com/v1/images/search");
    const [data] =  await res.json();
    return { url: data.url };
}
export default getDogs;