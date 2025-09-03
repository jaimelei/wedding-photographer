package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	"api/controllers"

	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
)

// Global CORS middleware
func withCORS(h http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		h.ServeHTTP(w, r)
	}
}

func main() {
	// Load .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("❌ Error loading .env file")
	}

	// Read env variables
	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASS")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	// Create DSN
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", dbUser, dbPass, dbHost, dbPort, dbName)

	// Connect to DB
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("❌ Error opening database:", err)
	}
	defer db.Close()

	// Test DB connection
	err = db.Ping()
	if err != nil {
		log.Fatal("❌ Cannot connect to database:", err)
	}

	fmt.Println("✅ Successfully connected to MySQL!")

	// Routes
	http.HandleFunc("/api/post-testimonial", withCORS(controllers.PostTestimonial(db)))
	http.HandleFunc("/api/get-all-testimonials", withCORS(controllers.GetAllTestimonials(db)))

	// Run server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	fmt.Println("🚀 Server running on port", port)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, nil))
}
