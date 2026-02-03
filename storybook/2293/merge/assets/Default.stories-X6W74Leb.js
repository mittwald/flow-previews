import{j as r,r as f}from"./iframe-CZIIjdGx.js";import{M as o}from"./MarkdownEditor-Dhzwco7T.js";import{L as R}from"./Label-BCeZc6nh.js";import{F as b}from"./FieldError-BwbB6Ytj.js";import{B as z}from"./Button-ECMB5KMY.js";import{S as x}from"./Section-B_Dc3QaP.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CT4Qn970.js";import"./CodeBlock-DH9oEhtD.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CeGCaa0i.js";import"./IconWarning-CoTQUaDh.js";import"./flowComponent-fB-3SEHh.js";import"./index-BsTtmOW1.js";import"./index-7Gan3Sd3.js";import"./remote-BLk-VuSO.js";import"./Tooltip-57mD-1cw.js";import"./utils-CzlwFdSi.js";import"./OverlayArrow-PNzJR_LP.js";import"./useFocus-BLv7u4S3.js";import"./ProgressBar-DT5pCrN6.js";import"./Label-DuyHno6H.js";import"./Hidden-BdFAzqYk.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CmRl_D3U.js";import"./context-B5Owy1-_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CqWo6_om.js";import"./useControlledState-DqlM9bHJ.js";import"./useFocusable-deUO30SV.js";import"./react-children-utilities-BQJEDfAz.js";import"./Action-Bw6l21lc.js";import"./context-D5Js5cga.js";import"./useStatic-BkmFYiV8.js";import"./browser-Cl51s5Ql.js";import"./getActionGroupSlot-DTbiEWtg.js";import"./dynamic-gRVBa7iD.js";import"./useLocalizedStringFormatter-KKcnPxqh.js";import"./Heading-4cAYx9fy.js";import"./Heading-CVLd5xWO.js";import"./RSPContexts-BcZ6F9IB.js";import"./InlineCode-ChCUsTgO.js";import"./Link-BEFP1Tne.js";import"./usePress-DFDeIEOr.js";import"./Separator-Bc1I_v-P.js";import"./Separator-BolqqnXN.js";import"./CollectionBuilder-Bvr2YvjZ.js";import"./Text-B-NqQsb3.js";import"./EmulatedBoldText-BBfJQ4d1.js";import"./Text-B_tooMjG.js";import"./TextArea-AzS2KUOI.js";import"./TextFieldBase-BOjTSWlp.js";import"./FieldDescription-Boi3M1zl.js";import"./useFieldComponent-DWG920Yi.js";import"./TextField-DmMPP23W.js";import"./FieldError-Cm712Nbp.js";import"./Form-Dyc6bd1B.js";import"./Group-hqq--aRk.js";import"./Input-_8yUIV9x.js";import"./useTextField-BEkzEPOj.js";import"./useFormReset-DwvZDjIx.js";import"./useFormValidation-Bw0zMO4k.js";import"./useControlledHostValueProps-BaRrMsvJ.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-C2y0FN89.js";import"./AlertIcon-WrrDZg35.js";import"./LoadingSpinner-pfinSAIk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-NmLihlhr.js";import"./ContextMenuSection-BEfLxAcM.js";import"./Dialog-Cut31Nqj.js";import"./Collection-Bj-AJMsc.js";import"./SelectionIndicator-Ct_3iIN2.js";import"./SelectionManager-BubBwhwk.js";import"./useEvent-Q3wTfOgv.js";import"./useCollator-Bwo3lAGD.js";import"./FocusScope-Biunv2Bw.js";import"./VisuallyHidden-CZJGc0hQ.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
