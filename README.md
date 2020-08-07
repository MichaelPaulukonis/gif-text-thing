# a thing

## some plans

- obtain a gif (at random)
- obtain a text
- "rebuild" the gif (a-la-imagetexter) with the text, frame by frame
- Doesn't have to be saveable - just displayable

- instead of a gif, could just use any image, and do a drunkard's walk through it
- display a blown-up section, then move one of 8 directions and re-do
- it "animates" the colors  

### NO PLAN SURVIVES CONTACT WITH THE ENEMY

I realized I needed neither a gif, frames, nor an image for this project
[all of which remain good ideas for something else]
Just a nice source of noise for the black-n-white obscuror

## quick plan

1. stub out text-gen (single-char, whatever)
2. stub out color getter - alternate or something
3. build the darn squares
4. put some text in 'em

## some source references

- https://developers.giphy.com/dashboard/
- https://developers.giphy.com/docs/sdk/#content-types
- https://www.npmjs.com/package/@giphy/js-fetch-api
- https://www.npmjs.com/package/@giphy/js-util
- https://www.npmjs.com/package/p5.gif
- https://www.npmjs.com/package/gif-transparency
- RITA
- my tumblr code ???
- https://stackoverflow.com/questions/48234696/how-to-put-a-gif-with-canvas
- https://creative-coding.decontextualize.com/video/

## Saving frames and animations

- you know, one could just save the array of text and images and export those for re-generation server-side
- using CCapture which slows things WAAAAAAAAY down
- https://github.com/pbeshai/p5js-ccapture
- [CREATING VIDEOS FROM PROCESSING'S P5.JS WITH CCAPTURE.JS AND FFMPEG](https://peterbeshai.com/blog/2018-10-28-p5js-ccapture/)
  - Also contains notes on building mp4s and gifs (see below)
  - The rest of their website is worth checking out
- https://medium.com/@ffmaer/record-p5-js-with-ccapture-js-8e3ac9488ac3

### ffmpeg on Mac

Homebrew wasn't working for me (I'm on 10.12, so not the freshest).

But I was able to install a static build folloring [these instructions](https://superuser.com/a/624562/972)

```bash
ffmpeg -r 30 -f image2 -s 500x500 -i "%07d.png" -vcodec libx264 -crf 17 -pix_fmt yuv420p output.mp4

ffmpeg -r 30 -f image2 -s 500x500 -i "20200802210728-%06d.png" -vcodec libx264 -crf 17 -pix_fmt yuv420p output.mp4

```

```bash
convert -delay 3.33 -loop 0 *.png output.gif
```

a script that does each of these, kinda (I built it in `zsh` so YMMV):

```bash
mkmp4() {
 ffmpeg -r 30 -f image2 -s 500x500 -i "$1-%06d.png" -vcodec libx264 -crf 17 -pix_fmt yuv420p $1.mp4
}

mkgif() {
  convert -delay 3.33 -loop 0 *.png $1.gif
}
```