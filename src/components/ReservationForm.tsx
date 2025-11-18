import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Building2, Calendar, Users, MapPin } from "lucide-react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contactNo: "",
    event: "",
    date: "",
    time: "",
    pax: "",
    details: "",
    equipment: {
      tables: false,
      chairs: false,
      tent: false,
      stage: false,
      others: "",
    },
    facilities: {
      multipurpose: false,
      brgyHallConference: false,
      brgyHallQuadrangle: false,
      openCourtBlock: false,
      openCourtUpper: false,
      outpostSito1: false,
      outpostSito2: false,
      outpostKabayaan: false,
      outpostSito4: false,
      courtSito6: false,
      outpostSito7: false,
      outpostSito8: false,
      others: "",
    },
    acknowledgments: {
      understand: false,
      certify: false,
      read: false,
      waive: false,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.address || !formData.contactNo || !formData.event) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Validate acknowledgments
    if (!formData.acknowledgments.understand || 
        !formData.acknowledgments.certify || 
        !formData.acknowledgments.read || 
        !formData.acknowledgments.waive) {
      toast.error("Please acknowledge all terms and conditions");
      return;
    }

    toast.success("Reservation submitted successfully! You will be contacted for approval.");
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* User Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Juan Dela Cruz"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactNo">Contact Number *</Label>
              <Input
                id="contactNo"
                value={formData.contactNo}
                onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                placeholder="09XX XXX XXXX"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="House No., Street, Barangay"
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Event Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Event Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="event">Event *</Label>
            <Input
              id="event"
              value={formData.event}
              onChange={(e) => setFormData({ ...formData, event: e.target.value })}
              placeholder="Birthday Party, Meeting, etc."
              required
            />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pax">Number of Guests</Label>
              <Input
                id="pax"
                type="number"
                value={formData.pax}
                onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
                placeholder="50"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="details">Additional Details</Label>
            <Textarea
              id="details"
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="Any special requirements or notes..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Equipment Requested */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Equipment Requested
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="tables"
                checked={formData.equipment.tables}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    equipment: { ...formData.equipment, tables: checked as boolean },
                  })
                }
              />
              <Label htmlFor="tables">Tables</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="chairs"
                checked={formData.equipment.chairs}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    equipment: { ...formData.equipment, chairs: checked as boolean },
                  })
                }
              />
              <Label htmlFor="chairs">Chairs</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="tent"
                checked={formData.equipment.tent}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    equipment: { ...formData.equipment, tent: checked as boolean },
                  })
                }
              />
              <Label htmlFor="tent">Tent</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="stage"
                checked={formData.equipment.stage}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    equipment: { ...formData.equipment, stage: checked as boolean },
                  })
                }
              />
              <Label htmlFor="stage">Stage</Label>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Label htmlFor="equipmentOthers">Others (Please specify)</Label>
            <Input
              id="equipmentOthers"
              value={formData.equipment.others}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  equipment: { ...formData.equipment, others: e.target.value },
                })
              }
              placeholder="Sound system, microphone, etc."
            />
          </div>
        </CardContent>
      </Card>

      {/* Facilities Requested */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Facilities Requested
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="multipurpose"
                checked={formData.facilities.multipurpose}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    facilities: { ...formData.facilities, multipurpose: checked as boolean },
                  })
                }
              />
              <Label htmlFor="multipurpose">Multipurpose Function</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="brgyHallConference"
                checked={formData.facilities.brgyHallConference}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    facilities: { ...formData.facilities, brgyHallConference: checked as boolean },
                  })
                }
              />
              <Label htmlFor="brgyHallConference">Brgy Hall - Conference</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="brgyHallQuadrangle"
                checked={formData.facilities.brgyHallQuadrangle}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    facilities: { ...formData.facilities, brgyHallQuadrangle: checked as boolean },
                  })
                }
              />
              <Label htmlFor="brgyHallQuadrangle">Brgy Hall - Quadrangle</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="openCourtBlock"
                checked={formData.facilities.openCourtBlock}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    facilities: { ...formData.facilities, openCourtBlock: checked as boolean },
                  })
                }
              />
              <Label htmlFor="openCourtBlock">Open Court - Block</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="openCourtUpper"
                checked={formData.facilities.openCourtUpper}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    facilities: { ...formData.facilities, openCourtUpper: checked as boolean },
                  })
                }
              />
              <Label htmlFor="openCourtUpper">Open Court - Upper P.</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="outpostSito1"
                checked={formData.facilities.outpostSito1}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    facilities: { ...formData.facilities, outpostSito1: checked as boolean },
                  })
                }
              />
              <Label htmlFor="outpostSito1">Outpost - Sito 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="outpostSito2"
                checked={formData.facilities.outpostSito2}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    facilities: { ...formData.facilities, outpostSito2: checked as boolean },
                  })
                }
              />
              <Label htmlFor="outpostSito2">Outpost - Sito 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="outpostKabayaan"
                checked={formData.facilities.outpostKabayaan}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    facilities: { ...formData.facilities, outpostKabayaan: checked as boolean },
                  })
                }
              />
              <Label htmlFor="outpostKabayaan">Outpost - Kabayaan</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="outpostSito4"
                checked={formData.facilities.outpostSito4}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    facilities: { ...formData.facilities, outpostSito4: checked as boolean },
                  })
                }
              />
              <Label htmlFor="outpostSito4">Outpost - Sito 4</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="courtSito6"
                checked={formData.facilities.courtSito6}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    facilities: { ...formData.facilities, courtSito6: checked as boolean },
                  })
                }
              />
              <Label htmlFor="courtSito6">Court - Sito 6</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="outpostSito7"
                checked={formData.facilities.outpostSito7}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    facilities: { ...formData.facilities, outpostSito7: checked as boolean },
                  })
                }
              />
              <Label htmlFor="outpostSito7">Outpost - Sito 7</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="outpostSito8"
                checked={formData.facilities.outpostSito8}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    facilities: { ...formData.facilities, outpostSito8: checked as boolean },
                  })
                }
              />
              <Label htmlFor="outpostSito8">Outpost - Sito 8</Label>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Label htmlFor="facilitiesOthers">Others (Please specify)</Label>
            <Input
              id="facilitiesOthers"
              value={formData.facilities.others}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  facilities: { ...formData.facilities, others: e.target.value },
                })
              }
              placeholder="Specify other facilities"
            />
          </div>
        </CardContent>
      </Card>

      {/* Terms and Acknowledgment */}
      <Card className="border-warning">
        <CardHeader>
          <CardTitle>Terms and Acknowledgment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-muted rounded-lg space-y-2 text-sm">
            <p className="font-semibold">STRICTLY PROHIBITED:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Littering and vandalism</li>
              <li>Use of proper attire</li>
              <li>Entering premises under the influence of alcohol or bringing alcoholic beverages</li>
              <li>Display/posting of unauthorized promotional paraphernalia</li>
              <li>Smoking (cigarettes or vapes) and spitting inside premises</li>
              <li>Gambling or wagering of bets</li>
              <li>Unauthorized parking within/outside the barangay facility</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="understand"
                checked={formData.acknowledgments.understand}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    acknowledgments: { ...formData.acknowledgments, understand: checked as boolean },
                  })
                }
              />
              <Label htmlFor="understand" className="text-sm">
                I acknowledge that I understand the content of this document and voluntarily signed it.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="certify"
                checked={formData.acknowledgments.certify}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    acknowledgments: { ...formData.acknowledgments, certify: checked as boolean },
                  })
                }
              />
              <Label htmlFor="certify" className="text-sm">
                I further certify to the correctness of the details stated above.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="read"
                checked={formData.acknowledgments.read}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    acknowledgments: { ...formData.acknowledgments, read: checked as boolean },
                  })
                }
              />
              <Label htmlFor="read" className="text-sm">
                I hereby certify that I have read, agree to abide by, and acknowledge the policies and conditions pertaining to the reservation/use of Brgy. West Rembo facilities.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="waive"
                checked={formData.acknowledgments.waive}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    acknowledgments: { ...formData.acknowledgments, waive: checked as boolean },
                  })
                }
              />
              <Label htmlFor="waive" className="text-sm">
                I hereby waive any liability due to injury, loss or damage to personal property associated with activities participated in this event.
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button type="submit" size="lg" className="w-full md:w-auto">
          Submit Reservation
        </Button>
      </div>
    </form>
  );
};

export default ReservationForm;
