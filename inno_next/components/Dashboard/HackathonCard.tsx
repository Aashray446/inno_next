import React from 'react'
import { Badge, Button, Card, Group, Image } from '@mantine/core'
import { IconArrowRight, IconEdit } from '@tabler/icons-react'
import { IHackathon } from '@/utils/Interfaces/coreEntity'

export default function HackathonCard(hackathon: IHackathon) {
  return (
    <div>
      <Card className='flex gap-2' shadow='sm' padding='lg' radius='md' withBorder>
        <div className='min-w-max my-auto'>
          <Image
            // src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
            src={hackathon.header_img}
            height='160'
            alt='Norway'
            radius='md'
          />
        </div>
        <div className='ml-10'>
          <Group position='apart' mt='md' mb='xs'>
            <div className='flex flex-row justify-start space-x-2 items-center'>
              <div className='font-bold text-2xl line-clamp-1'>{hackathon.title}</div>
              <IconEdit className='hover:bg-slate-200 m-1 cursor-pointer hover:shadow-lg active:shadow-none'/>
            </div>
            <Badge className='text-lg p-3'>
              123 <span className='text-base'>Registrations</span>
            </Badge>
          </Group>
          <div className='text-lg my-1 text-slate-600'>{hackathon.tagline}</div>
          <div className='max-w-full text-md text-gray-600 line-clamp-3'>{hackathon.description}</div>
          <div className=' flex justify-start items-center'>
            <Button
              variant='light'
              color='blue'
              mt='md'
              radius='md'
              className='bg-blue-100 hover:bg-blue-200 my-4 md:mr-5'
            >
              Go to problem <IconArrowRight />
            </Button>
            <div className='flex gap-2 mt-2 md:ml-4'>
              <Badge color='orange' variant='light'>
                Tag 1
              </Badge>
              <Badge color='red' variant='light'>
                Second
              </Badge>
              <Badge color='orange' variant='light'>
                Third
              </Badge>
              <Badge color='blue' variant='light'>
                Fourth
              </Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
