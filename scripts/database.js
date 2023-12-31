//The Database is below
const database = {
    paintColor: [
    {
        id: 1, 
        color: "Silver",
        price: 334.54,
    },
    {
        id: 2,
        color: "Midnight Blue",
        price: 402.54,
    },
    {
        id: 3,
        color: "Firebrick Red",
        price: 470.19,
    },
    {
        id: 4,
        color: "Spring Green",
        price: 365.88,
    },
],
    interiors: [
    {
        id: 1,
        interiorStyle: "Beige Fabric",
        price: 277.88
    },
    {
        id: 2,
        interiorStyle: "Charcoal Fabric",
        price: 277.88
    },
    {
        id: 3,
        interiorStyle: "White Leather",
        price: 523.67
    },
    {
        id: 4,
        interiorStyle: "Black Leather",
        price: 523.67
    },
],
    technologies: [
    {
        id: 1,
        package: "Basic Package",
        description: "basic sound system",
        price: 357.33,
    },
    {
        id: 2,
        package: "Navigation Package",
        description: "includes integrated navigation controls",
        price: 556.21,
    },
    {
        id: 3,
        package: "Visibility Package",
        description: "includes side and rear cameras",
        price: 821.33,
    },
    {
        id: 4,
        package: "Ultra Package",
        description: "includes navigation and visibility packages",
        price: 1279.87,
    },
],
    wheels: [
    {
        id: 1,
        wheels: "17-inch Pair Radial",
        price: 542.33,
    },
    {
        id: 2,
        wheels: "17-inch Pair Radial Black",
        price: 542.33,
    },
    {
        id: 3,
        wheels: "18-inch Pair Spoke Silver",
        price: 614.24,
    },
    {
        id: 4,
        wheels: "18-inch Pair Spoke Black",
        price: 614.24,
    },
],
    customOrders: [
    {
        id: 1,
        interiorId: 1,
        paintId: 1,
        technologyId: 1,
        wheelId: 1,
        timestamp: 1614659931693,
    }
],
    orderBuilder: [
        {

        }
    ]
}


//Export functions below for Paints, Interiors, Technologies, Wheels and Orders from DB
export const getPaints = () => {
    return database.paintColor.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

//Functions below should write changes in dropdown to database.orders
export const setPaints = (id) => {
    database.orderBuilder.paintId = id
}

export const setInteriors = (id) => {
    database.orderBuilder.interiorId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const setTechnologies = (id) => {
    database.orderBuilder.technologyId = id
}


export const addCustomerOrder = () => {

    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}
