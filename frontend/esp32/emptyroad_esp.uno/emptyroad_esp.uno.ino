// ESP32 + Dual DC Motors + IR Sensor Code (No Speed Control)

// Pin Definitions
const int motorIn1 = 26;  // Motor 1 driver IN1
const int motorIn2 = 27;  // Motor 1 driver IN2

const int motorIn3 = 14;  // Motor 2 driver IN3
const int motorIn4 = 12;  // Motor 2 driver IN4

const int irSensor = 33;  // IR sensor output pin

void setup() {
  pinMode(motorIn1, OUTPUT);
  pinMode(motorIn2, OUTPUT);
  pinMode(motorIn3, OUTPUT);
  pinMode(motorIn4, OUTPUT);
  pinMode(irSensor, INPUT);

  Serial.begin(115200);
}

void loop() {
  int irValue = digitalRead(irSensor);

  if (irValue == LOW) { // Object detected
    Serial.println("Object Detected - Motors ON");
    digitalWrite(motorIn1, HIGH);
    digitalWrite(motorIn2, LOW);
    digitalWrite(motorIn3, HIGH);
    digitalWrite(motorIn4, LOW);
  } else { // No object detected
    Serial.println("No Object - Motors OFF");
    digitalWrite(motorIn1, LOW);
    digitalWrite(motorIn2, LOW);
    digitalWrite(motorIn3, LOW);
    digitalWrite(motorIn4, LOW);
  }

  delay(100); // Short delay for stability
} 
