import{j as r,r as f}from"./iframe-Cs0JkT9Q.js";import{M as o}from"./MarkdownEditor-C0R4pwT-.js";import{L as R}from"./Label-CHxievOH.js";import{F as b}from"./FieldError-BZN8rJUk.js";import{B as z}from"./Button-BS2N-oft.js";import{S as x}from"./Section-DNo4C-Bh.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DIkTaigK.js";import"./CodeBlock-CxZ3l2PP.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CSIYkRBz.js";import"./IconWarning-wVjX2Q6D.js";import"./flowComponent-DnhH9c8U.js";import"./index-CF0rrQKO.js";import"./index-BDmaB34G.js";import"./remote-bYaNzVPL.js";import"./Tooltip-Dgd936TX.js";import"./utils-BvIIGzqK.js";import"./OverlayArrow-B2W5aB6f.js";import"./useFocus-DNqIDWYA.js";import"./ProgressBar-CG2kSUer.js";import"./Label-CQSgfv4f.js";import"./Hidden-BvtrxWwl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CfslMsP4.js";import"./context-CtFpEE6p.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Cldy4Slr.js";import"./useControlledState-DrKGwN1m.js";import"./useFocusable-Cn5DQ2tI.js";import"./react-children-utilities-DmDWpD1_.js";import"./Action-8KnSiAHu.js";import"./context-DmALYfE_.js";import"./useStatic-BOH6EX5_.js";import"./browser-Cphwy2_f.js";import"./getActionGroupSlot-BG1YGDa-.js";import"./dynamic-DZ8udFFw.js";import"./useLocalizedStringFormatter-CQ-MJvxZ.js";import"./Heading-BKu6e9hA.js";import"./Heading-eFVgN67f.js";import"./RSPContexts-BDhxiX2p.js";import"./InlineCode-CkCHFldP.js";import"./Link-Cm1yPu4S.js";import"./usePress-y02TS-RC.js";import"./Separator-D8nuMezW.js";import"./Separator-BWqNxSAD.js";import"./CollectionBuilder-BDz0phXE.js";import"./Text-l9LtklMs.js";import"./EmulatedBoldText-C1XQaUUR.js";import"./Text-Dd1xy9_M.js";import"./TextArea-Ck1-2F4D.js";import"./useFieldComponent-BGOnrhQA.js";import"./useControlledHostValueProps-3OTJgyz7.js";import"./FieldDescription-DnGZgPAY.js";import"./TextField-hrf8U4uc.js";import"./FieldError-zGZXG0KM.js";import"./Form-D-8VlTBZ.js";import"./Group-BV5xd3-K.js";import"./Input-B1hEkaq5.js";import"./useTextField-BQp_mORd.js";import"./useFormReset-5IC1Q0ld.js";import"./useFormValidation-CaaIEsuY.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BA7qstOH.js";import"./AlertIcon-Dko-1oCR.js";import"./LoadingSpinner-FnXgTY4T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CoGTRo7z.js";import"./ContextMenuSection-RP0htgKT.js";import"./Dialog-n12IRs92.js";import"./Collection-BVBA565q.js";import"./SelectionIndicator-36GmvFRO.js";import"./SelectionManager-DK8tNpRO.js";import"./useEvent-DfZ5FDj0.js";import"./useCollator-JQWc_WGD.js";import"./FocusScope-BXTpAFiu.js";import"./VisuallyHidden-BGmnCuXu.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
