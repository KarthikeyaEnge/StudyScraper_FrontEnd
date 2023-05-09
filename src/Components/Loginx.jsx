import React from "react";

function Loginx(params) {
  return (
    <main className=" min-h-screen bg-slate-800 overflow-x-hidden">
      <div className="flex flex-col h-screen items-center justify-center flex-nowrap bgimg  z-50">
        <form>
          <h1 className="xl:text-7xl lg:text-6xl text-4xl bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent font-michroma font-bold mb-10 -mt-5 mx-2 z-50 ">
            MINESKILL
          </h1>

          <div class="relative mb-4">
            <input
              type="text"
              class="peer block min-h-[auto] w-full rounded border border-white-500 dark:text-white bg-slate-900 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text--200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
              id="exampleFormControlInput1"
            />
            <label
              for="exampleFormControlInput1"
              class="pointer-events-none absolute left-3 top-1 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary bg-slate-900"
            >
              USERNAME
            </label>
          </div>

          <div class="relative mb-4" data-te-input-wrapper-init>
            <input
              type="password"
              class="peer block min-h-[auto] w-full rounded border border-white-500 dark:text-white bg-slate-900 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 b"
              id="exampleFormControlInput11"
              placeholder="Password"
            />
            <label
              for="exampleFormControlInput11"
              class="pointer-events-none absolute left-3 top-1 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary bg-slate-900"
            >
              PASSWORD
            </label>
          </div>

          <div className="flex justify-center gap-5">
            <button
              type="button"
              class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Loginx;
