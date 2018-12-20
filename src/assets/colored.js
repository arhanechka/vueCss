export default{
    bind(el, bindings, vnode){
       const arg = bindings.arg
        el.style[arg] = bindings.value
        // el.style.background = bindings.value
        // el.style.background = 'orange'
        const fontModifier = bindings.modifiers['font']
        if (fontModifier)
        el.style.fontSize = '50px'
    }
}