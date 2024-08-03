import React from "react";
import Tag from "./Tag";

export default function StoriesPage() {
  return (
    <>
      <h2 className="mb-10 font-bold text-gray-800 lg:text-4xl">
        Custom stories
      </h2>
      <div className="rounded-lg border">
        <div className="grid grid-cols-1 justify-between md:grid-cols-2">
          <div className="flex flex-col items-start justify-between px-6 pt-10">
            <div>
              <div className="mb-6 flex flex-row items-center">
                <img
                  className="size-12"
                  src="/src/assets/images/asset 9.png"
                  alt="ClickUp logo"
                />
                <h3 className="text-xl font-bold">ClickUp</h3>
              </div>
              <p className="mb-10">
                ClickUp used ToDesktop to get their desktop app in front of
                customers in days instead of months.
              </p>

              <ul className="flex flex-wrap gap-2">
                <Tag tagName="Chromeless Ui" />
                <Tag tagName="Native spellcheck" />
                <Tag tagName="Task time in menubar" />
                <Tag tagName="Notification count in the dock" />
                <Tag tagName="Global hotkey to create task" />
              </ul>

              <p className="my-5 text-sm font-extralight text-gray-500">
                “ToDesktop provided us with a{" "}
                <span className="text-gray-800">polished desktop app</span> in
                no time. Their expert team guided us through a smooth migration
                from our outdated legacy desktop app, enabling us to deliver{" "}
                <span className="text-gray-800">new and improved</span> features
                to our customers within days.”
              </p>
            </div>
            <div className="flex items-center gap-3 pb-5">
              <img
                className="size-10 rounded-full"
                src="/src/assets/images/zeb.jpeg"
                alt="zeb profile picture"
              />
              <div>
                <h4 className="text-sm">Zeb Evans</h4>
                <p className="text-xs text-gray-600">
                  Founder & CEO,{" "}
                  <span className="underline hover:cursor-pointer">
                    ClickUp
                  </span>
                </p>
              </div>
            </div>
          </div>

          <img
            className="hidden w-4/5 justify-self-end md:block"
            src="/src/assets/images/clickUpReview.png"
            alt="Click up review page"
          />
        </div>
      </div>
    </>
  );
}
