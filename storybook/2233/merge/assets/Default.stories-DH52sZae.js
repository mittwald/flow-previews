import{j as r,r as f}from"./iframe-BpfR1GYm.js";import{M as o}from"./MarkdownEditor-KkJvbY4O.js";import{L as R}from"./Label-DS3YgAXJ.js";import{F as b}from"./FieldError-CXRDkScB.js";import{B as z}from"./Button-C4OB0yac.js";import{S as x}from"./Section-dj9_tl4m.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-grr6c-K6.js";import"./CodeBlock-g2lqDvSG.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CkS8f92_.js";import"./IconWarning-BOf1a1NO.js";import"./flowComponent-qov8JTe3.js";import"./index-SWV2Jto_.js";import"./index-BNT5TWiv.js";import"./remote-Cr2dkfGH.js";import"./Tooltip-C4Z51BPA.js";import"./utils-z0hzRCNL.js";import"./OverlayArrow-CweGqLKW.js";import"./useFocus-ZHbPEGRJ.js";import"./ProgressBar-C8HL_nLQ.js";import"./Label-TUuaFaku.js";import"./Hidden-DWXiMutX.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-oNP935J_.js";import"./context-BQnsf3fS.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bs2ReOE0.js";import"./useFocusable-CybXUwCv.js";import"./useFocusRing-lHZkZ90J.js";import"./react-children-utilities-Dsbs2jcM.js";import"./Action-BgYAV17K.js";import"./context-CfiW950r.js";import"./useStatic-C8Msussh.js";import"./browser-CJuVe1n5.js";import"./getActionGroupSlot-DhmxW89Z.js";import"./dynamic-B2LUuPCk.js";import"./useLocalizedStringFormatter-BHDvTpyt.js";import"./Heading-gFHdw-hu.js";import"./Heading-BjKLoeTv.js";import"./RSPContexts-DDsKHTka.js";import"./InlineCode-CEnhTHzi.js";import"./Link-DvpRW4Me.js";import"./usePress-VEcsoWoE.js";import"./Separator-DisJwA_q.js";import"./Separator-BrTPl_Ln.js";import"./CollectionBuilder-9PEIzLQk.js";import"./Text-jE0jlBS1.js";import"./EmulatedBoldText-Ba7yrIZA.js";import"./Text-DujklUHl.js";import"./TextArea-BQFh7CQa.js";import"./TextFieldBase-C-U9p63s.js";import"./FieldDescription-BIvCG2uM.js";import"./useFieldComponent-DI1dsoTY.js";import"./TextField-C5sF5vhI.js";import"./FieldError-DbjIiGK3.js";import"./Form-Dn5OdnSf.js";import"./Group-Id9jy-Co.js";import"./Input-By9tEQCu.js";import"./useTextField-EtH9XVMV.js";import"./useFormReset-LNCZiIDy.js";import"./useFormValidation-DJqpOl9D.js";import"./useControlledHostValueProps-RQKiDY30.js";import"./Label.module-CUYTf9Jc.js";import"./InlineAlert-Dumml4W9.js";import"./AlertIcon-BPm48GUQ.js";import"./LoadingSpinner-C50Cnz5-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dq2UVXBx.js";import"./ContextMenuSection-DF0tWoMk.js";import"./Dialog-B9wBOAXv.js";import"./Collection-YpU2JVsv.js";import"./SelectionIndicator-n0OjLjyZ.js";import"./SelectionManager-DNmOxeny.js";import"./useEvent-DNbaaWG3.js";import"./useCollator-C5z3r8b8.js";import"./FocusScope--j43gSQ5.js";import"./VisuallyHidden-Dk8KR5l4.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
