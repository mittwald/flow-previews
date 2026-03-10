import{j as r,r as l}from"./iframe-Bge_iwzq.js";import{M as o}from"./MarkdownEditor-SunwVvw0.js";import{L as s}from"./Label-DsCIDP_n.js";import{F as u}from"./FieldError-D2SilRMV.js";import{B as h}from"./Button-DYq5oiR6.js";import{S as f}from"./Section-F6_pDsCx.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CKgTYY9q.js";import"./CodeBlock-RazbVpjP.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D36_vIhK.js";import"./IconWarning-CnGwh2Y2.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./remote-CO23tKXG.js";import"./Tooltip-BhcamjbY.js";import"./utils-rhPAe061.js";import"./OverlayArrow-CPd1sFKC.js";import"./useFocus-M-LntWI3.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./context-gG1Mi2B7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-B6FG_9qv.js";import"./useControlledState-CyAGSHwZ.js";import"./useFocusable-BPbhPIus.js";import"./react-children-utilities-D4Flz2O3.js";import"./ActionBatch-AWhYHCSY.js";import"./useOverlayController-wivVBOVc.js";import"./useStatic-CNeEScnJ.js";import"./browser-EEHoGSlH.js";import"./getActionGroupSlot-DLRBpctv.js";import"./dynamic-C3MU2GF_.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./Heading-JLPBp959.js";import"./Heading-DerjJN3d.js";import"./RSPContexts-DPd6iTOd.js";import"./InlineCode-Be2L84_U.js";import"./Link-CwcCCToL.js";import"./usePress-BXEJU3rI.js";import"./Separator-BtZN_uox.js";import"./Separator-B2lQeJLB.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./Text-Bo3CKbUr.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Text-70WXc8nw.js";import"./TextArea-Bx2LbXol.js";import"./useFieldComponent-DrAtnMqi.js";import"./useControlledHostValueProps-5VhQyC8e.js";import"./FieldDescription-CKLwRnm1.js";import"./TextField-Ctm0SVNE.js";import"./FieldError-Cv0VAgMN.js";import"./Form-YPyJtwoF.js";import"./Group-Bwp5mwlQ.js";import"./Input-BXTXjJEE.js";import"./useTextField-4W-EXSfF.js";import"./useFormReset-CAOi_S_S.js";import"./useFormValidation-SyV8SqLU.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";import"./LoadingSpinner-BWNPdeXh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-0WCxpm2-.js";import"./ContextMenuSection-S8YrfSf7.js";import"./Dialog-BA7SIyML.js";import"./Collection-DW5GmGUQ.js";import"./SelectionIndicator-HpycCnAD.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./FocusScope-DsvOCLtc.js";import"./VisuallyHidden-BL5eqrat.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(o,{placeholder:"Write a message...",...e,children:r.jsx(s,{children:"Message"})})},i={},a={args:{showCharacterCount:!0,maxLength:100}},n={render:e=>r.jsxs(o,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(s,{children:"Message"}),r.jsx(u,{children:"Invalid message"})]})},p={render:e=>r.jsx(o,{...e,autoResizeMaxRows:5,rows:3,children:r.jsx(s,{children:"Message"})})},m={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(s,{children:"Message"})})},c={render:e=>{const t=l.useRef(null),d=()=>{t.current&&t.current.focus()};return r.jsxs(f,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(s,{children:"Message"})}),r.jsx(h,{type:"button",onClick:d,children:"Set focus"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
