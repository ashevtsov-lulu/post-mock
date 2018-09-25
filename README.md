# POST mock

```
docker run -d -p 1080:1080 -p 1090:1090 jamesdbloom/mockserver
virtualenv .venv
source .venv/bin/activate
pip install -r requirements.txt
python mock.py
curl -v -X POST http://127.0.0.1:1080/random
```
