export default function Buttons() {
  return (
    <div className="p-16">
      <p className="text-sm tracking-[0.1px] mb-3">Buttons</p>
      <div className="flex flex-col gap-2">

        <div className="py-4 flex-wrap rounded flex gap-2 items-center">
          <button
            className="btn-elevated relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] shadow-lg text-sm tracking-[.00714em] font-medium bg-surface-100 hover:bg-surface-200 focus:bg-surface-400 text-primary-600 dark:bg-surfacedark-100 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400 dark:text-primary-200">
            Elevated
          </button>

          <button
            className="btn-elevated relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] shadow-lg text-sm tracking-[.00714em] font-medium bg-surface-100 hover:bg-surface-200 focus:bg-surface-400 text-primary-600 dark:bg-surfacedark-100 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400 dark:text-primary-200">
            <span className="material-symbols-outlined">add</span>
            Icon
          </button>

          <button
            className="btn relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium"
            disabled>
            <span className="material-symbols-outlined">add</span>
            Disabled
          </button>
        </div>


        <div className="py-4 flex-wrap rounded flex gap-2 items-center">
          <button
            className="btn relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium bg-primary-600 text-white dark:bg-primary-200 dark:text-primary-800">
            Filled
          </button>

          <button
            className="btn relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium bg-primary-600 text-white dark:bg-primary-200 dark:text-primary-800">
            <span className="material-symbols-outlined">add</span>
            Icon
          </button>

          <button
            className="btn relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium"
            disabled>
            <span className="material-symbols-outlined">add</span>
            Disabled
          </button>
        </div>


        <div className="py-4 flex-wrap rounded flex gap-2 items-center">
          <button
            className="btn-tonal relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium hover:shadow bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100">
            Tonal
          </button>

          <button
            className="btn-tonal relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium hover:shadow bg-secondary-100 text-primary-900 dark:bg-secondary-700 dark:text-secondary-100">
            <span className="material-symbols-outlined">add</span>
            Icon
          </button>

          <button
            className="btn relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] hover:shadow-md text-sm tracking-[.00714em] font-medium"
            disabled>
            <span className="material-symbols-outlined">add</span>
            Disabled
          </button>
        </div>


        <div className="py-4 flex-wrap rounded flex gap-2 items-center">
          <button
            className="btn-outline relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium border border-gray-500 text-primary-600 dark:border-gray-400 dark:text-primary-200">
            Outlined
          </button>

          <button
            className="btn-outline relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium border border-gray-500 text-primary-600 dark:border-gray-400 dark:text-primary-200">
            <span className="material-symbols-outlined">add</span>
            Icon
          </button>

          <button
            className="btn-outline relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium border border-neutral-200 dark:border-neutral-400 dark:text-neutral-400"
            disabled>
            <span className="material-symbols-outlined">add</span>
            Disabled
          </button>
        </div>


        <div className="py-4 flex-wrap rounded flex gap-2 items-center">
          <button
            className="relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium text-primary-600 hover:bg-surface-200 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400">
            Text
          </button>

          <button
            className="relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium text-primary-600 hover:bg-surface-200 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400">
            <span className="material-symbols-outlined">add</span>
            Icon
          </button>

          <button
            className="relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] text-sm tracking-[.00714em] font-medium text-neutral-400"
            disabled>
            <span className="material-symbols-outlined">add</span>
            Disabled
          </button>
        </div>
      </div>
    </div>
  )
}
