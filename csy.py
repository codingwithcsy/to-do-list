from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

tasks = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/tasks', methods=['GET', 'POST'])
def task_list():
    if request.method == 'GET':
        return jsonify(tasks)
    elif request.method == 'POST':
        task = request.json['task']
        tasks.append(task)
        return jsonify({'message': 'Task added'})

if __name__ == '__main__':
    app.run(debug=True)
