import{j as r,r as f}from"./iframe-BLisfkW1.js";import{M as o}from"./MarkdownEditor-BOaO2p6b.js";import{L as R}from"./Label-C4q0QTf_.js";import{F as b}from"./FieldError-ClH5zNHK.js";import{B as z}from"./Button-BfYq4-Jl.js";import{S as x}from"./Section-BpUd8Q8x.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BEC24Ntg.js";import"./CodeBlock-B8xYOkmt.js";import"./clsx-B-dksMZM.js";import"./CopyButton-87VtO5MK.js";import"./IconWarning-Chxh05Fa.js";import"./flowComponent-DivMJame.js";import"./index-DOES4bKx.js";import"./index-CURFR8tK.js";import"./remote-fMZF2a4s.js";import"./Tooltip-BW14Cule.js";import"./utils-B2KexK2G.js";import"./OverlayArrow-CazCWSIw.js";import"./useFocus-CasiJiIj.js";import"./ProgressBar-DldYxOmc.js";import"./Label-BayswAfQ.js";import"./Hidden-DTcX35LP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DktisoZ5.js";import"./context-B09EtTwC.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-whNl8W73.js";import"./useControlledState-BzKS6zrg.js";import"./useFocusable-2bJXkpaN.js";import"./react-children-utilities-CzU4xKRl.js";import"./ActionBatch-Ba3fo7J6.js";import"./useOverlayController-UaqgI9Sz.js";import"./useStatic-Cf1wupkY.js";import"./browser-1YnzmFhG.js";import"./getActionGroupSlot-JAeF61ot.js";import"./dynamic-B3kpKjwM.js";import"./useLocalizedStringFormatter-vseb4VB2.js";import"./Heading-D7iYFS4a.js";import"./Heading-BRGk0Lny.js";import"./RSPContexts-C6v4G0P9.js";import"./InlineCode-D3qKvBB6.js";import"./Link-34msnoEh.js";import"./usePress-Bt2uh0Mh.js";import"./Separator-CGc-J4X5.js";import"./Separator-DUCS1p3N.js";import"./CollectionBuilder-CkN2XN_g.js";import"./Text-BzdTXRF7.js";import"./EmulatedBoldText-w1zEViUr.js";import"./Text-CMQTkDl6.js";import"./TextArea-iXzOckoh.js";import"./useFieldComponent-DG2srt-t.js";import"./useControlledHostValueProps-ioDLOzJF.js";import"./FieldDescription-C0N-joI8.js";import"./TextField-BR3eT1Aq.js";import"./FieldError-BmP7KZUf.js";import"./Form-mlAsayVr.js";import"./Group-PbN8ryVA.js";import"./Input-BNQv7Er9.js";import"./useTextField-Dd6gALjE.js";import"./useFormReset-fweVV-SC.js";import"./useFormValidation-BvwbNbVP.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DXmhqwQY.js";import"./AlertIcon-BH2ywHIc.js";import"./LoadingSpinner-Bv9Y6jEa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BryrJTx5.js";import"./ContextMenuSection-bY8Y-pvV.js";import"./Dialog-YGNnE7N8.js";import"./Collection-B29ecyfu.js";import"./SelectionIndicator-DkROylNb.js";import"./SelectionManager-CZqcsdfY.js";import"./useEvent-DXG1g0h1.js";import"./useCollator-BipIKgaT.js";import"./FocusScope-CH3eRbFP.js";import"./VisuallyHidden-y8IU71vp.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
