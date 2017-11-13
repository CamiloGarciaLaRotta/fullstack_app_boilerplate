from flask import Flask, render_template, request, jsonify
import os

APP_STAGE = os.environ['APP_STAGE']

# static folder contains the js/css/img files to be distributed to client
# template folder contains the html templates to be rendered by Flask
app = Flask(__name__, static_folder='../static/dist', template_folder='../static')

@app.route('/')
def index():
    return render_template('index.html', pyvar='hello', server=APP_STAGE)

@app.route('/data', methods=['GET'])
def data():
    # print(request.args)
    # resp = 'Server ACKs : {}'.format(request.args.get('data'))
    print('HITTT')
    return jsonify({'response': 'HITTT'})


if __name__ == '__main__':
    app.debug = APP_STAGE == 'DEVELOPMENT'
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
