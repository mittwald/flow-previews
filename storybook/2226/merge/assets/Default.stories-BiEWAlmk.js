import{j as r,r as f}from"./iframe-Dq6d4A4K.js";import{M as o}from"./MarkdownEditor-BaMA__j1.js";import{L as R}from"./Label-B5IUeoBf.js";import{F as b}from"./FieldError-3R6U5-ci.js";import{B as z}from"./Button-CRlV5nO0.js";import{S as x}from"./Section-BosBEo7L.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-mrWivre1.js";import"./CodeBlock-BKQM3bK2.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D4NOyh0q.js";import"./IconWarning-CufYr70B.js";import"./flowComponent-CtCwQzJi.js";import"./index-Bhk-cyr2.js";import"./index-cJyKvq7H.js";import"./remote-9zlx4mlg.js";import"./Tooltip-D6NdApLO.js";import"./utils-JgkAdQlm.js";import"./OverlayArrow-CZpwCw1e.js";import"./useFocus-CdRm64Xm.js";import"./ProgressBar-C4xOfrMO.js";import"./Label-D2o2XqmC.js";import"./Hidden-aa2iYn_Y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-wLk1TVQc.js";import"./context-Dane2eIN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B_V0UpKw.js";import"./useFocusable-SW4CEV0n.js";import"./useFocusRing-HiCcztDi.js";import"./react-children-utilities-D-ROuQyk.js";import"./Action-BH5FUwcy.js";import"./context-Cu2JCu7X.js";import"./useStatic-qDMUdwgV.js";import"./browser-DRZjKHqy.js";import"./getActionGroupSlot-DfIW_w4r.js";import"./dynamic-D3ex2ST8.js";import"./useLocalizedStringFormatter-DsfTy_q5.js";import"./Heading-fRiF7ARa.js";import"./Heading-jVMpSXwt.js";import"./RSPContexts-CrxTMHNd.js";import"./InlineCode-CiKlRqtY.js";import"./Link-BVUJERgb.js";import"./usePress-BTTZyaX9.js";import"./Separator-B33MZK64.js";import"./Separator-DMKKn_KL.js";import"./CollectionBuilder-BBsN2d06.js";import"./Text-0vHLnm-v.js";import"./EmulatedBoldText-D7VkYRRX.js";import"./Text-BYQ1lWMY.js";import"./TextArea-tOtuW08N.js";import"./TextFieldBase-BhLOmNBG.js";import"./FieldDescription-YzwMGkaa.js";import"./useFieldComponent-lf4P9InL.js";import"./TextField-11xPdt9d.js";import"./FieldError-DP91cGbX.js";import"./Form-q3JpQbyd.js";import"./Group-PxlHAs9-.js";import"./Input-B-OOQ2po.js";import"./useTextField-BWTL19Ek.js";import"./useFormReset-D6HDlpz3.js";import"./useFormValidation-wNB2SuId.js";import"./useControlledHostValueProps-Dw6orj-f.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C8xohBci.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DJxkILn0.js";import"./ContextMenuSection-CAGjVTCl.js";import"./Dialog-D4b1JxJ9.js";import"./Collection-CUuQgOW5.js";import"./SelectionIndicator-Cx0hTJGG.js";import"./SelectionManager-Df7F--Ci.js";import"./useEvent-DNqkMhlB.js";import"./useCollator-B5JOOy1t.js";import"./FocusScope-Bbcwxc4u.js";import"./VisuallyHidden-DiG4H0lP.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Kr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Kr as __namedExportsOrder,Jr as default};
