let production = () => {
    console.log('Order received! Starting production...')
    setTimeout(() => {
        console.log('Calentar el agua en la pava')
        setTimeout(() => {
            console.log('Vertir la yerba en el mate')
            setTimeout(() => {
                console.log('Tapar el mate con la mano y sacudir')
                setTimeout(() => {
                    console.log('Acomodar la yerba de forma inclinada')
                }, 3000)
            }, 2000)
        }, 5000)
    }, 8000)
}

production()