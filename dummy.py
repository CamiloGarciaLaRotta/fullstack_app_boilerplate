import sys, os
import logging
from flask import Flask
app = Flask(__name__)

app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)

@app.route('/app_stage')
def index():
    return 'Nepe from {}'.format(os.environ['APP_STAGE'])

if __name__ == '__main__':
    app.run()
