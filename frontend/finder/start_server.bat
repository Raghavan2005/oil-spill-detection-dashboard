@echo off
echo Setting up the environment...


:: Activate the virtual environment
echo Activating virtual environment...
call env\Scripts\activate

echo Installing dependencies...
pip install -r requirements.txt
:: Start the Streamlit app
echo Starting Streamlit server...
streamlit run app.py

:: Keep the command window open
pause
