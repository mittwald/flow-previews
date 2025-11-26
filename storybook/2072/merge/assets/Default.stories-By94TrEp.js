import{j as r,r as f}from"./iframe-CzXG2_T8.js";import{r as o,g as z}from"./TimeField-Dl-kHVAX.js";import{L as R}from"./Label-CLEaEiAD.js";import{B as b}from"./Button-CE0-K_QR.js";import{S as x}from"./Section-DRzJ9hQY.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-CBC4MB9g.js";import"./mergeRefs-BrX_XdJI.js";import"./index-CW_J_3Lm.js";import"./clsx-B-dksMZM.js";import"./Accordion-CK3CNQSd.js";import"./dynamic-D9Ldu2R_.js";import"./IconWarning-BlYr5wdx.js";import"./ActionGroup-DdNyHVbC.js";import"./Alert-BVRdOGDJ.js";import"./AlertIcon-CKFy_SRY.js";import"./useLocalizedStringFormatter-BqSTbtiO.js";import"./context-CoFMJFUW.js";import"./AlertBadge-Bn2Sq-O3.js";import"./Text-pNSdlFVE.js";import"./browser-TfqyRUmT.js";import"./utils-CRR3kiFX.js";import"./EmulatedBoldText-Dax89Wj8.js";import"./Align-BrD0lUOJ.js";import"./Popover-BqNRrPxw.js";import"./context-BYHZfe66.js";import"./Button-S7e-r_k_.js";import"./ProgressBar-fGMPBnRY.js";import"./Hidden-QndGxZGG.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BjdVgYEz.js";import"./useFocusable-BDJ0-yDW.js";import"./RSPContexts-EC3Gwcat.js";import"./Collection-BP43cq6b.js";import"./CollectionBuilder-BY3GrVHa.js";import"./SelectionIndicator-Bu5dS93A.js";import"./Separator-kqblG9CO.js";import"./useStatic-CSFWNuey.js";import"./OverlayTrigger-DvD8AAyr.js";import"./TableFooterRow-DxScdmh-.js";import"./SkeletonText-BajNlo4H.js";import"./Avatar-B3YtQfnh.js";import"./AvatarStack-lqTMKVs4.js";import"./Badge-DuGjQabs.js";import"./BigNumber-8SJtAMTv.js";import"./Breadcrumb-Ba5qYlLB.js";import"./Link-DfCw4YEt.js";import"./Heading-CrkkWjnL.js";import"./Legend-CeMxMq_c.js";import"./FileCardList-BM3lJHXl.js";import"./Image--2MKe1QA.js";import"./Color-BHbT5del.js";import"./Content-BiixoJVq.js";import"./ContextualHelpTrigger-CRKS8P0J.js";import"./CounterBadge-DnONLIGJ.js";import"./DonutChart-CPtp4Q3P.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-azF5kucF.js";import"./Header-DUaJeums.js";import"./Initials-D5xq1FWi.js";import"./InlineCode-Bl-Nmkob.js";import"./PopoverTrigger-Cw7IKzZy.js";import"./LoadingSpinner-DXLKn-V2.js";import"./Separator-Camsel6h.js";import"./Message-BmLxOVze.js";import"./MessageSeparator-DhFUPqEZ.js";import"./NavigationGroup-B0lwi3ok.js";import"./Notification-BmLGybW-.js";import"./NotificationProvider-DyGx_RoU.js";import"./ProgressBar-C-A5f-uu.js";import"./Rating-Bcobm7yB.js";import"./Skeleton-BSdRMWz_.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
