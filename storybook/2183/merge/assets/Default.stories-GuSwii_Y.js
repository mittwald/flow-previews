import{j as r,r as f}from"./iframe-CgWIZppF.js";import{M as o}from"./MarkdownEditor-rMSK56y1.js";import{L as R}from"./Label-8Ls1PMPy.js";import{F as b}from"./FieldError-Dr7a0W2N.js";import{B as z}from"./Button-B2z86NVg.js";import{S as x}from"./Section-DjNOq_vK.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-RIcy2KIL.js";import"./CodeBlock-CeaTe2LO.js";import"./clsx-B-dksMZM.js";import"./CopyButton-tKwPJz96.js";import"./IconWarning-CJrmQcXC.js";import"./flowComponent-n6uWZ_Yk.js";import"./index-DK9ZOg9l.js";import"./index-D8vpbAff.js";import"./remote-DVGHPh_8.js";import"./Tooltip-BSZoAPFZ.js";import"./utils-CqFMFg3g.js";import"./OverlayArrow-CNLX7-2g.js";import"./useFocus-ClWOKyYK.js";import"./ProgressBar-CMi9IWJp.js";import"./Label-Bv5UhUCK.js";import"./Hidden-td7Ld2aU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMBsm_3O.js";import"./context-DG5uy-SY.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ii3oWk08.js";import"./useFocusable-Dp8viQw7.js";import"./useFocusRing-pEE2Rwro.js";import"./react-children-utilities-DSPQ1wq0.js";import"./Action-ChgPhfJd.js";import"./context-B2MrOWQ_.js";import"./useStatic-CFKrTcwu.js";import"./browser-C8d3FCf4.js";import"./getActionGroupSlot-Bt3m4oNd.js";import"./dynamic-BqY2cEs-.js";import"./useLocalizedStringFormatter-6cAQP3rP.js";import"./Heading-CfRE4X5D.js";import"./Heading-DOQpztPl.js";import"./RSPContexts-CAKQ_-J3.js";import"./InlineCode-Dwy-AzXD.js";import"./Link-HC91FLDg.js";import"./usePress-CoCxa2CI.js";import"./Separator-P0wq4yE3.js";import"./Separator-pxi-Jkjv.js";import"./CollectionBuilder-CoS6mLvq.js";import"./Text-B7pZrZSG.js";import"./EmulatedBoldText-iMswxomY.js";import"./Text-C3p6npBl.js";import"./TextArea-DQqqtysL.js";import"./TextFieldBase-B_wFjxnE.js";import"./FieldDescription-k5usNxcY.js";import"./useFieldComponent-BZyKlvwh.js";import"./TextField-xfSP_rx8.js";import"./FieldError-xtpbDfud.js";import"./Form-BaHtPP4t.js";import"./Group-C5HUn3mH.js";import"./Input-jwk6Ly15.js";import"./useTextField-CrxwcKhu.js";import"./useFormReset-BEtHvHxA.js";import"./useFormValidation-DKxVhdCK.js";import"./useControlledHostValueProps-NWqFGbi9.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-nmzfTpX1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C_sZyB84.js";import"./ContextMenuSection-BUslXVLP.js";import"./Dialog-R-LZrA7I.js";import"./Collection-DXGs2lV9.js";import"./SelectionIndicator-xmkzz9vO.js";import"./SelectionManager-BFnz3p05.js";import"./useEvent-C_2qUUzn.js";import"./useCollator-BRse2HwO.js";import"./FocusScope-CYlUipby.js";import"./VisuallyHidden-BDyUoc3v.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Kr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Kr as __namedExportsOrder,Jr as default};
