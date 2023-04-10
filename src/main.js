import * as Tone from 'tone';

window.addEventListener('load', () => {
    document.getElementById('startButton').addEventListener('click', async () => {
        Tone.start();
        Tone.Transport.bpm.value = 130;
        // start/stop the oscillator every quarter note
        Tone.Transport.scheduleRepeat(time => {
            console.log('tick 1: ', time);
        }, '4n', '1m', '1m');

        // Tone.Transport.scheduleRepeat(time => {
        //     console.log('tick 2: ', time)
        // }, '4n', 0, '1m');

        const loop = new Tone.Loop((time) => {
            console.log('loop ', time);

            Tone.Draw.schedule(function () {
                //this callback is invoked from a requestAnimationFrame
                //and will be invoked close to AudioContext time
                console.log('draw loop');
            }, time) //use AudioContext time of the event
        }, "4n").start(0);
        
        Tone.Transport.start();
    });
});

