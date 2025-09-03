package controllers

import (
	"database/sql"
	"encoding/json"
	"net/http"
)

func GetAllTestimonials(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		rows, err := db.Query("SELECT name, message, created_at FROM testimonials ORDER BY created_at DESC")
		if err != nil {
			http.Error(w, "Failed to fetch reviews", http.StatusInternalServerError)
			return
		}
		defer rows.Close()

		var testimonial []map[string]interface{}
		for rows.Next() {
			var name, message string
			var createdAt string
			if err := rows.Scan(&name, &message, &createdAt); err != nil {
				http.Error(w, "Error scanning row", http.StatusInternalServerError)
				return
			}
			testimonial = append(testimonial, map[string]interface{}{
				"name":       name,
				"message":    message,
				"created_at": createdAt,
			})
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(testimonial)
	}
}
