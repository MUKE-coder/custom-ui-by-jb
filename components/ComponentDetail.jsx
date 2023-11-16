"use client";
import { Code, Copy, Eye } from "lucide-react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  docco,
  dracula,
  atomOneDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
export default function ComponentDetail() {
  const [currentDisplay, setCurrentDisplay] = useState("preview");
  const reactCode = `<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
  <form className="space-y-6" action="#">
    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
      Sign in to our platform
    </h5>
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="name@company.com"
        required
      />
    </div>
    <div>
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div className="flex items-start">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Remember me
        </label>
      </div>
      <a
        href="#"
        className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
      >
        Lost Password?
      </a>
    </div>
    <button
      type="submit"
      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Login to your account
    </button>
    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered?{" "}
      <a
        href="#"
        className="text-blue-700 hover:underline dark:text-blue-500"
      >
        Create account
      </a>
    </div>
  </form>
</div>
  `;
  const htmlCode = `<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
  <form class="space-y-6" action="#">
    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
    <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
    </div>
    <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
    </div>
    <div class="flex items-start">
        <div class="flex items-start">
            <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
            </div>
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
    </div>
    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
    </div>
  </form>
 </div>
  `;
  return (
    <div className="max-w-6xl  mx-auto m-4 py-16">
      {/* Header */}
      <div className="bg-slate-900 flex justify-between items-center text-slate-50 px-8 py-5 rounded-lg mb-6">
        {/* Left */}
        <div className="flex items-center space-x-3">
          <p className="bg-purple-600 px-4 py-2 rounded-md text-xl uppercase">
            Free
          </p>
          <p className="text-xl">Card with form inputs</p>
        </div>
        {/* right */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setCurrentDisplay("preview")}
            className={
              currentDisplay === "preview"
                ? "bg-purple-600 px-4 py-2 flex items-center space-x-2 rounded-sm"
                : "px-4 py-2 flex items-center space-x-2 bg-slate-700 rounded-sm "
            }
          >
            <Eye className="w-5 h-5" />
            <span>Preview</span>
          </button>
          <button
            onClick={() => setCurrentDisplay("html")}
            className={
              currentDisplay === "html"
                ? "bg-purple-600 px-4 py-2 flex items-center space-x-2 rounded-sm"
                : "px-4 py-2 flex items-center space-x-2 bg-slate-700 rounded-sm "
            }
          >
            <Code className="w-5 h-5" />
            <span>HTML</span>
          </button>
          <button
            onClick={() => setCurrentDisplay("react")}
            className={
              currentDisplay === "react"
                ? "bg-purple-600 px-4 py-2 flex items-center space-x-2 rounded-sm"
                : "px-4 py-2 flex items-center space-x-2 bg-slate-700 rounded-sm "
            }
          >
            <Code className="w-5 h-5" />
            <span>REACT</span>
          </button>
          {(currentDisplay == "html" || currentDisplay == "react") && (
            <CopyToClipboard
              text={currentDisplay === "html" ? htmlCode : reactCode}
              onCopy={() => toast.success("Copied")}
            >
              <button className="px-4 py-2 flex items-center space-x-2 bg-slate-700 rounded-sm ">
                <Copy className="w-5 h-5" />
              </button>
            </CopyToClipboard>
          )}
        </div>
      </div>
      {/* code block */}
      <div className="rounded-lg px-8 py-5 bg-slate-900 text-slate-50 flex items-center justify-center">
        {currentDisplay === "preview" ? (
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <a
                  href="#"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>
            </form>
          </div>
        ) : currentDisplay === "react" ? (
          <SyntaxHighlighter
            language="jsx"
            style={atomOneDark}
            customStyle={{ background: "transparent", flex: 1 }}
            showLineNumbers
            wrapLines
          >
            {reactCode}
          </SyntaxHighlighter>
        ) : (
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            customStyle={{ background: "transparent", flex: 1 }}
            showLineNumbers
            wrapLines
          >
            {htmlCode}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
}
