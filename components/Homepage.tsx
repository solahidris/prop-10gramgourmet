import Footer from "./Footer"
import HeaderNavbar from "./HeaderNavbar"

const Homepage = () => {
  return(
    <div className="dark">
      <HeaderNavbar />
      <div className="min-h-screen mt-[80px] text-black">
        <p className="text-7xl">yo</p>
      </div>
      <Footer/>
    </div>
  )
};

export default Homepage;