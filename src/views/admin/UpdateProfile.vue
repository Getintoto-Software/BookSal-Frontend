<template>
    <div class="main-div">
        <div class="heading">
            <h3>Update Profile</h3>
        </div>
        <div class="form">
            <div class="booking-form">
                <h2>Futsal Booking Form</h2>
                <div class="form-section">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="futsalName">Futsal Name</label> <br>
                            <input type="text" id="futsalName" placeholder="Futsal Name" required />
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label> <br>
        
                            <input type="tel" id="phone" placeholder="Phone Number" required style="margin-right: 10px;" />
                        </div>
                    </div>
                    <div class="form-row date-time">
                        <div class="form-group">
                            <label for="ground" >Number of Grounds</label> <br>
                            <input type="number" id="date" placeholder="1" required class="date"/>
                        </div>
                        <div class="form-group">
                            <label for="time">Available hours</label> <br>
                            <input type="time" id="time" required class="time"/>
                        </div>
                        <div class="from-group" >
                            <label for="price">Cost per Hour</label> <br>
                           <input type="text" id="price" placeholder="Rs 1200" required class="price"/>
                        </div>
                    </div>
                    <div class="form-row phone">
                        <div class="form-group">
                            <label for="location">Location</label>
                            <br>
                            <input type="text" id="location" placeholder="Location" required />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group button">
                            <div>
                                <button type="submit" class="btn btn-book">Update</button>
                            </div>
                            <div>
                                <button type="button" class="btn btn-cancel" @click="cancelForm">
                                Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
    .booking-form{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: stretch;
        align-content: center;
        background: #ffffff;
        border-radius: 15px;
        border-color: #368033;
        border-width: 2px;
        border-style: solid;
        width: 765px;
        height: 585px;
    }
    .form-section{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: stretch;
        align-content: center;
        gap: 55px;
    } 
    .button{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        align-content: flex-start;
        width: 100%;
        gap: 395px
    }
    .btn{
        flex: 1;
        /* padding: 10px 15px; */
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-size: 35px;
        font-weight: 450;
        text-align: center;
        width: 168px;
        height: 65px;
    }
    .btn-book {
    background-color: #ADE25D;;
    color: #364958;
    /* width: 50px; */
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

    .form-row{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: stretch;
        align-content: center;
        gap: 100px;
        /* margin-right: auto; */
        padding-left: 10px;
    }
    .date-time{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        width: 150px;
    }
    .phone{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: flex-start;
        align-content: flex-start;
        
    }
    h2{
        margin-inline: auto;;
        font-weight: 700;
        font-size: 40px;
        color: #3e923be9;
    }
    label{
        font-size: 20px;
        font-weight: 800;
        font: Montserrat;
        color: #3e923be9;
    }
    input{
        padding: 10px;
        border-radius: 5px;
        border-color: #368033;
        border-width: 1px;
        width: 300px;
        font: Montserrat;
        font-weight: 600;
        font-size: 20px;
        margin-inline: auto;

    }
    .date{
        width: 200px;
        color: #3e923be9;
    }
    .price{
        width: 165px;
        color: #3e923be9;
    }
    .time{
        width: 114px;
        color: #3e923be9;
    }
    select{
        padding: 10px;
        border-radius: 5px;
        border-color: #368033;
        color: #3e923be9;
        background: #ffffff;
        border-width: 1px;
        width: 174px;
        font: Montserrat;
        font-weight: 600;
        font-size: 20px;
        margin-right: 10px;
    }
    .main-div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        align-content: stretch;
    }
    .heading {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    h3{
        color: #ADE25D;
        font-size: 64px;
    }
    .form{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        align-content: center;
    }
    
</style>    