input.onGesture(Gesture.TiltRight, function () {
    step += 1
    basic.showNumber(step)
})
input.onGesture(Gesture.LogoUp, function () {
    step += 1
    basic.showNumber(step)
})
input.onGesture(Gesture.TiltLeft, function () {
    step += 1
    basic.showNumber(step)
})
input.onGesture(Gesture.Shake, function () {
    step += 1
    basic.showNumber(step)
})
input.onGesture(Gesture.LogoDown, function () {
    step += 1
    basic.showNumber(step)
})
let step = 0
basic.showNumber(0)
