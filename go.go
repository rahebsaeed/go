package main

import (
    "fmt"
    "github.com/labstack/echo/v4"
    "github.com/labstack/echo/v4/middleware"
)

func main() {
    e := echo.New()

    // Serve static files from the "public" directory
    e.Use(middleware.Static("public"))

    // Serve the index.html file
    e.File("/", "public/index.html")

    fmt.Println("Server listening on port :8080")
    e.Logger.Fatal(e.Start(":8080"))
}
