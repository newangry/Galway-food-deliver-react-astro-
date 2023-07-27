import ArrowUp from "~icons/mdi/arrow-up";

export default function ScrollToTopButton() {
  function handleOnClick() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <button
      onClick={handleOnClick}
      className="no-underline text-xs font-bold uppercase hover:text-slate-400 dark:hover:text-white"
      aria-label={"Voltar ao início"}
    >
      <span class="hidden sm:block">Voltar ao início</span>
      <span class="block sm:hidden">
        <ArrowUp style={{ fontSize: "1.25rem" }} />
      </span>
    </button>
  );
}
