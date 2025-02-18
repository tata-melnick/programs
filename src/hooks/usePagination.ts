import React, { useMemo } from "react"

interface IUsePaginationProps {
    totalCount: number
    pageSize: number
    siblingCount: number
    currentPage: number
}

export const DOTS = ". . ."

const range = (start, end) => {
    const length = end - start + 1
    return Array.from({ length }, (_, idx) => idx + start)
}

const usePagination: React.FC<IUsePaginationProps> = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage,
}) => {
    return useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize)
        const totalPageNumbers = siblingCount + 5
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount)
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        )

        const shouldShowLeftDots = leftSiblingIndex > 1
        const shouldShowRightDots = rightSiblingIndex < totalPageCount

        const firstPageIndex = 1
        const lastPageIndex = totalPageCount

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 1 + 2 * siblingCount
            const leftRange = range(1, leftItemCount)
            return [...leftRange, DOTS, totalPageCount]
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 1 + 2 * siblingCount
            const rightRange = range(
                totalPageCount - rightItemCount + siblingCount,
                totalPageCount
            )
            return [firstPageIndex, DOTS, ...rightRange]
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex)
            if (currentPage === 2 || currentPage === 3) {
                return [firstPageIndex, ...middleRange, DOTS, lastPageIndex]
            } else if (totalPageCount - 2 === currentPage) {
                return [firstPageIndex, DOTS, ...middleRange, lastPageIndex]
            } else {
                return [
                    firstPageIndex,
                    DOTS,
                    ...middleRange,
                    DOTS,
                    lastPageIndex,
                ]
            }
        }
    }, [totalCount, pageSize, siblingCount, currentPage])
}

export default usePagination
