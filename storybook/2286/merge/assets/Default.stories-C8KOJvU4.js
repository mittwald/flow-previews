import{j as r,r as f}from"./iframe-CgeYxcj8.js";import{M as o}from"./MarkdownEditor-JS9Kzvlk.js";import{L as R}from"./Label-CIGJVOdR.js";import{F as b}from"./FieldError-CDWzOCc-.js";import{B as z}from"./Button-DR_1qYQ2.js";import{S as x}from"./Section-C3AA-XhZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BWAr_3S-.js";import"./CodeBlock-BgMPN6gi.js";import"./clsx-B-dksMZM.js";import"./CopyButton-MjIv9KnD.js";import"./IconWarning-CNkUjla4.js";import"./flowComponent-Dnk3jDHh.js";import"./index-DGuDz7oW.js";import"./index-SS9EXt6e.js";import"./remote-CtdlUY7L.js";import"./Tooltip-DpX7th40.js";import"./utils-BH6Z59zo.js";import"./OverlayArrow-1gQSfgj3.js";import"./useFocus-BDu45Ayq.js";import"./ProgressBar-FiBC1zNG.js";import"./Label-DsJ6qzWh.js";import"./Hidden-kX7iUH63.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CNkOKuMy.js";import"./context-CYaZBhkg.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BNw3vzKJ.js";import"./useControlledState-CjPSf5xo.js";import"./useFocusable-UxYwgi7z.js";import"./react-children-utilities-CNIWlnlv.js";import"./Action-DlDUTAjM.js";import"./context-x8law5mp.js";import"./useStatic-BH0JS_W8.js";import"./browser-DJjrqqpQ.js";import"./getActionGroupSlot-Bx9RQO4h.js";import"./dynamic-CbTKsx_B.js";import"./useLocalizedStringFormatter-C8PcX-p4.js";import"./Heading-ze7wSVUJ.js";import"./Heading-CYGvuqGo.js";import"./RSPContexts-D3svuC0u.js";import"./InlineCode-42rDrN9I.js";import"./Link-Ds4c6t_f.js";import"./usePress-DX014ZyL.js";import"./Separator-BMVnQDpw.js";import"./Separator-CcrRe_Zj.js";import"./CollectionBuilder-C9W5aaEP.js";import"./Text-fEw-hlGn.js";import"./EmulatedBoldText-B9jRyhwt.js";import"./Text-D1ETBO0D.js";import"./TextArea-wJByBILi.js";import"./TextFieldBase-CPZBv2Fr.js";import"./FieldDescription-CLnejhy0.js";import"./useFieldComponent-DjF7VplI.js";import"./TextField-CaTtGjlg.js";import"./FieldError-BanRAUWl.js";import"./Form-DrrI3HBf.js";import"./Group-Cr99KV0p.js";import"./Input-B8kQ-Cuq.js";import"./useTextField-B2JfmkUj.js";import"./useFormReset-CLCQkLzV.js";import"./useFormValidation-CUbvhZHn.js";import"./useControlledHostValueProps-8Wjxwq6I.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BHVf3OWG.js";import"./AlertIcon-BVEvo4xP.js";import"./LoadingSpinner-Czq10wCK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-x-eiCRcG.js";import"./ContextMenuSection-CBMk4BqO.js";import"./Dialog-LUBljj5i.js";import"./Collection-D2EAa2oZ.js";import"./SelectionIndicator-BaQZNiQ3.js";import"./SelectionManager-BP1ghRLo.js";import"./useEvent-DvVlPNbe.js";import"./useCollator-Jdxh6jfg.js";import"./FocusScope-CGvyVacv.js";import"./VisuallyHidden-ty8jLyKB.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
