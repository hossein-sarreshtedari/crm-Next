import conectToDB from "@/utils/ConectToDB";
import HomePage from "./components/templates/HomePage";
import Customer from "@/models/Customer";

const Home = ({ customers }) => {

  return (
    <>

      <HomePage customers={customers} />



    </>
  );
};

export default Home;



export async function getServerSideProps() {


  try {

    await conectToDB();
  }
  catch (err) {

    console.log(err);

  }

  const data = await Customer.find();


  return {

    props: { customers: JSON.parse(JSON.stringify(data)) }
  }

}


