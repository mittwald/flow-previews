import{j as r,r as f}from"./iframe-C9fwoqx7.js";import{M as o}from"./MarkdownEditor-BbJL-kbv.js";import{L as R}from"./Label-DUuytyEq.js";import{F as b}from"./FieldError-v5ZAFD64.js";import{B as z}from"./Button-C7pOzOnK.js";import{S as x}from"./Section-kgMMKJSe.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-3cPydpbc.js";import"./CodeBlock-BIURvTv3.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BwZ0o6j1.js";import"./IconWarning-slnz76yl.js";import"./flowComponent-BaaAZbNJ.js";import"./index-DH86ko7l.js";import"./index-CbFgIt9G.js";import"./remote-B-ZPT6P_.js";import"./Tooltip-DFjii58-.js";import"./utils-Cx2L-iDs.js";import"./OverlayArrow-DDmkn5_8.js";import"./useFocus-CMKZ5vES.js";import"./ProgressBar-Dby2U7oR.js";import"./Label-CbDOwA25.js";import"./Hidden-CVIEiZ4o.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BNdvaiV7.js";import"./context-C2ecxi5G.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-s7_3pCWo.js";import"./useControlledState-BJuMvqvK.js";import"./useFocusable-CQiYog1P.js";import"./react-children-utilities-BvqDOyMf.js";import"./ActionBatch-CR9CogXJ.js";import"./useOverlayController-CqYUXVnh.js";import"./useStatic-9-ugXzKa.js";import"./browser-B4JTTu9h.js";import"./getActionGroupSlot-CBhaOaw2.js";import"./dynamic-CY0EsCod.js";import"./useLocalizedStringFormatter-G4KNW0M0.js";import"./Heading-XseMYyRS.js";import"./Heading-eUAAoI_I.js";import"./RSPContexts-mF4XBTs4.js";import"./InlineCode-DE8iKGwG.js";import"./Link-D5CGaOxT.js";import"./usePress-tgKXO9PL.js";import"./Separator-JuxInPY1.js";import"./Separator-ykHU2h0d.js";import"./CollectionBuilder-ta_UQL8r.js";import"./Text-D7jvp7G5.js";import"./EmulatedBoldText-CtQh5tnB.js";import"./Text-xqSfQxLT.js";import"./TextArea-Dvo4UugQ.js";import"./useFieldComponent-HwWxBPXP.js";import"./useControlledHostValueProps-BHcv3dRP.js";import"./FieldDescription-DltXYTvv.js";import"./TextField-BwNjHd4l.js";import"./FieldError-CEVb6xPQ.js";import"./Form-Dcg-_ctE.js";import"./Group-BetC_vI7.js";import"./Input-DtMnFP30.js";import"./useTextField-B1VR3mtO.js";import"./useFormReset-Bm_Lqolg.js";import"./useFormValidation-B19EocOE.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-GfFdH1ck.js";import"./AlertIcon-Bz6wfr4x.js";import"./LoadingSpinner-BWPVzhoG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DDn45mdd.js";import"./ContextMenuSection-7efUiUyi.js";import"./Dialog-yhzZwH_k.js";import"./Collection-C29JJn0j.js";import"./SelectionIndicator-nEc_xgxs.js";import"./SelectionManager-D2Ty-b9W.js";import"./useEvent-bSDrPC6p.js";import"./useCollator-CTWpXcx6.js";import"./FocusScope-Ci8EWXmX.js";import"./VisuallyHidden-1IKUNS-e.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
