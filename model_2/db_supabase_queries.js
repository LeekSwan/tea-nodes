import supabase from "./db_supabase_connect";

const Home = () => {
  console.log(supabase)

  return (
    <div className = "page home">Home</div>
  )
}

console.log(Home)

export default Home