import{j as r,r as l}from"./iframe-DBOgS3cI.js";import{M as o}from"./MarkdownEditor-KYo4Lg_1.js";import{L as s}from"./Label-DEbA9P8V.js";import{F as u}from"./FieldError-DG3wyRNr.js";import{B as h}from"./Button-DeSyDtjE.js";import{S as f}from"./Section-B03hcWHL.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-juwQ7rqB.js";import"./CodeBlock-Chx6Q9ME.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BXqbxScp.js";import"./IconWarning-Bt9IWQ3I.js";import"./flowComponent-D2rRGmRJ.js";import"./index-Swo0Tmsl.js";import"./index-2oGrDlIx.js";import"./remote-CBP3xLJb.js";import"./Tooltip-BMbUJuQE.js";import"./utils-BhJeINWq.js";import"./OverlayArrow-B-9JWNCe.js";import"./useFocus-C3U4okCI.js";import"./ProgressBar-CW3L6DbF.js";import"./Label-DiLXicnZ.js";import"./Hidden-DDnoFhwK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClWLYl61.js";import"./context-BFw_9KSH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CgHq_nb-.js";import"./useControlledState-Pjvp5Vn-.js";import"./useFocusable-Jw6d-A2p.js";import"./react-children-utilities-BFfj2OK9.js";import"./ActionBatch-C1BOMxBF.js";import"./useOverlayController-CBPma3tn.js";import"./useStatic-_FEyJ1iK.js";import"./browser-aVPMedyb.js";import"./getActionGroupSlot-BVP40Z09.js";import"./dynamic-Daa1kuSR.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./Heading-BbxqBEBp.js";import"./Heading-BTHBDnxA.js";import"./RSPContexts-Dpo7G8Um.js";import"./InlineCode-C_IWh5OQ.js";import"./Link-BnUIYtGA.js";import"./usePress-me2_PexI.js";import"./Separator-CRLIMSJ2.js";import"./Separator-BkiuZI1g.js";import"./CollectionBuilder-CEj6NMcL.js";import"./Text-V6WF8rgy.js";import"./EmulatedBoldText-DZYRdmWA.js";import"./Text-TZlAM5yA.js";import"./TextArea-DnmWXGwj.js";import"./useFieldComponent-pONIfnVv.js";import"./useControlledHostValueProps-Biih5Sjk.js";import"./FieldDescription-CSCgjXc1.js";import"./TextField-BdIP0Lrm.js";import"./FieldError-C8B5aabp.js";import"./Form-BBY5sklR.js";import"./Group-DPP3NL9M.js";import"./Input-1Fi11bbE.js";import"./useTextField-DdxpKlHp.js";import"./useFormReset-M_TceD0b.js";import"./useFormValidation-BF3CckmA.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-C0iLtgHk.js";import"./AlertIcon-CCMDdz-U.js";import"./LoadingSpinner-BMYl670W.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dkv5VJcx.js";import"./ContextMenuSection-DNl9G5pZ.js";import"./Dialog-DyC1f_Bj.js";import"./Collection-DWSmaXut.js";import"./SelectionIndicator-CIbZ7UsS.js";import"./SelectionManager-CG0jsfrs.js";import"./useCollator-_4fj7BF8.js";import"./FocusScope-CHtKZ_QX.js";import"./VisuallyHidden-CQS9Xiyf.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(o,{placeholder:"Write a message...",...e,children:r.jsx(s,{children:"Message"})})},i={},a={args:{showCharacterCount:!0,maxLength:100}},n={render:e=>r.jsxs(o,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(s,{children:"Message"}),r.jsx(u,{children:"Invalid message"})]})},p={render:e=>r.jsx(o,{...e,autoResizeMaxRows:5,rows:3,children:r.jsx(s,{children:"Message"})})},m={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(s,{children:"Message"})})},c={render:e=>{const t=l.useRef(null),d=()=>{t.current&&t.current.focus()};return r.jsxs(f,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(s,{children:"Message"})}),r.jsx(h,{type:"button",onClick:d,children:"Set focus"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
