import CityContext from './city-context'

const CityProvider = (props) => {
    const contextValue = {
        city: 'Beograd',
        api_key: '651e9b48098f5123fc0dca06ac94d38e'
    }

    return (
        <CityContext.Provider value={contextValue}>
            {props.children}
        </CityContext.Provider>
    )
}
export default CityProvider