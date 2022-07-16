import { newsArray, peopleArray } from '../utils/Arrays';
import News from './SideContainerComponents/News';
import People from './SideContainerComponents/People';

function SideContainer() {
  return (
    <>
      <div className="fixed top-0 w-88 z-30 transition-all duration-100 shadow-sm bg-opacity-90 bg-base-100 text-base-content">
        <div class="flex flex-row items-center form-control rounded-full bg-accent text-smbase focus:border focus:border-primary my-1 h-11">
          <svg
            viewBox="0 0 24 24"
            class="h-5 w-5 flex fill-secondary-content absolute left-5"
            aria-hidden
          >
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            type="text"
            placeholder="Search Twitter"
            class="pl-14 input w-full focus:outline-none focus:bg-base-100 placeholder-secondary-content bg-accent rounded-full border-0 text-smbase h-10 placeholder:text-smbase focus:border focus:border-primary"
          />
        </div>
      </div>
      <div class="w-88 mt-16 bg-accent-content flex flex-col rounded-2xl pt-3">
        <p class="font-extrabold px-3 mb-2">What's happening</p>
        {newsArray.map((content) => {
          return (
            <News
              subject={content.subject}
              subSubject={content.subSubject}
              topic={content.topic}
              caption={content.caption}
              subSideCaption={content.subSideCaption}
              isImage={content.isImage}
              image={content.image}
            />
          );
        })}
        <p class="text-primary text-smbase px-3 py-4 cursor-pointer hover:bg-white/5">
          Show more
        </p>
      </div>
      <div class="top-0 w-88 mt-4 bg-accent-content flex flex-col rounded-2xl pt-3">
        <p class="font-extrabold px-3 mb-2">Who to follow</p>
        {peopleArray.map((content) => {
          return (
            <People
              name={content.name}
              isVerified={content.isVerified}
              username={content.username}
              isFollowingUser={content.isFollowingUser}
              image={content.image}
            />
          );
        })}
        <p class="text-primary text-smbase px-3 py-4 cursor-pointer hover:bg-white/5">
          Show more
        </p>
      </div>
      <div class="flex flex-col text-xsbase text-secondary-content p-5">
        <div class="flex flex-row mb-0.5">
          <p class="hover:underline cursor-pointer">Terms of Service</p>
          <p class="ml-3 hover:underline cursor-pointer">Privacy Policy</p>
          <p class="ml-3 hover:underline cursor-pointer">Cookie Policy</p>
        </div>
        <div class="flex flex-row mb-0.5">
          <p class="hover:underline cursor-pointer">Accessibility</p>
          <p class="ml-3 hover:underline cursor-pointer">Ads info</p>
          <p class="ml-3 hover:underline cursor-pointer">More···</p>
        </div>
        <p>© 2022 Twitter, Inc.</p>
      </div>
    </>
  );
}

export default SideContainer;
