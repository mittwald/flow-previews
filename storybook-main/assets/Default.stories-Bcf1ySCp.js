import{j as r,r as f}from"./iframe-DGnxviCN.js";import{M as o}from"./MarkdownEditor-Dxuc6b9A.js";import{L as R}from"./Label-C_bFUpyc.js";import{F as b}from"./FieldError-D8VjacOs.js";import{B as z}from"./Button-BVsKVkL8.js";import{S as x}from"./Section-DY27wNHr.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DN_gtEiW.js";import"./CodeBlock-M9pgJc9M.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BkMKra3q.js";import"./IconWarning-B9r0STX6.js";import"./flowComponent-BKDhK7wE.js";import"./index-BGEs2x-a.js";import"./index-CLLV6gyd.js";import"./remote-B6BjMgpw.js";import"./Tooltip-KvlfeKwJ.js";import"./utils-BkfS5ksp.js";import"./OverlayArrow-Cl6eJh3Y.js";import"./useFocus--s-Wd8Ep.js";import"./ProgressBar-BzVgRhsE.js";import"./Label-5xK8AOcv.js";import"./Hidden-v-Wf_Hux.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BPNr7xBu.js";import"./context-UPqYfqWR.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Bv9AUNti.js";import"./useControlledState-Tnf2yuXg.js";import"./useFocusable-Qpttz7ZN.js";import"./react-children-utilities-CblTP0Wv.js";import"./ActionBatch-CX-JwDue.js";import"./useOverlayController-5kwf29Lw.js";import"./useStatic-BeisnKXD.js";import"./browser-Cb_u6_6F.js";import"./getActionGroupSlot-rP5M9435.js";import"./dynamic-DjV52Fwj.js";import"./useLocalizedStringFormatter-ClYonFTS.js";import"./Heading-DTe6jOe1.js";import"./Heading-BzIJuxDf.js";import"./RSPContexts-DVx2WDHj.js";import"./InlineCode-BdGckX1S.js";import"./Link-Bzfevt_A.js";import"./usePress-CyY11qHx.js";import"./Separator-CK1qUrNo.js";import"./Separator-BN8d0XAg.js";import"./CollectionBuilder-DEOfwI8d.js";import"./Text-VNnveGPv.js";import"./EmulatedBoldText-DzMWb8wu.js";import"./Text-DvHtl8Bn.js";import"./TextArea-2UVOlZR4.js";import"./useFieldComponent-YlKWY1fY.js";import"./useControlledHostValueProps-BIbkMX3_.js";import"./FieldDescription-CXMcujUG.js";import"./TextField-BjemnuiU.js";import"./FieldError-er7nowFJ.js";import"./Form-DxH8Icum.js";import"./Group-Bidst4UD.js";import"./Input-BlrdZkUM.js";import"./useTextField-DgN6vDQ1.js";import"./useFormReset-DURLcehp.js";import"./useFormValidation-Dta_Z6Hx.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CALscOJV.js";import"./AlertIcon-DgP01cQO.js";import"./LoadingSpinner-DowiBEwh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BPmMTYs3.js";import"./ContextMenuSection-BcwKnSYu.js";import"./Dialog-4LBd4V1R.js";import"./Collection-SZbXc0LG.js";import"./SelectionIndicator-BVYQMpc5.js";import"./SelectionManager-C4F6MNyw.js";import"./useEvent-BwKzZdM2.js";import"./useCollator-2w2DhYsq.js";import"./FocusScope-CggPEhUf.js";import"./VisuallyHidden-BQzdTzN8.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
