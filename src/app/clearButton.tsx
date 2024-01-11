"use client"

import { startTransition, useTransition } from "react";
import { handleClear } from "./clearAction";
import { useRouter } from 'next/navigation'

export function ClearButton() {
  const router = useRouter()
  return <>
      <button
        className = "border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" 
        onClick={ () => {startTransition(() => { handleClear(); router.refresh() })} }
      >
        Clear Completed
      </button>
  </>
}