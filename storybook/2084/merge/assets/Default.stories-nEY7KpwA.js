import{j as r,r as h}from"./iframe-CPZmCQj-.js";import{M as e}from"./MarkdownEditor-DsTWdH7o.js";import{L as l}from"./Label-Cl3ovliO.js";import{F as g}from"./useFieldComponent-ZdrCImE8.js";import{B as f}from"./Button-CO0ZKbGC.js";import{S as x}from"./Section-BlZ_9OES.js";import"./index-nuYtCEEu.js";import"./Markdown-10DDOTzE.js";import"./CodeBlock-BnKGSbBr.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BFCDEAnb.js";import"./IconWarning-BHYwQlMQ.js";import"./flowComponent-DZ7Ps0CL.js";import"./index-Ba68vLbY.js";import"./index-Dx50g0n6.js";import"./Tooltip-DXpY6bxY.js";import"./ClearPropsContextView-C8p-nSKM.js";import"./ClearPropsContext-DZV6h8aR.js";import"./utils-DbTuSxgD.js";import"./OverlayArrow-K4lD0v3r.js";import"./useFocus-DSlim6kP.js";import"./ProgressBar-CVs_D_-w.js";import"./Label-DhGaeBi-.js";import"./Hidden-klXcLh_8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeJHfKxc.js";import"./context-vwBy6rn7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BjliE2JI.js";import"./useFocusable-1MtRKrlE.js";import"./useFocusRing-DtbYXXZs.js";import"./react-children-utilities-BpPrmtLj.js";import"./Action-C3sEJruT.js";import"./context-7pI23nLQ.js";import"./useStatic-BEtxpUKF.js";import"./browser-Vbuqg8Bp.js";import"./getActionGroupSlot-C_Q_KyMY.js";import"./dynamic-C0WBJwRj.js";import"./useLocalizedStringFormatter-c3k8SeMC.js";import"./Heading-CTnOUdED.js";import"./Heading-3nGV8T5A.js";import"./RSPContexts-gqgXzzK-.js";import"./InlineCode-C6jXJz0Z.js";import"./Link-CogEYAX9.js";import"./usePress-6Qpgo4V0.js";import"./Separator-DWutvkh2.js";import"./Separator-BkoAy9r0.js";import"./CollectionBuilder-1xYKqHW3.js";import"./Text-cGw-MBFK.js";import"./EmulatedBoldText-D8f43xv1.js";import"./Text-ev6zCoFy.js";import"./TextArea-DxLpMhxI.js";import"./TextFieldBase-CPSGO8hB.js";import"./FieldDescription-BFKEApQk.js";import"./TextField-BQ8NGeCA.js";import"./Form-KkxpJ3qz.js";import"./Group-Csdn_P-J.js";import"./Input-CQkI7-zw.js";import"./useTextField-eZki_XjH.js";import"./useFormReset-BZ0LqTvh.js";import"./useFormValidation-D952ndYN.js";import"./ReactAriaControlledValueFix-wp7kzKG1.js";import"./useManagedValue-DfAGrzYU.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Cx2qWY44.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BLjAzLtk.js";import"./ContextMenuSection-Dto6kOnn.js";import"./Dialog-DJw1jmu7.js";import"./Collection-Ckm-o3oD.js";import"./SelectionIndicator-DWNXk9hr.js";import"./SelectionManager-D3rhuTf5.js";import"./useEvent-Bk3E68pD.js";import"./useCollator-CE-f4Kw6.js";import"./FocusScope-W4GOB1Wo.js";import"./VisuallyHidden-m06vE6aQ.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
