<template>
    <div class="main-div">
        <div class="card">
            <h1>HERE IS CARD</h1>
        </div>
        <div class="password-change-section">
            <div class="top-section">
                <h2>Change Password</h2>
            </div>
            <!-- <div class="input-section"> -->
                <div class="inputs">
                    <label for="current">Current Password</label>
                    <input type="password" id="current" required />
                </div>
                <div class="inputs">
                    <label for="new">New Password</label>
                    <input type="password" id="new" required />
                </div>
                <div class="inputs">
                    <label for="confirm">Confirm Password</label>
                    <input type="password" id="confirm" required />
                </div>
            <!-- </div> -->
            <div class="buttons">
                <div class="send">
                    <button class="update">Update</button>
                </div>
                <div class="cancel">
                    <button class="cancel">Cancel</button>
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
    .main-div{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        align-content: space-evenly;
    }
    .password-change-section{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        align-items: center;
        align-content: space-around;
        background: #ffffff;
        border-radius: 15px;
        border-color: #368033;
        box-shadow: 5px 0 5px rgba(3, 3, 3, 0.275);
        border-width: 2px;
        border-style: solid;
        width: 465px;
        height: 585px;
        margin-bottom: 90px;
        
    }
    /* .input-section{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: space-around;
    } */
    .inputs{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;
    }
    h2{
        font-size: 42px;
        color: #368033;
        font-style: Montserrat;
    }
    .inputs label{
        font-size: 25px;
        color: #368033;
        font-weight: 600;
        text-align: left;
        font-style: Montserrat;
    }
    .inputs input{
        width: 380px;
        height: 40px;
        border-radius: 5px;
        border-color: #368033;
        border-width: 1px;
        border-style: solid;
        font-size: 30px;
        font-style: Montserrat;
    }
    .buttons{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        align-content: center;
        gap: 120px;
    }
    button{
        height: 65px;
        font-style: Montserrat;
        font-size: 25px;
        font-weight: 500;
        border: none;
        border-radius: 10px;
    }
    button:hover{
        cursor: pointer;
    }
    .update{
        width: 135px;
        background: #ADE25D;
        color: #364958;
        border-radius:15px
    }
    .update:hover{
        background: #ade25db7;
        color: #364958b7;
        cursor: pointer;
    }
    .cancel{
        width: 135px;
        background-color: #ff5454;
        color: #ffffff;
        border-radius:15px;
    }
    .cancel:hover{
        background: #ff5454b7;
        color: #ffffffb7;
    }





</style>