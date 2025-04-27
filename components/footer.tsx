import Link from "next/link"
import { Github, Twitter, DiscIcon as Discord, Gamepad2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center mb-4">
              <Gamepad2 className="h-6 w-6 text-[#7D5FFF]" />
              <span className="ml-2 text-xl font-bold text-white">AIGAME</span>
            </Link>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#00FFF0] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#00FFF0] transition-colors">
                <Discord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#00FFF0] transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
          <div>
              <h3 className="text-sm font-medium text-white mb-3">游戏</h3>
              <ul className="space-y-2">
              <li>
                  <Link href="/modes/pvp" className="text-gray-400 hover:text-[#00FFF0] text-sm transition-colors">
                    竞技副本
                </Link>
              </li>
              <li>
                  <Link href="/modes/casual" className="text-gray-400 hover:text-[#00FFF0] text-sm transition-colors">
                    娱乐副本
                </Link>
              </li>
              <li>
                  <Link href="/modes/team" className="text-gray-400 hover:text-[#00FFF0] text-sm transition-colors">
                    对战副本
                </Link>
              </li>
            </ul>
          </div>
          <div>
              <h3 className="text-sm font-medium text-white mb-3">资源</h3>
              <ul className="space-y-2">
              <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00FFF0] text-sm transition-colors">
                    文档
                </Link>
              </li>
              <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00FFF0] text-sm transition-colors">
                    白皮书
                </Link>
              </li>
              <li>
                  <Link href="#" className="text-gray-400 hover:text-[#00FFF0] text-sm transition-colors">
                    支持
                </Link>
              </li>
            </ul>
          </div>
        </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-medium text-white mb-3">订阅更新</h3>
            <p className="text-gray-400 text-sm mb-4">获取最新游戏更新和活动信息</p>
            <div className="flex">
              <input
                type="email"
                placeholder="输入邮箱"
                className="flex-1 px-4 py-2 bg-[#1A1A1A] text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#7D5FFF]"
              />
              <button className="px-4 py-2 bg-[#7D5FFF] text-white rounded-r-md hover:bg-[#6A4FE0] transition-colors">
                订阅
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} AIGAME. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-gray-400 text-xs">
              隐私政策
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-400 text-xs">
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
