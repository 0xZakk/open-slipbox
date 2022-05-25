import React from "react";

export default function PageHeader() {
  console.log("here");
  return (
    <div>
      <div>
        <a href="/">Title</a>
      </div>
      <div>
        <a href="/articles">Writing</a>
        <a href="/domains">Areas of Interest</a>
      </div>
    </div>
  );
}
