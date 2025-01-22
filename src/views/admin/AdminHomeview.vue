<template>
    <div class="bookings">
        <div class="heading">
            <h3>Upcoming Bookings</h3>
        </div>
        <div class="card-section">
            <div v-for="booking in bookings" :key="booking.id" class="card">
                <div class="name">
                    <p style="margin-right: auto;">{{ booking.name }}</p>
                    <p>{{ booking.phone }}</p>
                </div>
                <div class="ground-and-info">
                    <p style="margin-right: auto;">Ground: {{ booking.ground }}</p>
                    <p style="margin-right: auto;">{{ booking.date }}</p>
                    <p style="margin-left: auto;">{{ booking.time }}</p>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
    export default {
        data() {
            return {
            bookings: [
                {
                id: 1,
                name: "Adamya Neupane",
                phone: "98XXXXXXXX",
                ground: "Ground 1",
                date: "12/12/2024",
                time: "08:00",
                },
                {
                id: 2,
                name: "Aayash Dwa",
                phone: "98XXXXXXXX",
                ground: "Ground 1",
                date: "12/12/2024",
                time: "11:00",
                },
                {
                id: 3,
                name: "Ayush Bishwokarma",
                phone: "98XXXXXXXX",
                ground: "Ground 1",
                date: "12/12/2024",
                time: "11:00",
                },
                {
                id: 4,
                name: "Avash Mahato",
                phone: "98XXXXXXXX",
                ground: "Ground 1",
                date: "12/12/2024",
                time: "11:00",
                },
                {
                id: 5,
                name: "Sujan Bhujel",
                phone: "98XXXXXXXX",
                ground: "Ground 1",
                date: "12/12/2024",
                time: "11:00",
                },
                {
                id: 6,
                name: "Salin Khadka",
                phone: "98XXXXXXXX",
                ground: "Ground 1",
                date: "12/12/2024",
                time: "11:00",
                },
                // Add more booking objects here
            ],
            };
        },
    }

</script>

<style scoped>
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;
  font-size: 35px;
  font-weight: 600;
    color: #368033;
    font-family: Montserrat;
}
.bookings {
    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: stretch;
	align-content: flex-start;
    gap: 15px;
    margin-top: 20px;
}
p{
    font-size: 20px;
    color: #364958;
    font-weight: bolder;
    font-family: Montserrat;
}
.card-section{
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	align-content: space-around;
    gap: 20px;
    margin-top: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 15px;
  width: 650px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	align-content: stretch;
    border-color: #368033;
}
.card:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    background: #53c44fd2;
    border-color: #ffffff;
    border: 2px;
    cursor: pointer;
}
.name{
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	align-content: center;
}
.ground-and-info{
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	align-content: center;
}

.card p {
  margin: 5px 0;
}

</style>