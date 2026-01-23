import{j as r,r as f}from"./iframe-B_VLmVOf.js";import{M as o}from"./MarkdownEditor-HouOOSBK.js";import{L as R}from"./Label-f9h1IAZy.js";import{F as b}from"./FieldError-Daf8utl3.js";import{B as z}from"./Button-Bx9uZJMk.js";import{S as x}from"./Section-C8rH5F8Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C42ElXBe.js";import"./CodeBlock-CJ99YvY1.js";import"./clsx-B-dksMZM.js";import"./CopyButton-MavJbmHV.js";import"./IconWarning-COj126FB.js";import"./flowComponent-Bc5-OX5Z.js";import"./index-GX3ioGoD.js";import"./index-Cpfd6Pim.js";import"./remote-D8h-jp0X.js";import"./Tooltip-C7XlhTjQ.js";import"./utils-C3gFrn3p.js";import"./OverlayArrow-BqV4egk9.js";import"./useFocus-BThPJxs2.js";import"./ProgressBar-B-kO7AM1.js";import"./Label-BcEUcVG2.js";import"./Hidden-BDeD6EhR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-3m37nTep.js";import"./context-x63-ahNn.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cy2UyDQ-.js";import"./useFocusable-D136elhd.js";import"./useFocusRing-CqgXonXS.js";import"./react-children-utilities-dDYVEcTH.js";import"./Action-Ct3jXlr4.js";import"./context-DKzx1USb.js";import"./useStatic-Ch5ZGK2l.js";import"./browser-BI-ei-gA.js";import"./getActionGroupSlot-DWxJJpa_.js";import"./dynamic-BPLgH_zA.js";import"./useLocalizedStringFormatter-HtYu0JJ-.js";import"./Heading-CnR3VTEF.js";import"./Heading-CCNcjRWR.js";import"./RSPContexts-CewByvV8.js";import"./InlineCode-BN1Bve77.js";import"./Link-CcdFK-i8.js";import"./usePress-dvDnySA_.js";import"./Separator-BhzDx8aL.js";import"./Separator-2P5ZQBAJ.js";import"./CollectionBuilder-DNk5Dmq7.js";import"./Text-DLyTxpXl.js";import"./EmulatedBoldText-C4lFh4eF.js";import"./Text-Cz72Ll4P.js";import"./TextArea-U59q3V4E.js";import"./TextFieldBase-BE_Z1OP5.js";import"./FieldDescription-BbTUQEDp.js";import"./useFieldComponent-CG-gR-7X.js";import"./TextField-DZdOAXTp.js";import"./FieldError-DsHbeww2.js";import"./Form-Bzu1lHbY.js";import"./Group-B7avKtg4.js";import"./Input-CDIp8Otf.js";import"./useTextField-B1qLDQLP.js";import"./useFormReset-DzSH81mS.js";import"./useFormValidation-BmcsTB_W.js";import"./useControlledHostValueProps-DAUFWDQs.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DdDDd0bO.js";import"./AlertIcon-CQ3Ik0rE.js";import"./LoadingSpinner-8NlAwzA_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-sEz_Ftmo.js";import"./ContextMenuSection-Bn3YLQv6.js";import"./Dialog-B23HRyeo.js";import"./Collection-gtDJcyu2.js";import"./SelectionIndicator-BccBPPpV.js";import"./SelectionManager-DSvZPYB7.js";import"./useEvent-CYdGT-0S.js";import"./useCollator-C3rClAMq.js";import"./FocusScope-PhJ8RGzw.js";import"./VisuallyHidden-neYV3Owd.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  args: {
    allowResize: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "horizontal"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical",
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Pr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Pr as __namedExportsOrder,Nr as default};
