import{j as r,r as f}from"./iframe-BBHdjMJ6.js";import{M as o}from"./MarkdownEditor-DQDSTbUq.js";import{L as R}from"./Label-D4z-eNsD.js";import{F as b}from"./FieldError-DdPPmb_Z.js";import{B as z}from"./Button-P5io5pgW.js";import{S as x}from"./Section-BGan-5YC.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Dbhb0TJk.js";import"./CodeBlock-CpjsIA78.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Mh1cRrrw.js";import"./IconWarning-CyXtdbqA.js";import"./flowComponent-Dr_ijNQm.js";import"./index-DnL9UocU.js";import"./index-FWsSj9e8.js";import"./remote-BykRkK4-.js";import"./Tooltip-lS0Z-hNm.js";import"./utils-gePwv3Li.js";import"./OverlayArrow-D6Rp8cyC.js";import"./useFocus-CRClO8Jv.js";import"./ProgressBar-C-Wzcy4_.js";import"./Label-Cq91lcPj.js";import"./Hidden-DJEpRFXv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDbjeNSC.js";import"./context-XjgBcoVm.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-ClLYF0Wy.js";import"./useControlledState-CTrYQ-In.js";import"./useFocusable-CfkxnlZA.js";import"./react-children-utilities-CnG3QtZN.js";import"./Action-qWLGDSFj.js";import"./context-DiIk_s_n.js";import"./useStatic-C9-mjYGz.js";import"./browser-BpCzgQab.js";import"./getActionGroupSlot-DTels04I.js";import"./dynamic-Cm-8a2Jt.js";import"./useLocalizedStringFormatter-BwLVFU66.js";import"./Heading-vAH38JYJ.js";import"./Heading-UXRD4YW7.js";import"./RSPContexts-C5-K-EZi.js";import"./InlineCode-hPPexVZS.js";import"./Link-K9AShZA3.js";import"./usePress-BicAkDgM.js";import"./Separator-B2qq1Ml8.js";import"./Separator-Dx2ExPSk.js";import"./CollectionBuilder-DfMW8xNP.js";import"./Text--O-2RTYx.js";import"./EmulatedBoldText-DKBJ0QzH.js";import"./Text-CkngT02A.js";import"./TextArea-CvirBaNC.js";import"./TextFieldBase-Cissa49h.js";import"./FieldDescription-C-QWZBIG.js";import"./useFieldComponent-DcHfvLKR.js";import"./TextField-SLDL9hnk.js";import"./FieldError-D_l7_28D.js";import"./Form-Dur_LiI2.js";import"./Group-BKul3vV0.js";import"./Input-a6j3yjSB.js";import"./useTextField-BtK0z8dg.js";import"./useFormReset-CMCffA9I.js";import"./useFormValidation-jj6Fwru_.js";import"./useControlledHostValueProps-Bh4DAuTR.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Du4ye3-W.js";import"./AlertIcon-BGgK2Oqf.js";import"./LoadingSpinner-Crr5qNPb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DU6B0w55.js";import"./ContextMenuSection-jSS7omV8.js";import"./Dialog-BeRC8Qw9.js";import"./Collection-C6Dl6i0H.js";import"./SelectionIndicator-DJhqJXB-.js";import"./SelectionManager-CKq6y8XV.js";import"./useEvent-0gy1gNIh.js";import"./useCollator-CP6m8uNZ.js";import"./FocusScope-0pM5bnV4.js";import"./VisuallyHidden-D-7oSl-x.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
