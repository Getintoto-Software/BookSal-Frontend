<template>
    <div class="main-div">
        <div class="heading">
            <h3>Delete Account</h3>
        </div>
        <div class="box-section">
            <div class="top-section">
                <h2>This action CANNOT be undone, Are you sure you want to delete your account?</h2>
            </div>
            <div class="middle-section">
                <label for="confirm">If you're sure, <br>
                    Type “DELETE ACCOUNT” and <br>click the red button </label>
                    <input type="text" id="confirm" >
            </div>
            <div class="buttons">
                <div>
                    <button class="delete">Delete Account</button>
                </div>
                <div>
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
        justify-content: space-evenly;
        align-items: center;
        align-content: space-between;
    }
    h3{
        color: #368033;
        font-size: 58px;
        font-weight: 700;
        font-style: Montserrat;

    }
    .box-section{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        align-items: center;
        align-content: space-around;
        background: #ffffff;
        border-radius: 15px;
        /* border-color: #368033; */
        box-shadow: 5px 0 5px rgba(3, 3, 3, 0.275);
        border-width: 2px;
        border-style: solid;
        width: 765px;
        height: 585px;
        margin-bottom: 90px;
        
    }
    h2{
        color: #368033;
        font-size: 38px;
        font-style: Montserrat;

    }
    .top-section{
        display: flex;
        align-content: center;
        text-align: center;
    }
    .middle-section{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 10px;
        text-align: center;
    }
    label{
        color: #368033;
        font-size: 23px;
        font-weight: bolder;
        font-style: Montserrat;
    }
    input{
        width: 300px;
        height: 50px;
        font-size: 25px;
        font-style: Montserrat;
        color: #368033;
        border-radius: 10px;
        border-width: 1px;
        border-color: #368033;
    }
    .buttons{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        align-content: center;
        gap: 360px;
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
    .delete{
        width: 150px;
        background-color: #ff5454;
        color: #ffffff;
    }
    .delete:hover{
        background: #ff5454b7;
        color: #ffffffb7;
        cursor: pointer;
    }
    .cancel{
        width: 150px;
        background: #ADE25D;
        color: #364958;
    }

    
    
</style>    