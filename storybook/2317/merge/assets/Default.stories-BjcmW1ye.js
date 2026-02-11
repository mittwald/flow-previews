import{j as r,r as f}from"./iframe-Czt-X4mt.js";import{M as o}from"./MarkdownEditor-BLlnhNTW.js";import{L as R}from"./Label-DRlzXm2g.js";import{F as b}from"./FieldError-BFQHJf6J.js";import{B as z}from"./Button-CD6msFpC.js";import{S as x}from"./Section-D-QcuIGE.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Cv8SnzsF.js";import"./CodeBlock-DJkYChQA.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BGQdFxFg.js";import"./IconWarning-CEtgECHE.js";import"./flowComponent-BEE6NzIR.js";import"./index-BvfwTKjZ.js";import"./index-Dtw36EGp.js";import"./remote-hRcAmPck.js";import"./Tooltip-BvJuWnPH.js";import"./utils-CU6JriEK.js";import"./OverlayArrow-DFsPHtjC.js";import"./useFocus-En_BVabG.js";import"./ProgressBar-DtVqo96T.js";import"./Label-Ddc2_N7O.js";import"./Hidden-B_4G05gn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BR4TCRo_.js";import"./context-BsnVI305.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DDb3Exp8.js";import"./useControlledState-DhgMObTD.js";import"./useFocusable-DFLTBTxr.js";import"./react-children-utilities-BZ4NoKWU.js";import"./Action-BQrZ3ZgM.js";import"./context-CNfFuvDb.js";import"./useStatic-C0a0tu6G.js";import"./browser-CPd8oh-y.js";import"./dynamic-BXoid3qz.js";import"./getActionGroupSlot-5QVk2C33.js";import"./useLocalizedStringFormatter-BDxrzy3H.js";import"./Heading-53sbNT6w.js";import"./Heading-DpW_T125.js";import"./RSPContexts-BGSIbyEV.js";import"./InlineCode-CJFNfNVg.js";import"./Link-LTFE4TsB.js";import"./usePress-DEVH16Jn.js";import"./Separator-BayJyET4.js";import"./Separator-T09-1zVq.js";import"./CollectionBuilder-DHVWwXoR.js";import"./Text-8ynHQhOY.js";import"./EmulatedBoldText-DRvUUCjd.js";import"./Text-t3MR2mNG.js";import"./TextArea-C5hUJAt1.js";import"./useFieldComponent-CjTkiSgD.js";import"./useControlledHostValueProps-BeczUNsC.js";import"./FieldDescription-tPhd2u2b.js";import"./TextField-uqAgoO2d.js";import"./FieldError-8b6ruGQE.js";import"./Form-BeS1FfjY.js";import"./Group-eiH9vP6f.js";import"./Input-BropXuGq.js";import"./useTextField-UfqQ23LP.js";import"./useFormReset-5KG7Gyo5.js";import"./useFormValidation-DyL1ZPxG.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BfffkCAs.js";import"./AlertIcon-DBLlr2Uy.js";import"./LoadingSpinner-B3-O-X86.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YmddG4Dp.js";import"./ContextMenuSection-CUYBU0Kr.js";import"./Dialog-CYkX7YiI.js";import"./Collection-BiWiEach.js";import"./SelectionIndicator-8fZBRAhq.js";import"./SelectionManager-CRIq19Ox.js";import"./useEvent-DNkkjmy4.js";import"./useCollator-SMtHYG8Q.js";import"./FocusScope-DGuUwoy_.js";import"./VisuallyHidden-jSb2CZNn.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
