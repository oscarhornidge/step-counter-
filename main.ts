input.onGesture(Gesture.Shake, function () {
    step += 1
    basic.showNumber(step)
})
let step = 0
basic.showNumber(0)
