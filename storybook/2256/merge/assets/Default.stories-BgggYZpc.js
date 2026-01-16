import{j as r,r as f}from"./iframe-Dcjk2TLd.js";import{M as o}from"./MarkdownEditor-DwcTPuHs.js";import{L as R}from"./Label-BZxLRpn6.js";import{F as b}from"./FieldError-CGpcN3PS.js";import{B as z}from"./Button-D-jN4scm.js";import{S as x}from"./Section-Bu04CwZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DsZDBHjo.js";import"./CodeBlock-DC_-TqWt.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D9Vkofce.js";import"./IconWarning-4NWKkNon.js";import"./flowComponent-DUQvMGjf.js";import"./index-j2LaL0Dv.js";import"./index-DmOV_yi6.js";import"./remote-B1sU4u7F.js";import"./Tooltip-yopeheRo.js";import"./utils-C4npX7la.js";import"./OverlayArrow-Pu-KF2yi.js";import"./useFocus-B7gP7G3p.js";import"./ProgressBar-lCiNiuDc.js";import"./Label-BZUq_rhq.js";import"./Hidden-CKziqW6n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CKc5oqWD.js";import"./context-pAIzfbng.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DBXDF7mL.js";import"./useFocusable-K4tA3zQn.js";import"./useFocusRing-HFiDNYir.js";import"./react-children-utilities-BRF88Ijx.js";import"./Action-D6NQe9wE.js";import"./context-Dbo8u0HC.js";import"./useStatic-DYXSIhuP.js";import"./browser-B8c1tkp7.js";import"./getActionGroupSlot-Cfz4NNN9.js";import"./dynamic-D8BmLFRX.js";import"./useLocalizedStringFormatter-DSXGmj0V.js";import"./Heading-BDZY2GXQ.js";import"./Heading-DGchSox2.js";import"./RSPContexts-0k8dpTCB.js";import"./InlineCode-njKC_xrV.js";import"./Link-Dn0s-zAw.js";import"./usePress-CbiP5Rr9.js";import"./Separator-BK-hofWU.js";import"./Separator-DtdWWDk6.js";import"./CollectionBuilder-DaoTf73F.js";import"./Text-lyGbob8n.js";import"./EmulatedBoldText-CjCUgZSU.js";import"./Text-zDtUk3hp.js";import"./TextArea-ryB28UE1.js";import"./TextFieldBase-5qKONCc1.js";import"./FieldDescription-DaAB6M4B.js";import"./useFieldComponent-1tG_hIZF.js";import"./TextField-DtlmSwYr.js";import"./FieldError-B9deYV15.js";import"./Form-C7OLtkZq.js";import"./Group-BuqfBy6e.js";import"./Input-DoIljc-M.js";import"./useTextField-D1L7S4qu.js";import"./useFormReset-DcYsnWfg.js";import"./useFormValidation-ny_bco9C.js";import"./useControlledHostValueProps-ZAzMZMP3.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-PsTvKuCL.js";import"./AlertIcon-CZw-AcP9.js";import"./LoadingSpinner-BbHp37hM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D3PtZgc0.js";import"./ContextMenuSection-C6gJgggW.js";import"./Dialog-Cncwnvc2.js";import"./Collection-CNopuRoq.js";import"./SelectionIndicator-BH1NdgMT.js";import"./SelectionManager-i-R_bo58.js";import"./useEvent-jxPbXkhM.js";import"./useCollator-CvofTPx7.js";import"./FocusScope-CNP9Koh8.js";import"./VisuallyHidden-D01b8Wlz.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Pr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Pr as __namedExportsOrder,Nr as default};
