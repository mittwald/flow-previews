import{j as r,r as l}from"./iframe-BcqfzoOA.js";import{M as o}from"./MarkdownEditor-pBoHLFBK.js";import{L as s}from"./Label-CQjtN3Gn.js";import{F as u}from"./FieldError-COredAmn.js";import{B as h}from"./Button-C2msjhlA.js";import{S as f}from"./Section-B_QgMIam.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-D2TXFOcP.js";import"./CodeBlock-DunV3wQe.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B89mvDcG.js";import"./IconWarning-Bupv8NYZ.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./index-AZuRIocR.js";import"./remote-x3smQXnv.js";import"./Tooltip-Bm2yjacH.js";import"./utils-Bwp7PlhH.js";import"./OverlayArrow-BhCzySYR.js";import"./useFocus-BgTDZkkG.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./context-qhtcW2k7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CK0lr4fW.js";import"./useControlledState-DVjnE-U4.js";import"./useFocusable-B97W14wM.js";import"./react-children-utilities-BbAFwANO.js";import"./ActionBatch-D231mKj-.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./browser-CFz57TUe.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./dynamic-CQVZMaTn.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./Heading-CPq-dFYl.js";import"./Heading-ZbAppe82.js";import"./RSPContexts-D9SkabFV.js";import"./InlineCode-B-7Gp4iK.js";import"./Link-YqMugRW6.js";import"./usePress-Lauho74f.js";import"./Separator-B8vFBYPs.js";import"./Separator-DguNVtge.js";import"./CollectionBuilder-BDAT2F-t.js";import"./Text-1XRmWCfn.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./Text-CALsrB3x.js";import"./TextArea-B_ddv2Zc.js";import"./useFieldComponent-CSNqGKWj.js";import"./useControlledHostValueProps-BWvMzPF4.js";import"./FieldDescription-BAMY7EMv.js";import"./TextField-KO7DCant.js";import"./FieldError-BECkkLSz.js";import"./Form-CTjpA6Q_.js";import"./Group-CA7st2Jb.js";import"./Input-Bku180kF.js";import"./useTextField-C_zoOVrm.js";import"./useFormReset-neBkOLPK.js";import"./useFormValidation-BMgNFXni.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";import"./LoadingSpinner-ULzpGe8L.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CG09EaR6.js";import"./ContextMenuSection-CYrr5VC5.js";import"./Dialog-Ce_unDUt.js";import"./Collection-BEGE9Tvw.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./FocusScope-CPNafWEX.js";import"./VisuallyHidden-0GKWPw_x.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(o,{placeholder:"Write a message...",...e,children:r.jsx(s,{children:"Message"})})},i={},a={args:{showCharacterCount:!0,maxLength:100}},n={render:e=>r.jsxs(o,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(s,{children:"Message"}),r.jsx(u,{children:"Invalid message"})]})},p={render:e=>r.jsx(o,{...e,autoResizeMaxRows:5,rows:3,children:r.jsx(s,{children:"Message"})})},m={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(s,{children:"Message"})})},c={render:e=>{const t=l.useRef(null),d=()=>{t.current&&t.current.focus()};return r.jsxs(f,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(s,{children:"Message"})}),r.jsx(h,{type:"button",onClick:d,children:"Set focus"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
