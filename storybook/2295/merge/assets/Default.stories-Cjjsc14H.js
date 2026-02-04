import{j as r,r as f}from"./iframe-DJlgDtsR.js";import{M as o}from"./MarkdownEditor-Ckh6lXo5.js";import{L as R}from"./Label-B-hN2Lzv.js";import{F as b}from"./FieldError-CeTb8jEt.js";import{B as z}from"./Button-B5mEMvcP.js";import{S as x}from"./Section-CYRxPyA9.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DchZxLWp.js";import"./CodeBlock-BSODjgq4.js";import"./clsx-B-dksMZM.js";import"./CopyButton-TsRxz3wc.js";import"./IconWarning-Cyya3L9S.js";import"./flowComponent-1zQAiLcC.js";import"./index-De4rcGI5.js";import"./index-Ds6_MS6L.js";import"./remote-CayAs8X4.js";import"./Tooltip-CXcOBqa0.js";import"./utils-xFKhKznh.js";import"./OverlayArrow-BjaGoVRT.js";import"./useFocus-oMd_AJz-.js";import"./ProgressBar-Cf6O9vZh.js";import"./Label-BBNmyes_.js";import"./Hidden-4sLzj03B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-KImy5Ex-.js";import"./context-XFPr5nuV.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BhR5IplG.js";import"./useControlledState-C0KUsyk2.js";import"./useFocusable-CsEyjS4C.js";import"./react-children-utilities-mzm1pmo-.js";import"./Action-BHdfveoT.js";import"./context-TnNtslmb.js";import"./useStatic-kKtkdJS1.js";import"./browser-C6YBs1UC.js";import"./getActionGroupSlot-Clzrx9gl.js";import"./dynamic-BhViPMj5.js";import"./useLocalizedStringFormatter-D9db5kL2.js";import"./Heading-CCdNJUMi.js";import"./Heading-CTyW73LR.js";import"./RSPContexts-CxGwKclm.js";import"./InlineCode-T0WkPKZi.js";import"./Link-N3wxOvKL.js";import"./usePress-CWKDBuw6.js";import"./Separator-xqX_Hz7Q.js";import"./Separator-BojWZdSH.js";import"./CollectionBuilder-D_QdfbH9.js";import"./Text-B6SLv6do.js";import"./EmulatedBoldText-BsjtvuiU.js";import"./Text-DD0-81CT.js";import"./TextArea-CEcvtZly.js";import"./TextFieldBase-DFi-7PTx.js";import"./FieldDescription-DFEkRW3-.js";import"./useFieldComponent-Bmr1JhS0.js";import"./TextField-CzoLjm41.js";import"./FieldError-Cpk3ITKU.js";import"./Form-BUDe3usU.js";import"./Group-CUxw3L8E.js";import"./Input-C2mY4pOV.js";import"./useTextField-BsWAQyLD.js";import"./useFormReset-yK5dVmLs.js";import"./useFormValidation-Dup-Fz52.js";import"./useControlledHostValueProps-D_As0Zui.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DmRH4lNK.js";import"./AlertIcon-nCFQHvgi.js";import"./LoadingSpinner-DvQzlWjD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DjTNcQDc.js";import"./ContextMenuSection-BF9OA7h1.js";import"./Dialog-BOJlWGO4.js";import"./Collection-Cl6v0tCD.js";import"./SelectionIndicator-DnAH24RP.js";import"./SelectionManager-ESuaU6yM.js";import"./useEvent-CxJg3RaJ.js";import"./useCollator-Bm61inwz.js";import"./FocusScope-C9j0_60-.js";import"./VisuallyHidden-BJ_y0FNA.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
