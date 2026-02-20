import{j as r,r as f}from"./iframe-BF3zk0it.js";import{M as o}from"./MarkdownEditor-BUjovMRG.js";import{L as R}from"./Label-DcRc8bay.js";import{F as b}from"./FieldError-C2kAtlyK.js";import{B as z}from"./Button-ZNdemegp.js";import{S as x}from"./Section-CrNjTCEJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-ByrZn2gN.js";import"./CodeBlock-DxJKBKmb.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BlgHSm04.js";import"./IconWarning-BmoaMC54.js";import"./flowComponent-CmGrxW8D.js";import"./index-CYSNwget.js";import"./index-S59XLRls.js";import"./remote-CJL-gtYq.js";import"./Tooltip-8u-WMwOu.js";import"./utils-Ds629Okb.js";import"./OverlayArrow-CX6asWYb.js";import"./useFocus-BGqYFkhn.js";import"./ProgressBar-wD5S60Ia.js";import"./Label-Df1ayrWx.js";import"./Hidden-DHsUmrVt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnUcYl5P.js";import"./context-B_W42rBs.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-C8HzCuNM.js";import"./useControlledState-ChKdFYY_.js";import"./useFocusable-BWie7cw6.js";import"./react-children-utilities-CMhDhYTN.js";import"./ActionBatch-DvnrQlZS.js";import"./useOverlayController-CjUKcEGt.js";import"./useStatic-B_2dxxhv.js";import"./browser-Cxel5Cqf.js";import"./getActionGroupSlot-CNuqOxpA.js";import"./dynamic-DMyjxIhV.js";import"./useLocalizedStringFormatter-DvXTg0S-.js";import"./Heading-Dtu6R2J5.js";import"./Heading-N6x-j70c.js";import"./RSPContexts-ssfE85JL.js";import"./InlineCode-TEgDEj1g.js";import"./Link-B1BbKw69.js";import"./usePress-DqnzUH3I.js";import"./Separator-DMn_aT0z.js";import"./Separator-CfMbQNki.js";import"./CollectionBuilder-CzJEx5bH.js";import"./Text-C9_U4GIb.js";import"./EmulatedBoldText-tEygNJi1.js";import"./Text-CwwNB0nU.js";import"./TextArea-evAIyQIt.js";import"./useFieldComponent-Z2yLJYUo.js";import"./useControlledHostValueProps-C-DklFre.js";import"./FieldDescription-CYCZIfgJ.js";import"./TextField-CN-_Qj1L.js";import"./FieldError-WTvIa9hl.js";import"./Form-r-oZJvOh.js";import"./Group-Bhaa4wBz.js";import"./Input-Q6yM49Eu.js";import"./useTextField-CQuzVOOK.js";import"./useFormReset-Dd7cUUSK.js";import"./useFormValidation-Clvn3NKc.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BB1yiwFt.js";import"./AlertIcon-CwrMzrhG.js";import"./LoadingSpinner-BryS_W8u.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CioOZKSP.js";import"./ContextMenuSection-DmXH8tfJ.js";import"./Dialog-IYHamviF.js";import"./Collection-CNU7K9tk.js";import"./SelectionIndicator-DPkZaIrz.js";import"./SelectionManager-C8OuUWxs.js";import"./useEvent-CjKJuTgN.js";import"./useCollator-zZACkIog.js";import"./FocusScope-YXqkLzes.js";import"./VisuallyHidden-P8G91P8h.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
