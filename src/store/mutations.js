
// 修改state 中 某一属性值

export const changeDefaultText = (state, data) => {
    console.log(data);
    state.defaultText = data
}