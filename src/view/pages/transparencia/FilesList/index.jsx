'use client'

import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Skeleton from '@mui/material/Skeleton'
import { api } from '~/services/api'
import Image from 'next/image'

export function FilesList({ id = null }) {
  const [isLoading, setIsLoading] = useState(false)
  const [list, setList] = useState([])
  const [searchName, setSearchName] = useState('')

  async function onLoad() {
    if (!id) return

    try {
      setIsLoading(true)

      const result = await api.get(
        `/transparencia-files/${id}?limit=999&name=${searchName}`
      )
      setList(result.data?.list || [])
    } catch (err) {
      console.error('Erro ao carregar arquivos', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setSearchName('')
    onLoad()
  }, [id])

  if (!id) {
    return (
      <div className="flex flex-1 items-center justify-center bg-gray-50 text-[#737373]">
        <p>Selecione um tópico no menu para visualizar os documentos.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col">
        <div className="relative mb-6 w-full">
          <input
            value={searchName}
            onChange={e => setSearchName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && onLoad()}
            placeholder="Pesquisar"
            className="h-14 w-full rounded-full border border-[#7270701A] bg-white px-5 text-[13px] font-normal text-black focus:border-gray-300 focus:outline-none"
          />
          <button
            onClick={onLoad}
            className="absolute inset-y-0 right-4 flex items-center"
          >
            <BiSearch color="#959595" size={22} />
          </button>
        </div>

        <div className="flex flex-col gap-y-3">
          {isLoading ? (
            [1, 2, 3, 4, 5].map(i => (
              <Skeleton
                key={i}
                height={56}
                variant="rounded"
                className="rounded-lg"
              />
            ))
          ) : list.length > 0 ? (
            list.map(item => (
              <div
                key={item.id}
                className="group flex h-14 w-full items-center rounded-lg border border-[#7270701A] bg-white px-4 transition-colors hover:border-gray-300 hover:shadow-lg"
              >
                <p className="flex-1 overflow-hidden pr-4 text-[14px] font-normal text-ellipsis whitespace-nowrap text-black">
                  {item.title}
                </p>

                <div className="flex shrink-0 gap-3">
                  <button
                    className="rounded-[5px] p-1 hover:bg-gray-100"
                    // onClick={() => window.open(item.url, '_blank')}
                  >
                    <Image
                      src="/icons/symbols-download-icon-gray.svg"
                      alt="download icon"
                      width={28}
                      height={28}
                    />
                  </button>

                  <button
                    className="rounded-[5px] p-1 hover:bg-gray-100"
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    <Image
                      src="/icons/fluent-open-icon-gray.svg"
                      alt="abrir em nova aba icon"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-lg border border-dashed bg-gray-50 py-10 text-center text-gray-500">
              Ops, não há registros para esta busca!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
