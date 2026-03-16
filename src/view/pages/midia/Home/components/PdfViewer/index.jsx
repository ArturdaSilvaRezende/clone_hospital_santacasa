'use client'

import { useState, useEffect, useRef } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [containerWidth, setContainerWidth] = useState(null)

  const containerRef = useRef(null)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
      }
    }

    updateWidth()

    const observer = new ResizeObserver(updateWidth)
    if (containerRef.current) observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  const changePage = offset => {
    setPageNumber(prev => Math.min(Math.max(1, prev + offset), numPages))
  }

  return (
    <div className="mx-auto flex w-full flex-col gap-6 p-4 lg:max-w-4xl">
      <div className="flex w-full items-center justify-between">
        <button
          onClick={() => changePage(-1)}
          disabled={pageNumber <= 1}
          className="flex items-center gap-2 rounded-3xl border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50 disabled:opacity-50"
        >
          <BsArrowLeft /> Anterior
        </button>
        <button
          onClick={() => changePage(1)}
          disabled={pageNumber >= numPages}
          className="flex items-center gap-2 rounded-3xl border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50 disabled:opacity-50"
        >
          Próxima <BsArrowRight />
        </button>
      </div>

      <div
        ref={containerRef}
        className="flex w-full justify-center overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
      >
        <Document
          file="/teste.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex h-96 animate-pulse items-center justify-center">
              Carregando...
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            width={containerWidth ? containerWidth : undefined}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>

      <div className="flex justify-center text-sm text-gray-500">
        Página <span className="mx-1 font-bold text-black">{pageNumber}</span>{' '}
        de {numPages}
      </div>
    </div>
  )
}
