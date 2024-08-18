// This is the main file from where Next.js application starts. It renders Appbar and Product_grid components. Product_grid component is used to display all the products on the home page. Appbar component is used to display the Navbar of the page.
import Appbar from '@/components/Appbar'
import Product_grid from '@/components/Product_grid'

export default function Home() {
  return (
    <>
    <Appbar />
    <Product_grid />
    </>
  );
}
