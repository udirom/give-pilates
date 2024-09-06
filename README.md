# Give Pilates - Reformer Pilates Studio Website

This is the website for Give Pilates, a Reformer Pilates Studio. The site is built using Flask for the backend and HTML, CSS, and JavaScript for the frontend.

## Setup and Installation

1. Clone this repository
2. Create a virtual environment:
   ```
   python -m venv venv
   ```
3. Activate the virtual environment:
   - On macOS and Linux:
     ```
     source venv/bin/activate
     ```
   - On Windows:
     ```
     venv\Scripts\activate
     ```
4. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

## Running the Application

To run the application, use the following command:

```
python app.py
```

The website will be accessible at `http://localhost:5000`.

## Project Structure

- `app.py`: The main Flask application
- `templates/`: Directory containing HTML templates
- `static/`: Directory containing static files (CSS, JavaScript, images)

## Updating Content

The website content can be updated by modifying the HTML templates in the `templates/` directory and the static files in the `static/` directory.

## Maintenance

To add new dependencies, install them using pip and then update the `requirements.txt` file:

```
pip install new_package
pip freeze > requirements.txt
```
