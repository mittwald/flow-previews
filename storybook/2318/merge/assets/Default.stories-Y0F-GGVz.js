import{j as r,r as f}from"./iframe-BuRyV86k.js";import{M as o}from"./MarkdownEditor-4HDf78ge.js";import{L as R}from"./Label-D5Mh9PbX.js";import{F as b}from"./FieldError-CyZxViQf.js";import{B as z}from"./Button-CyndH9Xm.js";import{S as x}from"./Section-BWXoAIXO.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-D4H8KMU2.js";import"./CodeBlock-CArcSywT.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CPJ0jLsy.js";import"./IconWarning-DAJxMizk.js";import"./flowComponent-DspQ11pS.js";import"./index-AZn-raxL.js";import"./index-DXDzX26U.js";import"./remote-Cg9OAbJn.js";import"./Tooltip-DuaPW586.js";import"./utils-DCjU3VYp.js";import"./OverlayArrow-DmdSnWXA.js";import"./useFocus-CQWcTqjz.js";import"./ProgressBar-sJd2s29u.js";import"./Label-CVQyOr4s.js";import"./Hidden-Dduq3kE3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9drM0Q_0.js";import"./context-C6SHLczB.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CY0UXM2e.js";import"./useControlledState-DYwoO1wA.js";import"./useFocusable-CtKU_QIU.js";import"./react-children-utilities-c8JKAa5e.js";import"./Action-KY3p1CrK.js";import"./context-BBsiVWSW.js";import"./useStatic-Bozflp-3.js";import"./browser-DvnOBVed.js";import"./getActionGroupSlot-BzS6Espk.js";import"./dynamic-clmxwr04.js";import"./useLocalizedStringFormatter-Dqmj3fXI.js";import"./Heading-oMtFtRoB.js";import"./Heading-BErX5OWg.js";import"./RSPContexts-Czmfvb19.js";import"./InlineCode-BpvLlHBb.js";import"./Link-w8uH5h7m.js";import"./usePress-B_1LlkAk.js";import"./Separator-D2NkWfky.js";import"./Separator-Bz6jqVd_.js";import"./CollectionBuilder-W32wrNWH.js";import"./Text-DPwKDAaR.js";import"./EmulatedBoldText-m_25Q3I7.js";import"./Text-D3tRocSh.js";import"./TextArea-DoAPPHwb.js";import"./useFieldComponent-Duyh6ShH.js";import"./useControlledHostValueProps-BxMuxOiL.js";import"./FieldDescription-DTtWzPY6.js";import"./TextField-DZvNX4Ri.js";import"./FieldError-BEkkBW9r.js";import"./Form-C4eLdnUU.js";import"./Group-Ct0D2Y45.js";import"./Input-BOqi5cwZ.js";import"./useTextField-CPw5IR_g.js";import"./useFormReset-BkHfz2ea.js";import"./useFormValidation-DZRdJrD7.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Cq6PpkxX.js";import"./AlertIcon-CtbR1iuV.js";import"./LoadingSpinner-BX044VJ0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-0f0DNfgK.js";import"./ContextMenuSection-Mj7n-SRG.js";import"./Dialog-aD4BOG19.js";import"./Collection-BEHIjUyH.js";import"./SelectionIndicator-r0KfSIub.js";import"./SelectionManager-CGRbj4b-.js";import"./useEvent-LxFJ0S3x.js";import"./useCollator-rSEenu5t.js";import"./FocusScope-DBYeUwg2.js";import"./VisuallyHidden-BxxKUxYt.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Nr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Nr as __namedExportsOrder,Kr as default};
