import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  content: string[];
  author: string;
  date: string;
  category: string;
  images: string[];
  slug: string;
}

const blogPosts: Record<string, BlogPost> = {
  'understanding-oregon-no-fault-divorce-laws': {
    id: 1,
    title: "Understanding Oregon's No-Fault Divorce Laws",
    content: [
      "Oregon's no-fault divorce system has simplified the process of ending a marriage while protecting both parties' rights. Unlike fault-based systems that require proving wrongdoing, Oregon allows couples to cite 'irreconcilable differences' as grounds for divorce. This approach reduces conflict and allows couples to focus on practical matters rather than assigning blame.",
      
      "The Process of Filing for Divorce in Oregon\n\nTo file for divorce in Oregon, at least one spouse must have been a resident of the state for six months prior to filing. The process begins with filing a Petition for Dissolution of Marriage in the circuit court of the county where either spouse lives. The filing spouse (petitioner) must serve the other spouse (respondent) with divorce papers, after which there's a mandatory 90-day waiting period before the divorce can be finalized.",
      
      "Property Division and Asset Distribution\n\nOregon follows the principle of 'equitable distribution,' meaning that marital property should be divided fairly, though not necessarily equally. Courts consider various factors when dividing assets:\n- Length of the marriage\n- Each spouse's financial needs and resources\n- Future earning capacity of each spouse\n- Contributions to the marriage, including homemaking\n- Tax consequences of property division",
      
      "Child Custody and Support Considerations\n\nWhen children are involved, Oregon courts prioritize their best interests. The state encourages both parents to maintain meaningful relationships with their children through:\n- Joint custody arrangements when appropriate\n- Detailed parenting plans\n- Fair child support calculations based on the Oregon Child Support Guidelines\n- Consideration of children's emotional and developmental needs",
      
      "Recent Legal Updates and Trends\n\nRecent developments in Oregon divorce law include:\n- Enhanced online filing systems for greater accessibility\n- Updated guidelines for virtual court appearances\n- Modified procedures for handling domestic violence cases\n- Revised approaches to handling retirement accounts and digital assets",
      
      "Practical Tips for a Smooth Divorce Process\n1. Gather all financial documents early\n2. Consider mediation to reduce costs and conflict\n3. Maintain clear communication through proper channels\n4. Focus on long-term outcomes rather than short-term wins\n5. Seek emotional support through counseling or support groups",
      
      "The Role of Legal Representation\n\nWhile not required, having an experienced family law attorney can be invaluable during divorce proceedings. They can:\n- Ensure proper filing of all documents\n- Protect your legal rights\n- Navigate complex property division\n- Advocate for fair custody arrangements\n- Handle negotiations with opposing counsel",
      
      "Looking Ahead: Post-Divorce Considerations\n\nAfter divorce, several matters require attention:\n- Implementing the parenting plan\n- Executing property transfers\n- Updating estate planning documents\n- Modifying insurance policies\n- Establishing new financial accounts"
    ],
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Family Law",
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1581017316471-1f6ef7ce6fd3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&q=80&w=1200"
    ],
    slug: "understanding-oregon-no-fault-divorce-laws"
  },
  'business-formation-guide': {
    id: 2,
    title: "Business Formation Guide: Choosing the Right Structure",
    content: [
      "Selecting the right business structure is one of the most crucial decisions when starting a company in Oregon. This choice affects everything from daily operations to taxes and personal liability. Understanding the advantages and disadvantages of each business structure is essential for making an informed decision.",
      
      "Sole Proprietorship\n\nThe simplest business structure, sole proprietorships are ideal for individual entrepreneurs:\nAdvantages:\n- Easy and inexpensive to form\n- Complete control over business decisions\n- Direct profit access\n- Simplified tax reporting\nDisadvantages:\n- Personal liability for business debts\n- Limited access to capital\n- Difficulty transferring ownership",
      
      "Limited Liability Company (LLC)\n\nLLCs offer flexibility and liability protection:\nKey Features:\n- Personal asset protection\n- Pass-through taxation\n- Management flexibility\n- Fewer formal requirements than corporations\nConsiderations:\n- Operating agreement importance\n- Member roles and responsibilities\n- Oregon-specific compliance requirements",
      
      "Corporations (C-Corps and S-Corps)\n\nCorporations provide the strongest liability protection but require more formalities:\nC-Corporation Features:\n- Unlimited growth potential\n- Easy transfer of ownership\n- Attractive to investors\n- Double taxation considerations\n\nS-Corporation Benefits:\n- Pass-through taxation\n- Limited number of shareholders\n- Specific eligibility requirements",
      
      "Partnership Structures\n\nPartnerships come in several forms:\nGeneral Partnerships:\n- Shared management and liability\n- Simple formation\n- Partner responsibilities\n\nLimited Partnerships:\n- Limited partner liability protection\n- Investment opportunities\n- Management structure requirements",
      
      "Oregon-Specific Requirements\n\nEach business structure has specific Oregon requirements:\n- Registration procedures\n- State fees and taxes\n- Annual reporting obligations\n- Business license requirements\n- Employment regulations",
      
      "Tax Implications\n\nTax considerations vary by structure:\n- Federal tax obligations\n- Oregon state taxes\n- Self-employment taxes\n- Payroll tax requirements\n- Available deductions and credits",
      
      "Making the Final Decision\n\nFactors to consider:\n1. Liability protection needs\n2. Tax efficiency goals\n3. Management preferences\n4. Growth plans\n5. Investment requirements\n6. Exit strategy considerations"
    ],
    author: "Michael Chen",
    date: "March 12, 2024",
    category: "Business Law",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=1200"
    ],
    slug: "business-formation-guide"
  },
  'personal-injury-claims-guide': {
    id: 3,
    title: "Personal Injury Claims: What You Need to Know",
    content: [
      "Personal injury claims in Oregon require understanding specific legal procedures, deadlines, and requirements. Whether you've been injured in a car accident, slip and fall, or other incident, knowing your rights and the claims process is crucial for securing fair compensation.",
      
      "Types of Personal Injury Claims\n\nOregon recognizes various personal injury cases:\n- Auto accidents\n- Premises liability\n- Medical malpractice\n- Product liability\n- Workplace injuries\n- Wrongful death\nEach type has specific legal requirements and considerations.",
      
      "Statute of Limitations\n\nOregon's statute of limitations for personal injury claims is generally two years from the date of injury. However, exceptions exist:\n- Discovery rule applications\n- Claims against government entities\n- Minor victim considerations\n- Medical malpractice specifics",
      
      "Proving Negligence\n\nSuccessful claims require proving four elements:\n1. Duty of care existed\n2. Breach of duty occurred\n3. Causation between breach and injury\n4. Actual damages resulted\n\nEvidence collection and documentation are crucial for establishing these elements.",
      
      "Compensation Types\n\nAvailable damages may include:\nEconomic Damages:\n- Medical expenses\n- Lost wages\n- Property damage\n- Future care costs\n\nNon-Economic Damages:\n- Pain and suffering\n- Emotional distress\n- Loss of enjoyment\n- Permanent disability",
      
      "Insurance Company Interactions\n\nDealing with insurers requires caution:\n- Initial statement considerations\n- Settlement offer evaluation\n- Negotiation strategies\n- Documentation requirements\n- Communication best practices",
      
      "Legal Representation Benefits\n\nAn experienced attorney can:\n- Evaluate claim strength\n- Handle insurance negotiations\n- Gather necessary evidence\n- Calculate fair compensation\n- Meet legal deadlines\n- Represent in litigation",
      
      "Recent Case Examples\n\nRecent Oregon personal injury cases demonstrate:\n- Compensation trends\n- Liability determinations\n- Settlement strategies\n- Trial outcomes\n- Legal precedents"
    ],
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    category: "Personal Injury",
    images: [
      "https://images.unsplash.com/photo-1581093458791-9d15482778a1?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=1200"
    ],
    slug: "personal-injury-claims-guide"
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug || ''];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Blog Post Not Found</h2>
          <p className="text-gray-600">The requested article does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center text-gray-300 space-x-6">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {post.date}
            </div>
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
              {post.category}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            src={post.images[0]}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <React.Fragment key={index}>
                  <p className="mb-6">{paragraph}</p>
                  {index > 0 && index < post.images.length && index % 2 === 0 && (
                    <img
                      src={post.images[index]}
                      alt={`${post.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg my-8"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}