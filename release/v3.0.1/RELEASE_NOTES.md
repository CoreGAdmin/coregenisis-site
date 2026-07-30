# CoreG Website v3.0.1

## Release purpose
Correct the responsive layout defects that remained in v3.0.0, specifically the navigation runoff and forced hero-heading wrapping visible in Android Chrome Desktop Site mode.

## Corrections
- Full desktop navigation now begins at the `xl` breakpoint rather than `md`.
- Tablet and narrow desktop-mode widths use the compact menu.
- Navigation gaps compress at standard desktop widths.
- The hero heading no longer contains a hard-coded `<br />`.
- Heading wrapping is balanced by the browser instead of being predetermined.
- Root layout overflow is clipped without shrinking or scaling the page.

## Validation targets
- Android Chrome, portrait, Desktop Site enabled.
- Android Chrome, landscape, Desktop Site enabled.
- Standard mobile view.
- Desktop viewport at 1280, 1366, 1440, and 1920 pixels.
