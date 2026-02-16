import{j as r,r as f}from"./iframe-H3UGI_HB.js";import{M as o}from"./MarkdownEditor-DKYb1U6S.js";import{L as R}from"./Label-BgH6R3x8.js";import{F as b}from"./FieldError-wcTb1U2C.js";import{B as z}from"./Button-fzixWt9q.js";import{S as x}from"./Section-BwDtX3u0.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-B07dHv93.js";import"./CodeBlock-Ba1bLbJJ.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Bo1dlF6_.js";import"./IconWarning-D9BgjB6B.js";import"./flowComponent-RxwhG80E.js";import"./index-D6GAEjHP.js";import"./index-BJWFQYe5.js";import"./remote-uffOWPGy.js";import"./Tooltip-GMOt2NX1.js";import"./utils-DSogMYdc.js";import"./OverlayArrow-C-E8ydRe.js";import"./useFocus-DQ3i5Klp.js";import"./ProgressBar-Diyn8Lqp.js";import"./Label-CZuC8vWV.js";import"./Hidden-DoBcQ2Eg.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CtoVShGG.js";import"./context-BGVDv2KD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DrWQa_14.js";import"./useControlledState-DkMic-Ic.js";import"./useFocusable-BYwgOLI_.js";import"./react-children-utilities-BmQAsSAT.js";import"./ActionBatch-TsHiTfcO.js";import"./useOverlayController-3aktaPy5.js";import"./useStatic-CxHSWaOd.js";import"./browser-xqq3Xy_w.js";import"./getActionGroupSlot-B9ZNFQ5y.js";import"./dynamic-DBkJoO-a.js";import"./useLocalizedStringFormatter-w61_e3zI.js";import"./Heading-F7Cj8meE.js";import"./Heading-CBpf9z-K.js";import"./RSPContexts-BrswSFX-.js";import"./InlineCode-iccx9R0e.js";import"./Link-550MYSbs.js";import"./usePress-CSCW4wCL.js";import"./Separator-rG0RaNKq.js";import"./Separator-Q9pbsAsV.js";import"./CollectionBuilder-Ba2_Q0LP.js";import"./Text-B0lwY8q7.js";import"./EmulatedBoldText-DRHBUbf1.js";import"./Text-UIHj6j-v.js";import"./TextArea-1wTGEJ7s.js";import"./useFieldComponent-Bj80Ne3v.js";import"./useControlledHostValueProps-bka0t134.js";import"./FieldDescription-Br0Af-ga.js";import"./TextField-D5DqXkzO.js";import"./FieldError-Be1mQ-cQ.js";import"./Form-BGaHvL5t.js";import"./Group-DdJ_b0gx.js";import"./Input-CefV5Kvm.js";import"./useTextField-BGov_n0p.js";import"./useFormReset-CtKq0dbr.js";import"./useFormValidation-DekRXblw.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CQfakUvk.js";import"./AlertIcon-Cb5scZh6.js";import"./LoadingSpinner-r6z_bU0O.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-5W_fyVDJ.js";import"./ContextMenuSection-DZ6NPIaP.js";import"./Dialog-DKMSACkI.js";import"./Collection-WGKH_Dnj.js";import"./SelectionIndicator-BgUtvt2H.js";import"./SelectionManager-Bqz8XsWW.js";import"./useEvent-ChUOYfSF.js";import"./useCollator--V7CwpxI.js";import"./FocusScope-DjcW1lzL.js";import"./VisuallyHidden-BGP1Ifbj.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
