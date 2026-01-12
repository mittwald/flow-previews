import{j as r,r as f}from"./iframe-DkC9HeFh.js";import{M as o}from"./MarkdownEditor-C21c2lqL.js";import{L as R}from"./Label-Bmyd95n1.js";import{F as b}from"./FieldError-Dbnkzdo1.js";import{B as z}from"./Button-B7ieOWfK.js";import{S as x}from"./Section-C5sab7e9.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DuJvTg5Z.js";import"./CodeBlock-D_HEMEVe.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DDCtj1zp.js";import"./IconWarning-6DY0-AAa.js";import"./flowComponent-1oYrvkPj.js";import"./index-DvyT4dL7.js";import"./index-84tLr-0T.js";import"./remote-C2KQESr1.js";import"./Tooltip-qvCrGnxX.js";import"./utils-CQbe0cgS.js";import"./OverlayArrow-BJ-VOV5h.js";import"./useFocus-DkNOoSBL.js";import"./ProgressBar-CIHpzS8j.js";import"./Label-Dz_bjD6f.js";import"./Hidden-Dt8SDEzH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Yk9h4-sj.js";import"./context-FwWFVwDs.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Ul0j90Sg.js";import"./useFocusable-CeYJrI7n.js";import"./useFocusRing-C9ROKOON.js";import"./react-children-utilities-DZp9i3kA.js";import"./Action-BeqMUzE-.js";import"./context-Z29bubao.js";import"./useStatic-8Ma0Gu-h.js";import"./browser-tA6G_ksz.js";import"./getActionGroupSlot-BkxkF0Oa.js";import"./dynamic-DDaduNaQ.js";import"./useLocalizedStringFormatter-BMEualnj.js";import"./Heading-C5UH4Hr2.js";import"./Heading-C_Zexpqw.js";import"./RSPContexts-CKa7E1cC.js";import"./InlineCode-Hw0TdFZv.js";import"./Link-Yw1jAvGj.js";import"./usePress-zXWrYZpb.js";import"./Separator-Dkh1gUV_.js";import"./Separator-YXmfk0mZ.js";import"./CollectionBuilder-C7f0KbGc.js";import"./Text-B-gx4bXK.js";import"./EmulatedBoldText-ubSX6qOz.js";import"./Text-BZKGVCR5.js";import"./TextArea-CmyYxxjw.js";import"./TextFieldBase-Ds1AgYlo.js";import"./FieldDescription-DzNmSyg3.js";import"./useFieldComponent-eCPWR12U.js";import"./TextField-BuskeFhM.js";import"./FieldError-CNoEBaIo.js";import"./Form-D5R2a4m8.js";import"./Group-C_JnVwTY.js";import"./Input-BPPE0u71.js";import"./useTextField-DbxlREwJ.js";import"./useFormReset-BF2XnUgU.js";import"./useFormValidation-DmYU2vdY.js";import"./useControlledHostValueProps-CcqRfY0b.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DN8jvMhh.js";import"./AlertIcon-BRQK8hpu.js";import"./LoadingSpinner-lFYILNSp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-1sEra0ij.js";import"./ContextMenuSection-nkrIclXc.js";import"./Dialog-BJyrAoE0.js";import"./Collection-CUZZqAxe.js";import"./SelectionIndicator-2dj1bxWN.js";import"./SelectionManager-ElI-xXNm.js";import"./useEvent-DWxhQQFL.js";import"./useCollator-DUnRWfY0.js";import"./FocusScope-Bsk9Ww9W.js";import"./VisuallyHidden-DWtp1z23.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
