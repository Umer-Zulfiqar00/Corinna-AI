'use client'
import { Section } from '@/components/section-label'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { useHelpDesk } from '@/hooks/settings/use-settings'
import React from 'react'
import FormGenerator from '../form-generator'

type Props = {
  id: string
}

const FilterQuestions = ({ id }: Props) => {
  const { register, errors, onSubmitQuestion, isQuestions, loading } =
    useHelpDesk(id)
  console.log("FilterQuestions rendered", id)

  return (
    <Card className='w-full grid grid-cols-1 lg:grid-cols-2'>
      <CardContent className='p-6 border-r-[1px]'>
        <CardTitle>Help Desk</CardTitle>
        <form
          onSubmit={onSubmitQuestion}
          className='flex flex-col gap-6 mt-10'
        >
          <div className='flex flex-col gap-3'>
            <Section
              label="Question"
              message='Add a question that you want your chatbot to  asked.'
            />
            <FormGenerator
              inputType='input'
              register={register}
              errors={errors}
              form='filter-questions-form'
              name='question'
              placeholder='type your question'
              type='text'
            />
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default FilterQuestions