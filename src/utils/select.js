export const colourStyles = {
    input: style => ({
        ...style
    }),
    container: style => ({
        ...style,
        color: '#262626',
        fontWeight: 'normal',
        outline: 'none'
    }),
    control: style => ({
        ...style,
        borderRadius: '5px',
        height: '46px',
        background: '#fff',
        border: '1px #7D7D7D solid',
        padding: '0px 10px'
    }),
    singleValue: style => ({
        ...style,
        color: '#262626',
        fontWeight: 'normal'
    })
}