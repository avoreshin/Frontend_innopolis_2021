const styles = {
    whiteOnRed: {
        backgroundColor: 'red',
        color: 'white'
    },
    whiteOnRedDynamic: (type = 'red') => {
        if (type === 'red') {
            return {
                backgroundColor: 'red',
                color: 'white'
            }
        }

        return {
            backgroundColor: 'green',
            color: 'white'
        }
    }
}

export default styles;
