# XactUtils
*XactAnalysis Utilities by Nicholas Harrell*

## Purpose
XactAnalysis ("XA") is a widely-used platform in the restoration industry linking contractors with insurance adjusters and program personnel. While it's powerful and highly useful, it lacks some features that could make the platform easier to use for those who spend large amounts of time working with it. This browser extension adds some quality-of-life features that save small amounts of effort that could add up to a significant amount over time.

## Features
Many of these features are broken out into separate `.JS` files for easier modification and maintenance.
- Changes XA to a dark theme to make the site easier on the eyes and provide a broader color pallete for color coding.
- Automatically dismisses the left-side filters panel on the search results page.
- Color-codes notes based on the domain of the author to make it easier to find information at a glance.
- Highlights search results for whom the assigned project manager is the current user.
- For USAA claims, adds a button within the Client/Policy tab to instantly clipboard the loss address.
- For USAA claims, resolves rank abbreviations to the proper salutation, the full rank, and the branch of service if it can be derived from the rank.
  - This is based on a rank dictionary provided by USAA and does not include the Space Force.
- When adding notes, expands the series of recipient checkboxes to include other employees.
  - The lists of addresses to add is easily configurable by modifying simple arrays at the beginning of the `noteAddresses.js` file.
- When adding notes, adds shortcut buttons to instantly insert commonly-used "snippets" of text.
  - These snippets are easily configurable by modifying simple arrays at the beginning of the `snippets.js` file.
