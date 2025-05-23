import { Eye, ThumbsUp, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface LeaderboardEntry {
  id: string
  username: string
  avatar?: string
  researchTitle: string
  researchSummary: string
  status: "Accepted" | "Pending"
  votes: number
}

interface LeaderboardProps {
  entries: LeaderboardEntry[]
}

export function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-12 gap-4 py-3 px-4 text-sm font-medium text-muted">
        <div className="col-span-3">Username</div>
        <div className="col-span-4">Research Title</div>
        <div className="col-span-2">Research Summary</div>
        <div className="col-span-1 text-center">Status</div>
        <div className="col-span-2 text-right">Access</div>
      </div>

      {entries.map((entry) => (
        <div
          key={entry.id}
          className="grid grid-cols-12 gap-4 items-center py-4 px-4 rounded-lg border border-border bg-background"
        >
          <div className="col-span-3 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full overflow-hidden bg-muted">
              {entry.avatar ? (
                <Image
                  src={entry.avatar || "/placeholder.svg"}
                  alt={entry.username}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-xs font-medium">
                  {entry.username.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <span className="font-medium">{entry.username}</span>
          </div>

          <div className="col-span-4">
            <h4 className="font-medium">{entry.researchTitle}</h4>
          </div>

          <div className="col-span-2">
            <p className="text-sm text-muted line-clamp-2">{entry.researchSummary}</p>
          </div>

          <div className="col-span-1 flex justify-center">
            <Badge variant={entry.status === "Accepted" ? "success" : "warning"} className="whitespace-nowrap">
              {entry.status}
            </Badge>
          </div>

          <div className="col-span-2 flex justify-end items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Eye className="h-3.5 w-3.5" />
              <span>View</span>
            </Button>

            <Button variant="outline" size="sm" className="h-8 gap-1">
              <FileText className="h-3.5 w-3.5" />
              <span>PDF</span>
            </Button>

            <Button variant="ghost" size="sm" className="h-8 gap-1">
              <ThumbsUp className="h-3.5 w-3.5" />
              <span>{entry.votes}</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
