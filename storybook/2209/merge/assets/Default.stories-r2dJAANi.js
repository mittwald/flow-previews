import{j as r,r as f}from"./iframe-CcUuYubL.js";import{M as o}from"./MarkdownEditor-D_dNB7-V.js";import{L as R}from"./Label-L2Rin-A2.js";import{F as b}from"./FieldError-BP_boiRG.js";import{B as z}from"./Button-hsF3uCN8.js";import{S as x}from"./Section-nZGbnrhV.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DoUYqBfL.js";import"./CodeBlock-Dh2rtrJa.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C5_gtHsD.js";import"./IconWarning-BDjC6xOL.js";import"./flowComponent-BzXwfnR4.js";import"./index-01_sGRec.js";import"./index-C6oVqO8J.js";import"./remote-DfJLRaxN.js";import"./Tooltip-D2lE8wUb.js";import"./utils-B3A9CwVo.js";import"./OverlayArrow-LMNtsg17.js";import"./useFocus-tKANsd5T.js";import"./ProgressBar-Cx5KzXiF.js";import"./Label-ISSVaHBY.js";import"./Hidden-JctcoGsF.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-4jeMa91n.js";import"./context-BiAKFHSE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cd7zGKC9.js";import"./useFocusable-D38UQMpJ.js";import"./useFocusRing-CorDS6JG.js";import"./react-children-utilities-B3DRSstD.js";import"./Action-B5lNwIyS.js";import"./context-BjvrdVaN.js";import"./useStatic-DtEAcyvY.js";import"./browser-DepVz5kj.js";import"./getActionGroupSlot-COit0AjF.js";import"./dynamic-BvCZ3AJL.js";import"./useLocalizedStringFormatter-BCaxxAx_.js";import"./Heading-BKl3Ob1v.js";import"./Heading-DhOjZbSl.js";import"./RSPContexts-CCIxlK1Q.js";import"./InlineCode-yfFDrfKT.js";import"./Link-giJ9SIo4.js";import"./usePress-BQdte7r9.js";import"./Separator-BF5-EFRA.js";import"./Separator-CC01ZKOL.js";import"./CollectionBuilder-B_ze3f0a.js";import"./Text-DY9Wsurd.js";import"./EmulatedBoldText-IgYc1KUF.js";import"./Text-B0FzOrzN.js";import"./TextArea-BwzCmP3i.js";import"./TextFieldBase-Xxk65HEB.js";import"./FieldDescription-ADxnhLyC.js";import"./useFieldComponent-DfHGJXnI.js";import"./TextField-CUNLBamV.js";import"./FieldError-BzVPBYcu.js";import"./Form-D1MNyHLC.js";import"./Group-C9hqVmoY.js";import"./Input-BEUYik2Y.js";import"./useTextField-hY4MTqvA.js";import"./useFormReset-CtXF-ibf.js";import"./useFormValidation-ey4MT9ZA.js";import"./useControlledHostValueProps-BYMfCzES.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BSrbl83B.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D-Fqqf34.js";import"./ContextMenuSection-DMta75t3.js";import"./Dialog-mDFWR8fO.js";import"./Collection-DrwZoIdd.js";import"./SelectionIndicator-DgBShxS7.js";import"./SelectionManager-Cr3dwni9.js";import"./useEvent-BHYxhhiC.js";import"./useCollator-z0uw1QeA.js";import"./FocusScope-BV2sx_oo.js";import"./VisuallyHidden-DlLFaNIr.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
