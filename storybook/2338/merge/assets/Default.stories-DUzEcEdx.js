import{j as r,r as l}from"./iframe-BZ1p44Xs.js";import{M as o}from"./MarkdownEditor-CmpIYYDh.js";import{L as s}from"./Label-HK0aVnMe.js";import{F as u}from"./FieldError-t823MHuJ.js";import{B as h}from"./Button-BXzJaHaH.js";import{S as f}from"./Section-DYkPYl1t.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C-sF29-p.js";import"./CodeBlock-D9AO2v9Z.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BO_Mru-0.js";import"./IconWarning-BeCXg6tW.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./index-39FgH5sT.js";import"./remote-BEHhGsYi.js";import"./Tooltip-CqH1Sb2R.js";import"./utils-Cc2PUaBi.js";import"./OverlayArrow-DcvNa8Le.js";import"./useFocus-O4gnqY9s.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./context-C5KsUqFD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-vNPEpCai.js";import"./useControlledState-CZ5q_fud.js";import"./useFocusable-BXiUGBNe.js";import"./react-children-utilities-DditKibI.js";import"./ActionBatch-kp--iEDz.js";import"./useOverlayController-Dfa0MUCA.js";import"./useStatic-BVYP0IGX.js";import"./browser-N7XS9wRL.js";import"./getActionGroupSlot-D6uph6L1.js";import"./dynamic-BvoZFGdS.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./Heading-DAuGI7Cj.js";import"./Heading-acaQddxn.js";import"./RSPContexts-C2tYRgOg.js";import"./InlineCode-Bajm32mt.js";import"./Link-CnlokJZe.js";import"./usePress-CQ2PTrK5.js";import"./Separator-ByNk7XRq.js";import"./Separator-edxS6LV2.js";import"./CollectionBuilder-BsYN8aRw.js";import"./Text-CplKG2wk.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./Text-DOPFHCGV.js";import"./TextArea-BM7s9QlM.js";import"./useFieldComponent-CdmiPNAX.js";import"./useControlledHostValueProps-Db0xokP4.js";import"./FieldDescription-PY5u12Fd.js";import"./TextField-BFG4RQnU.js";import"./FieldError-DP4FZd0x.js";import"./Form-Lw3Ehme-.js";import"./Group-BUA_nOmN.js";import"./Input-Bt20yVH7.js";import"./useTextField-CmQ5R2lB.js";import"./useFormReset-zSbsyNkN.js";import"./useFormValidation-oY9u4Y5a.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CHdPuYCZ.js";import"./AlertIcon-CBSVIKWa.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DOqybSdu.js";import"./ContextMenuSection-FMJg67QM.js";import"./Dialog-DlxSrM7S.js";import"./Collection-C32khOyt.js";import"./SelectionIndicator-CGKICc1u.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./VisuallyHidden-7tUyfyiG.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(o,{placeholder:"Write a message...",...e,children:r.jsx(s,{children:"Message"})})},i={},a={args:{showCharacterCount:!0,maxLength:100}},n={render:e=>r.jsxs(o,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(s,{children:"Message"}),r.jsx(u,{children:"Invalid message"})]})},p={render:e=>r.jsx(o,{...e,autoResizeMaxRows:5,rows:3,children:r.jsx(s,{children:"Message"})})},m={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(s,{children:"Message"})})},c={render:e=>{const t=l.useRef(null),d=()=>{t.current&&t.current.focus()};return r.jsxs(f,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(s,{children:"Message"})}),r.jsx(h,{type:"button",onClick:d,children:"Set focus"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
