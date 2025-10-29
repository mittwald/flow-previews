import{j as r,r as h}from"./iframe-Tz0J7D4Y.js";import{M as e}from"./MarkdownEditor-BRMJcqkk.js";import{L as l}from"./Label-B5yMZfoe.js";import{F as g}from"./useFieldComponent-C0OSANtm.js";import{B as f}from"./Button-DpdNCW8h.js";import{S as x}from"./Section-weR_orzI.js";import"./index-nuYtCEEu.js";import"./Markdown-Yo4Ox5X4.js";import"./CodeBlock-B05beKKf.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BvW8QhKS.js";import"./IconWarning-GPTcuJJ8.js";import"./flowComponent-D9iztwJS.js";import"./index-VdFQ9tny.js";import"./index-DcQDRvJj.js";import"./Tooltip-DTgTRMpz.js";import"./ClearPropsContextView-CQKiSpfA.js";import"./ClearPropsContext-DQdi6jL0.js";import"./utils-ja91N2Nx.js";import"./OverlayArrow-Dm3PErwP.js";import"./useFocus-rnV-N6wP.js";import"./ProgressBar-netLLnC9.js";import"./Label-CPyZQCy0.js";import"./Hidden-DjVegiGf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Uehxuchb.js";import"./context-B1lt5Uf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-JfMoTEl5.js";import"./useFocusable-CEtDZmZ1.js";import"./useFocusRing-DD4M3uYZ.js";import"./react-children-utilities-q3rjAEhP.js";import"./Action-DDvM_T4v.js";import"./context-CCjUHDCq.js";import"./useStatic-BDAMVNvv.js";import"./browser-D-jX3MAX.js";import"./getActionGroupSlot-DlZypVxI.js";import"./dynamic-CoftMrEe.js";import"./useLocalizedStringFormatter-C_7XcxTl.js";import"./Heading-BX6R3J-D.js";import"./Heading-BOPXGrjC.js";import"./RSPContexts-DMflUE_X.js";import"./InlineCode-DM25VKvh.js";import"./Link-DJC3bHvp.js";import"./usePress-Dhdcn6rN.js";import"./Separator-9Av4XdCH.js";import"./Separator-Dwu5egoh.js";import"./CollectionBuilder-H4miGbTt.js";import"./Text-C3A_eB8w.js";import"./EmulatedBoldText-BtDnNRTP.js";import"./Text-c129sBMT.js";import"./TextArea-B3bwIGZC.js";import"./TextFieldBase-C6gFZZHT.js";import"./FieldDescription-DfQkIZob.js";import"./TextField-CpTqvAvM.js";import"./Form-CgZM-WfL.js";import"./Group-BWtr-S31.js";import"./Input-fTg0rFoa.js";import"./useTextField-BJgUARR-.js";import"./useFormReset-Dr7kbm5c.js";import"./useFormValidation-BhAnQ22o.js";import"./ReactAriaControlledValueFix-rP8sVaUU.js";import"./useManagedValue-BVVk2jvr.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BMsTEO2Y.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BC9SKpFI.js";import"./ContextMenuSection-8rmu86AD.js";import"./Dialog-BCA3xQKB.js";import"./Collection-CbkRGRtR.js";import"./SelectionIndicator-UdR--M88.js";import"./SelectionManager-CcDSxweN.js";import"./useEvent-C9-diYfc.js";import"./useCollator-Sp-uU6d6.js";import"./FocusScope-DD4VjzQ6.js";import"./VisuallyHidden-uhmmiNoS.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
