# use the official python image.
FROM python:3.9-slim

# set the working directory
WORKDIR /app

# install dependencies
COPY backend/requirements.txt ./
RUN pip install -r requirements.txt

# copy source code
COPY backend/ ./

# expose port 5000
EXPOSE 5000

# run the flask app
CMD [ "python", "app.py" ]
