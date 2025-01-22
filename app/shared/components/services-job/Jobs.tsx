/* eslint-disable @next/next/no-img-element */
import React from 'react'
import jobs from '../../../../data/products/jobs.json'
import { IJobs } from '@/app/interface/jobs'


const Jobs = () => {
  return (
      <div className="flex mx-auto justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 m-8">
            {
                jobs.map((job: IJobs) => (
                <div key={job.id} className="flex flex-col rounded-2xl w-full xl:w-96 bg-[#ffffff] text-[#374151] shadow-xl">
                  <figure className="flex justify-center items-center">
                      <img src={job.image} alt="Card Preview" className="rounded-t-2xl" />
                  </figure>
                 
                  <div className="flex flex-col p-8  h-full">
                      <div className="text-2xl text-center font-bold pb-6">{job.title}</div>
                      <div className="flex flex-col gap-3  text-base">
                                {job.details.map((detalle, index) => (
                                    <div key={index} className="flex flex-row gap-3">
                                        <div className="text-green-600">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-check"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </div>
                                        <p className="font-bold">{detalle}</p>
                                    </div>
                                ))}
                      </div>
                      <div className="flex flex-grow"></div>
                      <div className="flex pt-10">
                                <button className="w-full bg-[#FF9900] text-[#ffffff] font-bold text-base p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Get started - 100% Free</button>
                      </div>
                  </div>
              </div>

                ))
            }
          </div>
      </div>
  )
}

export default Jobs
