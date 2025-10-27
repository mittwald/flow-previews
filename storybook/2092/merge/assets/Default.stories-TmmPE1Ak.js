import{j as r,r as h}from"./iframe-DCa_XPw0.js";import{M as e}from"./MarkdownEditor-Bx7sNa_v.js";import{L as l}from"./Label-vDm2WQu9.js";import{F as g}from"./useFieldComponent-DnSwczmT.js";import{B as f}from"./Button-5vT2-_W4.js";import{S as x}from"./Section-DMxoBBTe.js";import"./index-nuYtCEEu.js";import"./Markdown-DMKoJ4Xj.js";import"./CodeBlock-fnvUHwZP.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BVKgaJmi.js";import"./IconWarning-Q2oX1eiS.js";import"./flowComponent-CAToH-fj.js";import"./index-CMKGq9Xe.js";import"./index-d5hFVLIP.js";import"./Tooltip-Yn6AXLwR.js";import"./ClearPropsContextView-CquQV2OH.js";import"./ClearPropsContext-D7TWL38i.js";import"./utils-CHsRUe2b.js";import"./OverlayArrow-DWeqJ8mt.js";import"./useFocus-m8lB89Ac.js";import"./ProgressBar-D1oSpt7t.js";import"./Label-DCh_0unC.js";import"./Hidden-DqzRERrR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cxr0dS9W.js";import"./context-CFo6-Xo4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CRVJv1rD.js";import"./useFocusable-D6JtitxC.js";import"./useFocusRing-fwjWpFlM.js";import"./react-children-utilities-BnxGKhPm.js";import"./Action-woDk9-dG.js";import"./context-Dlf3CpRu.js";import"./useStatic-CrVdgLYB.js";import"./browser-2ZL6lgPg.js";import"./getActionGroupSlot-InsSo2J4.js";import"./dynamic-DrAw5ycp.js";import"./useLocalizedStringFormatter-DwWhxD93.js";import"./Heading-Ev2tnW6a.js";import"./Heading-dctUcVn8.js";import"./RSPContexts-A2JzYqIb.js";import"./InlineCode-D-ROl52u.js";import"./Link-4Tmv8xw7.js";import"./usePress-DoF43DDZ.js";import"./Separator-DVkWvHcw.js";import"./Separator-R4oBq4li.js";import"./CollectionBuilder-DD57-D5g.js";import"./Text-DnODaVEe.js";import"./EmulatedBoldText-BxXSB0Xl.js";import"./Text-I5qgKc0V.js";import"./TextArea-DRCBCnk_.js";import"./TextFieldBase-QAPzW9yl.js";import"./FieldDescription-gVsh-1jz.js";import"./TextField-CcD4MdAG.js";import"./Form-gH1nSwk6.js";import"./Group-DoigBsDb.js";import"./Input-Btedufej.js";import"./useTextField-B0SsZGN0.js";import"./useFormReset-C_Ugenz9.js";import"./useFormValidation-Dya2y-k8.js";import"./ReactAriaControlledValueFix-BMN_qpn9.js";import"./useManagedValue-Dwx_sQtt.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Cb4DUvy2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-8oNj6zWV.js";import"./ContextMenuSection-DAzc5rVw.js";import"./Dialog-jvkUQzt2.js";import"./Collection-lLJk5rmu.js";import"./SelectionIndicator-VK3V8vC4.js";import"./SelectionManager-DdMpn3UJ.js";import"./useEvent-DbA6iyXo.js";import"./useCollator-KuUVGEVj.js";import"./FocusScope-D1UKu4WZ.js";import"./VisuallyHidden-D3RYJYP2.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
