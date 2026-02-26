import React, { useState } from 'react';
import {
  Menu,
  MessageSquare,
  Building2,
  User,
  Grid,
  ArrowLeft,
  Settings,
  Check,
  Eye,
  Edit2,
  Trash2,
  Download,
  Upload,
  ChevronDown,
  Plus,
  Home,
  CreditCard,
  Users,
  PiggyBank,
  TrendingUp,
  BarChart2,
  Briefcase,
  FileText,
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for cleaner tailwind class merging
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any; label: string; active?: boolean }) => (
  <div
    className={cn(
      'flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors border-l-4',
      active
        ? 'bg-slate-800 border-blue-500 text-white'
        : 'border-transparent text-slate-300 hover:bg-slate-800 hover:text-white'
    )}
  >
    <Icon size={18} />
    <span className="text-sm font-medium">{label}</span>
    <ChevronDown size={14} className="ml-auto opacity-50" />
  </div>
);

const FormRow = ({ label, required, children, className }: { label: string; required?: boolean; children: React.ReactNode; className?: string }) => (
  <div className={cn("flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-2", className)}>
    <label className="sm:w-1/3 text-sm font-semibold text-slate-600 text-left sm:text-right flex-shrink-0">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="flex-1 max-w-md">{children}</div>
  </div>
);

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400",
      "focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50 disabled:text-slate-500",
      className
    )}
    {...props}
  />
));
Input.displayName = 'Input';

const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm",
      "focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
      className
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = 'Select';

const Checkbox = ({ label, checked, onChange }: { label?: string; checked?: boolean; onChange?: () => void }) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <div className={cn(
      "w-5 h-5 rounded flex items-center justify-center border transition-colors",
      checked ? "bg-teal-600 border-teal-600" : "bg-white border-slate-300"
    )}>
      {checked && <Check size={14} className="text-white" />}
    </div>
    {label && <span className="text-sm text-slate-700">{label}</span>}
  </label>
);

const SectionHeader = ({ title }: { title: string }) => (
  <div className="border-b border-slate-200 pb-2 mb-6 mt-8">
    <h3 className="text-lg font-medium text-slate-700">{title}</h3>
  </div>
);

// --- Tabs Content ---

const BioDataTab = () => {
  return (
    <div className="animate-in fade-in duration-300">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: Customer Details */}
        <div className="flex-1">
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-xl font-semibold text-slate-800">Customer Details</h2>
            <span className="text-sm text-slate-500">Only Phone number & Name are mandatory. Other information will be input by the borrower.</span>
          </div>

          <div className="space-y-1">
            <FormRow label="Customer Type">
              <div className="flex items-center gap-6 h-10">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-4 h-4 rounded-full border-4 border-teal-600 bg-white"></div>
                  <span className="text-sm text-slate-700">Individual</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-4 h-4 rounded-full border border-slate-300 bg-white"></div>
                  <span className="text-sm text-slate-700">Organization</span>
                </label>
              </div>
            </FormRow>
            <FormRow label="First Name" required><Input defaultValue="Andrew Kithinji" /></FormRow>
            <FormRow label="Last Name"><Input defaultValue="M'MBUI" /></FormRow>
            <FormRow label="ID/Passport Number"><Input defaultValue="2459985" /></FormRow>
            <FormRow label="Date of Birth"><Input type="date" defaultValue="1957-12-31" /></FormRow>
            <FormRow label="Gender">
              <div className="flex items-center gap-6 h-10">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-4 h-4 rounded-full border-4 border-teal-600 bg-white"></div>
                  <span className="text-sm text-slate-700">Male</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-4 h-4 rounded-full border border-slate-300 bg-white"></div>
                  <span className="text-sm text-slate-700">Female</span>
                </label>
              </div>
            </FormRow>
            <FormRow label="Phone Number"><Input defaultValue="254717178871" /></FormRow>
            <FormRow label="Mobile Network">
              <Select defaultValue="SAFARICOM">
                <option value="SAFARICOM">SAFARICOM</option>
                <option value="AIRTEL">AIRTEL</option>
              </Select>
            </FormRow>
            <FormRow label="Marital Status">
              <Select defaultValue="Married">
                <option value="Married">Married</option>
                <option value="Single">Single</option>
              </Select>
            </FormRow>
            <FormRow label="Approved Amount"><Input defaultValue="10000" /></FormRow>
            
            <div className="mt-4 space-y-3 pl-4 sm:pl-[33%]">
              <Checkbox label="Approved To Borrow" checked />
              <Checkbox label="Can add Beneficiaries" checked />
              <Checkbox label="Send Invitation" />
              <Checkbox label="Customer Kyc documents provided?" />
            </div>
          </div>
        </div>

        {/* Right Column: IPRS Verification */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-slate-50 rounded-lg border border-slate-200 p-5 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                  IPRS Verification
                  <Settings size={16} className="text-slate-400 cursor-pointer hover:text-slate-600" />
                </h3>
                <p className="text-xs text-slate-500 mt-1">To Verify, Customer Must Have A National ID</p>
              </div>
              <img 
                src="https://picsum.photos/seed/andrew/150/150" 
                alt="Profile" 
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-3 mt-6">
              {[
                { label: 'IPRS First Name', value: 'ANDREW' },
                { label: 'IPRS Last Name', value: "M'MBUI" },
                { label: 'IPRS Other Name', value: 'KITHINJI' },
                { label: 'IPRS Date Of Birth', value: '1957-12-31' },
                { label: 'IPRS Gender', value: 'MALE' },
                { label: 'IPRS Serial No.', value: '209796789' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-600 w-32">{item.label}</span>
                  <div className="flex-1 relative">
                    <Input value={item.value} readOnly className="bg-slate-100 pr-8" />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-slate-200 mt-4 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-600 w-32">Verification Status</span>
                  <span className="text-sm font-bold text-green-600">MATCHED</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-600 w-32">IPRS Message</span>
                  <span className="text-sm font-bold text-green-600">ID Details Fetched Successfully</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="mt-8 max-w-3xl">
        <SectionHeader title="Contact Details" />
        <FormRow label="Email"><Input placeholder="e.g user@example.com" /></FormRow>
        <FormRow label="Po Box"><Input placeholder="e.g 37425 - 00100" /></FormRow>
        <FormRow label="Town/ City"><Input placeholder="e.g Nairobi" /></FormRow>
        <FormRow label="Physical Address"><Input placeholder="e.g Hse 3, Giga-Apartments, Kirwa rd, Upper hill" /></FormRow>
        <FormRow label="Nationality">
          <Select defaultValue="Kenya (+254)">
            <option value="Kenya (+254)">Kenya (+254)</option>
          </Select>
        </FormRow>

        <SectionHeader title="Membership details" />
        <FormRow label="Membership No"><Input /></FormRow>
        <FormRow label="Employee No"><Input /></FormRow>
        <FormRow label="Branch" required>
          <Select defaultValue="">
            <option value="" disabled>--SELECT--</option>
            <option value="HQ">Headquarters</option>
          </Select>
        </FormRow>

        <SectionHeader title="Occupation/ Employment/ Business details" />
        <FormRow label="Occupation" required><Input defaultValue="Businessman" /></FormRow>
        <FormRow label="Employer/ Business details" required>
          <textarea className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[80px]" defaultValue="Shop" />
        </FormRow>
        <FormRow label="Work Address" required><Input defaultValue="Njiru" /></FormRow>
        <FormRow label="Monthly Income" required><Input defaultValue="30000" /></FormRow>
        <FormRow label="Other income sources" required>
          <textarea className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[80px]" defaultValue="Farming" />
        </FormRow>

        <SectionHeader title="User categories" />
        {[
          { label: 'Labels', val: 'Default' },
          { label: 'Introducers (0)', val: 'Nothing selected' },
          { label: 'Guarantors (0)', val: 'Nothing selected' },
          { label: 'Rating', val: '--SELECT--' },
          { label: 'Organization', val: '--SELECT--' },
          { label: 'Customer Group', val: '--SELECT--' },
        ].map((item, i) => (
          <FormRow key={i} label={item.label}>
            <div className="flex gap-2">
              <Select defaultValue={item.val}>
                <option value={item.val}>{item.val}</option>
              </Select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition-colors shadow-sm">
                <Plus size={18} />
              </button>
            </div>
          </FormRow>
        ))}
        <FormRow label="Sales Representative">
          <Select defaultValue="Eric Mwendwa">
            <option value="Eric Mwendwa">Eric Mwendwa</option>
          </Select>
        </FormRow>
        <FormRow label="Collections Officer">
          <Select defaultValue="">
            <option value="" disabled>--SELECT--</option>
          </Select>
        </FormRow>

        <SectionHeader title="Products" />
        <FormRow label="Loan Products">
          <Select defaultValue="Unsecured Weekly Loan">
            <option value="Unsecured Weekly Loan">Unsecured Weekly Loan</option>
          </Select>
        </FormRow>

        <SectionHeader title="USSD Authentication" />
        <FormRow label="IAM Phone Number"><Input defaultValue="254717178871" /></FormRow>
        <FormRow label="IAM Full Name"><Input defaultValue="Andrew Kithinji M'bui" className="bg-slate-100" readOnly /></FormRow>

        <div className="flex items-center gap-3 mt-10 pl-4 sm:pl-[33%] pb-20">
          <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 font-medium text-sm shadow-sm transition-colors">
            Cancel
          </button>
          <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 font-medium text-sm shadow-sm transition-colors">
            Save & Back
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium text-sm shadow-sm transition-colors flex items-center gap-2">
            Save & Verify
          </button>
        </div>
      </div>
    </div>
  );
};

const NextOfKinTab = () => {
  const data = [
    { first: 'Abigael', last: 'Karambu', gender: 'FEMALE', rel: 'CHILD', phone: '0701186533', type: 'Referee' },
    { first: 'Lucy', last: 'Leminasia', gender: 'FEMALE', rel: 'SPOUSE', phone: '0722370393', type: 'Next of Kin' },
    { first: 'Paul', last: 'Muriungi', gender: 'MALE', rel: 'SIBLING', phone: '0741844041', type: 'Next of Kin' },
    { first: 'Susan', last: 'Kagwiria', gender: '', rel: 'CHILD', phone: '0728763860', type: 'Referee' },
  ];

  return (
    <div className="animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-slate-800">Next of Kin / Referees</h2>
        <div className="flex gap-2">
          <button className="p-2 border border-slate-300 rounded-md hover:bg-slate-50 text-slate-600 shadow-sm">
            <Eye size={16} />
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium text-sm shadow-sm transition-colors flex items-center gap-2">
            <Plus size={16} /> Add next of kin / referee
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg border border-slate-200 shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-600 uppercase bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 font-semibold">First Name</th>
              <th className="px-4 py-3 font-semibold">Last Name</th>
              <th className="px-4 py-3 font-semibold">Gender</th>
              <th className="px-4 py-3 font-semibold">Relationship</th>
              <th className="px-4 py-3 font-semibold">DOB</th>
              <th className="px-4 py-3 font-semibold">Id Number</th>
              <th className="px-4 py-3 font-semibold">Phone Number</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">% of Benefit</th>
              <th className="px-4 py-3 font-semibold">Associate Type</th>
              <th className="px-4 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 text-slate-800">{row.first}</td>
                <td className="px-4 py-3 text-slate-800">{row.last}</td>
                <td className="px-4 py-3 text-slate-600">{row.gender}</td>
                <td className="px-4 py-3 text-slate-600">{row.rel}</td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3 text-slate-600">{row.phone}</td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3 text-slate-400">-</td>
                <td className="px-4 py-3 text-slate-600">{row.type}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"><Edit2 size={14} /></button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors"><Eye size={14} /></button>
                    <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 flex items-center justify-between text-sm text-slate-500 bg-slate-50 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <Select className="py-1 px-2 w-20" defaultValue="10">
              <option value="10">10</option>
              <option value="25">25</option>
            </Select>
            <span>entries</span>
          </div>
          <div>Showing 1 to 4 of 4 entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-300 rounded bg-slate-100 text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 border border-blue-500 rounded bg-blue-50 text-blue-600 font-medium">1</button>
            <button className="px-3 py-1 border border-slate-300 rounded bg-slate-100 text-slate-400 cursor-not-allowed">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DocumentsTab = () => {
  return (
    <div className="animate-in fade-in duration-300">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-6">
        <h2 className="text-xl font-semibold text-slate-800">Upload documents <span className="text-sm font-normal text-blue-600 cursor-pointer hover:underline ml-2">See KYC document options here</span></h2>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-sm font-medium text-slate-700">All KYC received and verified</span>
        </label>
      </div>

      <h3 className="text-lg font-medium text-slate-700 mb-4">Uploaded Pictures</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { title: 'IMG-20260225-WA0042.jpg', img: 'https://picsum.photos/seed/andrew/400/300' },
          { title: 'Customer ID (Front)', img: 'https://picsum.photos/seed/idfront/400/300' },
          { title: 'Customer ID (Back)', img: 'https://picsum.photos/seed/idback/400/300' },
        ].map((doc, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm flex flex-col items-center">
            <div className="w-full aspect-[4/3] bg-slate-100 rounded overflow-hidden mb-3 border border-slate-200">
              <img src={doc.img} alt={doc.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <p className="text-sm text-slate-600 mb-3 font-medium">{doc.title}</p>
            <div className="flex gap-4 text-sm">
              <button className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors">
                <Upload size={14} /> Upload New
              </button>
              <button className="flex items-center gap-1 text-red-500 hover:text-red-700 transition-colors">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-slate-700 mb-4">Customer Application Form upload</h3>
        <div className="bg-white rounded border border-slate-200 overflow-hidden shadow-sm mb-4">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-600 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 font-semibold w-12">#</th>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Date Created</th>
                <th className="px-4 py-3 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-400">#</td>
                <td className="px-4 py-3 text-slate-700 font-medium">Andrew KRA .pdf</td>
                <td className="px-4 py-3 text-slate-500">CUSTOMER_SELF_UPDATE_KYC_DOCUMENTS_ACTIVE</td>
                <td className="px-4 py-3 text-slate-500">25/02/2026 08:48</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-3">
                    <button className="text-blue-600 hover:text-blue-800"><Download size={16} /></button>
                    <button className="text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-400">#</td>
                <td className="px-4 py-3 text-slate-700 font-medium">Andrew bus pics.pdf</td>
                <td className="px-4 py-3 text-slate-500">CUSTOMER_SELF_UPDATE_KYC_DOCUMENTS_ACTIVE</td>
                <td className="px-4 py-3 text-slate-500">25/02/2026 09:29</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-3">
                    <button className="text-blue-600 hover:text-blue-800"><Download size={16} /></button>
                    <button className="text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors">
          <Upload size={16} /> Upload New
        </button>
      </div>
    </div>
  );
};

const CommentsTab = () => {
  return (
    <div className="animate-in fade-in duration-300 max-w-4xl">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold text-slate-800">Comments</h2>
        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">0</span>
      </div>
      
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm">
        <div className="bg-white border border-slate-300 rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 transition-shadow">
          <textarea 
            className="w-full p-4 outline-none resize-y min-h-[120px] text-sm text-slate-700 placeholder-slate-400"
            placeholder="Write a comment..."
          ></textarea>
          <div className="flex justify-between items-center p-3 border-t border-slate-100 bg-slate-50">
            <span className="text-xs text-slate-400">0 / 1000</span>
            <button className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors shadow-sm">
              Comment
            </button>
          </div>
        </div>
        
        <div className="text-center py-12 text-slate-500 text-sm">
          No comments yet.
        </div>
      </div>
    </div>
  );
};

const EditHistoryTab = () => {
  const data = [
    { name: "Andrew Kithinji M'MBUI", id: '2459985', gender: 'MALE', phone: '254717178871', approved: 'Yes', amount: '10,000', intro: 'Yes', by: 'Merrick Larry', date: '25/02/2026 11:00' },
    { name: "Andrew Kithinji M'bui", id: '2459985', gender: 'MALE', phone: '254717178871', approved: 'Yes', amount: '10,000', intro: 'Yes', by: 'Merrick Larry', date: '25/02/2026 10:58' },
    { name: "Andrew Kithinji M'bui", id: '2459985', gender: 'MALE', phone: '254717178871', approved: 'Yes', amount: '10,000', intro: 'Yes', by: 'Frank Mocha', date: '25/02/2026 08:39' },
  ];

  return (
    <div className="animate-in fade-in duration-300">
      <div className="overflow-x-auto bg-white rounded-lg border border-slate-200 shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-600 uppercase bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Gender</th>
              <th className="px-4 py-3 font-semibold">Phone Number</th>
              <th className="px-4 py-3 font-semibold">Approved to Borrow</th>
              <th className="px-4 py-3 font-semibold">Approved Amount</th>
              <th className="px-4 py-3 font-semibold">Can Introduce Beneficiaries</th>
              <th className="px-4 py-3 font-semibold">Changes By</th>
              <th className="px-4 py-3 font-semibold">Change Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-medium text-blue-600 hover:underline cursor-pointer">{row.name}</div>
                  <div className="text-xs text-slate-500">{row.id}</div>
                </td>
                <td className="px-4 py-3 text-slate-600">{row.gender}</td>
                <td className="px-4 py-3 text-slate-600">{row.phone}</td>
                <td className="px-4 py-3">
                  <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">{row.approved}</span>
                </td>
                <td className="px-4 py-3 text-slate-600">{row.amount}</td>
                <td className="px-4 py-3">
                  <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">{row.intro}</span>
                </td>
                <td className="px-4 py-3 text-slate-600">{row.by}</td>
                <td className="px-4 py-3 text-slate-600">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 flex items-center justify-between text-sm text-slate-500 bg-slate-50 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <Select className="py-1 px-2 w-20" defaultValue="10">
              <option value="10">10</option>
            </Select>
            <span>entries</span>
          </div>
          <div>Showing 1 to 3 of 3 entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-300 rounded bg-slate-100 text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 border border-blue-500 rounded bg-blue-50 text-blue-600 font-medium">1</button>
            <button className="px-3 py-1 border border-slate-300 rounded bg-slate-100 text-slate-400 cursor-not-allowed">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RawDataTab = () => {
  const dataGroups = [
    {
      title: 'Data',
      items: [
        { key: 'UUID', val: '1cee3f58-c47d-4fcb-a7f1-62eca1c13124' }
      ]
    },
    {
      title: 'Accounts',
      items: []
    },
    {
      title: 'address',
      items: [
        { key: 'physicalAddress', val: '' },
        { key: 'poBox', val: '' },
        { key: 'town', val: '' },
      ]
    },
    {
      title: 'contact',
      items: [
        { key: 'firstName', val: 'Andrew Kithinji' },
        { key: 'fullName', val: "M'MBUI Andrew Kithinji" },
        { key: 'internationalFmtPhoneNumber', val: '+254717178871' },
        { key: 'lastName', val: "M'MBUI" },
        { key: 'phoneNumber', val: '254717178871' },
        { key: 'contactImage', val: 'files/t26699/user_photos/ArShCxwDXhXKVmTt/IMG-20260225-WA0042_ArShCxwDXhXKVmTt.jpg' },
      ]
    },
    {
      title: 'creditData',
      items: [
        { key: 'adminapprovalLimit', val: '10000' },
        { key: 'approvalLimit', val: '10000' },
        { key: 'canIntroduceBeneficiary', val: '1' },
        { key: 'currentBalance', val: '0' },
        { key: 'customerStanding', val: 'NEW' },
        { key: 'depositBalance', val: '0' },
        { key: 'dividendsBalance', val: '0' },
        { key: 'isAutoApprovedForLoan', val: '1' },
        { key: 'membershipBalance', val: '0' },
        { key: 'netBalance', val: '0' },
        { key: 'netDefaultedAmount', val: '0' },
        { key: 'sharesBalance', val: '0' },
      ]
    },
    {
      title: 'employmentDetails',
      items: [
        { key: 'employerOrBusinessDetails', val: 'Shop' },
        { key: 'monthlyIncome', val: '30000' },
        { key: 'occupation', val: 'Businessman' },
        { key: 'otherIncomeSources', val: '' },
        { key: 'workAddress', val: 'Njiru' },
      ]
    }
  ];

  return (
    <div className="animate-in fade-in duration-300 max-w-5xl">
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        {dataGroups.map((group, i) => (
          <div key={i} className="mb-0">
            <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 border-t first:border-t-0">
              <h4 className="text-sm font-bold text-slate-700 capitalize">{group.title}</h4>
            </div>
            {group.items.length > 0 && (
              <table className="w-full text-sm text-left">
                <tbody>
                  {group.items.map((item, j) => (
                    <tr key={j} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-2 text-slate-500 w-1/3 font-medium">{item.key}</td>
                      <td className="px-4 py-2 text-slate-800 break-all">{item.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main App Layout ---

export default function App() {
  const [activeTab, setActiveTab] = useState('Bio Data');

  const tabs = [
    'Bio Data',
    'Next of Kin / Referee',
    'Documents',
    'Comments',
    'Edit History',
    'Raw data',
    'Metadata'
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2A3F54] text-white flex-shrink-0 hidden md:flex flex-col h-screen sticky top-0 shadow-xl z-20">
        <div className="h-14 flex items-center px-4 bg-[#1e2e3e] border-b border-[#1a2836]">
          <div className="font-bold text-lg tracking-wide flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-xs">P</span>
            </div>
            Presta
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <SidebarItem icon={Home} label="Loans" />
          <SidebarItem icon={CreditCard} label="Transactions" />
          <SidebarItem icon={Users} label="Customers" active />
          <SidebarItem icon={PiggyBank} label="Savings & Membership" />
          <SidebarItem icon={TrendingUp} label="Sales" />
          <SidebarItem icon={Settings} label="Setup" />
          <SidebarItem icon={BarChart2} label="Reports" />
          <SidebarItem icon={Briefcase} label="Investment" />
          <SidebarItem icon={FileText} label="Billing" />
        </div>
        <div className="p-4 bg-[#1e2e3e] flex items-center gap-4 text-slate-400">
          <Settings size={18} className="cursor-pointer hover:text-white transition-colors" />
          <div className="flex-1"></div>
          <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-white font-medium text-sm">
            LP
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 shadow-sm z-10 shrink-0">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-slate-500 hover:text-slate-800">
              <Menu size={20} />
            </button>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <div className="hidden sm:flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
              <MessageSquare size={16} />
              <span>Contact Us</span>
              <ChevronDown size={14} />
            </div>
            <div className="hidden sm:flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors">
              <Building2 size={16} />
              <span>Easy Asset Manag...</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors pl-4 border-l border-slate-200">
              <User size={16} />
              <span className="font-medium text-slate-700">Lenny Pre...</span>
              <ChevronDown size={14} />
            </div>
            <Grid size={18} className="cursor-pointer hover:text-blue-600 transition-colors ml-2" />
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-6 bg-white p-3 rounded-md border border-slate-200 shadow-sm">
              <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium transition-colors">
                <ArrowLeft size={16} /> Go Back
              </button>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">New Customer</span>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-t-lg border-b border-slate-200 flex overflow-x-auto hide-scrollbar shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
                    activeTab === tab
                      ? "border-blue-600 text-blue-600 bg-blue-50/30"
                      : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content Container */}
            <div className="bg-white p-6 rounded-b-lg border border-t-0 border-slate-200 shadow-sm min-h-[500px]">
              {activeTab === 'Bio Data' && <BioDataTab />}
              {activeTab === 'Next of Kin / Referee' && <NextOfKinTab />}
              {activeTab === 'Documents' && <DocumentsTab />}
              {activeTab === 'Comments' && <CommentsTab />}
              {activeTab === 'Edit History' && <EditHistoryTab />}
              {activeTab === 'Raw data' && <RawDataTab />}
              {activeTab === 'Metadata' && (
                <div className="text-slate-500 text-center py-12">Metadata content goes here.</div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

