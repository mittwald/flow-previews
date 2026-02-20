import{j as r,r as f}from"./iframe-Bas3a7fO.js";import{M as o}from"./MarkdownEditor-BLh_O1NJ.js";import{L as R}from"./Label-QWyaEZ02.js";import{F as b}from"./FieldError-B_qklWB_.js";import{B as z}from"./Button-CCev3q47.js";import{S as x}from"./Section-CuO1V7U6.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CVImFf3z.js";import"./CodeBlock-BmpK6VI6.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B_igU4Yu.js";import"./IconWarning-9FMOeqa7.js";import"./flowComponent-DM0zlvyg.js";import"./index-BsE7CccI.js";import"./index-CuTcGtc9.js";import"./remote-CQRN9i7s.js";import"./Tooltip-lg1qHEl3.js";import"./utils-eswKxOcw.js";import"./OverlayArrow-B1y4rBya.js";import"./useFocus-BpOhXbga.js";import"./ProgressBar-C3VsHXts.js";import"./Label-CAS-GA4h.js";import"./Hidden-JsWJU2dF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-AX-jpDlX.js";import"./context-C6ovHfpS.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing--4ecJhRH.js";import"./useControlledState-DnKF_srQ.js";import"./useFocusable-Dz64TW3s.js";import"./react-children-utilities-CKwozpx-.js";import"./ActionBatch-Ctg3LC0z.js";import"./useOverlayController-Bne___mw.js";import"./useStatic-LTDZm_8J.js";import"./browser-CI0OqVn7.js";import"./getActionGroupSlot-DxyevWSt.js";import"./dynamic-CtBYvx23.js";import"./useLocalizedStringFormatter-DWSvb_Dh.js";import"./Heading-BvcJIgQi.js";import"./Heading-CIj0isr2.js";import"./RSPContexts-BxdWTHUz.js";import"./InlineCode-B5sClJza.js";import"./Link-CvzlSJYo.js";import"./usePress-BXALpkIT.js";import"./Separator-DSXfDrFK.js";import"./Separator-BhW3WF_H.js";import"./CollectionBuilder-0TvFeMg9.js";import"./Text-D06q46lu.js";import"./EmulatedBoldText-DWlWNctj.js";import"./Text-Di9JAG-3.js";import"./TextArea-9Ca8uQAP.js";import"./useFieldComponent-CHbV_zSr.js";import"./useControlledHostValueProps-BxfqBB9J.js";import"./FieldDescription-BqudxJ-b.js";import"./TextField-DFKlupdW.js";import"./FieldError-CYd-7Lc_.js";import"./Form-C6AVvH4S.js";import"./Group-CjauqOEv.js";import"./Input-CDjrJnAd.js";import"./useTextField-DKwOo1j6.js";import"./useFormReset-C6M9OYlp.js";import"./useFormValidation-nso2YHkv.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-5S7f5h6L.js";import"./AlertIcon-CfXFBmoz.js";import"./LoadingSpinner-CaJGFcVk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-cgxxNusA.js";import"./ContextMenuSection-BzeJokDv.js";import"./Dialog-BsJqG9mx.js";import"./Collection-C8pnnMLO.js";import"./SelectionIndicator-C1UYqe1w.js";import"./SelectionManager-jyyo19U7.js";import"./useEvent-CDJhLR4c.js";import"./useCollator-CKG6FCAG.js";import"./FocusScope-yn2ZelXu.js";import"./VisuallyHidden-DwReVjRm.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
