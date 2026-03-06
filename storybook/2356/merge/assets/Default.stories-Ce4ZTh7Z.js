import{j as r,r as f}from"./iframe-1Z6hWL0q.js";import{M as o}from"./MarkdownEditor-4vX7rrXj.js";import{L as R}from"./Label-BLX0X_A7.js";import{F as b}from"./FieldError-CSszVQO8.js";import{B as z}from"./Button-Up8_TRdV.js";import{S as x}from"./Section-DeLmOfWa.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BNlmpq3m.js";import"./CodeBlock-CRZBR7my.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CnUVQJnh.js";import"./IconWarning-CstRa6-6.js";import"./flowComponent-CQSqsFz-.js";import"./index-CPV4-njg.js";import"./index-OoNE8c9e.js";import"./remote-BXzLQ_GS.js";import"./Tooltip-DN_lT4OV.js";import"./utils-B0Ub4KXD.js";import"./OverlayArrow-0_UUlvtG.js";import"./useFocus-MFE9JzzM.js";import"./ProgressBar-BV7ioShA.js";import"./Label-Berd7YBY.js";import"./Hidden-CX4T_I8z.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8l-Wr5R.js";import"./context-DCww6zBl.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-EnMEiTgA.js";import"./useControlledState-DfFBi8JJ.js";import"./useFocusable-BrwqamRV.js";import"./react-children-utilities-DlmGpg12.js";import"./ActionBatch-B4cDzNNZ.js";import"./useOverlayController-zDyCyx1O.js";import"./useStatic-BMrg-KZz.js";import"./browser-OyZXUgp8.js";import"./getActionGroupSlot-jkvbnKjz.js";import"./dynamic-CeVErRgL.js";import"./useLocalizedStringFormatter-FfFR6yJN.js";import"./Heading-Dc2YOm8x.js";import"./Heading-BTDLHxEZ.js";import"./RSPContexts-BZtvqclp.js";import"./InlineCode-BTUXcJQ3.js";import"./Link-hyXaXYHi.js";import"./usePress-Bgz5j4W3.js";import"./Separator-DWyOEusS.js";import"./Separator-CYJUtDva.js";import"./CollectionBuilder-zke4D84b.js";import"./Text-NSg919ow.js";import"./EmulatedBoldText-CsGTmPK_.js";import"./Text-DPhytgE2.js";import"./TextArea-CVbrxeyn.js";import"./useFieldComponent-DdzfuZRi.js";import"./useControlledHostValueProps-BvMdvEJ5.js";import"./FieldDescription-C0-dYFJA.js";import"./TextField-BnTf1_ly.js";import"./FieldError-CZQJbtEC.js";import"./Form-DiZWQd7A.js";import"./Group-C0vzpAPe.js";import"./Input-DsXoSrKb.js";import"./useTextField-BR1rOsD2.js";import"./useFormReset-BI-pxd56.js";import"./useFormValidation-B95RxpRV.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BJ3sSdkZ.js";import"./AlertIcon-Blha7MMy.js";import"./LoadingSpinner-B9ElqUFv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DpyZuV_i.js";import"./ContextMenuSection-DH07SvAX.js";import"./Dialog-BOSurAfE.js";import"./Collection-5lvTrIT4.js";import"./SelectionIndicator-CEn-3elL.js";import"./SelectionManager-CPzu3hBL.js";import"./useEvent-B2NydoIp.js";import"./useCollator-wpyuYlTN.js";import"./FocusScope-Dlwlk6_J.js";import"./VisuallyHidden-CCJLIB7u.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
