import{j as r,r as f}from"./iframe-V6WnBfM7.js";import{M as o}from"./MarkdownEditor-BlkdAUXM.js";import{L as R}from"./Label-DEwwG9Jt.js";import{F as b}from"./FieldError-CMIqd9eM.js";import{B as z}from"./Button-RYsAGsBp.js";import{S as x}from"./Section-C3IzM_e_.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C4zXeQbZ.js";import"./CodeBlock-DwUTJCFi.js";import"./clsx-B-dksMZM.js";import"./CopyButton-71Rh5kxG.js";import"./IconApp-Dy8CvIso.js";import"./flowComponent-DFUX8R2_.js";import"./index-BKCF-LL0.js";import"./index-WvfsijJu.js";import"./remote-BEdoHpvj.js";import"./IconCopy-yqo6yu3X.js";import"./Tooltip-BOAyoGyi.js";import"./utils-XXCohoWw.js";import"./OverlayArrow-Cit__A6Y.js";import"./useFocus-CBAz-6m6.js";import"./ProgressBar-DGuSqhT6.js";import"./Label-CXxg3a67.js";import"./Hidden-CdYZU9wP.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-EvuRJYDK.js";import"./context-LYg4mQF7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CthGvIJy.js";import"./useFocusable-Cu8jcZF4.js";import"./useFocusRing-ffR2xJu-.js";import"./react-children-utilities-D4MYZq6G.js";import"./Action-B-oQDmqe.js";import"./browser-DYYNnrYB.js";import"./useStatic-BS6-BQsW.js";import"./getActionGroupSlot-BOc6vLFR.js";import"./context-D5s5gcMw.js";import"./dynamic-DY2czHtX.js";import"./useLocalizedStringFormatter-DNkPXAX_.js";import"./Heading-DJVQUmSI.js";import"./Heading-ozYplv84.js";import"./RSPContexts-Bt_iJ6go.js";import"./InlineCode-skYmrIac.js";import"./Link-BcacOLeK.js";import"./IconDownload-tQy8U2UA.js";import"./usePress-D8kRQmXV.js";import"./Separator-roEnkCTB.js";import"./Separator-BqbnfN10.js";import"./CollectionBuilder-DFDOtDir.js";import"./Text-BOvroeJC.js";import"./EmulatedBoldText-C80B2tZx.js";import"./Text-D3RRQUEj.js";import"./TextArea-Db63XYGp.js";import"./TextFieldBase-BKN0nm5t.js";import"./FieldDescription-DbMEQ_lR.js";import"./useFieldComponent-0Fzy9Tw8.js";import"./TextField-DbVUhP9e.js";import"./FieldError-D586kEZH.js";import"./Form-hCONeUH-.js";import"./Group-Lwbt_jXO.js";import"./Input-CgTEN6Lm.js";import"./useTextField-HlhgWqTU.js";import"./useFormReset-C3fVW2xK.js";import"./useFormValidation-sHnlqGhj.js";import"./useControlledHostValueProps-CymCepBD.js";import"./IconList-BQAAClW2.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-XFGdJtLf.js";import"./IconX-DudELXV7.js";import"./IconCheck-C4i47zDQ.js";import"./LoadingSpinner-B8i510y1.js";import"./ariaLive-IMmTuqYB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-X5JzQY6M.js";import"./ContextMenuSection-BCiBPO23.js";import"./lib-90ocxLs-.js";import"./Dialog-C89akVID.js";import"./Collection-z9VX5kUn.js";import"./SelectionIndicator-D4v-q-K9.js";import"./SelectionManager-BQeEKp2X.js";import"./useEvent-DIPTDlyA.js";import"./useCollator-Dg7pOOpD.js";import"./FocusScope-CBJcWxYD.js";import"./VisuallyHidden-Cv44kzCG.js";const Zr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const $r=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,$r as __namedExportsOrder,Zr as default};
