@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto:wght@100;300;400;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500;1,700&display=swap');

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: cornsilk;
}

#calcTemp {
    padding: 29px 67px;
    min-height: 290px;
    background-color:powderblue ;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

label {
    font-size: 30px;
    line-height: 78px;
}

#temp {
    width: 110px;
    height: 34px;
    border-radius: 5px;
    margin: 12px;
    padding: 8px;
    font-size: 20px;
    font-weight: 500;
    border:solid black;
    outline: none;
}

#temp_diff {
    width: 120px;
    height: 34px;
    border-radius: 5px;
    margin: 12px;
    font-size: 18px;
    font-weight: 500;
    border:solid black ;
    outline: none;
}

#submit {
    width: 100px;
    border-radius: 5px;
    margin: 30px 0 20px 0;
    font-size: 18px;
    background-color: rgb(218 229 220);
    padding: 5px;
    transition: all 0.5s ease;
}

#submit:hover{
    background-color: brown;
    cursor:pointer;
    color: white;
}

#result{
    font-size: 27px;
}
