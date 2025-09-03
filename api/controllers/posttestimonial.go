package controllers

import (
	"database/sql"
	"encoding/json"
	"net/http"
)

type Testimonial struct {
	Name    string `json:"name"`
	Message string `json:"message"`
}

func PostTestimonial(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		var testimonial Testimonial
		if err := json.NewDecoder(r.Body).Decode(&testimonial); err != nil {
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		_, err := db.Exec("INSERT INTO testimonials (name, message) VALUES (?, ?)", testimonial.Name, testimonial.Message)
		if err != nil {
			http.Error(w, "Failed to insert review", http.StatusInternalServerError)
			return
		}

		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(map[string]string{"status": "success"})
	}
}
