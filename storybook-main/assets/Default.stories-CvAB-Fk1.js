import{j as r,r as f}from"./iframe-DFKQ2QsC.js";import{M as o}from"./MarkdownEditor-LTBx6rJw.js";import{L as R}from"./Label-DluzxSj2.js";import{F as b}from"./FieldError-DdERfCze.js";import{B as z}from"./Button-CumhvKwr.js";import{S as x}from"./Section-B7sZ2fly.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-B2nMiV4s.js";import"./CodeBlock-CkQDrcOs.js";import"./clsx-B-dksMZM.js";import"./CopyButton-KmAhLnmG.js";import"./IconWarning-BuA9AHid.js";import"./flowComponent-BmrvfVYW.js";import"./index-BqwthJp6.js";import"./index-BLTW5Tcp.js";import"./remote-BP8uJVcU.js";import"./Tooltip-bTpc3hQe.js";import"./utils-BJXdD5he.js";import"./OverlayArrow-D6jpYtlx.js";import"./useFocus-BuPH9-PX.js";import"./ProgressBar-DQlWH-Q4.js";import"./Label-ClB4vZMJ.js";import"./Hidden-RLwivX-P.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CurstbwI.js";import"./context-m8OE0ddO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Dltr6KPm.js";import"./useControlledState-DUrZ8j4h.js";import"./useFocusable-C6PlbLtm.js";import"./react-children-utilities-q3_e5KMf.js";import"./Action-C10g_G2S.js";import"./context-DCw83PuI.js";import"./useStatic-BfD-d5xb.js";import"./browser-C3pjfYL0.js";import"./getActionGroupSlot-FEsE5GBK.js";import"./dynamic-8YXtFeDo.js";import"./useLocalizedStringFormatter-Dbflc2pw.js";import"./Heading-DbtDsfGc.js";import"./Heading-DOKJ2uYX.js";import"./RSPContexts-ta7dPUPH.js";import"./InlineCode-CblgVW-G.js";import"./Link-D6w5LeM-.js";import"./usePress-CE-sEEB4.js";import"./Separator-Bddsz9Mr.js";import"./Separator-VmOMLBSn.js";import"./CollectionBuilder-DCYsymNm.js";import"./Text-BEPoPMFj.js";import"./EmulatedBoldText-CZthuZwX.js";import"./Text-D27_pVCF.js";import"./TextArea-CUvekjsg.js";import"./useFieldComponent-R5E6D8Ic.js";import"./useControlledHostValueProps-BODmqCgi.js";import"./FieldDescription-DOCm5Umg.js";import"./TextField-wg5tZKN2.js";import"./FieldError-Bmf3SAas.js";import"./Form-DKz1zkHn.js";import"./Group-BbkN3tYf.js";import"./Input-9YEFu8mh.js";import"./useTextField-DC60nVA8.js";import"./useFormReset-DwR8gwPw.js";import"./useFormValidation-BX6OQ_jJ.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BC9iPezU.js";import"./AlertIcon-D5_dS1m5.js";import"./LoadingSpinner-DwolGT18.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DBkz1b5H.js";import"./ContextMenuSection-DFA9uj7i.js";import"./Dialog-BtwdVLzC.js";import"./Collection-C9L-nPBS.js";import"./SelectionIndicator-BFMZIIpU.js";import"./SelectionManager-6OiS_y3h.js";import"./useEvent-my0xaAeI.js";import"./useCollator-CO4w-iZj.js";import"./FocusScope-B8-7lMpW.js";import"./VisuallyHidden-CKDTSDk1.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
