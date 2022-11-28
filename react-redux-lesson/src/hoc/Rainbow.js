const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow']
    const randomColor = colors[Math.floor(Math.random() * 6)]
    const className = `${randomColor}-text`

    return () => {
        return (
            <div className={className}>
              <WrappedComponent />
            </div>  
          )
    }
}
 
export default Rainbow;