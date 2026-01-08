import{j as r,r as f}from"./iframe-DqAMh1gn.js";import{M as o}from"./MarkdownEditor-C00q5Xbq.js";import{L as R}from"./Label-CvBjm4aX.js";import{F as b}from"./FieldError-DFC5bA5N.js";import{B as z}from"./Button-BzL2mXU9.js";import{S as x}from"./Section-DqN2VLIl.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-D1wnJD4u.js";import"./CodeBlock-CDEqt72x.js";import"./clsx-B-dksMZM.js";import"./CopyButton-1UF4l16H.js";import"./IconWarning-BV3xGinn.js";import"./flowComponent-BNeqdfjc.js";import"./index-BXU2S61h.js";import"./index-By9mRA0t.js";import"./remote-BXLOBgAx.js";import"./Tooltip-CL4nUyry.js";import"./utils-WhkxUCK6.js";import"./OverlayArrow-DNiZVgAH.js";import"./useFocus-Cr8fiyXD.js";import"./ProgressBar-CxeXPRaQ.js";import"./Label-iT_mUFNC.js";import"./Hidden-BzHkL3wJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BKYm2rJO.js";import"./context-DRhwbml9.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ChPR7hzM.js";import"./useFocusable-DO1mJmot.js";import"./useFocusRing-BN14JWVs.js";import"./react-children-utilities-DB5uwz-e.js";import"./Action-B_T5lnyR.js";import"./context-ChmspXAM.js";import"./useStatic-BuuX2mtG.js";import"./browser-CSMWWW9k.js";import"./getActionGroupSlot-BJX70W99.js";import"./dynamic-CAN3WNRI.js";import"./useLocalizedStringFormatter-CZ172l8h.js";import"./Heading-Cop9Lz_q.js";import"./Heading-DO-ilkLm.js";import"./RSPContexts-A1MHH_Cz.js";import"./InlineCode-DIX8ovrz.js";import"./Link-D-GaayyF.js";import"./usePress-ClkvTl3z.js";import"./Separator-C-bOTKn6.js";import"./Separator-CEkzsxq5.js";import"./CollectionBuilder-Dk_6EAPH.js";import"./Text-1p9r91sB.js";import"./EmulatedBoldText-CnA8uKsC.js";import"./Text-DmUxfOW-.js";import"./TextArea-Cy8SMeww.js";import"./TextFieldBase-BYrjVGdi.js";import"./FieldDescription-BxpfmOYv.js";import"./useFieldComponent-CgfE5MLg.js";import"./TextField-Cwk09HWt.js";import"./FieldError-Cat2GNj4.js";import"./Form-y2x5EeW4.js";import"./Group-BvOirkga.js";import"./Input-OeHygm-T.js";import"./useTextField-CD8wMq8W.js";import"./useFormReset-CllrYVFd.js";import"./useFormValidation-Bmx8yPSj.js";import"./useControlledHostValueProps-BDFbuI2N.js";import"./Label.module-CUYTf9Jc.js";import"./InlineAlert-DL5f4hl1.js";import"./AlertIcon-C7t-BIgM.js";import"./LoadingSpinner-BWCnwVbS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DRXTkefG.js";import"./ContextMenuSection-CNlzjKiC.js";import"./Dialog-AIPHRx2P.js";import"./Collection-CQjuLfpr.js";import"./SelectionIndicator-Qt-acHPk.js";import"./SelectionManager-CsReWWw0.js";import"./useEvent-DRkjAlB5.js";import"./useCollator-DvzaADfo.js";import"./FocusScope-azgg1m0B.js";import"./VisuallyHidden-B3gyx1tV.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
