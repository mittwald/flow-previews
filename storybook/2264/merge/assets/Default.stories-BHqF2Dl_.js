import{j as r,r as f}from"./iframe-CL_XwmGn.js";import{M as o}from"./MarkdownEditor-DgUf820L.js";import{L as R}from"./Label-D8wjF5yZ.js";import{F as b}from"./FieldError-p9GwIgel.js";import{B as z}from"./Button-D2VcFxMo.js";import{S as x}from"./Section-DJ3JBl70.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C2DgfhfE.js";import"./CodeBlock-BpLxiRtn.js";import"./clsx-B-dksMZM.js";import"./CopyButton-xBawpOAy.js";import"./IconWarning-BJDkWSaD.js";import"./flowComponent-BU0F8yOM.js";import"./index-5M68WWKF.js";import"./index-E9PNAIL6.js";import"./remote-vDvbK7RM.js";import"./Tooltip-ru0_7Mnb.js";import"./utils-pMOpDdKA.js";import"./OverlayArrow-CguIeEaq.js";import"./useFocus-BpR4SkFv.js";import"./ProgressBar-CwwrTQ5U.js";import"./Label-C9CEKXVd.js";import"./Hidden-D-ekfNfu.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-OokI145l.js";import"./context-BrZvYWUs.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CguvIA_y.js";import"./useFocusable-CrdCOPEw.js";import"./useFocusRing-vwKb8oQw.js";import"./react-children-utilities-D5DVgEhI.js";import"./Action-BeuDPcZa.js";import"./context-C4d2ZO_d.js";import"./useStatic-KIt4AINJ.js";import"./browser-BUAGSuau.js";import"./getActionGroupSlot-RL3kfRwz.js";import"./dynamic-qzGoZAaQ.js";import"./useLocalizedStringFormatter-y3SF15d-.js";import"./Heading-DNlihVQQ.js";import"./Heading-CAyFlpGN.js";import"./RSPContexts-A2U_AiO5.js";import"./InlineCode-DsBc2p-2.js";import"./Link-DMWmmK_7.js";import"./usePress-BzQNsH-t.js";import"./Separator-CnXVuLZH.js";import"./Separator-CW5j6fDP.js";import"./CollectionBuilder-D2SZxLcC.js";import"./Text-D6CnWJI6.js";import"./EmulatedBoldText-T1o3Oddg.js";import"./Text-BoyMWt4b.js";import"./TextArea-xYRHfpgH.js";import"./TextFieldBase-9NVtSak1.js";import"./FieldDescription-B8hcReII.js";import"./useFieldComponent-CJlPbBit.js";import"./TextField-CWJX0VqQ.js";import"./FieldError-B4bZwJpA.js";import"./Form--AezVwJ0.js";import"./Group-DciaRV8P.js";import"./Input-CUsih0HK.js";import"./useTextField-BhxE74Xi.js";import"./useFormReset-Dt36AuVA.js";import"./useFormValidation-B17WGe6J.js";import"./useControlledHostValueProps-DhDFNqRj.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-ClMe5xDD.js";import"./AlertIcon-DT_6S455.js";import"./LoadingSpinner-D9Wqoyf9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CWqxXJtj.js";import"./ContextMenuSection-6x7QO-B2.js";import"./Dialog-BknS8Hxj.js";import"./Collection-D-2fJfX0.js";import"./SelectionIndicator-KxjlcYOr.js";import"./SelectionManager-kuBnNlHS.js";import"./useEvent-Bol6JMEe.js";import"./useCollator-DdGOjTfE.js";import"./FocusScope-D2XVNmzA.js";import"./VisuallyHidden-q4vxjiW8.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
