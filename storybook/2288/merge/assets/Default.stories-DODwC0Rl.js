import{j as r,r as f}from"./iframe-DnKh_q8B.js";import{M as o}from"./MarkdownEditor-D56-9c1y.js";import{L as R}from"./Label-_TjJj3W9.js";import{F as b}from"./FieldError-CQ45DqtA.js";import{B as z}from"./Button-B6Zpw5yd.js";import{S as x}from"./Section-BVZq-_Eq.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-p9NXzu7D.js";import"./CodeBlock-Bz-Wnl6B.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DObkxuIz.js";import"./IconWarning-C-jbuAIx.js";import"./flowComponent-NsMUrrXI.js";import"./index-DEpWzVfg.js";import"./index-B5PweBHP.js";import"./remote-k0GnUd79.js";import"./Tooltip-DIF5dyRC.js";import"./utils-BZc8lNcd.js";import"./OverlayArrow-2vICfEm4.js";import"./useFocus-BUIY7lOc.js";import"./ProgressBar-q35gM_9d.js";import"./Label-psEyVv54.js";import"./Hidden-qw9_5FuA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-jAJMJRpZ.js";import"./context-CXoyow8k.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CZAaR2ds.js";import"./useControlledState-Dx9tzWN_.js";import"./useFocusable-z3KWK7qq.js";import"./react-children-utilities-BTaWxpI0.js";import"./Action-B5Uq12lQ.js";import"./context-CSnl0IXM.js";import"./useStatic-DlxvzgyM.js";import"./browser-BUa4T4SN.js";import"./getActionGroupSlot-Dlj3DC4Q.js";import"./dynamic-BE_n_a5m.js";import"./useLocalizedStringFormatter-ClvwREm6.js";import"./Heading-CB01boQE.js";import"./Heading-BwaoBSXr.js";import"./RSPContexts-wuQtf2CN.js";import"./InlineCode-DExRxIXf.js";import"./Link-Df-ZNa8o.js";import"./usePress-CFc3C1mq.js";import"./Separator-BOhYzL5X.js";import"./Separator-C3ZuVTcl.js";import"./CollectionBuilder-3EWlmXpu.js";import"./Text-Drd9GdLo.js";import"./EmulatedBoldText-C0uufS8q.js";import"./Text-DobXAK13.js";import"./TextArea-D54oiPfl.js";import"./TextFieldBase-DFTgtij1.js";import"./FieldDescription-73O0rUMk.js";import"./useFieldComponent-ClvUady3.js";import"./TextField-BOX8oND8.js";import"./FieldError-ChpD0sIl.js";import"./Form-BQHEa3Zl.js";import"./Group-BODZXCjp.js";import"./Input-mgtZ57Ff.js";import"./useTextField-TkD79Fcw.js";import"./useFormReset-BbinXmMH.js";import"./useFormValidation-C9ppbdC-.js";import"./useControlledHostValueProps-Cbx4Pluy.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DFrKGWVH.js";import"./AlertIcon-3p_Y3XqS.js";import"./LoadingSpinner-B--bUkFv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CX9zCyN4.js";import"./ContextMenuSection-CPEZCChP.js";import"./Dialog-CHY6jywx.js";import"./Collection-BYEhy5Cw.js";import"./SelectionIndicator-B7pzLsJc.js";import"./SelectionManager-Bvw1Vhun.js";import"./useEvent-DMn0oMqB.js";import"./useCollator-DnWbXdif.js";import"./FocusScope-Ddw08eyC.js";import"./VisuallyHidden-DfZCukwF.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
