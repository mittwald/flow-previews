import{j as r,r as f}from"./iframe--WfF81Kk.js";import{M as o}from"./MarkdownEditor-xIYZ7lbH.js";import{L as R}from"./Label-BrCJfTYV.js";import{F as b}from"./FieldError-DwJ8vXTD.js";import{B as z}from"./Button-Csb2zbZD.js";import{S as x}from"./Section-CsSoxbiI.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DzUJfGGA.js";import"./CodeBlock-DRCYW1mB.js";import"./clsx-B-dksMZM.js";import"./CopyButton-ClV-Zx3T.js";import"./IconWarning-BCj0akvL.js";import"./flowComponent-zBGCvlSH.js";import"./index-CYxiP9KI.js";import"./index-C06vQZsJ.js";import"./remote-BYVMC2eP.js";import"./Tooltip-DjRL0eJd.js";import"./utils-DjCd38Rb.js";import"./OverlayArrow-zU7WmGPw.js";import"./useFocus-BstfIGzX.js";import"./ProgressBar-CcHuDHhg.js";import"./Label-B681fyVu.js";import"./Hidden-CjN9RU7M.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-b3rJJe.js";import"./context-BGH-DtkU.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-xiCVrDfg.js";import"./useControlledState-33z9BU53.js";import"./useFocusable-CYWdX1lX.js";import"./react-children-utilities-vHAgxir-.js";import"./Action-B7MToOoF.js";import"./context-BQE_egpR.js";import"./useStatic-DJuRNbYT.js";import"./browser-DaXQhhrD.js";import"./getActionGroupSlot-DP_ddCf6.js";import"./dynamic-3udm1Ueo.js";import"./useLocalizedStringFormatter-BAqqywtA.js";import"./Heading-CQM1gGXf.js";import"./Heading-DpPfmaJp.js";import"./RSPContexts-D6CGk5en.js";import"./InlineCode-BAGiUsZK.js";import"./Link-BV1-dthy.js";import"./usePress-CuA8A2Wl.js";import"./Separator-CntWr27f.js";import"./Separator-C9zEzG3T.js";import"./CollectionBuilder-D8350JFC.js";import"./Text-BQUBTPZI.js";import"./EmulatedBoldText-Bc2SrKM1.js";import"./Text-2H1diUJp.js";import"./TextArea-Ovaxv5M2.js";import"./useFieldComponent-DtaSYFu8.js";import"./useControlledHostValueProps-Bw-7xkTM.js";import"./FieldDescription-_8Z-eH9p.js";import"./TextField-AxNmW3iT.js";import"./FieldError-8xlfKJ8p.js";import"./Form-fKP9Mvs-.js";import"./Group-BfXMsi0-.js";import"./Input-DN6feiEe.js";import"./useTextField-BSgmlJ8f.js";import"./useFormReset-B7XwhHp1.js";import"./useFormValidation-CPuMB1ok.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-4irfy3TS.js";import"./AlertIcon-Bc0kQsAW.js";import"./LoadingSpinner-BoJLilDa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-cdObnXIw.js";import"./ContextMenuSection-BxJIjSzE.js";import"./Dialog-C_VjyLol.js";import"./Collection-WxHe4g5S.js";import"./SelectionIndicator-BGWzSObI.js";import"./SelectionManager-D0POi5wt.js";import"./useEvent-CGxaeV4J.js";import"./useCollator-lImoFu1C.js";import"./FocusScope-D57rWz_c.js";import"./VisuallyHidden-BWpEL0hX.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
