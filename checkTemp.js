function checkTemp(temperature) {
    if (temperature >= 0 && temperature <= 20) {
        return -1;
    } else if (temperature >= 21 && temperature <= 40) {
        return 0
    } else if (temperature >= 41 && temperature <= 60) {
        return 1;
    }
}
