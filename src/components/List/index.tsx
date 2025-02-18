import React, { useEffect, useMemo, useState } from "react"
import styles from "./list.module.css"
import Card from "../Card"
import { ProgramList } from "../../types"
import Pagination from "../Pagination"

interface IListProps {
    isMy: boolean
    list: ProgramList
}

const PageSize = 4

const List: React.FC<IListProps> = ({ isMy, list }) => {
    const [page, setPage] = useState<number>(1)

    const currentTableData = useMemo(() => {
        const firstPageIndex = (page - 1) * PageSize
        const lastPageIndex = firstPageIndex + PageSize
        return list.slice(firstPageIndex, lastPageIndex)
    }, [page, list])

    useEffect(() => {
        setPage(1)
    }, [list])

    return (
        <>
            {list.length === 0 && (
                <div className={styles.noPrograms}>Нет активных программ</div>
            )}
            {currentTableData &&
                currentTableData.map((item) => (
                    <Card
                        detail={item}
                        key={item.id}
                        isMy={isMy}
                        listProgram={list}
                    />
                ))}
            <Pagination
                currentPage={page}
                totalCount={list.length}
                pageSize={PageSize}
                onPageChange={setPage}
            />
        </>
    )
}

export default List
