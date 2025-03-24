import React from 'react';
import { 
  ShoppingBag, 
  Recycle, 
  Scale, 
  TrendingUp, 
  Users, 
  Package, 
  Truck, 
  Leaf,
  Search
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Mall Sampah</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600">Beranda</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Produk</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Jual Sampah</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Tentang Kami</a>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Masuk
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ubah Sampahmu Menjadi
                <span className="text-green-600"> Rupiah</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Platform jual beli sampah terpercaya yang menghubungkan pengepul dengan industri daur ulang.
                Bersama menciptakan ekonomi sirkular yang menguntungkan semua pihak.
              </p>
              <div className="flex gap-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Jual Sampah
                </button>
                <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Cari Produk
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
                alt="Recycling Process"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Kategori Sampah</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Plastik</h3>
              <p className="text-sm text-gray-600">PET, HDPE, PP, dll</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Kertas</h3>
              <p className="text-sm text-gray-600">HVS, Kardus, Koran</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Logam</h3>
              <p className="text-sm text-gray-600">Besi, Aluminium, Tembaga</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Elektronik</h3>
              <p className="text-sm text-gray-600">PCB, Baterai, Kabel</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cara Kerja</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">1. Kumpulkan Sampah</h3>
              <p className="text-sm text-gray-600">Pilah sampah berdasarkan jenisnya</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">2. Timbang & Foto</h3>
              <p className="text-sm text-gray-600">Dokumentasikan sampah Anda</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">3. Penjemputan</h3>
              <p className="text-sm text-gray-600">Kami jemput sampah Anda</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">4. Terima Pembayaran</h3>
              <p className="text-sm text-gray-600">Dana masuk ke rekening Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Produk Unggulan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80"
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Botol PET Bersih</h3>
                  <p className="text-gray-600 mb-4">Rp 5.000/kg</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Stock: 500kg</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                      Beli
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Kota</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-green-100">Pengepul</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-green-100">Industri</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-green-100">Ton Sampah/Bulan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-8 w-8 text-green-500" />
                <span className="ml-2 text-xl font-bold text-white">Mall Sampah</span>
              </div>
              <p className="text-sm">
                Platform jual beli sampah terpercaya yang menghubungkan pengepul dengan industri daur ulang.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-500">Jual Sampah</a></li>
                <li><a href="#" className="hover:text-green-500">Beli Sampah</a></li>
                <li><a href="#" className="hover:text-green-500">Jemput Sampah</a></li>
                <li><a href="#" className="hover:text-green-500">Konsultasi</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-500">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-green-500">Blog</a></li>
                <li><a href="#" className="hover:text-green-500">Karir</a></li>
                <li><a href="#" className="hover:text-green-500">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Kontak</h3>
              <p className="text-sm mb-2">Email: info@mallsampah.id</p>
              <p className="text-sm mb-2">Telepon: (021) 1234-5678</p>
              <p className="text-sm">
                Jl. Daur Ulang No. 123<br />
                Jakarta, Indonesia 12345
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            © 2024 Mall Sampah. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;