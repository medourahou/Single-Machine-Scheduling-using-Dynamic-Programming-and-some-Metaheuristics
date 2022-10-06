from flask import Flask,Response,json,send_from_directory,request,send_file,safe_join
from flask.helpers import flash
from flask_cors import CORS, cross_origin
import os
import time

from werkzeug.utils import redirect, secure_filename

from dp import dynamicAlgoWrapper
from meta import MetaAlgo
from meta2 import MetaAlgo2
from poly import polynomialAlgo

app = Flask(__name__ 
    ,static_folder='client/build',static_url_path='')
UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = {'txt'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
cors = CORS(app)




@app.route('/api')
@cross_origin()
def Welcome():
    return "Welcome to the API!!!"


@app.route('/download/<fileName>',methods=['GET'])
@cross_origin()
def download(fileName):
    # fileName = request.args.get("file_name") 
    return send_from_directory(app.config['UPLOAD_FOLDER'],fileName,as_attachment=True)


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/upload', methods=['POST'])
@cross_origin()
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return "No file part"
        file = request.files['file']
        typeOfProblem = request.form.get('problem')
        typeOfAlgo = request.form.get('algo')
        if file.filename == '':
            flash('No selected file')
            return "No file is selected"
        if file and allowed_file(file.filename):
            data = file.stream.readlines()
            if len(data)==3 and typeOfProblem=='1':
                    arr = []
                    firstLine = int(data[0].decode('UTF-8').split('\t')[0])
                    secondLine = data[1].decode('UTF-8').split('\t')
                    thirdLine = data[2].decode('UTF-8').split('\t')
                    for i in range(0,firstLine):
                        arr.append([i+1,int(secondLine[i]),int(thirdLine[i])])
                    if typeOfAlgo=="poly":
                        start  = time.time()
                        res = polynomialAlgo(arr)
                        end  = time.time()
                        res['time'] = end-start
                        return Response(json.dumps(res), status=200, mimetype='application/json')
                    elif typeOfAlgo=="meta":
                        start  = time.time()
                        res = MetaAlgo(arr)
                        end  = time.time()
                        res['time'] = end-start
                        return Response(json.dumps(res), status=200, mimetype='application/json')
                    elif typeOfAlgo=="dp":
                        if firstLine<20:
                            start = time.time()
                            res = dynamicAlgoWrapper(1,arr)
                            end = time.time()
                            res["time"] = end-start
                            return Response(json.dumps(res), status=200, mimetype='application/json')
                        else:
                            return Response(json.dumps({"msg":"Sorry But to avoid server problemes the max for DP methode is 20"}), status=400, mimetype='application/json')
                    else:
                        return json.dumps("choose valide algo")
            elif len(data)== 5 and typeOfProblem=='2':
                    arr = []
                    firstLine = int(data[0].decode('UTF-8').split('\t')[0])
                    secondLine = data[1].decode('UTF-8').split('\t')
                    thirdLine = data[2].decode('UTF-8').split('\t')
                    fourthLine = data[3].decode('UTF-8').split('\t')
                    fifthLine = data[4].decode('UTF-8').split('\t')
                    for i in range(0,firstLine):
                        arr.append([i+1,int(secondLine[i]),int(thirdLine[i]),int(fourthLine[i]),int(fifthLine[i])])
                    if typeOfAlgo=="poly":
                        return Response(json.dumps({"msg":"Sorry but Polynomial is not for the second Probleme"}), status=400, mimetype='application/json')
                    elif typeOfAlgo=="meta":
                        start  = time.time()
                        res = MetaAlgo2(arr)
                        end  = time.time()
                        res['time'] = end-start
                        return Response(json.dumps(res), status=200, mimetype='application/json')
                    elif typeOfAlgo=="dp" :
                        if firstLine<20:
                            start = time.time()
                            res = dynamicAlgoWrapper(2,arr)
                            end = time.time()
                            res["time"] = end-start
                            return Response(json.dumps(res), status=200, mimetype='application/json')
                        else:
                            return Response(json.dumps({"msg":"Sorry But to avoid server problemes the max for DP methode is 20"}), status=500, mimetype='application/json')
                    else:
                        return Response(json.dumps("choose valide algo"))
            else:
                return Response(json.dumps({"msg":"Incorrect Data or informations check your files"}),status=400)
        else:
            return Response(json.dumps({"msg":"Please make sure that you upload a valide txt file "}),status=400)
    else:
        return "GET methode not allowed"



@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0')