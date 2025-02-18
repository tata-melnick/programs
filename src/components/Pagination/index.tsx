import React from "react"
import cn from "classnames-ts"
import usePagination, { DOTS } from "../../hooks/usePagination"
import styles from "./pagination.module.css"

interface IPaginationProps {
    totalCount: number
    pageSize: number
    siblingCount?: number
    currentPage?: number
    onPageChange(number: number): void
    className?: string
}

const Pagination: React.FC<IPaginationProps> = ({
    totalCount,
    pageSize = 4,
    siblingCount = 1,
    currentPage,
    onPageChange,
    className,
}) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    })

    if (currentPage === 0 || paginationRange.length < 2) {
        return null
    }

    return (
        <div className={styles.container}>
            <ul className={cn(styles.list, className)}>
                {paginationRange.map((el, i) =>
                    el === DOTS ? (
                        <li
                            className={styles.paginationItemDots}
                            key={`dot-${i}`}
                        >
                            &#8230;
                        </li>
                    ) : (
                        <li
                            className={cn(
                                styles.item,
                                el === currentPage &&
                                    styles.paginationItemSelected
                            )}
                            onClick={() => onPageChange(el)}
                            key={`page-${el}`}
                        >
                            {el}
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default Pagination
