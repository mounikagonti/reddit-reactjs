'use client'

import {SidebarContext} from '@/contexts/SidebarProvider'
import {useContext} from 'react'

export default function useSidebarState() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}
