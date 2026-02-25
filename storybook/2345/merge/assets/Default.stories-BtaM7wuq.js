import{j as r,r as f}from"./iframe-CAK8FS83.js";import{M as o}from"./MarkdownEditor-de7RtRlw.js";import{L as R}from"./Label-B8vv94Ak.js";import{F as b}from"./FieldError-Ijqs7ZUi.js";import{B as z}from"./Button-itgufTCs.js";import{S as x}from"./Section-CvIAO9t7.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DWlci_Xd.js";import"./CodeBlock-COR2phRq.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CZWKOAW6.js";import"./IconWarning-EFpx-Gs1.js";import"./flowComponent-BWp16SNy.js";import"./index-GWEfEQw2.js";import"./index-CbMMdC0j.js";import"./remote-BiZ00o_J.js";import"./Tooltip-DCW_5X8R.js";import"./utils-th26LVD6.js";import"./OverlayArrow-DH2T_qZc.js";import"./useFocus-CUz8YQ_V.js";import"./ProgressBar-D_fN64Me.js";import"./Label-f9ALmkld.js";import"./Hidden-Dit-znYS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-uRe61yXZ.js";import"./context-Cva5eEgc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Dri4WoMi.js";import"./useControlledState-ik7lpKJV.js";import"./useFocusable-wkYmEvUK.js";import"./react-children-utilities-B6QQgBs0.js";import"./ActionBatch-BT7PEprG.js";import"./useOverlayController-Cgn9MX8W.js";import"./useStatic-CRQBoMuN.js";import"./browser-Bqr1AXz8.js";import"./getActionGroupSlot-BB_J4wrM.js";import"./dynamic-D8OXR4zz.js";import"./useLocalizedStringFormatter-DFt6g5YR.js";import"./Heading-C00t5x9z.js";import"./Heading-CCBwW_g2.js";import"./RSPContexts-B_v10Iug.js";import"./InlineCode-C9W5L4YU.js";import"./Link-N8TmWUUa.js";import"./usePress-BYhFSapw.js";import"./Separator-C_NFalCC.js";import"./Separator-DMNyXuQl.js";import"./CollectionBuilder-D4rXdo4w.js";import"./Text-DLuRhlhH.js";import"./EmulatedBoldText-C97iA6m9.js";import"./Text-BoinRLOA.js";import"./TextArea-CFDpLOzv.js";import"./useFieldComponent-DkAI1nDB.js";import"./useControlledHostValueProps-Bu8T1azZ.js";import"./FieldDescription-1ru89KYu.js";import"./TextField-jkCrsSbw.js";import"./FieldError-W7aOon2A.js";import"./Form-CCLCpM-d.js";import"./Group-j7hLbASA.js";import"./Input-G799xohA.js";import"./useTextField-BR332WYs.js";import"./useFormReset-ClNM6Kah.js";import"./useFormValidation-CCAHF_BW.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B2BWCbW6.js";import"./AlertIcon-DLSo9NlW.js";import"./LoadingSpinner-BC7xHqe0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bm8bnERu.js";import"./ContextMenuSection-gHmxmSmE.js";import"./Dialog-Bg78UE4C.js";import"./Collection-BMrNZuZq.js";import"./SelectionIndicator-D_639S3U.js";import"./SelectionManager-BFBPCCBk.js";import"./useEvent-KVfko5RZ.js";import"./useCollator-BmCOWQts.js";import"./FocusScope-B2Hz6ms7.js";import"./VisuallyHidden-CgwkfWyQ.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Nr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Nr as __namedExportsOrder,Kr as default};
