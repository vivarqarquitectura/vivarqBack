import jwt from 'jsonwebtoken';

export const verificarToken = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(403).json({ error: "Acceso denegado, se requiere un token" });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: "Token inválido o expirado" });
    }
};