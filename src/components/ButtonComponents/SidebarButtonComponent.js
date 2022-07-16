const SidebarButtonComponent = (props) => {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        class="xl:h-8 xl:w-6 lg:h-10 lg:w-8 zero:w-6 zero:h-8 flex fill-current mr-1.5"
        aria-hidden
      >
        <g>{props.children}</g>
      </svg>
      <p class="xl:block lg:hidden">{props.element}</p>
    </>
  );
};

export default SidebarButtonComponent;
