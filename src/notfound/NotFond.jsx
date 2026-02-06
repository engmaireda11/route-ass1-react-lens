import React from "react";
import { Link } from "react-router-dom";

export default function NotFond() {
  return (
    <>
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" ></div>
       
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite] opacity-40" ></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite_1s] opacity-40" ></div>
       
        <div className="relative text-center px-4 max-w-lg mx-auto">
          <div className="relative mb-6">
            <h1 className="text-[140px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 text-[140px] md:text-[180px] font-black text-orange-500/20 blur-2xl leading-none select-none pointer-events-none">
              404
            </div>
          </div>
          <div className="relative w-28 h-28 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30" ></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <i class="fa-regular fa-face-frown text-orange-500 text-5xl"></i>
          
            </div>
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-lg rotate-12 animate-bounce" />
            <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            عفواً! الصفحة غير موجودة
          </h2>
          <p className="text-neutral-400 mb-8 text-lg">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              className=" rounded-full font-bold bg-gradient-to-br from-orange-500 to-orange-600 px-8 py-4 text-lg text-white inline-flex items-center justify-center gap-2 "
              to="/"
              
            >
              <i class="fa-regular fa-house"></i>
              الذهاب للرئيسية
            </Link>
            <Link
              className="rounded-full font-bold bg-transparent border border-gray-200 px-8 py-4 text-lg text-white inline-flex items-center justify-center gap-2"
              to="/blog"
           
            >
            <i class="fa-solid fa-book"></i>
              تصفح المقالات
            </Link>
          </div>
          <div className="pt-8 border-t border-[#262626]">
            <p className="text-sm text-neutral-500 mb-4">قد تجد هذه مفيدة:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                to="/blog"
             
              >
                المدونة
              </Link>
              <span className="text-neutral-600">•</span>
              <Link
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                to="/about"
               
              >
                من نحن
              </Link>
              <span className="text-neutral-600">•</span>
              <Link
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
                to="/privacy"
               
              >
                الخصوصية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
