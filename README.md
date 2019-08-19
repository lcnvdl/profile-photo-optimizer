# profile-photo-optimizer
Tool that optimizes the size of profile photos. It validates the faces in the images, and limits its sizes.

```bash
npm i -g profile-photo-optimizer
```

# Examples
```bash
profile-photo-optimizer ./image.png ./output.png --one-face --max-size 1000x1000

profile-photo-optimizer ./image.png ./output.png --faces 2 --max-size 1000x1000

profile-photo-optimizer ./image.png ./output.png --face-required --max-width 2000 --max-height 2000
```