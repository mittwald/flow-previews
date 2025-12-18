import{j as r,r as f}from"./iframe-Y3MbZLc0.js";import{r as o,g as z}from"./TimeField-CWtTlsNI.js";import{L as R}from"./Label-D2MFjXEF.js";import{B as b}from"./Button-C-4kPg6X.js";import{S as x}from"./Section-DS5qZGJz.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-DOjZhm--.js";import"./mergeRefs-CRQZITIl.js";import"./index-CsLL2H6p.js";import"./clsx-B-dksMZM.js";import"./Accordion-C3ab7gKh.js";import"./dynamic-D67dccmA.js";import"./IconWarning-B3PcMPJB.js";import"./ActionGroup-DetklLoF.js";import"./Alert-DGdBp0Eo.js";import"./AlertIcon-CV8NrYRI.js";import"./useLocalizedStringFormatter-6lIKSxih.js";import"./context-CS7ddlXF.js";import"./AlertBadge-BQxMpKlM.js";import"./Text-C_4wJYC6.js";import"./browser-BiLdcyq-.js";import"./utils-DRnq9lS5.js";import"./EmulatedBoldText-C3IQk-9R.js";import"./Align-BI2gFG3T.js";import"./Popover-DQwwR1G3.js";import"./context-Bj7ZL7Rk.js";import"./Button-kcvbJBhw.js";import"./ProgressBar-B7UD30wQ.js";import"./Hidden-pCjGcrow.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BPUGHIMZ.js";import"./useFocusable-DuA910js.js";import"./RSPContexts-q4i_V3tQ.js";import"./Collection-DMnM_9G9.js";import"./CollectionBuilder-B_T5ko0u.js";import"./SelectionIndicator-BaXUje1t.js";import"./Separator-BiaSXazW.js";import"./useStatic-DqJeeTMW.js";import"./OverlayTrigger-DWI1tl1b.js";import"./TableFooterRow-WmviDJs1.js";import"./SkeletonText-D89UTzJX.js";import"./Avatar-ClOnDFiI.js";import"./AvatarStack-LuIFslnX.js";import"./Badge-sRwXs_wN.js";import"./BigNumber-B2Z2Bi5y.js";import"./Breadcrumb-OZ807_4G.js";import"./Link-Dl5kPNf7.js";import"./Heading-CVXAzirZ.js";import"./Legend-U_MA1DUY.js";import"./FileCardList-BkZP918B.js";import"./Image-DljHCxEH.js";import"./Color-BW8N49ms.js";import"./Content-NPMXk3zl.js";import"./ContextualHelpTrigger-k9oKfs6T.js";import"./CounterBadge-ElqKVlu2.js";import"./DonutChart-CfanPbqv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-H20k2GzK.js";import"./Header-6_4AGJd2.js";import"./Initials-rKtrsRfb.js";import"./InlineCode-C13LZBrn.js";import"./PopoverTrigger-7Z8GTvAL.js";import"./LoadingSpinner-6Ne33LZp.js";import"./Separator-CfxO9pZu.js";import"./Message-BuSi_X0q.js";import"./MessageSeparator-DkBtqTdi.js";import"./NavigationGroup-BWGcL5Rx.js";import"./Notification-CsliJkcB.js";import"./NotificationProvider-amexuwTh.js";import"./ProgressBar-Dct_JOoN.js";import"./Rating-DUI-p2zk.js";import"./Skeleton-CH0G6v9C.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const _r=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,t as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,_r as __namedExportsOrder,Tr as default};
