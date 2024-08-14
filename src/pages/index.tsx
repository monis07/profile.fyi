import Productgrid from "@/components/Productgrid";
import Appbar from '@/components/Appbar'
import T_appbar from '@/components/T_appbar'
import T_productgrid from '@/components/T_productgrid'

export default function Home() {
  return (
    <>
    <T_appbar />
    <T_productgrid />
    {/* <Appbar />
    <div>
      <Productgrid />
    </div> */}
    </>
  );
}
