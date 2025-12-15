import{j as r,r as f}from"./iframe-Br-RCPWN.js";import{r as o,g as b}from"./TimeField-BGRSwV-o.js";import{L as R}from"./Label-BJkXaCeQ.js";import{B as z}from"./Button-D54g6t8r.js";import{S as x}from"./Section-DJ8xVnwh.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-CSAj95jw.js";import"./mergeRefs-DP0fvyvw.js";import"./index-DO8vOkwc.js";import"./clsx-B-dksMZM.js";import"./Accordion-hQD9PfV1.js";import"./dynamic-CeRu270G.js";import"./IconWarning-C1NRfwVV.js";import"./remote-Bo4xuhzH.js";import"./ActionGroup-Br-HBLHh.js";import"./Alert-Bb_4C7nc.js";import"./AlertIcon-Ci_dM1ct.js";import"./useLocalizedStringFormatter-DcURVzAt.js";import"./context-Bc5k9Bh6.js";import"./AlertBadge-DZwGkMpO.js";import"./Text-CIylET5F.js";import"./browser-Dyp86VHf.js";import"./utils-Dak_ECAp.js";import"./EmulatedBoldText-DiJCrkGJ.js";import"./Align-DfN4ymbR.js";import"./Popover-QdAZ89s_.js";import"./context-De-RWUql.js";import"./Button-CoaZdKpJ.js";import"./ProgressBar-DLYSkAPs.js";import"./Hidden-BWng0Hd6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-kD3u5y5H.js";import"./useFocusable-B6Sg882a.js";import"./RSPContexts-CI5k95q6.js";import"./Collection-DW1fpUON.js";import"./CollectionBuilder-BjAB2jGU.js";import"./SelectionIndicator-H4UlTQ5u.js";import"./Separator-WgOMTL7q.js";import"./useStatic-eGeAE8fm.js";import"./OverlayTrigger-D0y2BIl1.js";import"./TableFooterRow--YVmAQJL.js";import"./SkeletonText-DH8cB97o.js";import"./Avatar-CQV4Pag9.js";import"./AvatarStack-mpuF30DC.js";import"./Badge-AGFHXSuV.js";import"./BigNumber-BKnsR0fX.js";import"./Breadcrumb-Dn0ZcgHN.js";import"./Link-Cd6zxchg.js";import"./Heading-BOVN6eFE.js";import"./Legend-m_Z_E65H.js";import"./FileCardList-Cr1bdGd9.js";import"./Image-CX8OimUo.js";import"./Color-BM0XuHzd.js";import"./Content-B9XeZb2J.js";import"./ContextualHelpTrigger-DYkgoDVG.js";import"./CounterBadge-CiNfB30V.js";import"./DonutChart-BSut2oKM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-jxwvzdOg.js";import"./Header-q2hXiR9Q.js";import"./Initials-2ZjSAOrE.js";import"./InlineCode-vkQ-McU7.js";import"./PopoverTrigger-B_oYUYip.js";import"./LoadingSpinner-B0xf-tui.js";import"./Separator-DOub_aiP.js";import"./Message-DH3zGPpQ.js";import"./MessageSeparator-Bc8NECux.js";import"./NavigationGroup-Buu17kA2.js";import"./Notification-B1zm2nBo.js";import"./NotificationProvider-h_8RrIcw.js";import"./ProgressBar-Di15BDR2.js";import"./Rating-BAfMiDeC.js";import"./Skeleton-NDiigi_I.js";const _r={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "horizontal"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical",
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: props => {
    const editorRef = useRef<HTMLTextAreaElement | null>(null);
    const handleFocus = () => {
      if (editorRef.current) {
        editorRef.current.focus();
      }
    };
    return <Section>
        <MarkdownEditor {...props} ref={editorRef}>
          <Label>Message</Label>
        </MarkdownEditor>
        <Button type="button" onClick={handleFocus}>
          Set focus
        </Button>
      </Section>;
  }
}`,...h.parameters?.docs?.source}}};const qr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,t as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,qr as __namedExportsOrder,_r as default};
