import{j as r,r as h}from"./iframe-DoVgBQr5.js";import{M as e}from"./MarkdownEditor-D7lLHRy3.js";import{L as l}from"./Label-B_iGOO1o.js";import{F as g}from"./useFieldComponent-Dl5zd8_u.js";import{B as f}from"./Button-2cUDiMZd.js";import{S as x}from"./Section-BB2ZqUlo.js";import"./index-nuYtCEEu.js";import"./Markdown-BVsEA-9j.js";import"./CodeBlock-CzQvXkTS.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DGcvFQEL.js";import"./IconWarning-BITNguYJ.js";import"./flowComponent-KNPphWYF.js";import"./index-jEdNOdxF.js";import"./index-CnXLT15x.js";import"./Tooltip-C0w1TLqB.js";import"./ClearPropsContextView-Ca7YEM0M.js";import"./ClearPropsContext-8Ai0JzP3.js";import"./utils-BUNxWnYj.js";import"./OverlayArrow-F14P5UPi.js";import"./useFocus-DgyX4ANK.js";import"./ProgressBar-i7FI2__w.js";import"./Label-8ulleTCg.js";import"./Hidden-VhCLrHg5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dokwxw5N.js";import"./context-DKZO50eL.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-JsyFwj7N.js";import"./useFocusable-CYiqpOWe.js";import"./useFocusRing-C7RfsB5U.js";import"./react-children-utilities-NLX1q1W1.js";import"./Action-5AgtWQtu.js";import"./context-C0oFmp5D.js";import"./useStatic-DVOn0oZR.js";import"./browser-CTr_Jj6j.js";import"./getActionGroupSlot-Cx2xgGVq.js";import"./dynamic-DslUBYil.js";import"./useLocalizedStringFormatter-C282_ari.js";import"./Heading-B-ZtrlSM.js";import"./Heading-BDk_Xo8S.js";import"./RSPContexts-DwowBXaw.js";import"./InlineCode-BKKbuiUw.js";import"./Link-Bhv3Vxax.js";import"./usePress-CMEqlp6n.js";import"./Separator-Diq-kLXd.js";import"./Separator-Ck__hFdD.js";import"./CollectionBuilder-DJiBT6Uj.js";import"./Text-DarT3iBq.js";import"./EmulatedBoldText-Ck3zADpv.js";import"./Text-BnwT6LTw.js";import"./TextArea-Cyw9ynX6.js";import"./TextFieldBase-D69d72lq.js";import"./FieldDescription-CycJT4it.js";import"./TextField-rHpyngO3.js";import"./Form-ISVWAvzv.js";import"./Group-DUVw5f5J.js";import"./Input-CUJOOTLM.js";import"./useTextField-BLEB3qS9.js";import"./useFormReset-DOuAY3sG.js";import"./useFormValidation-BBVxENjx.js";import"./ReactAriaControlledValueFix-B9MjC7lr.js";import"./useManagedValue-CAjxBzvX.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BjGFLica.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cf2Tt4tQ.js";import"./ContextMenuSection-DNqsPT3L.js";import"./Dialog-BOL4Q97z.js";import"./Collection-BP7ufpBw.js";import"./SelectionIndicator-DHuWhUvH.js";import"./SelectionManager-GAqkDmB6.js";import"./useEvent-CXpyXyC8.js";import"./useCollator-BaFQCUm3.js";import"./FocusScope-DbQQ9osx.js";import"./VisuallyHidden-BzJhkBGh.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
