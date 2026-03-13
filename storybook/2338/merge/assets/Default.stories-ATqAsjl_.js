import{j as r,r as l}from"./iframe-BFddea_x.js";import{M as o}from"./MarkdownEditor-BieXRv-Q.js";import{L as s}from"./Label-Cyz25dCh.js";import{F as u}from"./FieldError-BfmusLP_.js";import{B as h}from"./Button-DmFob37h.js";import{S as f}from"./Section-DorsmKJX.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-_pBdVRYr.js";import"./CodeBlock-j0OODT4s.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C5Ia2Bto.js";import"./IconWarning-Cwahpn-Q.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./remote-DmjGOFpp.js";import"./Tooltip-Cx9YY_jk.js";import"./utils-D-aZUMcZ.js";import"./OverlayArrow-CVHTB2zR.js";import"./platform-UzmeURk8.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./context-CaZH5px0.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocus-CQ-Kgrdg.js";import"./useControlledState-lfI_swTV.js";import"./useFocusable-D-17EkqH.js";import"./react-children-utilities-CNMVDZIW.js";import"./ActionBatch-BLAWmMpV.js";import"./useOverlayController-D1CCctag.js";import"./useStatic-4M_8h910.js";import"./browser-PH3BUHM2.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./dynamic-C85Jl_PG.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./Heading-C7vi7fKP.js";import"./Heading-CkECWlTX.js";import"./RSPContexts-DrvlE6Qo.js";import"./InlineCode-CamsXvhn.js";import"./Link-DtC85Uv0.js";import"./usePress-DZQSLH7U.js";import"./Separator-DRAKCHHp.js";import"./Separator-7xqgbQ15.js";import"./CollectionBuilder-CCaeaC6n.js";import"./Text-B70YymId.js";import"./EmulatedBoldText-C15EfUg3.js";import"./Text-DndMRLn5.js";import"./TextArea-DSJXQOff.js";import"./useFieldComponent-DrOhnKye.js";import"./useControlledHostValueProps-xZ--AIC6.js";import"./FieldDescription-DqsHbSnc.js";import"./TextField-Cha2rHT2.js";import"./FieldError-Dj7b6ixT.js";import"./Form-Cmx7zRsN.js";import"./Group-ChkAGHz_.js";import"./Input-DbK2aUtO.js";import"./useTextField-C79BrPY1.js";import"./useFormReset-C1U9nA2s.js";import"./useFormValidation-CYvJLeFF.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";import"./LoadingSpinner-BTSUDAP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-uqpwtIjO.js";import"./ContextMenuSection-C_9nT1gz.js";import"./Dialog-Dko8Qxf5.js";import"./Collection-2_PEsREq.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./VisuallyHidden-Bi0J0mAL.js";const Vr={title:"Form Controls/MarkdownEditor",component:o,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(o,{placeholder:"Write a message...",...e,children:r.jsx(s,{children:"Message"})})},i={},a={args:{showCharacterCount:!0,maxLength:100}},n={render:e=>r.jsxs(o,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(s,{children:"Message"}),r.jsx(u,{children:"Invalid message"})]})},p={render:e=>r.jsx(o,{...e,autoResizeMaxRows:5,rows:3,children:r.jsx(s,{children:"Message"})})},m={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(s,{children:"Message"})})},c={render:e=>{const t=l.useRef(null),d=()=>{t.current&&t.current.focus()};return r.jsxs(f,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(s,{children:"Message"})}),r.jsx(h,{type:"button",onClick:d,children:"Set focus"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const _r=["Default","ShowCharacterCount","WithFieldError","AutoResizeable","WithOnChange","WithRef"];export{p as AutoResizeable,i as Default,a as ShowCharacterCount,n as WithFieldError,m as WithOnChange,c as WithRef,_r as __namedExportsOrder,Vr as default};
