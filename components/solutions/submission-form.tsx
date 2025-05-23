"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText } from "lucide-react"

export function SubmissionForm() {
  const [uploadMethod, setUploadMethod] = useState<"upload" | "link">("upload")
  const [file, setFile] = useState<File | null>(null)
  const [fileUrl, setFileUrl] = useState("")
  const [title, setTitle] = useState("")
  const [authors, setAuthors] = useState("")
  const [abstract, setAbstract] = useState("")
  const [summary, setSummary] = useState("")
  const [pages, setPages] = useState("")
  const [videoOption, setVideoOption] = useState<"none" | "generate" | "url">("none")
  const [videoContent, setVideoContent] = useState("")
  const [videoUrl, setVideoUrl] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({
      uploadMethod,
      file,
      fileUrl,
      title,
      authors,
      abstract,
      summary,
      pages,
      videoOption,
      videoContent,
      videoUrl,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Research Paper Submission</CardTitle>
          <CardDescription>
            Use this form to submit a new AI-assisted scholarly article on autoimmune diseases research.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium">PDF submission method</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="uploadMethod"
                  checked={uploadMethod === "upload"}
                  onChange={() => setUploadMethod("upload")}
                  className="h-4 w-4 text-primary border-border focus:ring-primary"
                />
                <span>Upload</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="uploadMethod"
                  checked={uploadMethod === "link"}
                  onChange={() => setUploadMethod("link")}
                  className="h-4 w-4 text-primary border-border focus:ring-primary"
                />
                <span>Link</span>
              </label>
            </div>
          </div>

          {uploadMethod === "upload" ? (
            <div className="space-y-2">
              <label className="text-sm font-medium">PDF document</label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center">
                {file ? (
                  <div className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    <span>{file.name}</span>
                    <Button type="button" variant="ghost" size="sm" onClick={() => setFile(null)}>
                      Remove
                    </Button>
                  </div>
                ) : (
                  <>
                    <Upload className="h-10 w-10 text-muted mb-2" />
                    <p className="text-sm text-center mb-2">Drag and drop your PDF here, or click to browse</p>
                    <p className="text-xs text-muted text-center">PDF format only, max 10MB</p>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <label htmlFor="fileUrl" className="text-sm font-medium">
                PDF URL
              </label>
              <input
                id="fileUrl"
                type="url"
                value={fileUrl}
                onChange={(e) => setFileUrl(e.target.value)}
                placeholder="https://example.com/your-paper.pdf"
                className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title of Paper
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="authors" className="text-sm font-medium">
              Author(s)
            </label>
            <input
              id="authors"
              type="text"
              value={authors}
              onChange={(e) => setAuthors(e.target.value)}
              placeholder="John Smith, Jane Doe"
              required
              className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="text-xs text-muted">
              Authors should be listed with separating commas. For each put first name(s) or initials first followed by
              the family name.
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="abstract" className="text-sm font-medium">
              Abstract
            </label>
            <textarea
              id="abstract"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              required
              rows={5}
              className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="text-xs text-muted">
              You can include basic HTML in the abstract for formatting if necessary (e.g. subscripts, italics, line
              breaks).
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="summary" className="text-sm font-medium">
              Paper Summary
            </label>
            <textarea
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
              rows={3}
              className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="text-xs text-muted">
              Please provide a brief summary of your paper. This will be used for indexing and discovery purposes.
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="pages" className="text-sm font-medium">
              Number of pages
            </label>
            <input
              id="pages"
              type="number"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              min="1"
              required
              className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium">Video Presentation (Optional)</p>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="videoOption"
                  checked={videoOption === "none"}
                  onChange={() => setVideoOption("none")}
                  className="h-4 w-4 text-primary border-border focus:ring-primary"
                />
                <span>No video</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="videoOption"
                  checked={videoOption === "generate"}
                  onChange={() => setVideoOption("generate")}
                  className="h-4 w-4 text-primary border-border focus:ring-primary"
                />
                <span>Generate video</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="videoOption"
                  checked={videoOption === "url"}
                  onChange={() => setVideoOption("url")}
                  className="h-4 w-4 text-primary border-border focus:ring-primary"
                />
                <span>Provide video URL</span>
              </label>
            </div>

            {videoOption === "generate" && (
              <div className="space-y-2">
                <p className="text-xs text-muted">
                  Our AI system will generate a video presentation based on your input. Please provide the text content
                  you want to convert into a video (max 300 words).
                </p>
                <textarea
                  value={videoContent}
                  onChange={(e) => setVideoContent(e.target.value)}
                  rows={5}
                  placeholder="Enter the content you want to convert into a video (max 300 words)"
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <div className="flex justify-end">
                  <Button type="button" variant="outline" size="sm">
                    Generate Video
                  </Button>
                </div>
              </div>
            )}

            {videoOption === "url" && (
              <div className="space-y-2">
                <input
                  type="url"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://example.com/your-video"
                  className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button type="submit" size="lg">
          Submit
        </Button>
      </div>
    </form>
  )
}
