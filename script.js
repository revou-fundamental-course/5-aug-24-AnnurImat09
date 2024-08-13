document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bmi-form');
    const result = document.getElementById('result');
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    const bmiDescription = document.getElementById('bmi-description');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const gender = document.getElementById('gender').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        const bmi = calculateBMI(weight, height);

        bmiValue.textContent = `BMI Anda: ${bmi.toFixed(1)}`;
        const category = getBMICategory(bmi, gender);
        bmiCategory.textContent = `Kategori: ${category}`;
        bmiDescription.textContent = getBMIDescription(category);
        result.classList.remove('hidden');
    });

    function calculateBMI(weight, height) {
        return weight / Math.pow(height / 100, 2);
    }

    function getBMICategory(bmi, gender) {
        if (gender === 'laki-laki') {
            if (bmi < 18.5) return 'Kurus';
            if (bmi < 25) return 'Normal';
            if (bmi < 30) return 'Gemuk';
            return 'Obesitas';
        } else {
            if (bmi < 17) return 'Kurus';
            if (bmi < 23) return 'Normal';
            if (bmi < 27) return 'Gemuk';
            return 'Obesitas';
        }
    }

    function getBMIDescription(category) {
        switch (category) {
            case 'Kurus':
                return 'Anda memiliki berat badan kurang dari normal. Disarankan untuk meningkatkan asupan nutrisi dan berkonsultasi dengan ahli gizi untuk mencapai berat badan yang sehat.';
            case 'Normal':
                return 'Berat badan Anda tergolong normal. Pertahankan pola makan sehat dan rutin berolahraga untuk menjaga kesehatan optimal.';
            case 'Gemuk':
                return 'Anda memiliki berat badan lebih dari normal. Disarankan untuk mengatur pola makan dan meningkatkan aktivitas fisik untuk mencapai berat badan ideal.';
            case 'Obesitas':
                return 'Anda termasuk dalam kategori obesitas. Sangat disarankan untuk berkonsultasi dengan dokter atau ahli gizi untuk mendapatkan program penurunan berat badan yang aman dan efektif.';
            default:
                return 'Tidak ada deskripsi yang tersedia untuk kategori ini.';
        }
    }
});