import{j as r,r as f}from"./iframe-BQyHcTNh.js";import{M as o}from"./MarkdownEditor-lqIUfpMt.js";import{L as R}from"./Label-JK740Dk1.js";import{F as z}from"./FieldError-AQx_Co0q.js";import{B as b}from"./Button-ieCP1ArV.js";import{S as x}from"./Section-D4fUAwGu.js";import"./index-nuYtCEEu.js";import"./Markdown-ChbkQsuJ.js";import"./CodeBlock-a_cKj2X4.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Cz3KAWhm.js";import"./IconWarning-D8COeLpG.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./index-D5h5WobT.js";import"./Tooltip-bUCdMTsN.js";import"./ClearPropsContextView-BeRr4MLk.js";import"./ClearPropsContext-CD4xLCoc.js";import"./utils-CdCPWCHO.js";import"./OverlayArrow-Dp6PlRHE.js";import"./useFocus-COF7nP05.js";import"./ProgressBar-BXdleHGA.js";import"./Label-D_Hg-3H4.js";import"./Hidden-c61kZDYL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeM_oEx1.js";import"./context-BymCJUNL.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-TEYDAVm8.js";import"./useFocusable-DJd2VQkc.js";import"./useFocusRing-gNgZcCH8.js";import"./react-children-utilities-BB4ZvnE2.js";import"./Action-Bi6tM7BN.js";import"./context-B5Yt5ZbD.js";import"./useStatic-CIMbf_kn.js";import"./browser-CktdIn7a.js";import"./getActionGroupSlot-DtqoduiB.js";import"./dynamic-V8J33Kah.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./Heading-BZf-WkCq.js";import"./Heading-C-OseSB1.js";import"./RSPContexts-BtdGc8q9.js";import"./InlineCode-ClndP6Ln.js";import"./Link-DkKvAa58.js";import"./usePress-qWGUTJsN.js";import"./Separator-D6VdnkzX.js";import"./Separator-BIV1anzw.js";import"./CollectionBuilder-D9BuGY1P.js";import"./Text-_hc15B6K.js";import"./EmulatedBoldText-77q4Ify-.js";import"./Text-C9BF5CjQ.js";import"./TextArea-C0_Qk0Vn.js";import"./TextFieldBase-gfHUB_05.js";import"./FieldDescription-mxWByT_L.js";import"./useFieldComponent-Cyrlnow6.js";import"./TextField-D6hfEfzE.js";import"./Form-CjlO_WmK.js";import"./Group-D0yjr4EW.js";import"./Input-POMMqA2k.js";import"./useTextField-0T4qffof.js";import"./useFormReset-DB-Y7LtK.js";import"./useFormValidation-Dr6xiKJA.js";import"./ReactAriaControlledValueFix-CUbxH7dl.js";import"./useManagedValue-PY6rKwSS.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CEYsHom-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C2idEpfM.js";import"./ContextMenuSection-ZyWidMUH.js";import"./Dialog-CTkyeFiO.js";import"./Collection-DEfh8kkF.js";import"./SelectionIndicator-BnroM9vv.js";import"./SelectionManager-DeoXhPYy.js";import"./useEvent-BWXlYds5.js";import"./useCollator-B9ukcsEW.js";import"./FocusScope-DELlCJxb.js";import"./VisuallyHidden-rd1eTAwo.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowHorizontalResize:!0}},d={args:{allowVerticalResize:!0}},u={args:{allowVerticalResize:!0,rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    allowHorizontalResize: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true,
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
}`,...h.parameters?.docs?.source}}};const Nr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Nr as __namedExportsOrder,Kr as default};
