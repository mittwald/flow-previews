import{j as r,r as l}from"./iframe-CEWg6_IX.js";import{M as o}from"./MarkdownEditor-v530aKiL.js";import{L as s}from"./Label-BaJSnICs.js";import{F as u}from"./FieldError-fCgHoEMk.js";import{B as h}from"./Button-CA6AkUR_.js";import{S as f}from"./Section-smxk9QAc.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-B7SYahas.js";import"./CodeBlock-DI7YkC6V.js";import"./clsx-B-dksMZM.js";import"./CopyButton-6uFdMi6M.js";import"./IconWarning-D3143lfN.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./index-BYd0o8d1.js";import"./remote-BClk6GLL.js";import"./Tooltip-Dc8FrXul.js";import"./utils-VWmQzJjV.js";import"./OverlayArrow-LwODxVqr.js";import"./useFocus-BQlkvxNG.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B6JubenB.js";import"./context-BwTFrxK2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-6TkqSe16.js";import"./useControlledState-DV7blYjC.js";import"./useFocusable-B3euEuZy.js";import"./react-children-utilities-BZUWMsvZ.js";import"./ActionBatch-CnX-7Tzc.js";import"./useOverlayController-BjtWEYCu.js";import"./useStatic-B6Ppl0UQ.js";import"./browser-D6O_MAcc.js";import"./getActionGroupSlot-CRNHQnN5.js";import"./dynamic-JOnDgprM.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./Heading-BWEcB93I.js";import"./Heading-Nh2qIPHf.js";import"./RSPContexts-ulpMISZ-.js";import"./InlineCode-D7-kzP6r.js";import"./Link-ZNqsbLzN.js";import"./usePress-BNr3g4sC.js";import"./Separator-DswZneiB.js";import"./Separator-DyFTk6rC.js";import"./CollectionBuilder-BS3MrMhz.js";import"./Text-Bw_cIJde.js";import"./EmulatedBoldText-DLcv393z.js";import"./Text-B3jOd0w4.js";import"./TextArea-CWYyvQer.js";import"./useFieldComponent-BOMK2S5G.js";import"./useControlledHostValueProps-DuyCNcnr.js";import"./FieldDescription-BJFWlccI.js";import"./TextField-DfYJlBbG.js";import"./FieldError-B_BExaNJ.js";import"./Form-XtAuYD0I.js";import"./Group-BY2zOSJX.js";import"./Input-DI2XwVnV.js";import"./useTextField-aMHav-G9.js";import"./useFormReset-D1AT4nVs.js";import"./useFormValidation-przZuKLk.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Cd8Si-3W.js";import"./AlertIcon-BQQez7us.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dhdc5WDI.js";import"./ContextMenuSection-y3Qnt4sa.js";import"./Dialog-0Ix26WHm.js";import"./Collection-Wb3olWvE.js";import"./SelectionIndicator-C5jgIoGq.js";import"./SelectionManager-B6Y4EMPJ.js";import"./useCollator-bALXm-sp.js";import"./FocusScope-BNRdhUBQ.js";import"./VisuallyHidden-DHhRta61.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(o,{placeholder:"Write a message...",...e,children:r.jsx(s,{children:"Message"})})},i={},a={args:{showCharacterCount:!0,maxLength:100}},n={render:e=>r.jsxs(o,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(s,{children:"Message"}),r.jsx(u,{children:"Invalid message"})]})},p={render:e=>r.jsx(o,{...e,autoResizeMaxRows:5,rows:3,children:r.jsx(s,{children:"Message"})})},m={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(s,{children:"Message"})})},c={render:e=>{const t=l.useRef(null),d=()=>{t.current&&t.current.focus()};return r.jsxs(f,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(s,{children:"Message"})}),r.jsx(h,{type:"button",onClick:d,children:"Set focus"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <Label>Message</Label>
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} autoResizeMaxRows={5} rows={3}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Vr=["Default","ShowCharacterCount","WithFieldError","AutoResizeable","WithOnChange","WithRef"];export{p as AutoResizeable,i as Default,a as ShowCharacterCount,n as WithFieldError,m as WithOnChange,c as WithRef,Vr as __namedExportsOrder,Tr as default};
