import { Facebook, Linkedin, Instagram } from "lucide-react"
import ScrollAnimateSection from "./ScrollAnimateSection"

const footerLinks = {
  product: [
    { name: "Tính năng", href: "#features" },
    { name: "Thư viện YHCT", href: "#" },
    { name: "Đặt lịch", href: "#" },
    { name: "API", href: "#" },
  ],
  company: [
    { name: "Về chúng tôi", href: "#about" },
    { name: "Blog", href: "#" },
    { name: "Tuyển dụng", href: "#" },
    { name: "Liên hệ", href: "#contact" },
  ],
  support: [
    { name: "Trung tâm trợ giúp", href: "#" },
    { name: "Tài liệu", href: "#" },
    { name: "Trạng thái", href: "#" },
    { name: "Chính sách bảo mật", href: "#" },
  ],
}

export default function Footer() {
  return (
    <ScrollAnimateSection>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-2">
                <img src="/img/logo/logo.png" alt="LangConnect Logo" className="w-8 h-8 object-contain" />
                <span className="text-xl font-bold">LangConnect</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Kết nối cộng đồng Y học cổ truyền một cách minh bạch, hiện đại và hiệu quả.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-herb-green-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-herb-green-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-herb-green-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Sản phẩm</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-herb-green-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Công ty</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-herb-green-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Hỗ trợ</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-herb-green-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2025 LangConnect. Bản quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </ScrollAnimateSection>
  )
}
