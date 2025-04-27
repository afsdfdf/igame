"use client"

import { useState, useEffect } from 'react'
import { create } from 'zustand'

interface DeviceState {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  setDevice: (width: number) => void
}

export const useDeviceStore = create<DeviceState>((set) => ({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  setDevice: (width) => set({
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  }),
}))

export function useDevice() {
  const { isMobile, isTablet, isDesktop, setDevice } = useDeviceStore()

  useEffect(() => {
    const checkDevice = () => {
      setDevice(window.innerWidth)
    }

    // 初始检查
    checkDevice()

    // 监听窗口大小变化
    window.addEventListener('resize', checkDevice)

    // 清理监听器
    return () => window.removeEventListener('resize', checkDevice)
  }, [setDevice])

  return { isMobile, isTablet, isDesktop }
} 