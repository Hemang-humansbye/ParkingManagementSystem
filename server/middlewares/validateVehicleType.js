const validVehicleTypes = ['2-wheeler', '3-wheeler', '4-wheeler'];

const validateVehicleType = (req, res, next) => {
    const { vehicleType } = req.body;

    if (!vehicleType || !validVehicleTypes.includes(vehicleType)) {
        return res.status(400).json({ message: 'Invalid or missing vehicle type' });
    }

    next();
};

module.exports = validateVehicleType;
