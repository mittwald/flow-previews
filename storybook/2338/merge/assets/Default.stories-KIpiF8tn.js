import{j as r,r as l}from"./iframe-BXGfha1q.js";import{M as o}from"./MarkdownEditor-Baz77dYn.js";import{L as s}from"./Label-DmvSuQEb.js";import{F as u}from"./FieldError-B0wR5GbE.js";import{B as h}from"./Button-DfmOHFsC.js";import{S as f}from"./Section-DH7vXPsV.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-6-yC0PgR.js";import"./CodeBlock-CeXvRr_6.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Cw_8N3Wm.js";import"./IconWarning-1Z1PxSqQ.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./index-D0PS_Jbm.js";import"./remote-DEIhwdad.js";import"./Tooltip-CBhJ0Ia9.js";import"./utils-DDzB-hS3.js";import"./OverlayArrow-CHQlEDE0.js";import"./useFocus-WJp8rgri.js";import"./ProgressBar-BSSI2Xkr.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DPznQWXv.js";import"./context-C9BhwF0E.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DmfdXYcF.js";import"./useControlledState-Wh-cgAjH.js";import"./useFocusable-DT8F95KZ.js";import"./react-children-utilities-wjlac6nH.js";import"./ActionBatch-z52bmq8Z.js";import"./useOverlayController-yGpX5sn6.js";import"./useStatic-BExQ1RD0.js";import"./browser-P6njm6Fr.js";import"./getActionGroupSlot-D3NhVtPT.js";import"./dynamic-Cx3iunOI.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./Heading-BHfoL7cG.js";import"./Heading-uLzTRNHK.js";import"./RSPContexts-CG0vEblW.js";import"./InlineCode-CAQtc5Om.js";import"./Link-CaSBOK33.js";import"./usePress-DFEm-gMh.js";import"./Separator-Di5-JGnW.js";import"./Separator-BLnBy1SU.js";import"./CollectionBuilder-CyFJ2rhO.js";import"./Text-BbFupL_Y.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./Text-B1oZgTuN.js";import"./TextArea-0BjBEMkf.js";import"./useFieldComponent-BBRXs3en.js";import"./useControlledHostValueProps-BE7xh8vi.js";import"./FieldDescription-B2zafCFx.js";import"./TextField-CSKOWfiV.js";import"./FieldError-B-_MD7Je.js";import"./Form-C11JLohN.js";import"./Group-C9lE8UeE.js";import"./Input-DlEaT4nu.js";import"./useTextField-Cyr4gso_.js";import"./useFormReset-9RWtv4Ar.js";import"./useFormValidation-51U-qV9x.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D4bpqMRF.js";import"./AlertIcon-DqNX7jjv.js";import"./LoadingSpinner-CnywtlQ4.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DxgvyAFC.js";import"./ContextMenuSection-DVxvJxxR.js";import"./Dialog-DLzuiFtz.js";import"./Collection-On6X8qP5.js";import"./SelectionIndicator-DRZNhSye.js";import"./SelectionManager-BheZPocr.js";import"./useCollator-CF4rrgc2.js";import"./FocusScope-DorKcprJ.js";import"./VisuallyHidden-eEVd_sfi.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(o,{placeholder:"Write a message...",...e,children:r.jsx(s,{children:"Message"})})},i={},a={args:{showCharacterCount:!0,maxLength:100}},n={render:e=>r.jsxs(o,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(s,{children:"Message"}),r.jsx(u,{children:"Invalid message"})]})},p={render:e=>r.jsx(o,{...e,autoResizeMaxRows:5,rows:3,children:r.jsx(s,{children:"Message"})})},m={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(s,{children:"Message"})})},c={render:e=>{const t=l.useRef(null),d=()=>{t.current&&t.current.focus()};return r.jsxs(f,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(s,{children:"Message"})}),r.jsx(h,{type:"button",onClick:d,children:"Set focus"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
