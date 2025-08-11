
import React from 'react';

export const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Stars */}
    <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 transform rotate-12 animate-pulse">
      <div className="absolute inset-0 bg-yellow-400 transform rotate-45"></div>
    </div>
    <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400 transform rotate-12 animate-pulse" style={{ animationDelay: '1s' }}>
      <div className="absolute inset-0 bg-orange-400 transform rotate-45"></div>
    </div>
    
    {/* Clouds */}
    <div className="absolute top-16 right-32 opacity-20">
      <div className="flex items-end">
        <div className="w-8 h-8 bg-white rounded-full"></div>
        <div className="w-12 h-10 bg-white rounded-full -ml-2"></div>
        <div className="w-8 h-8 bg-white rounded-full -ml-2"></div>
      </div>
    </div>
    
    {/* Abstract shapes */}
    <div className="absolute bottom-32 left-16 w-6 h-6 bg-purple-400 rounded-full animate-float"></div>
    <div className="absolute top-1/3 left-8 w-4 h-8 bg-orange-300 rounded-full transform rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
  </div>
);

export const TeacherCharacter = () => (
  <div className="relative">
    {/* Teacher character */}
    <div className="relative z-10 flex flex-col items-center">
      {/* Head */}
      <div className="w-16 h-16 bg-amber-100 rounded-full relative mb-2">
        {/* Hair */}
        <div className="absolute -top-2 -left-2 w-20 h-16 bg-amber-800 rounded-full"></div>
        {/* Face */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-black rounded-full"></div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-black rounded-full"></div>
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-400 rounded-full"></div>
        {/* Smile */}
        <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-black rounded-full"></div>
      </div>
      
      {/* Body */}
      <div className="w-12 h-16 bg-purple-500 rounded-lg relative">
        {/* Arms */}
        <div className="absolute -left-3 top-2 w-6 h-3 bg-amber-100 rounded-full transform -rotate-12"></div>
        <div className="absolute -right-3 top-2 w-6 h-3 bg-amber-100 rounded-full transform rotate-12"></div>
      </div>
      
      {/* Legs */}
      <div className="flex gap-1 mt-1">
        <div className="w-3 h-8 bg-blue-600 rounded-lg"></div>
        <div className="w-3 h-8 bg-blue-600 rounded-lg"></div>
      </div>
    </div>
    
    {/* Speech bubble */}
    <div className="absolute -top-8 -right-16 bg-white rounded-lg p-2 border-2 border-purple-300 shadow-lg">
      <div className="text-xs text-purple-600 font-semibold">¡Hola!</div>
      <div className="absolute bottom-0 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
    </div>
  </div>
);

export const StudentCharacters = () => (
  <div className="flex gap-4 justify-center">
    {/* Student 1 */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-yellow-200 rounded-full relative mb-1">
        <div className="absolute -top-1 -left-1 w-14 h-12 bg-black rounded-full"></div>
        <div className="absolute top-3 left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
        <div className="absolute top-3 right-2 w-1.5 h-1.5 bg-black rounded-full"></div>
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-1.5 border-b-2 border-black rounded-full"></div>
      </div>
      <div className="w-8 h-12 bg-green-500 rounded-lg"></div>
      <div className="flex gap-0.5 mt-0.5">
        <div className="w-2 h-6 bg-gray-600 rounded-lg"></div>
        <div className="w-2 h-6 bg-gray-600 rounded-lg"></div>
      </div>
    </div>
    
    {/* Student 2 */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-pink-200 rounded-full relative mb-1">
        <div className="absolute -top-1 -left-1 w-14 h-12 bg-orange-600 rounded-full"></div>
        <div className="absolute top-3 left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
        <div className="absolute top-3 right-2 w-1.5 h-1.5 bg-black rounded-full"></div>
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-1.5 border-b-2 border-black rounded-full"></div>
      </div>
      <div className="w-8 h-12 bg-pink-500 rounded-lg"></div>
      <div className="flex gap-0.5 mt-0.5">
        <div className="w-2 h-6 bg-gray-600 rounded-lg"></div>
        <div className="w-2 h-6 bg-gray-600 rounded-lg"></div>
      </div>
    </div>
  </div>
);

export const BookStack = () => (
  <div className="flex flex-col">
    <div className="w-12 h-2 bg-red-500 rounded transform -rotate-2"></div>
    <div className="w-12 h-2 bg-blue-500 rounded transform rotate-1 -mt-0.5"></div>
    <div className="w-12 h-2 bg-green-500 rounded transform -rotate-1 -mt-0.5"></div>
    <div className="w-12 h-2 bg-yellow-500 rounded -mt-0.5"></div>
  </div>
);

export const DeviceIllustration = () => (
  <div className="relative">
    {/* Laptop */}
    <div className="relative z-10">
      <div className="w-32 h-20 bg-gray-800 rounded-lg p-2">
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 rounded flex items-center justify-center">
          <div className="text-white text-xs font-bold">LingoQuesto</div>
        </div>
      </div>
      <div className="w-36 h-2 bg-gray-700 rounded-b-lg -mt-1"></div>
    </div>
    
    {/* Phone */}
    <div className="absolute -bottom-4 -right-6 w-12 h-20 bg-gray-800 rounded-lg p-1">
      <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-md"></div>
    </div>
    
    {/* Floating elements */}
    <div className="absolute -top-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
    <div className="absolute -top-2 right-8 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
  </div>
);
