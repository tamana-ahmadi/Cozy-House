
import { Header } from "./header";
import { About } from "./About";
import { Pets } from "./Pets";
import { PetsFood } from "./PetsFood";
import { Donation } from "./Donation";
import { Footer } from "./Footer";




const Layout = ()=> {
    return (
        <>
            <Header />
            <About />
            < Pets />
            <PetsFood />
            <Donation />
            <Footer />
           
           
        </>
    )
};

export {Layout};