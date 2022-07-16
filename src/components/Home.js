import Feed from './Feed';
import SideContainer from './SideContainer';

function Home() {
  return (
    <div class=" xl:w-252 lg:w-160 md:w-160 min-h-screen flex justify-between">
      {/* border */}
      <div class="xl:w-152 lg:w-120 md:w-160 sm:w-160 sm:relative sm:left-0 lg:relative lg:left-0">
        <Feed />
      </div>
      <div class="xl:w-88 xl:block lg:hidden md:hidden sm:hidden">
        <SideContainer />
      </div>
    </div>
  );
}

export default Home;
