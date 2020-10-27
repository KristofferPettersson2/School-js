const cartCount = document.getElementById("cart-count");
const ourTeachers = document.getElementById("our-teachers");
const courses = document.getElementById("courses");

getCart = async () => {
    try {
        const result = axios.get("http://localhost:4000/school/cart");
        const { data } = await result;
        let cartQty = 0;

        data.forEach(element => {
            cartQty += element.Count;
        });
        cartCount.innerHTML = cartQty;

    } catch (error) {
        console.log(`Couldn't reach api`, error);
    }
}

getTeachers = async () => {
    try {
        const result = axios.get("http://localhost:4000/school/teachers");
        const { data } = await result;
        data.forEach(element => {
            ourTeachers.innerHTML += `
            <div class="d-flex flex-column align-items-center pb-3">
                <img src="images/avatars/avatar-${element.Id}.jpg" alt="Icon" class="rounded-circle">
                <p class="text-white font-pacifico">${element.Prefix} ${element.LastName}</p>
            </div>`
        });

    } catch (error) {
        console.log(`Couldn't reach api`, error);
    }
}
getCourses = async () => {
    try {
        const result = axios.get("http://localhost:4000/school/courses");
        const { data } = await result;
        data.forEach(element => {
            let date = new Date(element.Date);
            courses.innerHTML += `
            <div class="class-card d-flex flex-column flex-wrap justify-content-center position-relative flex-sm-row my-4 mx-4 shadow-sm">
            <img src="images/events/events-img${element.Id}.jpg" alt="kids" class="w-100">
            <div class="d-flex flex-column text-white bg-primary p-4"> 
                 <div class="mb-3 h3">${element.Title}</div>
                 <div class="far fa-calendar-alt mr-2 mb-3"><i> Age ${element.MinAge} to ${element.MaxAge} Years</i></div>
                 <div class="far fa-clock mr-2 mb-4"><i> ${element.Time}</i></div>
                 <div class="mb-4">${element.Description}</div>
                 <button class="btn btn-lg btn-warning text-white shadow">Learn More</button>
            </div>
            <div class="date d-flex flex-column justify-content-center align-items-center bg-primary text-white py-2 shadow position-absolute">
                <div>${date.getDate()}</div>
                <div class="text-capitalize">${date.toLocaleString('default', { month: 'short' })}</div>
            </div>
        </div>`
        });
    } catch (error) {
        console.log(`Couldn't reach api`, error);
    }
}

getCart();
getTeachers();
getCourses();
