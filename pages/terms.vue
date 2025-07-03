<template>
  <div class="min-h-screen pt-20 bg-black overflow-hidden">
    <!-- Matrix Background -->
    <div class="fixed inset-0 matrix-bg opacity-10 pointer-events-none"></div>
    
    <!-- Header -->
    <section class="py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
            <Icon name="lucide:file-text" class="w-4 h-4 mr-2 text-cyan-400" />
            <span class="text-sm font-medium text-cyan-300 code-font">TERMS_OF_SERVICE.legal</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-black mb-8 text-white leading-tight graffiti-font">
            TERMS_OF_SERVICE
            <span class="block bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent text-3xl md:text-5xl">
              .legalAgreement()
            </span>
          </h1>
          
          <p class="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto code-font">
            <span class="text-green-400">//</span> The rules that govern our digital collaboration
          </p>
          
          <div class="text-gray-400 mt-6 code-font">
            Last updated: December 3, 2024
          </div>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-20 bg-gradient-to-b from-black to-slate-950">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 md:p-12 border border-gray-700/50 backdrop-blur-sm">
            
            <div class="space-y-12 text-gray-300">
              
              <!-- Introduction -->
              <div>
                <h2 class="text-3xl font-bold text-white graffiti-font mb-6">1. ACCEPTANCE_OF_TERMS()</h2>
                <p class="leading-relaxed mb-4">
                  By accessing or using XMTRXI's website and services, you agree to be bound by these Terms of Service (<span class="text-cyan-400">"Terms"</span>). If you disagree with any part of these terms, you may not access our service.
                </p>
                
                <div class="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
                  <div class="flex items-center mb-3">
                    <Icon name="lucide:code" class="w-5 h-5 text-green-400 mr-2" />
                    <span class="text-green-400 font-semibold code-font">Legal Code</span>
                  </div>
                  <pre class="text-sm code-font text-gray-300"><code>if (user.usesService() && !user.agreesToTerms()) {
  throw new Error('Access denied: Terms acceptance required')
}</code></pre>
                </div>
              </div>

              <!-- Services -->
              <div>
                <h2 class="text-3xl font-bold text-white graffiti-font mb-6">2. SERVICES_DESCRIPTION()</h2>
                <p class="leading-relaxed mb-6">
                  XMTRXI provides digital development services including:
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-slate-900/50 rounded-lg p-4 border border-purple-500/30">
                    <h3 class="text-purple-400 font-bold mb-2 code-font">Development Services</h3>
                    <ul class="space-y-1 text-sm">
                      <li>• Web application development</li>
                      <li>• Mobile app development</li>
                      <li>• Custom software solutions</li>
                      <li>• API development and integration</li>
                    </ul>
                  </div>
                  <div class="bg-slate-900/50 rounded-lg p-4 border border-cyan-500/30">
                    <h3 class="text-cyan-400 font-bold mb-2 code-font">Design & Strategy</h3>
                    <ul class="space-y-1 text-sm">
                      <li>• UI/UX design</li>
                      <li>• Digital strategy consulting</li>
                      <li>• Brand identity development</li>
                      <li>• User experience optimization</li>
                    </ul>
                  </div>
                  <div class="bg-slate-900/50 rounded-lg p-4 border border-green-500/30">
                    <h3 class="text-green-400 font-bold mb-2 code-font">Technical Support</h3>
                    <ul class="space-y-1 text-sm">
                      <li>• System maintenance</li>
                      <li>• Performance optimization</li>
                      <li>• Security implementation</li>
                      <li>• Technical documentation</li>
                    </ul>
                  </div>
                  <div class="bg-slate-900/50 rounded-lg p-4 border border-pink-500/30">
                    <h3 class="text-pink-400 font-bold mb-2 code-font">Digital Marketing</h3>
                    <ul class="space-y-1 text-sm">
                      <li>• SEO optimization</li>
                      <li>• Content strategy</li>
                      <li>• Analytics implementation</li>
                      <li>• Conversion optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- User Obligations -->
              <div>
                <h2 class="text-3xl font-bold text-white graffiti-font mb-6">3. USER_OBLIGATIONS()</h2>
                <p class="leading-relaxed mb-4">You agree to:</p>
                
                <div class="space-y-3">
                  <div class="flex items-start space-x-3 p-3 bg-slate-900/30 rounded-lg">
                    <Icon name="lucide:check-circle" class="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Provide accurate and complete information when requested</span>
                  </div>
                  <div class="flex items-start space-x-3 p-3 bg-slate-900/30 rounded-lg">
                    <Icon name="lucide:check-circle" class="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Maintain the confidentiality of any account credentials</span>
                  </div>
                  <div class="flex items-start space-x-3 p-3 bg-slate-900/30 rounded-lg">
                    <Icon name="lucide:check-circle" class="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Use our services only for lawful purposes</span>
                  </div>
                  <div class="flex items-start space-x-3 p-3 bg-slate-900/30 rounded-lg">
                    <Icon name="lucide:check-circle" class="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Respect intellectual property rights</span>
                  </div>
                  <div class="flex items-start space-x-3 p-3 bg-slate-900/30 rounded-lg">
                    <Icon name="lucide:check-circle" class="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Not attempt to interfere with or disrupt our services</span>
                  </div>
                </div>
              </div>

              <!-- Payment Terms -->
              <div>
                <h2 class="text-3xl font-bold text-white graffiti-font mb-6">4. PAYMENT_TERMS()</h2>
                
                <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-6 mb-6">
                  <h3 class="text-white font-bold mb-4 code-font">Payment Schedule</h3>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-green-400 mb-2">50%</div>
                      <div class="text-gray-300">Project Start</div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-cyan-400 mb-2">25%</div>
                      <div class="text-gray-300">Milestone</div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-purple-400 mb-2">25%</div>
                      <div class="text-gray-300">Completion</div>
                    </div>
                  </div>
                </div>

                <div class="space-y-4">
                  <p class="leading-relaxed">
                    <strong class="text-white">Payment Methods:</strong> We accept major credit cards, bank transfers, and cryptocurrency payments (Bitcoin, Ethereum).
                  </p>
                  <p class="leading-relaxed">
                    <strong class="text-white">Late Payments:</strong> A 1.5% monthly service charge applies to overdue invoices.
                  </p>
                  <p class="leading-relaxed">
                    <strong class="text-white">Refund Policy:</strong> Refunds are considered on a case-by-case basis for work not yet commenced.
                  </p>
                </div>
              </div>

              <!-- Intellectual Property -->
              <div>
                <h2 class="text-3xl font-bold text-white graffiti-font mb-6">5. INTELLECTUAL_PROPERTY()</h2>
                
                <div class="space-y-6">
                  <div class="bg-slate-900/50 rounded-lg p-6 border border-cyan-500/30">
                    <h3 class="text-cyan-400 font-bold mb-3 code-font">Client Ownership</h3>
                    <p class="text-sm leading-relaxed">
                      Upon full payment, you own all custom code, designs, and content specifically created for your project. This includes source code, graphics, and documentation.
                    </p>
                  </div>
                  
                  <div class="bg-slate-900/50 rounded-lg p-6 border border-purple-500/30">
                    <h3 class="text-purple-400 font-bold mb-3 code-font">XMTRXI Ownership</h3>
                    <p class="text-sm leading-relaxed">
                      We retain ownership of our proprietary tools, frameworks, methodologies, and general business processes used in delivering services.
                    </p>
                  </div>
                  
                  <div class="bg-slate-900/50 rounded-lg p-6 border border-green-500/30">
                    <h3 class="text-green-400 font-bold mb-3 code-font">Third-Party Assets</h3>
                    <p class="text-sm leading-relaxed">
                      Some projects may include third-party libraries, fonts, or stock assets. These remain subject to their respective licenses.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Warranties -->
              <div>
                <h2 class="text-3xl font-bold text-white graffiti-font mb-6">6. WARRANTIES_AND_DISCLAIMERS()</h2>
                
                <div class="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-6">
                  <div class="flex items-center mb-3">
                    <Icon name="lucide:alert-triangle" class="w-5 h-5 text-yellow-400 mr-2" />
                    <span class="text-yellow-400 font-semibold">Important Notice</span>
                  </div>
                  <p class="text-sm leading-relaxed">
                    Our services are provided "as is" without warranties of any kind, either express or implied. We make no guarantees regarding uptime, performance, or specific business outcomes.
                  </p>
                </div>

                <div class="space-y-4">
                  <div>
                    <h3 class="text-white font-bold mb-2">What We Guarantee:</h3>
                    <ul class="space-y-1 text-sm">
                      <li>• Professional quality workmanship</li>
                      <li>• Adherence to agreed specifications</li>
                      <li>• 30-day bug fix warranty on custom code</li>
                      <li>• Industry-standard security practices</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 class="text-white font-bold mb-2">Limitation of Liability:</h3>
                    <p class="text-sm leading-relaxed">
                      Our total liability for any claims shall not exceed the total amount paid for the specific service in question.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Termination -->
              <div>
                <h2 class="text-3xl font-bold text-white graffiti-font mb-6">7. TERMINATION_CONDITIONS()</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                    <h3 class="text-red-400 font-bold mb-3 code-font">Client Termination</h3>
                    <p class="text-sm leading-relaxed mb-3">
                      You may terminate our services with 7 days written notice. You will be billed for work completed up to the termination date.
                    </p>
                    <div class="bg-slate-900/50 p-3 rounded code-font text-xs">
                      <code>client.terminate(reason, noticePeriod: 7)</code>
                    </div>
                  </div>
                  
                  <div class="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
                    <h3 class="text-orange-400 font-bold mb-3 code-font">XMTRXI Termination</h3>
                    <p class="text-sm leading-relaxed mb-3">
                      We may terminate services for breach of terms, non-payment, or if continuing would be illegal or harmful.
                    </p>
                    <div class="bg-slate-900/50 p-3 rounded code-font text-xs">
                      <code>service.terminate(cause, immediate: true)</code>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Governing Law -->
              <div>
                <h2 class="text-3xl font-bold text-white graffiti-font mb-6">8. GOVERNING_LAW()</h2>
                <p class="leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes shall be resolved through binding arbitration in San Francisco, California.
                </p>
              </div>

              <!-- Contact -->
              <div>
                <h2 class="text-3xl font-bold text-white graffiti-font mb-6">9. CONTACT_INFORMATION()</h2>
                
                <div class="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
                  <p class="leading-relaxed mb-4">
                    Questions about these Terms? Contact our legal team:
                  </p>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 class="text-white font-bold mb-3 code-font">Legal Department</h3>
                      <div class="space-y-2 text-sm">
                        <div class="flex items-center space-x-2">
                          <Icon name="lucide:mail" class="w-4 h-4 text-cyan-400" />
                          <span>legal@xmtrxi.com</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <Icon name="lucide:phone" class="w-4 h-4 text-green-400" />
                          <span>+1 (555) 123-4567</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 class="text-white font-bold mb-3 code-font">Business Address</h3>
                      <div class="text-sm">
                        XMTRXI Legal<br>
                        123 Innovation Street<br>
                        Tech City, TC 12345<br>
                        United States
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Changes -->
              <div>
                <h2 class="text-3xl font-bold text-white graffiti-font mb-6">10. CHANGES_TO_TERMS()</h2>
                <p class="leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Terms of Service - XMTRXI',
  meta: [
    { name: 'description', content: 'Read XMTRXI\'s terms of service covering our digital development services, payment terms, intellectual property rights, and legal agreements.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
