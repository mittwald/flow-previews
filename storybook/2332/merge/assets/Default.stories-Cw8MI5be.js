import{j as r,r as f}from"./iframe-5GKEjLm3.js";import{M as o}from"./MarkdownEditor-Cd4or2sH.js";import{L as R}from"./Label-BiEVFhkG.js";import{F as b}from"./FieldError-qE1en1IM.js";import{B as z}from"./Button-DbzE4WUt.js";import{S as x}from"./Section-130PRHAT.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CppvvigT.js";import"./CodeBlock-yOLDzZQk.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B8kbtnHp.js";import"./IconWarning-B10RUVd-.js";import"./flowComponent-BrPxhm-E.js";import"./index-DZHRuSdS.js";import"./index-CxI-AdtT.js";import"./remote-DrqTcZe1.js";import"./Tooltip-Cwix1t3Y.js";import"./utils-DZdTZXxi.js";import"./OverlayArrow-C_Skf-4I.js";import"./useFocus-BEqaOfOz.js";import"./ProgressBar-CehyS7IW.js";import"./Label-CD-Ily5W.js";import"./Hidden-CVK_WTqz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-sguPTXZB.js";import"./context-CYoVNjzy.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CsUwZj84.js";import"./useControlledState-D9ovZV70.js";import"./useFocusable-BDWe4YTb.js";import"./react-children-utilities-mNvuquF3.js";import"./ActionBatch-C4EMIU3M.js";import"./useOverlayController-DTNq5pfb.js";import"./useStatic-BQSB_Jfu.js";import"./browser-DpyY6Jfh.js";import"./getActionGroupSlot-06aUfNYP.js";import"./dynamic-BSdZm6V5.js";import"./useLocalizedStringFormatter-foHAfgmM.js";import"./Heading-BfDqySHg.js";import"./Heading-kRLjhOcq.js";import"./RSPContexts-AhaMx3-_.js";import"./InlineCode-Cc5mhxem.js";import"./Link-jAKiSqkX.js";import"./usePress-CYa1OoRC.js";import"./Separator-C9kIXG1m.js";import"./Separator-BxdVDEg-.js";import"./CollectionBuilder-DAbTUazM.js";import"./Text-4Jq61r3V.js";import"./EmulatedBoldText-Dw9vtGzr.js";import"./Text-jTefV10v.js";import"./TextArea-BVh0pgDB.js";import"./useFieldComponent-B3twwSIL.js";import"./useControlledHostValueProps-CXgJdXNv.js";import"./FieldDescription-BBGoJLQx.js";import"./TextField-CDcpx15D.js";import"./FieldError-DNER0k2B.js";import"./Form-CkcBXY70.js";import"./Group-Gic7CvlE.js";import"./Input-VyCJjbfE.js";import"./useTextField-ByXQXWS6.js";import"./useFormReset-Bzn3Tj6K.js";import"./useFormValidation-Dje-UJVy.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BQlCz9t6.js";import"./AlertIcon-xcA2PG-d.js";import"./LoadingSpinner-Bp8vDBpW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CslHKHnR.js";import"./ContextMenuSection-BLAYEuJ8.js";import"./Dialog-BTalxjOJ.js";import"./Collection-DOmJuy3e.js";import"./SelectionIndicator-C_xwSetB.js";import"./SelectionManager-rbmArbuf.js";import"./useEvent-_LgPAmJ5.js";import"./useCollator-COkB7H3x.js";import"./FocusScope-BteWf5AP.js";import"./VisuallyHidden-BfZLOvo3.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
