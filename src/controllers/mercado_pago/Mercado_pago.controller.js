import {pool} from '../../conexionDB.js';

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
        notification_url: `${process.env.BACKEND_URL}/api/webhooks/mercadopago`,
        payer, metadata
      }
    });
    res.json({ id: pref.id, init_point: pref.init_point, sandbox_init_point: pref.sandbox_init_point });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "No se pudo crear la preferencia" });
  }
}