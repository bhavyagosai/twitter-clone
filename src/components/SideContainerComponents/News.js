const News = ({
  subject,
  subSubject,
  topic,
  caption,
  subSideCaption,
  isImage,
  image,
}) => {
  return (
    <div class="flex flex-row hover:bg-white/5 cursor-pointer px-3 py-3 justify-between">
      <div class="flex flex-col w-52">
        <div class="flex text-secondary-content text-xsbase mb-1">
          <span>{subject}</span>
          {subSubject && (
            <>
              <span>&nbsp;·&nbsp;</span>
              <span>{subSubject}</span>
            </>
          )}
        </div>
        <p class="text-smbase font-bold mb-1">{topic}</p>
        <div class="flex text-secondary-content text-xsbase">
          {caption && (
            <>
              <span>{caption}</span>
              <span class="text-primary pl-1 hover:underline">
                {subSideCaption}
              </span>
            </>
          )}
        </div>
      </div>
      {isImage ? (
        <div class="border w-17 h-17 rounded-2xl overflow-hidden mr-1">
          <img class="object-cover w-18 h-18" src={image} />
        </div>
      ) : (
        <button class="btn btn-sm btn-circle text-secondary-content bg-transparent border-0 hover:bg-primary/30 hover:text-primary ml-auto">
          <svg
            viewBox="0 0 24 24"
            class="flex w-5 h-5 fill-current"
            aria-hidden
          >
            <g>
              <circle cx="5" cy="12" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="19" cy="12" r="2"></circle>
            </g>
          </svg>
        </button>
      )}
    </div>
  );
};

export default News;
