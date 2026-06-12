# Images Directory

Place your images here following this naming convention:

## Section Naming Prefixes

- **HERO_01.jpg** - Homepage hero banner
- **WELCOME_01.jpg** - Welcome section image
- **ABOUT_01.jpg, ABOUT_02.jpg** - About Us section images
- **COMMITTEE_01.jpg, COMMITTEE_02.jpg, COMMITTEE_03.jpg** - Committee member avatars (3 images)
- **GALLERY_01.jpg through GALLERY_07.jpg** - Gallery images (up to 7 images)
- **BREWING_01.jpg through BREWING_08.jpg** - "What's Brewing" carousel images (up to 8 images)

## Example Structure

```
/public/images/
  ├── HERO_01.jpg
  ├── WELCOME_01.jpg
  ├── ABOUT_01.jpg
  ├── ABOUT_02.jpg
  ├── COMMITTEE_01.jpg
  ├── COMMITTEE_02.jpg
  ├── COMMITTEE_03.jpg
  ├── GALLERY_01.jpg
  ├── GALLERY_02.jpg
  ├── GALLERY_03.jpg
  ├── GALLERY_04.jpg
  ├── GALLERY_05.jpg
  ├── GALLERY_06.jpg
  ├── GALLERY_07.jpg
  ├── BREWING_01.jpg
  ├── BREWING_02.jpg
  ├── ...
  └── BREWING_08.jpg
```

## Notes

- Image names must match the naming convention exactly
- Use `.jpg` format (or update the extension in the images.js file if using different formats)
- All images are automatically referenced from the `src/constants/images.js` file
- For "What's Brewing" section:
  - Odd-numbered images (01, 03, 05, 07) are portrait orientation (350px x 500px)
  - Even-numbered images (02, 04, 06, 08) are landscape orientation (500px x 350px)
