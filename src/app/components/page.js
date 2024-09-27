import React from 'react'
import SayHello from '@/components/SayHello'

export default function Components() {
  const array = [
    {
      name: 'Casey',
    },
    {
      name: "Cunningham",
      greeting: "Let's get cookin'",
    },
  ]
  return (
    <div>
      {
        array.map((item) => <SayHello key={item.name} name={item.name} greeting={item.greeting}/>)
      }
    </div>
  )
}
