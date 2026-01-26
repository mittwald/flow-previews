import{j as r,r as f}from"./iframe-ICCBaEZ0.js";import{M as o}from"./MarkdownEditor-Bqgbv_aM.js";import{L as R}from"./Label-CdS4JTo9.js";import{F as b}from"./FieldError-CXiPiawI.js";import{B as z}from"./Button-BPUjkcWl.js";import{S as x}from"./Section-f7ELsjIS.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CfJAjvj5.js";import"./CodeBlock-B7Leppit.js";import"./clsx-B-dksMZM.js";import"./CopyButton-zL8zslhI.js";import"./IconWarning-DNTau7lk.js";import"./flowComponent-BP2zunxu.js";import"./index-Bz_4mo81.js";import"./index-Dbcsq1pl.js";import"./remote-CrBsxa38.js";import"./Tooltip-B0ufLVm4.js";import"./utils-Bdyed02U.js";import"./OverlayArrow-BzKyLQdS.js";import"./useFocus-sIQn0Mmu.js";import"./ProgressBar-DNR75UAD.js";import"./Label-AJl99fin.js";import"./Hidden-DZAoEMIQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrekXyf_.js";import"./context-BA_6GkxW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-0-xiytms.js";import"./useFocusable-Da3kr2d3.js";import"./useFocusRing-C-l0oxpd.js";import"./react-children-utilities-wkult5Iv.js";import"./Action-BI-eqtgf.js";import"./context-CFn3lEGQ.js";import"./useStatic-EBffme0U.js";import"./browser-BXZux_wF.js";import"./getActionGroupSlot-BNL4E6BB.js";import"./dynamic-D4nz3o_q.js";import"./useLocalizedStringFormatter-CSoJHnbm.js";import"./Heading-_OIl0AzZ.js";import"./Heading-BmRm-FE-.js";import"./RSPContexts-yVX-lDWS.js";import"./InlineCode-Be3d_GCY.js";import"./Link-S_XtGvhq.js";import"./usePress-Bkx3Up2v.js";import"./Separator-Sllo4KwP.js";import"./Separator-Npr-6AmU.js";import"./CollectionBuilder-D1MQIG8v.js";import"./Text-wotACWdr.js";import"./EmulatedBoldText-CJhsU2oU.js";import"./Text-6VRpzXYD.js";import"./TextArea-CiHlQaLh.js";import"./TextFieldBase-B4pO5Q2k.js";import"./FieldDescription-CTX2Nbt4.js";import"./useFieldComponent-C2gLyH5u.js";import"./TextField-UgkkafNs.js";import"./FieldError-Uso8nKHu.js";import"./Form-Dqb0_Mn-.js";import"./Group-Kcal-yRn.js";import"./Input-CQyHZiU6.js";import"./useTextField-1ZJA7UcR.js";import"./useFormReset-mc9YwuWr.js";import"./useFormValidation-BK0HiA-u.js";import"./useControlledHostValueProps--FOjf0QU.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CQRiaMTC.js";import"./AlertIcon-DVbl3jDT.js";import"./LoadingSpinner-DZTaEi_R.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CEB885Bq.js";import"./ContextMenuSection-CUOZwZ8m.js";import"./Dialog-YdLNLYvV.js";import"./Collection-CXuidDK4.js";import"./SelectionIndicator-6JK-VVYS.js";import"./SelectionManager-CgsCNKwD.js";import"./useEvent-DVme5dXh.js";import"./useCollator-hfiTQ-EU.js";import"./FocusScope-BgxYME-V.js";import"./VisuallyHidden-CIUq3upT.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
