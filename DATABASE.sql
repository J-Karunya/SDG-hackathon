

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    user_type ENUM('student', 'teacher') NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE Subjects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE StudentProgress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    subject_id INT,
    topics_completed INT,
    total_topics INT,
    study_hours INT,
    mastery_percentage DECIMAL(5,2),
    weak_areas TEXT,
    strong_areas TEXT,
    FOREIGN KEY (student_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES Subjects(id) ON DELETE CASCADE
);

CREATE TABLE Tests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subject_id INT,
    teacher_id INT,
    title VARCHAR(255),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    duration INT,
    FOREIGN KEY (subject_id) REFERENCES Subjects(id) ON DELETE SET NULL,
    FOREIGN KEY (teacher_id) REFERENCES Users(id) ON DELETE SET NULL
);

CREATE TABLE StudentTestScores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    test_id INT,
    score DECIMAL(5,2),
    accuracy_percentage DECIMAL(5,2),
    FOREIGN KEY (student_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (test_id) REFERENCES Tests(id) ON DELETE CASCADE
);

CREATE TABLE Leaderboard (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    total_score DECIMAL(6,2),
    exams_completed INT,
    rank_position INT,
    FOREIGN KEY (student_id) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE students (
    ID INT PRIMARY KEY,
    Name VARCHAR(255),
    Department VARCHAR(50),
    Year INT,
    Weak_Topics TEXT
);
CREATE TABLE report_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO


