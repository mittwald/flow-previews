import{j as r,r as f}from"./iframe-BAg_Vkif.js";import{M as o}from"./MarkdownEditor-DqF4n5gK.js";import{L as R}from"./Label-DDreQZVm.js";import{F as b}from"./FieldError-C6VlTPyB.js";import{B as z}from"./Button-CNza9GnT.js";import{S as x}from"./Section-k31Ld_a5.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DIdFEfLG.js";import"./CodeBlock-BPAPxL7r.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CvMxT_K_.js";import"./IconWarning-eOJWxr99.js";import"./flowComponent-Br_xtRU3.js";import"./index-DNdviT-s.js";import"./index-ClwrdcL8.js";import"./remote-OUS6bpte.js";import"./Tooltip-DRmqfEDE.js";import"./utils-BI8UFEcl.js";import"./OverlayArrow-CH26SGjP.js";import"./useFocus-L8RhZ1QR.js";import"./ProgressBar-CpBnM9iR.js";import"./Label-Bx8dS0aq.js";import"./Hidden-BiPkEj1j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8b0YN0Pv.js";import"./context-Dr2F39lD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C63VSZxO.js";import"./useFocusable-0NuZ-hi3.js";import"./useFocusRing-D5C_zsQK.js";import"./react-children-utilities-Ck8_pp6j.js";import"./Action-BOjxF4Dl.js";import"./context-BAbefeLZ.js";import"./useStatic-DpED2Oge.js";import"./browser-CG8hIWrH.js";import"./getActionGroupSlot-B4_mqTXX.js";import"./dynamic-eE1nsZvE.js";import"./useLocalizedStringFormatter-BJUyDOOi.js";import"./Heading-Dn2ss8TC.js";import"./Heading-DM0DAFfT.js";import"./RSPContexts-DM5FD37h.js";import"./InlineCode-BzsYzhmA.js";import"./Link-BFinc3Rk.js";import"./usePress-BNrva4v9.js";import"./Separator-W-A1MzI3.js";import"./Separator-B5uze-er.js";import"./CollectionBuilder-7_bsJlU3.js";import"./Text-Cv_CDcg6.js";import"./EmulatedBoldText-Dzw3SPd4.js";import"./Text-B1sdohWQ.js";import"./TextArea-D3TsOIbR.js";import"./TextFieldBase-Db8VVLgm.js";import"./FieldDescription-BcT__64l.js";import"./useFieldComponent-B6Kjd1ej.js";import"./TextField-yGQ0KKZp.js";import"./FieldError-CzfSrdz6.js";import"./Form-YKM3tWZS.js";import"./Group-W4MUpB1W.js";import"./Input-E6SU_N0O.js";import"./useTextField-v_8aHGWN.js";import"./useFormReset-cz3XyTOd.js";import"./useFormValidation-2zAOI2ZU.js";import"./useControlledHostValueProps-Ccn5EjqQ.js";import"./Label.module-CUYTf9Jc.js";import"./InlineAlert-mZj4wy81.js";import"./AlertIcon-Ce-Fu2Pm.js";import"./LoadingSpinner-BktXBT1I.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-UGLVSCHM.js";import"./ContextMenuSection-BZOfIkxf.js";import"./Dialog-BlnwYq_Z.js";import"./Collection-CPHZYP7m.js";import"./SelectionIndicator-zMpThTxY.js";import"./SelectionManager-DlI-VKzy.js";import"./useEvent-CvZlzKtX.js";import"./useCollator--NIMsuGj.js";import"./FocusScope-CX8aMKJ8.js";import"./VisuallyHidden-0Cja9mQD.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
