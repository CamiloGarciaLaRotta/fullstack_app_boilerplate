import os;
from flask import Flask, render_template
app = Flask(
    __name__,
    static_folder = '../static/dist',
    template_folder = '../static'
)

APP_STAGE = os.environ['APP_STAGE']

@app.route('/app_stage')
def app_stage():
    return APP_STAGE

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.debug = APP_STAGE == 'DEVELOPMENT'
    app.run()