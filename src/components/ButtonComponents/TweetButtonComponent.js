const TweetButtonComponent = (props) => {
  return (
    <button class="btn btn-sm btn-circle btn-ghost blue-hover mr-1">
      <svg viewBox="0 0 24 24" class="h-7 w-5 flex fill-current" aria-hidden>
        <g>{props.children}</g>
      </svg>
    </button>
  );
};

export default TweetButtonComponent;
