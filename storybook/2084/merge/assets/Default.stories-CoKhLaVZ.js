import{j as r,r as h}from"./iframe-BdeexEb8.js";import{M as e}from"./MarkdownEditor-WKS3NN80.js";import{L as l}from"./Label-B8MQOgYT.js";import{F as g}from"./useFieldComponent-DdJyO0fC.js";import{B as f}from"./Button-8DtAEqjD.js";import{S as x}from"./Section-B4hiFsDg.js";import"./index-nuYtCEEu.js";import"./Markdown-DONUTO58.js";import"./CodeBlock-NOV5HcBX.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CY0RVX7E.js";import"./IconWarning-CtsbdbUA.js";import"./flowComponent-D9dNYku3.js";import"./index-D-gFJj9O.js";import"./index-DrTgVdtP.js";import"./Tooltip-COG5OYCc.js";import"./ClearPropsContextView-CJZTyvnc.js";import"./ClearPropsContext-C8aFsCZA.js";import"./utils-BE4tcj7E.js";import"./OverlayArrow-CMWDkVkR.js";import"./useFocus-DOIh0B1Z.js";import"./ProgressBar-BoDGUte7.js";import"./Label-0GucTR7O.js";import"./Hidden-CQyoiK8N.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-_lz56ByA.js";import"./context-D6yVr_mO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-lwDPvcY9.js";import"./useFocusable-BJo0-JcZ.js";import"./useFocusRing-rBTaS5qD.js";import"./react-children-utilities-jctua2LA.js";import"./Action-RARPQ8v8.js";import"./context-BWmIRqAJ.js";import"./useStatic-DlCxFiK7.js";import"./browser-CYlNocNO.js";import"./getActionGroupSlot-mkbPIyZa.js";import"./dynamic-B5dXdtKW.js";import"./useLocalizedStringFormatter-BAYb9Fap.js";import"./Heading-CaWv9CDj.js";import"./Heading-CXwQx98o.js";import"./RSPContexts-BujZOMoI.js";import"./InlineCode-Bdrrce0g.js";import"./Link-CVxW33L_.js";import"./usePress-BF3KJpSX.js";import"./Separator-D9FwnnRl.js";import"./Separator-DDMmaPKr.js";import"./CollectionBuilder-DzfVoPOa.js";import"./Text-G8amV_-h.js";import"./EmulatedBoldText-ZcdE1rVE.js";import"./Text-C7oFtPVp.js";import"./TextArea-Xapm14IX.js";import"./TextFieldBase-Bi16vvWe.js";import"./FieldDescription-D4HQC7nu.js";import"./TextField-CqO76lnK.js";import"./Form-Ck-IBHt9.js";import"./Group-B7cbcAm2.js";import"./Input-CoS8ao7l.js";import"./useTextField-D8W6t986.js";import"./useFormReset-BENrYz2J.js";import"./useFormValidation-wqB4x0T2.js";import"./ReactAriaControlledValueFix-CxrHijXl.js";import"./useManagedValue-F0tDupNw.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-f45dISc_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-m7osfjr7.js";import"./ContextMenuSection-BRjflZKk.js";import"./Dialog-D2DNdmLu.js";import"./Collection-7t0tVRTb.js";import"./SelectionIndicator-0lfezkYj.js";import"./SelectionManager-Y2mFlrlN.js";import"./useEvent-DWTDuj97.js";import"./useCollator-DH6O6X4x.js";import"./FocusScope-BYBHw4Pm.js";import"./VisuallyHidden-CRJbmMUG.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Hr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithOnChange","WithRef"];export{s as Default,a as Disabled,m as Resizeable,n as ShowCharacterCount,p as WithFieldError,i as WithLabel,c as WithOnChange,d as WithRef,Hr as __namedExportsOrder,Ar as default};
