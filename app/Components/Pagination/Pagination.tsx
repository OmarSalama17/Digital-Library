import { Link } from "../../../src/i18n/navigation";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: Props) {
  const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage + 1;

  const createPageURL = (pageNumber: number | string) => `/books/?page=${pageNumber}`;
  const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-12 mb-4">
      <nav className="flex items-center space-x-2">
        
        <Link
          href={createPageURL(prevPage)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 ${
            currentPage === 1 ? "pointer-events-none opacity-50" : ""
          }`}
          aria-disabled={currentPage === 1}
        >
          <span className="material-icons text-sm">chevron_left</span>
        </Link>

        {allPages.map((page) => {
          if (page === currentPage) {
            return (
              <button
                key={page}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-header-light dark:bg-primary font-semibold text-gray-900 dark:text-white shadow-sm"
              >
                {page}
              </button>
            );
          }

          return (
            <Link
              key={page}
              href={createPageURL(page)}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              {page}
            </Link>
          );
        })}

        <Link
          href={createPageURL(nextPage)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 ${
            currentPage >= totalPages ? "pointer-events-none opacity-50" : ""
          }`}
          aria-disabled={currentPage >= totalPages}
        >
          <span className="material-icons text-sm">chevron_right</span>
        </Link>
      </nav>
    </div>
  );
}