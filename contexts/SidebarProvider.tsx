'use client'

import {createContext, useState} from 'react'

interface SidebarContextType {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

const defaultValue = {
  isSidebarOpen: false,
  toggleSidebar: () => {},
}

export const SidebarContext = createContext<SidebarContextType>(defaultValue)

export const SidebarProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState)
  }

  return (
    <SidebarContext.Provider value={{isSidebarOpen, toggleSidebar}}>
      {children}
    </SidebarContext.Provider>
  )
}
