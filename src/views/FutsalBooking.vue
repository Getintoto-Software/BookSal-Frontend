<template>
    <div class="main">
        <div class="description-div">
            <FutsalAvailability>

            </FutsalAvailability>
        </div>
        <div class="form">
            <h2>Futsal Booking Form</h2>
            <form>
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" placeholder="First Name" required />
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" placeholder="Last Name" required />
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" placeholder="Phone Number" required />
                </div>
                <div class="form-buttons">
                    <button type="submit" class="btn btn-book">Book</button>
                    <button type="button" class="btn btn-cancel" @click="cancelForm">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
import FutsalAvailability from '@/components/FutsalAvailability.vue';


export default {
    data() {
        return {
            futsal: {
                id: String
            },
            form: {
                firstName: "",
                lastName: "",
                phone: "",
            }
        }
    },
    components: {
        FutsalAvailability,
    },
    mounted() {
        this.getFutsalDetails()
    },
    methods: {
        async getFutsalDetails() {
            const id = this.$route.params.id + "/"
            console.log(endpoint)
            this.futsal.id = id
            console.log(this.futsal)

        },
        submitForm() {
            alert(
                `Booking Confirmed!\nName: ${this.form.firstName} ${this.form.lastName}\nPhone: ${this.form.phone}`
            );
            this.resetForm();
        },
        cancelForm() {
            if (confirm("Are you sure you want to cancel?")) {
                this.resetForm();
            }
        },
        resetForm() {
            this.form.firstName = "";
            this.form.lastName = "";
            this.form.phone = "";
        },
    }

    // data() {
    //     return {

    //     };
    // },
    // methods: {
    //     async getFutsal() {
    //         const endpoint = import.meta.env.VITE_API_BASE + "futsal/retrieve-futsal/" + this.id;
    //         const response = await axios.get(endpoint);
    //         this.futsal = response.data;
    //     },
    // },
}

</script>

<style scoped>
.description-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 28px;
    height: 433px;
}

.main {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
}

.form {
    border: 1px solid #368033;
    border-radius: 10px;
    padding: 20px;
    width: 571px;
    height: 563px;
    margin: 20px auto;
    font-family: Arial, sans-serif;
    background: #fdfdfd;
    box-shadow: 10px 8px 15px rgba(3, 3, 3, 0.41);

}

h2 {
    text-align: center;
    color: #368033;
    margin-top: 20px;
    font-style: Montserrat;
    font: 400;
    font-size: 50px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
    font-size: 30px;
    font-style: Montserrat;
    display: block;
    margin-bottom: 5px;
    color: #368033;
}

input {
    width: 540px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 30px;
    font-style: Montserrat;
    margin-bottom: 20px;
}

input:focus {
    outline: none;
    border-color: #368033;
    box-shadow: 0 0 3px rgba(39, 174, 96, 0.5);
}

.form-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    gap: 205px;
}

.btn {
    flex: 1;
    /* padding: 10px 15px; */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 25px;
    text-align: center;
    width: 20px;
    /* padding-right: 50px; */
    ;
}

.btn-book {
    background-color: #ADE25D;
    ;
    color: #364958;
    width: 20px;
}

.btn-book:hover {
    background: #ade25dbb;
    color: #364958b7;
    cursor: pointer;
}

.btn-cancel {
    background-color: #e74c3c;
    color: white;
}

.btn-cancel:hover {
    background-color: #f37061;
    color: rgb(217, 217, 217);
}
</style>