import{j as r,r as f}from"./iframe-C8tsaODo.js";import{M as o}from"./MarkdownEditor-Bj30xt4K.js";import{L as R}from"./Label-1oLHWqvU.js";import{F as b}from"./FieldError-EQJdnOUU.js";import{B as z}from"./Button-BxguJBhT.js";import{S as x}from"./Section-DA8oIEqU.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C8ivcVUf.js";import"./CodeBlock-B1AFrS9Y.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CNm2Je7V.js";import"./IconWarning-Up7WC4e0.js";import"./flowComponent-BTZ0wFju.js";import"./index-CLgTDDI2.js";import"./index-BNoG6unV.js";import"./remote-Ckar2tK9.js";import"./Tooltip-Dagmmp6X.js";import"./utils-CdcYI7XL.js";import"./OverlayArrow-CxwkoRJi.js";import"./platform-Dz8CwCz0.js";import"./ProgressBar-DplTBNX0.js";import"./Label-D1q-_ISO.js";import"./Hidden-BspDtBD-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oJhcJRxp.js";import"./context-BwdmRhET.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DauayxVe.js";import"./useFocus-D0DC1KKH.js";import"./useControlledState-CN29789s.js";import"./useFocusable-BW2xec3w.js";import"./react-children-utilities-DrL1a9IJ.js";import"./ActionBatch-BUyIhhJw.js";import"./useOverlayController-Bf797MvO.js";import"./useStatic-jSI8PS8c.js";import"./browser-qgMJ3NzC.js";import"./getActionGroupSlot-C3_vSruP.js";import"./dynamic-DA7vjxZL.js";import"./useLocalizedStringFormatter-Bu8yFg8Y.js";import"./Heading-BUyGvYSI.js";import"./Heading-LrX14EbB.js";import"./RSPContexts-DtfJrVYY.js";import"./InlineCode-BXaQi6wZ.js";import"./Link-BlP_epyf.js";import"./usePress-vv50L64r.js";import"./Separator-CQLguXbO.js";import"./Separator-AhH2lqvH.js";import"./CollectionBuilder-CUdEZ73w.js";import"./Text-BE7lE0T8.js";import"./EmulatedBoldText-RMBLGP7I.js";import"./Text-BkxlIu3p.js";import"./TextArea-CMvy5PN-.js";import"./useFieldComponent-FgbLRzY4.js";import"./useControlledHostValueProps-D0AOVaZQ.js";import"./FieldDescription-BZoE01SC.js";import"./TextField-B6A8u9tv.js";import"./FieldError-DSXMmXMO.js";import"./Form-Ch0mipSV.js";import"./Group-DRewra_w.js";import"./Input-ConcdJ9I.js";import"./useTextField-BlhjZ_T-.js";import"./useFormReset-BpTKK099.js";import"./useFormValidation-CZJdaAR2.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BlUc9teP.js";import"./AlertIcon-DJlFLAIk.js";import"./LoadingSpinner-C-PnKOui.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dm2nITC7.js";import"./ContextMenuSection-BnK78UMz.js";import"./Dialog-CNeqByqP.js";import"./Collection-Drvm3BjC.js";import"./SelectionIndicator-5GEQvOaX.js";import"./SelectionManager-BzBOXU82.js";import"./useEvent-520ieM62.js";import"./useCollator-q3kgEL61.js";import"./FocusScope-DFjW_d09.js";import"./VisuallyHidden-hgCntKQk.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
