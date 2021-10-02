
export class UI {
    addProduct(product) {
      const productList = document.getElementById("product-list");
      const element = document.createElement("div");
      element.innerHTML = `
              <div class="card text-center mb-4">
                  <div class="card-body">
                      <strong>Producto</strong>: ${product.nombre}
                      <strong>Precio</strong>: ${product.precio} 
                      <strong>Fecha</strong>: ${product.fecha}
                      <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                  </div>
              </div>
              `;
      productList.appendChild(element);
    }
  
    resetForm() {
      document.getElementById("product-form").reset();
    }
  
    deleteProduct(element) {
      if (element.nombre === "delete") {
        element.parentElement.parentElement.remove();
        this.showMessage("Producto Borrado Exitosamente", "Logrado Exitosamente");
      }
    }
  
    showMessage(message, cssClass) {
      const div = document.createElement("div");
      div.className = 'alert alert-${cssClass} mt-2';
      div.appendChild(document.createTextNode(message));
  
      const container = document.querySelector(".container");
      const app = document.querySelector("#App");
  
      container.insertBefore(div, app);
  
      setTimeout(function () {
        document.querySelector(".alert").remove();
      }, 3000);
    }
  }