import React, { useState } from 'react'
import DateSearchBar from './DateSearchBar'
import MyPageTitle from './MyPageTitle'
import Pagination from './Pagination'
import PointsAccumulateTable from './tables/PointsAccumulateTable'

const PointsAccumulate = () => {

    const [page, setPage] = useState(0)

    return (
        <div className="w-full flex flex-col items-center">
            <MyPageTitle title="포인트적립내역" pointsFor="Louie3" />

            <div className="w-full flex mt-10px h-100px space-x-6px px-px mb-8px">
                <div style={{ width: '202px', borderColor: '#631e9a', borderWidth: '3px' }}
                    className="flex items-center rounded-10px bg-white h-98px border pt-19px pb-20px  flex-col">
                    <div className="text-p594e6a text-14px h-13px flex items-center" style={{letterSpacing:'-0.1em'}}>잔여 포인트</div>
                    <div className="text-30px flex items-center h-23px mt-15px font-bold">
                        <span className="text-rf04281" >278</span>
                        <span style={{color:'#5e399a'}}>P</span>
                    </div>
                </div>

                <div style={{ width: '202px', borderColor: '#631e9a', borderWidth: '3px' }}
                    className="pt-19px pb-20px items-center flex-col flex rounded-10px bg-white h-98px border">
                    <div className="text-p594e6a text-14px h-13px flex items-center" style={{letterSpacing:'-0.1em'}}>당월 적립포인트</div>
                    <div className="text-30px flex items-center h-23px mt-15px font-bold" style={{color:'#5e399a'}}>
                        <span>50</span>
                        <span>P</span>
                    </div>
                </div>

                <div style={{ width: '202px', borderColor: '#631e9a', borderWidth: '3px' }}
                    className="pt-19px pb-20px items-center flex-col flex rounded-10px bg-white h-98px border">
                    <div className="text-p594e6a text-14px h-13px flex items-center" style={{letterSpacing:'-0.1em'}}>전월 적립포인트</div>
                    <div className="text-30px flex items-center h-23px mt-15px font-bold" style={{color:'#5e399a'}}>
                        <span>228</span>
                        <span>P</span>
                    </div>
                </div>

                <div style={{ width: '202px', borderColor: '#631e9a', borderWidth: '3px' }}
                    className="pt-19px pb-20px items-center flex-col flex rounded-10px bg-white h-98px border">
                    <div className="text-p594e6a text-14px h-13px flex items-center" style={{letterSpacing:'-0.1em'}}>총 누적포인트</div>
                    <div className="text-30px flex items-center h-23px mt-15px font-bold" style={{color:'#5e399a'}}>
                        <span>278</span>
                        <span>P</span>
                    </div>
                </div>

                <div style={{ width: '202px', borderColor: '#631e9a', borderWidth: '3px' }}
                    className="pt-19px pb-20px items-center rounded-10px bg-white flex-col flex h-98px border">
                    <div className="text-p594e6a text-14px h-13px flex items-center" style={{letterSpacing:'-0.1em'}}>총 사용포인트</div>
                    <div className="text-30px flex items-center h-23px mt-15px font-bold" style={{color:'#5e399a'}}>
                        <span>0</span>
                        <span>P</span>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <DateSearchBar has3MonthSearch={true} />
            </div>

            <div className="mt-20px">
                <PointsAccumulateTable />
            </div>

            <div className="mt-60px mb-60px">
                <Pagination page={page} setPage={setPage} />   
            </div>

        </div>
    )
}

export default PointsAccumulate
