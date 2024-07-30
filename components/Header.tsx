"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { ResearchMenu, UseLibraryMenu } from "@/constant/Nav";
import { UserCircleIcon } from "@heroicons/react/24/solid";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative isolate z-10 border-b-2 border-gray-400">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Miami University Libraries</span>
            <img className="h-18 w-auto" src="/logo.png" alt="MUL logo" />
          </a>
        </div>
        {/* Mobile hamburger button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* End of hamburger button */}

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Research and Support
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <PopoverPanel className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {ResearchMenu.map((menuGroup, index) => (
                    <div key={index} className="menu-group">
                      {menuGroup.map((menuItem) => (
                        <div className="menu-item flex-auto">
                          {"name" in menuItem ? (
                            menuItem.href ? (
                              <Link href={`/research/${menuItem.href}`}>
                                {menuItem.name}
                              </Link>
                            ) : (
                              <span className="font-bold">{menuItem.name}</span>
                            )
                          ) : (
                            <></>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Use the Libraries
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <PopoverPanel className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {UseLibraryMenu.map((menuGroup, index) => (
                    <div key={index} className="menu-group">
                      {menuGroup.map((menuItem) => (
                        <div className="menu-item">
                          {"name" in menuItem ? (
                            menuItem.href ? (
                              <Link href={`/use/${menuItem.href}`}>
                                {menuItem.name}
                              </Link>
                            ) : (
                              <span className="font-bold">{menuItem.name}</span>
                            )
                          ) : (
                            <></>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
        </PopoverGroup>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Research and Support
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 space-y-2">
                    {ResearchMenu.map((menuGroup, index) => (
                      <Disclosure.Button className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        <div key={index} className="menu-group">
                          {menuGroup.map((menuItem) => (
                            <div className="menu-item text-start">
                              {"name" in menuItem ? (
                                menuItem.href ? (
                                  <Link href={`/research/${menuItem.href}`}>
                                    {menuItem.name}
                                  </Link>
                                ) : (
                                  <span className="font-bold">
                                    {menuItem.name}
                                  </span>
                                )
                              ) : (
                                <></>
                              )}
                            </div>
                          ))}
                        </div>
                      </Disclosure.Button>
                    ))}
                  </Disclosure.Panel>
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Use the Libraries
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 space-y-2">
                    {UseLibraryMenu.map((menuGroup, index) => (
                      <Disclosure.Button className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        <div key={index} className="menu-group">
                          {menuGroup.map((menuItem) => (
                            <div className="menu-item text-start">
                              {"name" in menuItem ? (
                                menuItem.href ? (
                                  <Link href={`/use/${menuItem.href}`}>
                                    {menuItem.name}
                                  </Link>
                                ) : (
                                  <span className="font-bold">
                                    {menuItem.name}
                                  </span>
                                )
                              ) : (
                                <></>
                              )}
                            </div>
                          ))}
                        </div>
                      </Disclosure.Button>
                    ))}
                  </Disclosure.Panel>
                </Disclosure>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
