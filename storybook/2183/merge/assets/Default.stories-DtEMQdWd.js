import{j as r,r as f}from"./iframe-xTeLnFvu.js";import{M as o}from"./MarkdownEditor-CwHGZVcE.js";import{L as R}from"./Label-CVltlbUu.js";import{F as b}from"./FieldError-oOsFR_NQ.js";import{B as z}from"./Button-BA5_aaZE.js";import{S as x}from"./Section-o_jduYUp.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CKlSGeZA.js";import"./CodeBlock-DXm43E31.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BiKlC49t.js";import"./IconApp-B1jeSMHX.js";import"./PropsContextProvider-B-9yYF9r.js";import"./mergeRefs-CL4-4jLa.js";import"./index-D8cXiV4r.js";import"./remote-DmruOiXe.js";import"./IconCopy-AixFsnDh.js";import"./Tooltip-Cfo8NWrg.js";import"./Activity-D0VzS_Xj.js";import"./TranslationProvider-Y_3SKiEv.js";import"./OverlayContextProvider-DUjO3Mxl.js";import"./context-B3gmiBCA.js";import"./Button-6mLbsxm5.js";import"./utils-DAXmWa5w.js";import"./ProgressBar-Du2Olg6q.js";import"./Hidden-CaRuxXNN.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-7tIPXbfR.js";import"./useFocusRing-DkBPZ0-v.js";import"./useFocusable-BaZ7v7IW.js";import"./RSPContexts-BbeCs0tS.js";import"./Collection-Bncr_TUN.js";import"./CollectionBuilder-CWex8B7o.js";import"./SelectionIndicator-vxn3ib0k.js";import"./Separator-CCxpf_MJ.js";import"./browser-RW8IAkpU.js";import"./useLocalizedStringFormatter-CRzuFQ02.js";import"./useStatic-DiiqycDM.js";import"./LoadingSpinner-DhmoM-Yl.js";import"./ariaLive-DoOsJYhU.js";import"./Text-CX0dnSU4.js";import"./EmulatedBoldText-st1IlPV2.js";import"./useOverlayController-SsWXLo7T.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./react-children-utilities-C5f-0JXn.js";import"./Action-GyTbi50D.js";import"./getActionGroupSlot-NSsr3wC7.js";import"./dynamic-ndn1boAo.js";import"./Heading-cElDoL_q.js";import"./Heading-Dpj368kt.js";import"./InlineCode-DX9BaPAe.js";import"./Link-CSHVAz2z.js";import"./IconDownload-CEpEnyol.js";import"./Separator-DYGR8Enb.js";import"./TextArea-CYsQP8h7.js";import"./TextFieldBase-DZCwCLUZ.js";import"./useFieldComponent-Brjsz3RP.js";import"./TextField-k_ckfWyI.js";import"./FieldError-Cxb9ZjML.js";import"./Form-CFtpyLOk.js";import"./Group-DSWHaMOX.js";import"./Input-CXlOt9Gr.js";import"./useTextField-CSw7_eNz.js";import"./useFormReset-Co6bkbVB.js";import"./useFormValidation-CD-qIFlG.js";import"./useControlledHostValueProps-BM5fLdcu.js";import"./IconList-Dp1jPIwD.js";import"./Label.module-lamhxTiw.js";import"./IconDanger-DpVgPae0.js";import"./IconX-D7i-QR82.js";import"./IconCheck-Cc3xyZRg.js";import"./ContextMenuSection-NFDNiNZp.js";import"./lib-90ocxLs-.js";const qr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Gr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,t as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Gr as __namedExportsOrder,qr as default};
