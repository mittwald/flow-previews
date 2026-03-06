import{j as r,r as f}from"./iframe-CCG9iH9q.js";import{M as o}from"./MarkdownEditor-BTk_OeNV.js";import{L as R}from"./Label-ZsZ9_LuX.js";import{F as b}from"./FieldError-C6WCZxmP.js";import{B as z}from"./Button-DszeRQWk.js";import{S as x}from"./Section-DbhTGHPe.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-_GU9Tt7e.js";import"./CodeBlock-C8uxu__z.js";import"./clsx-B-dksMZM.js";import"./CopyButton-otI5Rga2.js";import"./IconWarning-CKuAFgzi.js";import"./flowComponent-DtMp-09u.js";import"./index-rcZGBqb0.js";import"./index-DO8RY2JU.js";import"./remote-BNVNDlip.js";import"./Tooltip-DcbpHxFv.js";import"./utils-BqjYSsY0.js";import"./OverlayArrow-O5F9zlGE.js";import"./useFocus-DQtiJNjW.js";import"./ProgressBar-NeUI6tVT.js";import"./Label-Bqehi3yR.js";import"./Hidden-DP_c1-uJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWkbOtE9.js";import"./context-BOE3Zx9s.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DEew3vp8.js";import"./useControlledState-DQCduMNG.js";import"./useFocusable-C9iBP5e4.js";import"./react-children-utilities-0W3aq1f7.js";import"./ActionBatch-BwDlid4r.js";import"./useOverlayController-B8ExGaeg.js";import"./useStatic-DZaf9Eli.js";import"./browser-DlPLk6Tx.js";import"./getActionGroupSlot-ZV4GNxDq.js";import"./dynamic-DVtvH1qO.js";import"./useLocalizedStringFormatter-BayblNF2.js";import"./Heading-DiIAAbeS.js";import"./Heading-DVHr5WNM.js";import"./RSPContexts-Cj7-Wn-7.js";import"./InlineCode-qHj-ECST.js";import"./Link-TVNorRgK.js";import"./usePress-C9nCYq1D.js";import"./Separator-CiDYF3ZY.js";import"./Separator-IezdCtOl.js";import"./CollectionBuilder--dOyJv1i.js";import"./Text-CqiRKP9V.js";import"./EmulatedBoldText-DGQ67tbz.js";import"./Text-CsZp0s5y.js";import"./TextArea-Clo9__kx.js";import"./useFieldComponent-BO1aRG8J.js";import"./useControlledHostValueProps-C1I4WMgS.js";import"./FieldDescription-CUhsst8_.js";import"./TextField-CvZXl8ia.js";import"./FieldError-IbwLA4qq.js";import"./Form-CaeCkx3f.js";import"./Group-BkubaCeK.js";import"./Input-mPx5hz5Z.js";import"./useTextField-CqMkN_4n.js";import"./useFormReset-DOloisqU.js";import"./useFormValidation-Jbp24I-0.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BBv4eV07.js";import"./AlertIcon-BWG972Pn.js";import"./LoadingSpinner-GybBfiLr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BmDLEeLi.js";import"./ContextMenuSection-DkVhFe3O.js";import"./Dialog-Bvzkt_Dq.js";import"./Collection-BppDt4cQ.js";import"./SelectionIndicator-CG-R7p16.js";import"./SelectionManager-BQan4uct.js";import"./useEvent-CqAdQvXR.js";import"./useCollator-C1I9ImG_.js";import"./FocusScope-CGp51FRM.js";import"./VisuallyHidden-B8BDvwZm.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
