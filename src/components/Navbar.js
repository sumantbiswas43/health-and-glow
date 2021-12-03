import React from 'react'

export default function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search " />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    )
}
