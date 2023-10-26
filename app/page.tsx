'use client';

import TabOne from '@/app/TabOne'
import TabTwo from '@/app/TabTwo';
import { Tabs, TabList, Tab, TabPanel, Button } from '@mui/joy'
import Image from 'next/image'
import { useState } from 'react';
import { useForm, SubmitHandler, useController } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
interface IFormInput {
  firstName: string
  lastName: string
}
const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  })
  .required()

export default function Home() {
  const { register, handleSubmit, setValue ,formState: { errors },watch} = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert(JSON.stringify(data));
  }
  const [tabs, setTabs]: any = useState([
    {
      title: 'Chien dich con ',
      number: 1,
      arrInput: [
        {
          name: 'tab-0',
          id: 0,
        }
      ]
    }
  ]);

  const handleAddTab = (numberTabs: number) => {
    
    setTabs([...tabs,
    {
      title: 'Chien dich con ',
      number: numberTabs,
      arrInput: [
        {
          name: `tab-${numberTabs}`,
          id: 0,
        }
      ]
    }

    ]);
  }
  const handleDeleteTab = () => {
    const item = tabs.slice(0, tabs?.length - 1);
    setTabs(item);
  }

  const handleAddInput = (indexTab: any) => {

    setTabs(tabs.map((valueTab: any, index: number) => {
      if(indexTab === index){
          valueTab.arrInput = [...valueTab?.arrInput, {
            name: `tab-${index}`,
            id: index + valueTab?.arrInput.length
          }]
      }
      return valueTab
    }
    ))
  }
  const handleDeleteInput = (indexTabs: number, indexItem: any) => {

   
    setTabs(tabs.map((valueTab: any, index: number) => {
      if (indexTabs === index) {
        valueTab.arrInput.splice(indexItem, 1)
      }
      
      return valueTab;
    }));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <Button variant="solid" style={{ background: 'blue' }} type='submit'>Submit</Button>

        <Tabs aria-label="Basic tabs" defaultValue={0} className='w-full'>
          <TabList>
            <Tab>Thông Tin</Tab>
            <Tab>Chiến dịch con</Tab>
          </TabList>
          <TabPanel value={0}>
            <TabOne register={register} errors={errors} />
          </TabPanel>
          <TabPanel value={1}>
            <TabTwo
              register={register}
              tabs={tabs}
              handleAddTab={handleAddTab}
              handleDeleteTab={handleDeleteTab}
              handleDeleteInput={handleDeleteInput}
              handleAddInput={handleAddInput}
              watch={watch}
            />
          </TabPanel>
        </Tabs>
      </form>
    </main>
  )
}
