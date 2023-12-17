// mengambil data
function meanThingspeak(channelID, fieldNumber, numResults, resultElementId) {
    const apiKey = '6NPQMVGO26LY3UCP'; 
    const url = `https://api.thingspeak.com/channels/${channelID}/fields/${fieldNumber}.json?api_key=${'6NPQMVGO26LY3UCP'}&results=${numResults}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.feeds && data.feeds.length > 0) {
          const fieldValues = data.feeds.map((feed) => parseFloat(feed[`field${fieldNumber}`]));
          const rataRata = fieldValues.reduce((total, value) => total + value, 0) / fieldValues.length;

          // Tampilkan rata-rata data
          const rataRataElement = document.getElementById(resultElementId);
          let fieldText;
            //field Number
            if (fieldNumber === 1) {
                fieldText = "Suhu Udara";
            } else if (fieldNumber === 2) {
                fieldText = "kelembapan Udara";
            } else if (fieldNumber === 3) {
                fieldText = "Tekanan Udara";
            } else if (fieldNumber === 4) {
                fieldText = "Titik Embun";
            } else {
            // Default value jika fieldNumber tidak sesuai dengan kondisi di atas
                fieldText = "Field tidak dikenali";
            }
            rataRataElement.textContent = `Rata-rata Data ${fieldText}: ${rataRata.toFixed(2)}`;
        }
      })
      .catch((error) => {
        console.error('Gagal mengambil data Thingspeak:', error);
      });
  }

  // panggil rata rata
  meanThingspeak(2281820, 1, 60, 'rata-rata-suhu1');
  meanThingspeak(2281820, 2, 60, 'rata-rata-kelembaban1');
  meanThingspeak(2281820, 3, 60, 'rata-rata-tekanan1');
  meanThingspeak(2289583, 1, 60, 'rata-rata-suhu2');
  meanThingspeak(2289583, 2, 60, 'rata-rata-kelembaban2');
  meanThingspeak(2289583, 3, 60, 'rata-rata-tekanan2');
  meanThingspeak(2326256, 1, 60, 'rata-rata-suhu3');
  meanThingspeak(2326256, 2, 60, 'rata-rata-kelembaban3');
  meanThingspeak(2326256, 3, 60, 'rata-rata-tekanan3');