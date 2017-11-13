from flask import Flask, render_template
import os;

APP_STAGE = os.environ['APP_STAGE']

app = Flask(
    __name__,
    static_folder = '../static/dist',
    template_folder = '../static'
)

@app.route('/')
def index():
    # trying to pass variable bar to App component mounted on index.html
    return render_template('index.html', 
                            pyvar = 'hello',
                            server = APP_STAGE)

if __name__ == '__main__':
    app.debug = APP_STAGE == 'DEVELOPMENT'
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
