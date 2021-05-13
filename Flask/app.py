from flask import Flask
app = Flask(__name__)


@app.route('/')
def index():
    return """
    <ul>
        <li>Home<li>
        <li>about<li>
        <li>article<li>
        <li>contatct<li>
    <ul>
    """


app.run(port=5012, debug=True)
