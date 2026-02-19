import{j as r,r as f}from"./iframe-je41IZNf.js";import{M as o}from"./MarkdownEditor-CEBtS52T.js";import{L as R}from"./Label--ERuqbAg.js";import{F as b}from"./FieldError-BATB6zBo.js";import{B as z}from"./Button-CKqcv5FO.js";import{S as x}from"./Section-DOpZVh4G.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DviRVHDG.js";import"./CodeBlock-Cs7U_wgN.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CnUQf53z.js";import"./IconWarning-Bnxn-M7Y.js";import"./flowComponent-Byg_Wdja.js";import"./index-3zpYFWyF.js";import"./index-DBepN-OD.js";import"./remote-CVh73cse.js";import"./Tooltip-Bh_sgfX0.js";import"./utils-Q4wA2zXG.js";import"./OverlayArrow-7pXV33mr.js";import"./useFocus-YEPBe3OK.js";import"./ProgressBar-DuWvfVrm.js";import"./Label-BNl2hTKa.js";import"./Hidden-CA0I_dPB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_SRIQyLy.js";import"./context-533DYF-u.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DOADtTnm.js";import"./useControlledState-Behjjcy6.js";import"./useFocusable-Ldg9iOHo.js";import"./react-children-utilities-B0HW_H03.js";import"./ActionBatch-ChKsIRTP.js";import"./useOverlayController-BUOVgKeB.js";import"./useStatic-DB-qeJ4V.js";import"./browser-Drae5Vqb.js";import"./getActionGroupSlot-RUbe0sa1.js";import"./dynamic-BrtagzWP.js";import"./useLocalizedStringFormatter-DHff-c09.js";import"./Heading-Bj867S3k.js";import"./Heading-0rwlvdDR.js";import"./RSPContexts-u6z1ubPU.js";import"./InlineCode-RXwXgQ6-.js";import"./Link-D9QkJa0E.js";import"./usePress-BcrJWT2n.js";import"./Separator-B3Q0YIa0.js";import"./Separator-CRKtuO5D.js";import"./CollectionBuilder-BswnoYzM.js";import"./Text-BC-RZ7k4.js";import"./EmulatedBoldText-BdEDO8G6.js";import"./Text-DidYm6nP.js";import"./TextArea-DIN2LZGu.js";import"./useFieldComponent-b8-F_AVa.js";import"./useControlledHostValueProps-BR1UJYKe.js";import"./FieldDescription-epssNn7d.js";import"./TextField-D33Qq-YD.js";import"./FieldError-MnbTPawu.js";import"./Form-D8X7JUv8.js";import"./Group-D7ryvxcR.js";import"./Input-U4HmeWQK.js";import"./useTextField-D9CsxYKW.js";import"./useFormReset-BAaFkhxA.js";import"./useFormValidation-DLIHXRbT.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B3BG9g2L.js";import"./AlertIcon-g4_I2qja.js";import"./LoadingSpinner-DltTQrQc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bv1GWar0.js";import"./ContextMenuSection-D3nZCtKg.js";import"./Dialog-BA8GDzQ6.js";import"./Collection-fxANXXK9.js";import"./SelectionIndicator-DrqbtAz1.js";import"./SelectionManager-DarNfpx7.js";import"./useEvent-BrmATdRq.js";import"./useCollator-5dtfDRbY.js";import"./FocusScope-ClZvkh4F.js";import"./VisuallyHidden-DTzU9Ikw.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
