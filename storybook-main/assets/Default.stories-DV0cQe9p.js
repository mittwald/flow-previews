import{j as r,r as f}from"./iframe-4vGjmvQN.js";import{M as o}from"./MarkdownEditor-3z3LDxNe.js";import{L as R}from"./Label-C8vmJ-_M.js";import{F as b}from"./FieldError-ZzdG0j41.js";import{B as z}from"./Button-Dkb2KJyV.js";import{S as x}from"./Section-csDVj14w.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CAysP-7x.js";import"./CodeBlock-qNtPJQNZ.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Bf5sh_gw.js";import"./IconWarning-CMo0ZXSb.js";import"./flowComponent-BTnwUX2e.js";import"./index-DFF4TtWB.js";import"./index--XKY9bK1.js";import"./remote-BMVFgzCt.js";import"./Tooltip-syyoWWmC.js";import"./utils-Cb3SeWCs.js";import"./OverlayArrow-Ss-CcX6O.js";import"./useFocus-BGpJf3EA.js";import"./ProgressBar-D3BQYEeZ.js";import"./Label-DRFrGBxg.js";import"./Hidden-DKOWGOBv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dy2_qp8M.js";import"./context-Cugfl_gO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-wPwtFL3G.js";import"./useFocusable-BvBcbeR1.js";import"./useFocusRing-ctZhab72.js";import"./react-children-utilities-kb8ILG1A.js";import"./Action-DFPEzuYz.js";import"./context-C_iyWBEo.js";import"./useStatic-CkngZPNU.js";import"./browser-BLim8y6B.js";import"./getActionGroupSlot-ChdVdmUh.js";import"./dynamic-CTwyIkzY.js";import"./useLocalizedStringFormatter-Ci5i2g9p.js";import"./Heading-DVNwCXdo.js";import"./Heading-D0PKdBSu.js";import"./RSPContexts-BAo2RxOH.js";import"./InlineCode-DTLS06fn.js";import"./Link-BJK7mn5B.js";import"./usePress-SP29s-a6.js";import"./Separator-Co9kONL6.js";import"./Separator-CUemZlM2.js";import"./CollectionBuilder-BFcqcbLB.js";import"./Text-D_m0UGXp.js";import"./EmulatedBoldText-DOuKha2y.js";import"./Text-DO-ESRpi.js";import"./TextArea-CbkIH1CP.js";import"./TextFieldBase-WmiI8yFM.js";import"./FieldDescription-6vHFVXXA.js";import"./useFieldComponent-diqFBc0H.js";import"./TextField-DrYfuzmJ.js";import"./FieldError-D1JCdJnN.js";import"./Form-Bf7p1I1W.js";import"./Group-C_2eU3ro.js";import"./Input-DxBr8hxM.js";import"./useTextField-BShdbOtD.js";import"./useFormReset-BZ0fN7tZ.js";import"./useFormValidation-BrUcW_b7.js";import"./useControlledHostValueProps-Cr8K_QbC.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Qei33fJA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C8uGqlfr.js";import"./ContextMenuSection-uYq5CLUg.js";import"./Dialog-DWeru3ZY.js";import"./Collection-JwP5-obH.js";import"./SelectionIndicator-Cti1f0QF.js";import"./SelectionManager-DMVUPuxd.js";import"./useEvent-CRBCWBzI.js";import"./useCollator-D5lNxT5d.js";import"./FocusScope-Blxz7JIY.js";import"./VisuallyHidden-C3YQx9t_.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
