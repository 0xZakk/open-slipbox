import React from "react";
// TODO: replace a tags with gatsby Link component

export default function PageFooter() {
  return (
    <>
      <hr />
      <div>
        <div>
          &copy; <a href="/">zkf.io</a> | <a href="/articles">Writing</a> |
          <a href="/domains">Areas of Interest</a> |
          <a href="/about">About this space</a> | <a href="/privacy">Privacy</a>{" "}
          |<a href="/changelog">What's new</a>
        </div>
      </div>
    </>
  );
}
