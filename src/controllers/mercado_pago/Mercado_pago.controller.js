import { MercadoPagoConfig, Preference, Payment } from "mercadopago";

// Cliente MP (token privado)
const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
const preferences = new Preference(client);
const payments = new Payment(client);

export const preference=async (req, res) => {
  try {
    const { items, payer, back_urls, metadata } = req.body;
    const pref = await preferences.create({
      body: {
        items: items ?? [
          { title: "Producto demo", quantity: 1, currency_id: "ARS", unit_price: 1000 }
        ],
        back_urls: back_urls ?? {
          success: `${process.env.FRONTEND_URL}/mp/success`,
          pending: `${process.env.FRONTEND_URL}/mp/pending`,
          failure: `${process.env.FRONTEND_URL}/mp/failure`
        },
        
        auto_return: "approved",
        notification_url: `${process.env.BACKEND_URL}/webhooks/mercadopago`,
        payer, metadata
      }
    });
    res.json({ id: pref.id, init_point: pref.init_point, sandbox_init_point: pref.sandbox_init_point });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "No se pudo crear la preferencia" });
  }
}

export const webhook=async (req, res) => {
  try {
    const { type, data } = req.body || {};
    // Mercado Pago envía Webhooks con un id de recurso; consultá el pago para conocer su estado.
    // (Podés validar la firma secreta 'x-signature' según la documentación de Webhooks).
    if ((type === "payment" || req.query.type === "payment") && data?.id) {
      const payment = await payments.get({ id: String(data.id) });
      // TODO: Actualizá tu orden en DB con payment.status (approved, pending, rejected, etc.)
      console.log("Pago:", payment.id, payment.status);
    }
    res.sendStatus(200);
  } catch (err) {
    console.error("Webhook error", err);
    res.sendStatus(500);
  }
}