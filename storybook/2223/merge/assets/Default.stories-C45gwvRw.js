import{j as r,r as f}from"./iframe-a9513Vq6.js";import{M as o}from"./MarkdownEditor-JNc6hrot.js";import{L as R}from"./Label-BZ3qOvYQ.js";import{F as b}from"./FieldError-WoUSVR_n.js";import{B as z}from"./Button-CbZraw7Z.js";import{S as x}from"./Section-C8UMRpV9.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-D7EPIzw-.js";import"./CodeBlock-ChFeb2sf.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CGM5Kdgy.js";import"./IconWarning-BPr7HnMX.js";import"./flowComponent-ClX3KjCn.js";import"./index-BqXFMVtG.js";import"./index-CgKgRbSB.js";import"./remote-CGHUze9I.js";import"./Tooltip-DVHIlEAH.js";import"./utils-Q60aVnZq.js";import"./OverlayArrow-BuQIV4ze.js";import"./useFocus-CH_x6C_j.js";import"./ProgressBar-ZGOw6r6D.js";import"./Label-THT_xKrE.js";import"./Hidden-CBXUgXzH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-nB2pk6qM.js";import"./context-CGjHIvvu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CemUvUps.js";import"./useFocusable-lL6lq36R.js";import"./useFocusRing-CmMhl12v.js";import"./react-children-utilities-BJCaxIrq.js";import"./Action-CS14UEhl.js";import"./context-RLH4ysrR.js";import"./useStatic-BYKWrdXY.js";import"./browser-CuCeyixq.js";import"./getActionGroupSlot-gpXu2eix.js";import"./dynamic-D7T7LY8j.js";import"./useLocalizedStringFormatter-CqunH7JG.js";import"./Heading-Bm0lzmg4.js";import"./Heading-35mryU7d.js";import"./RSPContexts-DpIEdSL7.js";import"./InlineCode-2-CW2ka7.js";import"./Link-Dnav6fqI.js";import"./usePress-CyOdCqvu.js";import"./Separator-D97KP2Mz.js";import"./Separator-CV17wQ8T.js";import"./CollectionBuilder-DV1hsabw.js";import"./Text-hxI3a1Rs.js";import"./EmulatedBoldText-mDi0QmS0.js";import"./Text-KDVUHE9w.js";import"./TextArea-DuUVe008.js";import"./TextFieldBase-ChofrBCm.js";import"./FieldDescription-B1DZzGI9.js";import"./useFieldComponent-DoOT3wm0.js";import"./TextField-C0XDoeam.js";import"./FieldError-C3zvz5gI.js";import"./Form-DpSLYLL6.js";import"./Group-D-ENRzUh.js";import"./Input-CtQP6IcM.js";import"./useTextField-CtFPXen_.js";import"./useFormReset-CYu_Lr-z.js";import"./useFormValidation-vP3SVKb2.js";import"./useControlledHostValueProps-BNY-TyT6.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CjOt6fEt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CbYmiDFL.js";import"./ContextMenuSection-BAncSsp2.js";import"./Dialog-C14EYRfp.js";import"./Collection-D4DMEnaD.js";import"./SelectionIndicator-ZvhngIUd.js";import"./SelectionManager-CS8x0YuZ.js";import"./useEvent-CPsIFNqP.js";import"./useCollator-BiekIj1S.js";import"./FocusScope-BnHRmLRH.js";import"./VisuallyHidden-C2yGzMiQ.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
