"use client";

import { useState } from "react";
import { MessageCircle, Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { buildBulkInquiryLink } from "@/lib/whatsapp";

const PURPOSES = ["Retail", "Wedding", "Corporate Gift", "Personal"];

export function InquiryModal({
  trigger,
}: {
  trigger?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const link = buildBulkInquiryLink({
      name,
      phone,
      quantityKg: quantity,
      purpose,
      message,
    });
    window.open(link, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="maroon" size="lg">
            <Package className="h-4 w-4 mr-2" />
            Request a Bulk Quote
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bulk &amp; Corporate Inquiry</DialogTitle>
          <DialogDescription>
            Share a few details and we'll send you our current bulk rate card
            on WhatsApp — no order is placed here.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="e.g. Rohan Mehta"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone / WhatsApp Number</Label>
            <Input
              id="phone"
              placeholder="e.g. +91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="quantity">Quantity Needed (kg)</Label>
              <Input
                id="quantity"
                placeholder="e.g. 50"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Purpose</Label>
              <Select value={purpose} onValueChange={setPurpose}>
                <SelectTrigger>
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  {PURPOSES.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your requirement — varieties, packaging, delivery timeline..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <Button variant="whatsapp" className="w-full" onClick={handleSubmit}>
            <MessageCircle className="h-4 w-4 mr-1.5" />
            Send Inquiry on WhatsApp
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            This opens WhatsApp with your details pre-filled. We typically
            respond within business hours.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
