#!/usr/bin/env python3
import sys
import os

# Check if running in a virtual environment
if not hasattr(sys, 'real_prefix') and not sys.prefix != sys.base_prefix:
    print("This script should be run from within a virtual environment.")
    print("Please activate your virtual environment and try again.")
    sys.exit(1)

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
