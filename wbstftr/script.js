function tampilkanPDF(filePath) {
    const modal = document.getElementById("pdfModal");
    const viewer = document.getElementById("pdfViewer");
    viewer.src = filePath;
    modal.style.display = "block";
  }
  
  function tutupPopup() {
    const modal = document.getElementById("pdfModal");
    const viewer = document.getElementById("pdfViewer");
    viewer.src = "";
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    const modal = document.getElementById("pdfModal");
    if (event.target == modal) {
      tutupPopup();
    }
  }
  
  
  
  function tampilkanCard() {
    const role = document.getElementById("role").value;
    const container = document.getElementById("card-container");
    container.innerHTML = "";
  
    if (!role) {
      container.innerHTML = `
        <div class="no-selection">
          <i class="fas fa-file-pdf pdf-icon"></i>
          <p>Silakan pilih peran Anda untuk melihat panduan akses dalam format PDF</p>
        </div>
      `;
      return;
    }
  
    if (role === "murid") {
      container.innerHTML = `
      <div class="card">
          <div class="card-header">Panduan Murid</div>
          <div class="card-body">
            <h2>Lapor Tanpa Login</h2>
            <p>Melaporkan kejadian kenakalan instan tanpa harus login </p>
            <button class="btn" onclick="tampilkanPDF('pdf_murid/laporkan.pdf')">
              <i class="fas fa-file-pdf"></i> Buka PDF
            </button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">Panduan Murid</div>
          <div class="card-body">
            <h2>Signup Murid</h2>
            <p>Panduan lengkap cara signup ke sistem SIGAP untuk murid</p>
            <button class="btn" onclick="tampilkanPDF('pdf_murid/signup.pdf')">
              <i class="fas fa-file-pdf"></i> Buka PDF
            </button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">Panduan Murid</div>
          <div class="card-body">
            <h2>Login dan Lupa Password</h2>
            <p>Langkah-langkah login dan reset password jika lupa kredensial login</p>
            <button class="btn" onclick="tampilkanPDF('pdf_murid/login_lp_pw.pdf')">
              <i class="fas fa-file-pdf"></i> Buka PDF
            </button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">Panduan Murid</div>
          <div class="card-body">
            <h2>Mengenal Kategori Bully</h2>
            <p>Panduan Mengenal Kategori Bully</p>
            <button class="btn" onclick="tampilkanPDF('pdf_murid/baca_artikel.pdf')">
              <i class="fas fa-file-pdf"></i> Buka PDF
            </button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">Panduan Murid</div>
          <div class="card-body">
            <h2>Melaporkan Pembbullyan</h2>
            <p>Melaporkan tindakan pembullyan yang nantinya dikirim ke guru bk</p>
            <button class="btn" onclick="tampilkanPDF('pdf_murid/lapor_bully.pdf')">
              <i class="fas fa-file-pdf"></i> Buka PDF
            </button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">Panduan Murid</div>
          <div class="card-body">
            <h2>pendampingan</h2>
            <p>pendampingan dan ksonusltasi masalah secara privat dengan guru bk</p>
            <button class="btn" onclick="tampilkanPDF('pdf_murid/pendampingan.pdf')">
              <i class="fas fa-file-pdf"></i> Buka PDF
            </button>
          </div>
        </div>
      `;
    } else if (role === "guru") {
      container.innerHTML = `
        <div class="card">
          <div class="card-header">Panduan Wali Kelas</div>
          <div class="card-body">
            <h2>Signup Wali Kelas</h2>
            <p>Panduan signup ke sistem SIGAP untuk wali kelas</p>
            <button class="btn" onclick="tampilkanPDF('pdf_guru/signup.pdf')">
              <i class="fas fa-file-pdf"></i> Buka PDF
            </button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">Panduan Wali Kelas</div>
          <div class="card-body">
            <h2>Login Akun Wali Kelas dan lupa pasword</h2>
            <p>Langkah-langkah login dan reset password jika lupa kredensial login</p>
            <button class="btn" onclick="tampilkanPDF('pdf_guru/login_lp_pw.pdf')">
              <i class="fas fa-file-pdf"></i> Buka PDF
            </button>
          </div>
        </div>
      `;
    }
  }