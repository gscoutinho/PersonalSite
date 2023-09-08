import Card from '@/app/components/Card'
import React from 'react'

type Props = {}

export default function About({ }: Props) {
  return (
    <main className='p-2 grid grid-cols-10 gap-2'>
      <section className='col-span-2'>
        <Card styles='bg-slate-500 bg-opacity-30 rounded-lg w-full p-2'>
          <span>área para imagem e informações gerais</span>
        </Card>

      </section>

      <section className='col-span-8'>
        <Card styles='bg-slate-500 bg-opacity-30 rounded-lg w-full p-2'>
          Área para descrição
        </Card>

      </section>
    </main>
  )
}