/**
 * Animation Loop — requestAnimationFrame loop for animated nodes.
 * Drives LFO, Timer, Random, Damper, and Feedback Loop nodes.
 */

export class AnimationLoop {
    constructor() {
        this.isRunning = false
        this.startTime = 0
        this.lastTime = 0
        this.time = 0
        this.deltaTime = 0
        this.frameId = null
        this.customWindow = null // Target window context for rAF
        this.callbacks = []
    }

    /**
     * Register a callback to be called each frame.
     * Callback receives (time, deltaTime)
     */
    onFrame(callback) {
        this.callbacks.push(callback)
        return () => {
            this.callbacks = this.callbacks.filter(cb => cb !== callback)
        }
    }

    /**
     * Start the animation loop.
     */
    start() {
        if (this.isRunning) return
        this.isRunning = true
        this.startTime = performance.now() / 1000
        this.lastTime = this.startTime
        this._tick()
    }

    /**
     * Stop the animation loop.
     */
    stop() {
        this.isRunning = false
        if (this.frameId !== null) {
            cancelAnimationFrame(this.frameId)
            this.frameId = null
        }
    }

    /**
     * Reset timer to zero.
     */
    reset() {
        this.startTime = performance.now() / 1000
        this.time = 0
        this.deltaTime = 0
    }

    /**
     * Internal tick function.
     */
    _tick() {
        if (!this.isRunning) return

        const now = performance.now() / 1000
        this.deltaTime = now - this.lastTime
        this.time = now - this.startTime
        this.lastTime = now

        for (const cb of this.callbacks) {
            cb(this.time, this.deltaTime)
        }

        const targetWindow = this.customWindow || window
        this.frameId = targetWindow.requestAnimationFrame(() => this._tick())
    }
}
