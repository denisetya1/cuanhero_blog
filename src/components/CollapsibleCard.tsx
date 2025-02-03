"use client"

import React, { Children } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { CollapsibleProps } from '@radix-ui/react-collapsible'
import { ArrowBigRight, ChevronRight } from 'lucide-react'

const CollapsibleCard = ({ children, ...props }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const childs = Children.toArray(children);
  const title = childs.shift();

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      {...props}
    >
      <CollapsibleTrigger className='p-2 flex justify-start items-start md:items-center gap-1'>
        <div className='w-4'>
          <ChevronRight size={17} fill='#000' className={isOpen ? 'rotate-90' : 'text-black'} />
        </div>
        <div className='text-left'>{title}</div>
      </CollapsibleTrigger>
      <CollapsibleContent className='p-4 pt-0'>
        {childs.map((child) => child)}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default CollapsibleCard