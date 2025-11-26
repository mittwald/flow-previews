import{j as r,r as f}from"./iframe-BULoVSu-.js";import{r as o,g as z}from"./TimeField-1hPaxYRS.js";import{L as R}from"./Label-DWCkXaJt.js";import{B as b}from"./Button-DvOPlqIW.js";import{S as x}from"./Section-dZ6T0Qjb.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-BPIZn01x.js";import"./mergeRefs-CEsjPslJ.js";import"./index-DQ_hsp85.js";import"./clsx-B-dksMZM.js";import"./Accordion-8FTg--rA.js";import"./dynamic-D5pGRiRC.js";import"./IconWarning-DrICVJv-.js";import"./ActionGroup-CdzBskC5.js";import"./Alert-DYZY0TL2.js";import"./AlertIcon-BlR5z9QA.js";import"./useLocalizedStringFormatter-CNoz61n8.js";import"./context-BQ6yD6Hs.js";import"./AlertBadge-DH8Oxe-N.js";import"./Text-Bg3HcGTD.js";import"./browser-CQOPH7Oy.js";import"./utils-BZ7EFgdg.js";import"./EmulatedBoldText-CVrOLZNg.js";import"./Align-B4QMXwt_.js";import"./Popover-CjClCujz.js";import"./context-DrExWdfs.js";import"./Button-DWJqXgIw.js";import"./ProgressBar-CiVynXjH.js";import"./Hidden-C5LzDjRJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-qHICYkG6.js";import"./useFocusable-BJ4RiU3A.js";import"./RSPContexts-DiGug6wA.js";import"./Collection-BGk_QoAN.js";import"./CollectionBuilder-CYT9SihX.js";import"./SelectionIndicator-DElX2Ml7.js";import"./Separator-CFtgJiRb.js";import"./useStatic-Dyq_KzQP.js";import"./OverlayTrigger-vU2Qjf7N.js";import"./TableFooterRow-BPCO49YC.js";import"./SkeletonText-BTeejoSt.js";import"./Avatar-BfIiybJY.js";import"./AvatarStack-BxKBxtVU.js";import"./Badge-CAMn07m4.js";import"./BigNumber-rg1cxAc2.js";import"./Breadcrumb-CYVN-SjU.js";import"./Link-KCtn6aUA.js";import"./Heading-Ds4iBrHb.js";import"./Legend-DReYAr9-.js";import"./FileCardList-CKSx-0eT.js";import"./Image-DNEKXGy_.js";import"./Color-DizN4J9h.js";import"./Content-DA44jWO0.js";import"./ContextualHelpTrigger-Cq74vnwF.js";import"./CounterBadge-DqN2lUJ6.js";import"./DonutChart-ByHy_tf4.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BPxmEpFw.js";import"./Header-C-kaAsvR.js";import"./Initials-DzoATSJF.js";import"./InlineCode-CLVrphJo.js";import"./PopoverTrigger-CK-Br2ii.js";import"./LoadingSpinner-BfUy7fQr.js";import"./Separator-D_J1GVIS.js";import"./Message-Cj4eSaLV.js";import"./MessageSeparator-BKcuFd8P.js";import"./NavigationGroup-BLC2he0l.js";import"./Notification-CPfWjlNe.js";import"./NotificationProvider-CF_1VnvW.js";import"./ProgressBar-C-I_U1Y0.js";import"./Rating-dHI8nJ9_.js";import"./Skeleton-ZxO1W6TI.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
