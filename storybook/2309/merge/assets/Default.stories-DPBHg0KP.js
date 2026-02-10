import{j as r,r as f}from"./iframe-CnD5cTjE.js";import{M as o}from"./MarkdownEditor-C5muBwgT.js";import{L as R}from"./Label-BZkRYtAq.js";import{F as b}from"./FieldError-D8deZX0S.js";import{B as z}from"./Button-CxHLWJvy.js";import{S as x}from"./Section-Bk8f4Pnr.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BGRrGfOM.js";import"./CodeBlock-D-1_ZCHE.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BwJUVy3D.js";import"./IconWarning-K8fT7_bQ.js";import"./flowComponent-C-pFyTgk.js";import"./index-CFIaHCYn.js";import"./index-DPBNH-jw.js";import"./remote-CRObq-IF.js";import"./Tooltip-DteRf3GV.js";import"./utils-BYl_EWK3.js";import"./OverlayArrow-W0sikX14.js";import"./useFocus-BZF2vaC7.js";import"./ProgressBar-CtJNhI05.js";import"./Label-DvWkQRgL.js";import"./Hidden-BqUWSjHb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BEvZESWX.js";import"./context-uSq5N7U7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-a13YBJgG.js";import"./useControlledState-C-7lgoXp.js";import"./useFocusable-DUJmCsdq.js";import"./react-children-utilities-DbfMznFd.js";import"./Action-DYL0-s8C.js";import"./context-CRbXRYLt.js";import"./useStatic-CR0dXYGS.js";import"./browser-DH0afsgD.js";import"./getActionGroupSlot-C2C9nZKR.js";import"./dynamic-DmWwIwdY.js";import"./useLocalizedStringFormatter-C15HmRxb.js";import"./Heading-B3KiVvm7.js";import"./Heading-BVBd8bpC.js";import"./RSPContexts-AjJzFs_t.js";import"./InlineCode-yDhWEitE.js";import"./Link-DgqwpCbC.js";import"./usePress-DgDG_638.js";import"./Separator-Bor43c4R.js";import"./Separator-BpNHyh0k.js";import"./CollectionBuilder-B9nA0J3q.js";import"./Text-Bqsx-GQX.js";import"./EmulatedBoldText-czAo41Rl.js";import"./Text-Bz5hHxMj.js";import"./TextArea-Bw1yv46b.js";import"./useFieldComponent-D1uM9aif.js";import"./useControlledHostValueProps-DEvY5VUA.js";import"./FieldDescription-rFjAs_3m.js";import"./TextField-x7rIma7v.js";import"./FieldError-CkgMvR4A.js";import"./Form-Bj2UuDao.js";import"./Group-CgvC6BGS.js";import"./Input-D96XXoVS.js";import"./useTextField-B2O_v1I6.js";import"./useFormReset-DzGHPNTd.js";import"./useFormValidation-0N4lg69R.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-9D-RaPUt.js";import"./AlertIcon-DEFExzLk.js";import"./LoadingSpinner-CMDtKY2z.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bk4aZnIo.js";import"./ContextMenuSection-BY-0yvA1.js";import"./Dialog-BpNR7iRs.js";import"./Collection-CYQy112U.js";import"./SelectionIndicator-T6p8Rrnn.js";import"./SelectionManager-C_EOkHGn.js";import"./useEvent-DjhegQC5.js";import"./useCollator-DdAAf0Bd.js";import"./FocusScope-q9RNJ1I3.js";import"./VisuallyHidden-D2K60xua.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
