import{j as r,r as f}from"./iframe-DYxqCFL4.js";import{M as o}from"./MarkdownEditor-BZskoDME.js";import{L as R}from"./Label-DuKZtpj_.js";import{F as b}from"./FieldError-sWm_iZNp.js";import{B as z}from"./Button-DGbEpLIN.js";import{S as x}from"./Section-BBD9utnH.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-B2VM2oPe.js";import"./CodeBlock-BqWGxdxk.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Dyl9bhQc.js";import"./IconWarning-BGRYHRhg.js";import"./flowComponent-SnxdO0ip.js";import"./index-CMV8c4GV.js";import"./index-DJ6wSCwd.js";import"./remote-WwxW7fyl.js";import"./Tooltip-DFED3kQe.js";import"./utils-C1fpOvwY.js";import"./OverlayArrow-R2NHUYtB.js";import"./useFocus-C6GqelOx.js";import"./ProgressBar-Cu5usRFF.js";import"./Label-DwTYNUmc.js";import"./Hidden-B_geUQU0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-mobDYg92.js";import"./context-CfMfa2C9.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Byzp35A7.js";import"./useControlledState-Co5SihOL.js";import"./useFocusable-8bvqGkWP.js";import"./react-children-utilities-BS9JfYXY.js";import"./ActionBatch-BfjBVLTQ.js";import"./useOverlayController-BZwKG1Aj.js";import"./useStatic-BMoi980u.js";import"./browser-CmbZy-PD.js";import"./getActionGroupSlot-ChAJy8AN.js";import"./dynamic-C8CcPw_G.js";import"./useLocalizedStringFormatter-B6u7Awnk.js";import"./Heading-HOIK8yqY.js";import"./Heading-DbYjHDJK.js";import"./RSPContexts-DXUT3Wo8.js";import"./InlineCode-zz5VFT6h.js";import"./Link-BIzdt31l.js";import"./usePress-DMR80VPZ.js";import"./Separator-DfqDpzzZ.js";import"./Separator-3N5Q9dE4.js";import"./CollectionBuilder-B3eaJP6J.js";import"./Text-BnII0mKt.js";import"./EmulatedBoldText-D6xSemQT.js";import"./Text-B3xsuc84.js";import"./TextArea-CjPk1-oa.js";import"./useFieldComponent-DjSvrfgm.js";import"./useControlledHostValueProps-D7TiKCSb.js";import"./FieldDescription-VqAwMf5J.js";import"./TextField-Do-EZwdB.js";import"./FieldError-B9AV5Ok7.js";import"./Form-C4EYd143.js";import"./Group-BZLlrAEU.js";import"./Input-DB_F_n6I.js";import"./useTextField-BwDQcndi.js";import"./useFormReset-VwcIZGsw.js";import"./useFormValidation-FkHTzTfc.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D5ZV5CrS.js";import"./AlertIcon-B9fJ359s.js";import"./LoadingSpinner-BY4JXLJQ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BPYpcxnx.js";import"./ContextMenuSection-BPGq4V6i.js";import"./Dialog-CiGSJFZ7.js";import"./Collection-CpIPCaxL.js";import"./SelectionIndicator-D_wBgdeg.js";import"./SelectionManager-BMzSjOT-.js";import"./useEvent-CIxnPnFa.js";import"./useCollator-sfCu5teu.js";import"./FocusScope-BC21MQ9n.js";import"./VisuallyHidden-CZrO0U0i.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
