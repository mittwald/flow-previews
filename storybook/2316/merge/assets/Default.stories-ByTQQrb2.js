import{j as r,r as f}from"./iframe-BWSm23JV.js";import{M as o}from"./MarkdownEditor-CnZpDucE.js";import{L as R}from"./Label-T9tt80_8.js";import{F as b}from"./FieldError-DNnGmqvO.js";import{B as z}from"./Button-B45r898z.js";import{S as x}from"./Section-DgtxUa5M.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CR0cPlVS.js";import"./CodeBlock-CxtZSWFa.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CdQpPtB0.js";import"./IconWarning-R37DsKRA.js";import"./flowComponent-JjUcob8a.js";import"./index-dkn6ScVQ.js";import"./index-D0YiHBOl.js";import"./remote-DcEXMbRM.js";import"./Tooltip-D4bfE97s.js";import"./utils-Dla7ZNEN.js";import"./OverlayArrow-Lv31M_SN.js";import"./useFocus-CrlSoDhl.js";import"./ProgressBar-CVcTQ1yy.js";import"./Label--12nIVsO.js";import"./Hidden-C-tiV80t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C6wIzqCz.js";import"./context-4oRtfVxK.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CI0bGTjl.js";import"./useControlledState-BdTYoDdO.js";import"./useFocusable-7cwTszGB.js";import"./react-children-utilities-C1v7HlKC.js";import"./Action-cxW9JZWQ.js";import"./context-DzxYIN56.js";import"./useStatic-B14v8lYB.js";import"./browser-S_Q3Hufb.js";import"./getActionGroupSlot-BXCkrZKT.js";import"./dynamic-WPTM_TAt.js";import"./useLocalizedStringFormatter-BKZxLutv.js";import"./Heading-0Lq3KVQb.js";import"./Heading-Cs-78oPS.js";import"./RSPContexts--whDujQs.js";import"./InlineCode-qFuRdcye.js";import"./Link-Ds_JHS0k.js";import"./usePress-C_E4YsZw.js";import"./Separator-UMjzNHKz.js";import"./Separator-7FCd2LVI.js";import"./CollectionBuilder-CIbQ3PZQ.js";import"./Text-BaJ5HEnd.js";import"./EmulatedBoldText-Bqi8zNtS.js";import"./Text-DreghWw5.js";import"./TextArea-xIzShWn2.js";import"./useFieldComponent-Cr8cfCaw.js";import"./useControlledHostValueProps-BuR1Cm_k.js";import"./FieldDescription-DaTX6mR9.js";import"./TextField-BPKHY_43.js";import"./FieldError-BA3GdU0H.js";import"./Form-DKTVNEPJ.js";import"./Group-BVyYtesD.js";import"./Input-Cdu3oBr0.js";import"./useTextField-C3k-FBa_.js";import"./useFormReset-DeveCpy2.js";import"./useFormValidation-C5ZFiF_6.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-b5oldDtH.js";import"./AlertIcon-CwdoSZHL.js";import"./LoadingSpinner-CWXG4qcN.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DWVSyZOa.js";import"./ContextMenuSection-DuWXEO2a.js";import"./Dialog-uisnl94N.js";import"./Collection-7HXUzyj9.js";import"./SelectionIndicator-2rIWK9av.js";import"./SelectionManager-CahjVjpE.js";import"./useEvent-BAiWPb0X.js";import"./useCollator-68O4Bddb.js";import"./FocusScope-C7G-5g6h.js";import"./VisuallyHidden-BTdnLv2k.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
