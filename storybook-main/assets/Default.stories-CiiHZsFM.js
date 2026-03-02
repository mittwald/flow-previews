import{j as r,r as f}from"./iframe-Dx38AIDT.js";import{M as o}from"./MarkdownEditor-C_OthaRp.js";import{L as R}from"./Label-lvpVoRBR.js";import{F as b}from"./FieldError-DY7Z21GR.js";import{B as z}from"./Button-Bhwtl7lS.js";import{S as x}from"./Section-CzQEEFga.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BiniuWH5.js";import"./CodeBlock-Bshd47ZC.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CHOOvFWt.js";import"./IconWarning-tem5fYZU.js";import"./flowComponent-BwBSRBJY.js";import"./index-B3w7UL3m.js";import"./index-C4zw0wF6.js";import"./remote-C7_Ru_dB.js";import"./Tooltip-DP8HxTlT.js";import"./utils-uxa8p5vl.js";import"./OverlayArrow-DXkjfcol.js";import"./useFocus-C3KeEXKn.js";import"./ProgressBar-BzTC4ZoK.js";import"./Label-CRhDhtUr.js";import"./Hidden-fCjHF3ey.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--5Xg4_7C.js";import"./context-CRsgLXVa.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-XbCssGNL.js";import"./useControlledState-BekZOXin.js";import"./useFocusable-CIjhaoEP.js";import"./react-children-utilities-dxVRcOy8.js";import"./ActionBatch-B-iA-QhY.js";import"./useOverlayController-Cqh70DsD.js";import"./useStatic-CD9yQ0OW.js";import"./browser-Bgj4nWuI.js";import"./getActionGroupSlot-CnwwqW5a.js";import"./dynamic-Cw331Sxy.js";import"./useLocalizedStringFormatter-D4oP4MPs.js";import"./Heading-z0nw7kl0.js";import"./Heading-BiABk9m9.js";import"./RSPContexts-DnJfGcBy.js";import"./InlineCode-DFniTaf-.js";import"./Link-Zi-5il-W.js";import"./usePress-BU6JmZbW.js";import"./Separator-DbjF5X8D.js";import"./Separator-BVmogCl8.js";import"./CollectionBuilder-d7mW72oL.js";import"./Text-stRMORLN.js";import"./EmulatedBoldText-DkfYMVU4.js";import"./Text-CN5O_J5f.js";import"./TextArea-DbnUSgIU.js";import"./useFieldComponent-CxTx8kf3.js";import"./useControlledHostValueProps-BgZhJfoJ.js";import"./FieldDescription-BTad89Yx.js";import"./TextField-CxexmMog.js";import"./FieldError-Cjk2dDkd.js";import"./Form-CwkZdzbX.js";import"./Group-BjH18wko.js";import"./Input-BQCGNTF8.js";import"./useTextField-DxOU6feS.js";import"./useFormReset-DiledHxM.js";import"./useFormValidation-Dn8WL8kF.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BEiS7w5p.js";import"./AlertIcon-BbY5ij-p.js";import"./LoadingSpinner-CAXp-11u.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DXXdMML6.js";import"./ContextMenuSection-Bnn5st86.js";import"./Dialog-BIvPa65M.js";import"./Collection-DFwYI0R_.js";import"./SelectionIndicator-D_Yc_rq7.js";import"./SelectionManager-BSVgVRml.js";import"./useEvent-D7Cb0aSH.js";import"./useCollator-DTKHLM3i.js";import"./FocusScope-eq4FNALu.js";import"./VisuallyHidden-ma9EryWn.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
