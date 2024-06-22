import React, { useState, useEffect } from 'react'
import Text from '~/components/atoms/Text/Text'
import Title from '~/components/atoms/Title/Title'
import Button from '~/components/atoms/button/Button'
import Link from 'next/link'
import { useI18n } from "~/i18n";
import logo from '~/assets/static/images/logo/virufy.svg'
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal'

export default function JobList() {

  const {
    JobListing: { JobList, modal },
  } = useI18n();
  
  const [showModalConfirmation, setShowModalConfirmation] = React.useState(true)

  return (
    <>
      <div>
        {showModalConfirmation ? (
          <>
            <div className="fixed inset-0 top-60 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-[420px] w-[300px] md:h-[425px] md:w-[360px]">
                {/*content*/}

                <div className="relative flex w-full flex-col rounded-xl border-0 bg-gradient-to-b from-[black] to-[#4167AD] shadow-lg outline-none focus:outline-none text-white font-medium">  
                  {/*header*/}

                  <div className='flex justify-center md:justify-between px-4 pt-2'> 
                    <ImageAtomLocal
                      imagesize="px110x27"
                      border="none"
                      src={logo}
                      alt="Logo Virufy"
                      ImageStyleProps="w-16 md:w-12 md:pl-1"
                    />
                    <Link
                      className='hidden md:block'
                      type='button'
                      href="./"
                      onClick={() => setShowModalConfirmation(false)}
                    >X
                    </Link>
                  </div>

                  <div className="flex text-center md:text-left w-full rounded-t">
                    <p className='mt-[10px] mx-auto h-[100px] px-6 text-xl'>
                      {modal?.text}
                    </p>
                  </div>
                  {/*body*/}

                  <div className="flex-col items-center justify-center h-[100px] mb-4">
                    <Link
                      className="flex w-[260px] md:w-[320px] justify-center rounded-3xl bg-gradient-to-b from-green-500 to-blue-500 px-6 py-2 text-white font-bold md:font-medium outline-none transition-all duration-150 ease-linear hover:bg-blue-600 mx-auto"
                      type="button"
                      href="#"
                      onClick={() => setShowModalConfirmation(false)}
                    >
                      {modal?.yes}
                    </Link>
                    <Link
                      className="flex w-[260px] md:w-[320px] justify-center rounded-3xl border border-red-500 bg-gray-200 px-6 py-2 mt-3 outline-none transition-all duration-150 ease-linear hover:bg-gray-300 text-red-500 font-bold md:font-medium mx-auto"
                      type="button"
                      href="/"
                    >
                      {modal?.no}
                    </Link>
                  </div>
                  {/*buttons*/}

                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>

      {/* _____________________ */}

      <div className="my-12 mx-8 w-11/12">
        {!JobList ? <p>No data</p> : null}

        {JobList.map(({ category, positions, id }) => (
          <div key={id} className="w-[100%] ">
            <Title
              TitleClassProps={'text-[#3074DC] my-[40px]'}
              Text={category}
              H={'h4'}
            />

            {positions.map(({ title, id }) => (
              <>
                <div key={id} className="mb-[37px] flex w-[100%]">
                  <div className="flex flex-1 items-center justify-start">
                    <Text TextClassProps={''} Text={title} Style={'normal'} />
                  </div>

                  <div className="flex flex-1 justify-end">
                    <Button
                      size="medium"
                      type="primary"
                      path={`/JobListing/${id}`}
                      label="APPLY"
                    />
                  </div>
                </div>
                <hr className="mx-auto my-4 flex h-px w-[100%] rounded border-0 bg-[#BBBBBB]" />
              </>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
