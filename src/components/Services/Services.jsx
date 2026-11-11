import React, { useState, useEffect } from 'react';
import styles from './Services.module.css';
import { fetchServices, calculateQuote, submitInquiry, FALLBACK_SERVICES } from '../../api/services';
import { MessageSquare, X, Send, Clock, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export function Services() {
  const [services, setServices] = useState(FALLBACK_SERVICES);
  const [selectedServiceId, setSelectedServiceId] = useState(FALLBACK_SERVICES[0].id);
  const [selectedFeatureIds, setSelectedFeatureIds] = useState([
    FALLBACK_SERVICES[0].features[0]?.id || '',
    FALLBACK_SERVICES[0].features[1]?.id || ''
  ]);
  const [quote, setQuote] = useState({
    totalCost: 1950,
    totalDeliveryDays: 9,
    includedFeatures: ['OAuth 2.0 & Role-Based Access Control']
  });

  // Chat State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: '1',
      sender: 'agent',
      text: "Hello! Welcome to Sonu Jha Technical Services. Which project are you planning to build?",
      time: "Just now"
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientName, setClientName] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  useEffect(() => {
    fetchServices().then(data => {
      if (data && data.length > 0) {
        setServices(data);
      }
    });
  }, []);

  const activeService = services.find(s => s.id === selectedServiceId) || services[0];

  useEffect(() => {
    calculateQuote(selectedServiceId, selectedFeatureIds).then(res => {
      if (res) {
        setQuote(res);
      }
    });
  }, [selectedServiceId, selectedFeatureIds]);

  const handleServiceSelect = (id) => {
    setSelectedServiceId(id);
    const target = services.find(s => s.id === id);
    if (target && target.features && target.features.length > 0) {
      setSelectedFeatureIds([target.features[0].id]);
    } else {
      setSelectedFeatureIds([]);
    }
  };

  const toggleFeature = (featId) => {
    setSelectedFeatureIds(prev =>
      prev.includes(featId) ? prev.filter(id => id !== featId) : [...prev, featId]
    );
  };

  const handleOpenChatWithService = (serviceId) => {
    setSelectedServiceId(serviceId);
    setIsChatOpen(true);
    const target = services.find(s => s.id === serviceId);
    setChatMessages(prev => [
      ...prev,
      {
        id: String(Date.now()),
        sender: 'agent',
        text: `I see you are interested in ${target ? target.name : 'our services'}! Would you like a fast quote and timeline estimate?`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleSendChatMessage = async (e) => {
    if (e) e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = {
      id: String(Date.now()),
      sender: 'user',
      text: chatInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');

    // Simulate smart agent response & prompt for email
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          id: String(Date.now() + 1),
          sender: 'agent',
          text: `Got it! For ${activeService.name}, estimated turnaround is ${quote.totalDeliveryDays} business days with a budget of $${quote.totalCost}. Please provide your email and name below to book this sprint.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 600);
  };

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;

    const payload = {
      clientName,
      clientEmail,
      serviceId: activeService.id,
      serviceName: activeService.name,
      selectedFeatures: quote.includedFeatures || [],
      estimatedDays: quote.totalDeliveryDays,
      estimatedCost: quote.totalCost,
      targetDeadline: `In ${quote.totalDeliveryDays} business days`,
      notes: `Inquiry submitted via customer live chat widget on portfolio.sonujha.in.`
    };

    await submitInquiry(payload);
    setInquirySuccess(true);
    setChatMessages(prev => [
      ...prev,
      {
        id: String(Date.now()),
        sender: 'agent',
        text: `Thank you, ${clientName}! Your inquiry for ${activeService.name} has been confirmed. We have locked in your ${quote.totalDeliveryDays}-day delivery SLA and sent an onboarding email to ${clientEmail}.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className={styles.servicesContainer}>
      
      {/* Page Header */}
      <div className={styles.header}>
        <div className={styles.badge}>
          <Clock size={14} style={{ marginRight: 4 }} />
          Commercial Services &bull; Guaranteed On-Time Delivery
        </div>
        <h1>Technical &amp; Creative Services</h1>
        <p>
          We engineer enterprise web applications, mobile SDUI platforms, native desktop software, autonomous AI agent networks, financial Excel dashboards, brand logos, marketing banners, and high-reliability middleware integrations &mdash; delivered strictly on schedule.
        </p>
      </div>

      {/* Interactive Feature & Timing Estimator */}
      <div className={styles.estimatorCard}>
        <div style={{ marginBottom: 24, textAlign: 'left' }}>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: '#0284c7', letterSpacing: '0.05em' }}>
            Interactive Timing &amp; Cost Calculator
          </span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '6px 0' }}>
            Configure Project Features &amp; Delivery Turnaround
          </h2>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            Select your service domain and toggle individual technical features. Our system calculates guaranteed delivery deadlines and fixed budgets.
          </p>
        </div>

        <div className={styles.estimatorGrid}>
          {/* Left: Domain & Feature Selector */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', opacity: 0.8, marginBottom: 8 }}>
              1. Choose Service Domain
            </div>
            <div className={styles.serviceButtons}>
              {services.map(s => (
                <button
                  key={s.id}
                  onClick={() => handleServiceSelect(s.id)}
                  className={`${styles.serviceBtn} ${selectedServiceId === s.id ? styles.serviceBtnActive : ''}`}
                >
                  <div style={{ fontWeight: 700 }}>{s.name}</div>
                  <div style={{ fontSize: 10, opacity: 0.8, marginTop: 2 }}>{s.baseDeliveryDays}d Base</div>
                </button>
              ))}
            </div>

            <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', opacity: 0.8, marginTop: 20 }}>
              2. Add Custom Features ({activeService.name})
            </div>
            <div className={styles.featureList}>
              {activeService.features && activeService.features.map(feat => {
                const isSelected = selectedFeatureIds.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`${styles.featureItem} ${isSelected ? styles.featureItemActive : ''}`}
                  >
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span>{feat.name}</span>
                        {feat.isPopular && (
                          <span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 4, background: '#fef3c7', color: '#92400e', fontWeight: 700 }}>
                            POPULAR
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: 11, opacity: 0.75, marginTop: 2 }}>
                        {feat.description}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', shrink: 0, paddingLeft: 12 }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: '#0284c7' }}>
                        +${feat.additionalPrice}
                      </div>
                      <div style={{ fontSize: 10, opacity: 0.7 }}>
                        +{feat.additionalDays}d
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Summary Card */}
          <div>
            <div className={styles.quoteSummary} style={{ textAlign: 'left' }}>
              <div style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#0284c7' }}>
                  Sprint Specification
                </span>
                <span style={{ fontSize: 10, background: '#d1fae5', color: '#065f46', padding: '2px 8px', borderRadius: 9999, fontWeight: 700 }}>
                  100% On-Time Guarantee
                </span>
              </div>

              <div>
                <div style={{ fontSize: 11, textTransform: 'uppercase', opacity: 0.7 }}>Guaranteed Delivery SLA:</div>
                <div className={styles.daysTag}>
                  {quote.totalDeliveryDays} <span style={{ fontSize: '1rem', fontWeight: 600 }}>Business Days</span>
                </div>
                <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4 }}>
                  Base ({activeService.baseDeliveryDays}d) + Add-ons ({quote.totalDeliveryDays - activeService.baseDeliveryDays}d)
                </div>
              </div>

              <div>
                <div style={{ fontSize: 11, textTransform: 'uppercase', opacity: 0.7 }}>Transparent Budget:</div>
                <div className={styles.priceTag}>
                  ${quote.totalCost.toLocaleString()}
                </div>
                <div style={{ fontSize: 11, opacity: 0.7 }}>
                  Fixed scope agreement &bull; Zero surprise charges
                </div>
              </div>

              <div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', marginBottom: 6 }}>
                  Included Deliverables:
                </div>
                <ul className={styles.deliverablesList}>
                  {activeService.deliverables && activeService.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <button
                className={styles.ctaBtn}
                onClick={() => handleOpenChatWithService(activeService.id)}
              >
                Book Sprint &amp; Chat with Engineer &rarr;
              </button>

              <div style={{ fontSize: 11, opacity: 0.7, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <ShieldCheck size={14} color="#10b981" />
                <span>Direct engineer consultation &bull; Zero sales pressure</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Catalog Section */}
      <div style={{ textAlign: 'left', marginBottom: 20 }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Complete Service Portfolio</h2>
        <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
          Explore all 8 commercial domains built and supported by our engineering team.
        </p>
      </div>

      <div className={styles.catalogGrid}>
        {services.map(srv => (
          <div key={srv.id} className={styles.serviceCard} style={{ textAlign: 'left' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 6, background: 'rgba(2,132,199,0.1)', color: '#0284c7' }}>
                  {srv.badge}
                </span>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#10b981' }}>
                  <Clock size={12} style={{ display: 'inline', marginRight: 4 }} />
                  {srv.baseDeliveryDays}d Base SLA
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 8 }}>{srv.name}</h3>
              <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: 1.5, marginBottom: 14 }}>
                {srv.description}
              </p>

              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', opacity: 0.7, marginBottom: 6 }}>
                Core Deliverables:
              </div>
              <ul className={styles.deliverablesList}>
                {srv.deliverables && srv.deliverables.slice(0, 3).map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: 10, opacity: 0.7, textTransform: 'uppercase' }}>Starting from</span>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0284c7' }}>
                  ${srv.basePrice.toLocaleString()}
                </div>
              </div>

              <button
                onClick={() => handleOpenChatWithService(srv.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 10,
                  background: '#0284c7',
                  color: 'white',
                  border: 'none',
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Inquire &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Customer Live Chat Widget Button */}
      <div className={styles.chatWidgetFloating}>
        <button
          className={styles.chatBubble}
          onClick={() => setIsChatOpen(prev => !prev)}
          aria-label="Open sales chat"
        >
          {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>
      </div>

      {/* Customer Live Chat Panel */}
      {isChatOpen && (
        <div className={styles.chatPanel}>
          <div className={styles.chatHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Sparkles size={18} />
              <div>
                <div style={{ fontWeight: 800, fontSize: 13 }}>Sonu Jha Services Chat</div>
                <div style={{ fontSize: 10, opacity: 0.85 }}>Online &bull; Live Technical Quotes</div>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          </div>

          <div className={styles.chatMessages}>
            {chatMessages.map(msg => (
              <div
                key={msg.id}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '10px 14px',
                  borderRadius: 14,
                  fontSize: 12,
                  lineHeight: 1.4,
                  textAlign: 'left',
                  background: msg.sender === 'user' ? '#0284c7' : 'rgba(0,0,0,0.06)',
                  color: msg.sender === 'user' ? '#ffffff' : 'inherit'
                }}
              >
                <div>{msg.text}</div>
                <div style={{ fontSize: 9, opacity: 0.6, marginTop: 4, textAlign: 'right' }}>{msg.time}</div>
              </div>
            ))}

            {/* In-chat Lead Capture Form */}
            {!inquirySuccess ? (
              <form onSubmit={handleSubmitInquiry} style={{ background: 'rgba(2,132,199,0.06)', padding: 12, borderRadius: 12, border: '1px solid rgba(2,132,199,0.2)', textAlign: 'left', marginTop: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#0284c7', marginBottom: 6 }}>
                  Lock in Scope for {activeService.name} (${quote.totalCost} / {quote.totalDeliveryDays}d)
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={clientName}
                  onChange={e => setClientName(e.target.value)}
                  required
                  style={{ width: '100%', padding: '6px 10px', fontSize: 11, borderRadius: 6, border: '1px solid #ccc', marginBottom: 6, boxSizing: 'border-box' }}
                />
                <input
                  type="email"
                  placeholder="Your Business Email"
                  value={clientEmail}
                  onChange={e => setClientEmail(e.target.value)}
                  required
                  style={{ width: '100%', padding: '6px 10px', fontSize: 11, borderRadius: 6, border: '1px solid #ccc', marginBottom: 8, boxSizing: 'border-box' }}
                />
                <button
                  type="submit"
                  style={{ width: '100%', padding: '8px', background: '#0284c7', color: 'white', border: 'none', borderRadius: 6, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}
                >
                  Submit Inquiry &amp; Confirm SLA
                </button>
              </form>
            ) : (
              <div style={{ padding: 10, borderRadius: 10, background: '#d1fae5', color: '#065f46', fontSize: 11, textAlign: 'left' }}>
                <CheckCircle2 size={14} style={{ display: 'inline', marginRight: 4 }} />
                Inquiry registered successfully! We will contact you at {clientEmail}.
              </div>
            )}
          </div>

          <form onSubmit={handleSendChatMessage} className={styles.chatInputArea}>
            <input
              type="text"
              placeholder="Ask anything about our services..."
              value={chatInput}
              onChange={e => setChatInput(e.target.value)}
              style={{ flex: 1, padding: '8px 12px', borderRadius: 10, border: '1px solid rgba(0,0,0,0.15)', fontSize: 12 }}
            />
            <button
              type="submit"
              style={{ padding: '8px 14px', borderRadius: 10, background: '#0284c7', color: 'white', border: 'none', cursor: 'pointer' }}
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}

    </div>
  );
}
