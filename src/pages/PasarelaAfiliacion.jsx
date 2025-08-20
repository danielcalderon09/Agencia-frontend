import { useEffect } from "react";
import "../styles/PasarelaAfiliacion.scss";

const PasarelaAfiliacion = () => {
  useEffect(() => {
    const checkoutUrl = `https://checkout.wompi.co/p/?public-key=pub_prod_2O3r7JeZbr9YrH5v464bV5HXj2MFBIyP&currency=COP&amount-in-cents=24000000&reference=AFILIACION-COLONIAL-${Date.now()}&redirect-url=http://localhost:5173/pago/exitoso`;

    const iframe = document.createElement("iframe");
    iframe.src = checkoutUrl;
    iframe.width = "100%";
    iframe.height = "600px";
    iframe.frameBorder = "0";
    iframe.title = "Pasarela de pago";
    iframe.allow = "payment";

    const container = document.getElementById("wompi-iframe-container");
    if (container) {
      container.innerHTML = ""; // limpia contenido previo si recarga
      container.appendChild(iframe);
    }
  }, []);

  return (
    <div className="pasarela-afiliacion">
      <h1>Completa tu pago de afiliación</h1>
      <p className="resumen">
        Estás a punto de pagar <strong>$240.000 COP</strong> por tu afiliación anual.
      </p>

      <div id="wompi-iframe-container" className="iframe-container"></div>
    </div>
  );
};

export default PasarelaAfiliacion;
