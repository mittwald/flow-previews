import{j as r,r as f}from"./iframe-S6a6IBGW.js";import{M as o}from"./MarkdownEditor-Dv727wzW.js";import{L as R}from"./Label-caCQNiXZ.js";import{F as b}from"./FieldError-BcgoZm7g.js";import{B as z}from"./Button-B33IEcV3.js";import{S as x}from"./Section-C9-cQ6KY.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C5-WTo_T.js";import"./CodeBlock-DytQ0pi7.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CcHe5l9w.js";import"./IconWarning-D0GzEl3K.js";import"./flowComponent-BLLiPPDy.js";import"./index-l1wA_Qpp.js";import"./index-C8QsAo4A.js";import"./remote-CCjzztUh.js";import"./Tooltip-WRjlUrTr.js";import"./utils-B8ercvf4.js";import"./OverlayArrow-B-DFCcpR.js";import"./useFocus--oJxMCZo.js";import"./ProgressBar-f-zsGPPU.js";import"./Label-DxhkDnS7.js";import"./Hidden-CVYoRnxj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-I1naabyM.js";import"./context-CXquv49b.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BHa0sYDq.js";import"./useFocusable-DTyt-kbS.js";import"./useFocusRing-pCPuJRtg.js";import"./react-children-utilities-DgTbs8DB.js";import"./Action-D3nLwb6j.js";import"./context-DRdj7qWz.js";import"./useStatic-DJ0VynuZ.js";import"./browser-C6w_OiT9.js";import"./getActionGroupSlot-13Cq_BqQ.js";import"./dynamic-wFxxwS8T.js";import"./useLocalizedStringFormatter-DpHStB2_.js";import"./Heading-OEjBXIpA.js";import"./Heading-B4TNl6d1.js";import"./RSPContexts-DL3JmftS.js";import"./InlineCode-C1WTyhrk.js";import"./Link-D-URpzvg.js";import"./usePress-BUR3MtQf.js";import"./Separator-BY1MGa_L.js";import"./Separator-CvanrP9u.js";import"./CollectionBuilder-Cv1bZrpu.js";import"./Text-CLecf1p6.js";import"./EmulatedBoldText-PjFBcLAJ.js";import"./Text-XPHoRcaC.js";import"./TextArea-BasG2_LL.js";import"./TextFieldBase-CVkm9PCu.js";import"./FieldDescription-BbDHCmf8.js";import"./useFieldComponent-C7YS4lAg.js";import"./TextField-E7LLUMXU.js";import"./FieldError-BRuAmhML.js";import"./Form-n7Om2L0f.js";import"./Group-_IqKYLf1.js";import"./Input-BCdJg_3v.js";import"./useTextField-BpiGn0fy.js";import"./useFormReset-DK3gdO9Q.js";import"./useFormValidation-DHFSk2Ol.js";import"./useControlledHostValueProps-CCflrE_G.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CIQFF9OC.js";import"./AlertIcon-DgqrgpKu.js";import"./LoadingSpinner-ngl346gH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BnRrl5N8.js";import"./ContextMenuSection-CXnCaYUl.js";import"./Dialog-C_QuIxo5.js";import"./Collection-BbaIJWHd.js";import"./SelectionIndicator-DSvv5afS.js";import"./SelectionManager-Bk0PvS8a.js";import"./useEvent--nB5Gcy3.js";import"./useCollator-DUo0f6hW.js";import"./FocusScope-BEprXHob.js";import"./VisuallyHidden-BN0xrgav.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
