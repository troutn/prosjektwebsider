## Step 1

In this folder, I would like you to scaffold a new WordPress plugin that extends the WordPress code block. The name of the plugin should be **Copy Code**. The plugin should have the following structure:

```
-assets/
    -index.css
    -index.js
-copy-code.php
-Readme.txt
```

I have already created the root plugins folder, and we are currently in it, so don't worry about that.

The block extension should:

- Add a button below the block that says **"Copy Code"**.
- When the button is clicked, the code should be copied to the clipboard.
- A success message should be displayed.

### Additional Details:
- The version of this plugin should be **0.1.0**.
- No functionality is required in the Editor, only the frontend.
- Write the plugin using **PHP and vanilla JavaScript** if possible.

---

## Step 2

Once the plugin is scaffolded, implement the following functionality:

1. **PHP Setup (copy-code.php)**
    - Register and enqueue the necessary assets (`index.js` and `index.css`).
    - Ensure the plugin properly loads on the frontend.

2. **JavaScript (index.js)**
    - Select all WordPress code blocks.
    - Append a "Copy Code" button below each code block.
    - When the button is clicked, copy the code inside the block to the clipboard.
    - Display a temporary success message when the code is copied.

3. **CSS (index.css)**
    - Style the button for good UI/UX.
    - Position the button appropriately under the code block.

4. **Readme.txt**
    - Include plugin metadata, such as name, description, version, and author details.

Once all steps are complete, verify that the plugin works correctly on the frontend.

## Step 3

move the button to top right corner of the code block.
hide the button by default, but show on hover.
add a class to the button when it is clicked.
add a class to the button when the code is copied.

Use WordPress Icons for the button.

<button class="dashicons dashicons-clipboard"></button>

## Step 4

make a little square of text that says "Copied" when the code is copied.
