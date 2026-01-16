import{j as r,r as f}from"./iframe-D2BYf5-g.js";import{M as o}from"./MarkdownEditor-BNLLTRq-.js";import{L as R}from"./Label-DC-_uf6W.js";import{F as b}from"./FieldError-DX5_shM3.js";import{B as z}from"./Button-CDOjETwV.js";import{S as x}from"./Section-CgYlTnFa.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-B30Aizl7.js";import"./CodeBlock-Di9-6d3H.js";import"./clsx-B-dksMZM.js";import"./CopyButton--wW-QkmG.js";import"./IconWarning-BvAkc2LD.js";import"./flowComponent-CbIDm01r.js";import"./index-CRlONQd4.js";import"./index-Bu8wVR5j.js";import"./remote-C9AuEG_9.js";import"./Tooltip-BdrgD5_p.js";import"./utils-DHZ51AFQ.js";import"./OverlayArrow-BMVG_KsN.js";import"./useFocus-ORvRv07U.js";import"./ProgressBar-BjN-i_wE.js";import"./Label-Be_gFKko.js";import"./Hidden-CfpJTou_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DtwWh7yV.js";import"./context-DWMR9XE1.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-fyUF26L0.js";import"./useFocusable-BL0hS6to.js";import"./useFocusRing-DGJLUvQM.js";import"./react-children-utilities-IdWf7-24.js";import"./Action-DS_mMLiR.js";import"./context-DatNKEIi.js";import"./useStatic-DA3fGq-b.js";import"./browser-CRHYBb-w.js";import"./getActionGroupSlot-DYtozdko.js";import"./dynamic-DsmNOmMb.js";import"./useLocalizedStringFormatter-C9QysfdO.js";import"./Heading-BGLuRqOh.js";import"./Heading-DOzmXv5U.js";import"./RSPContexts-Jo-zwAyH.js";import"./InlineCode-DWCMAjA1.js";import"./Link-CxhSDjOE.js";import"./usePress-wVuL2i-g.js";import"./Separator-g9zQ6Rn8.js";import"./Separator-C-Im4RIH.js";import"./CollectionBuilder-BdJbggOI.js";import"./Text-D6N8Heh9.js";import"./EmulatedBoldText-BewoRcqC.js";import"./Text-Dog52uMi.js";import"./TextArea-DaUX8E_s.js";import"./TextFieldBase-BcpGAk-Y.js";import"./FieldDescription-BThX7255.js";import"./useFieldComponent-BFOdLrJ8.js";import"./TextField-nOc8ZFrV.js";import"./FieldError-RWcRHk2C.js";import"./Form-DfX8wS-B.js";import"./Group-CFjwdlwi.js";import"./Input-CmZkYsGH.js";import"./useTextField-CeRk65Nm.js";import"./useFormReset-Dqz1EECq.js";import"./useFormValidation-BTfq9KBg.js";import"./useControlledHostValueProps-BRzzD23P.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Ds9fEZFP.js";import"./AlertIcon-LWJoxW2P.js";import"./LoadingSpinner-C5GJ3M9d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DuBdlowL.js";import"./ContextMenuSection-CMECFzdV.js";import"./Dialog-DmGaLGl4.js";import"./Collection-DwLf4j5H.js";import"./SelectionIndicator-BJ_6aDpT.js";import"./SelectionManager-C2d-TWlq.js";import"./useEvent-CvRwCHkk.js";import"./useCollator-BK0Pw3vX.js";import"./FocusScope-4_J7OwCf.js";import"./VisuallyHidden-DcwEctQc.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
