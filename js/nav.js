const nav = document.querySelector('.navbar');
nav.innerHTML = `<div class="container-fluid">
<a class="navbar-brand" href="#">History</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav m-auto">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#feature">Feature</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#recent">Recent</a>
    </li>
  </ul>

  <div class="icon-container">
    <span class="icon">
      <a href=""><i class="bi bi-twitter"></i></a>
    </span>
    <span class="icon">
      <a href="https://www.instagram.com/wildanf.30/"><i class="bi bi-instagram"></i></a>
    </span>
    <span class="icon">
      <a href="https://github.com/wildanfh"><i class="bi bi-github"></i></a>
    </span>
  </div>
</div>
</div>`;