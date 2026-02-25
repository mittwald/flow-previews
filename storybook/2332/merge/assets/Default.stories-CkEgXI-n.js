import{j as r,r as f}from"./iframe-CFTqgbub.js";import{M as o}from"./MarkdownEditor-BlouWH3r.js";import{L as R}from"./Label-GwGXhrLq.js";import{F as b}from"./FieldError-CYjuAiBI.js";import{B as z}from"./Button-DYo4uywI.js";import{S as x}from"./Section-DUGYD1S5.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CKKt9mSh.js";import"./CodeBlock-DLv75mhK.js";import"./clsx-B-dksMZM.js";import"./CopyButton-yKMY0F1w.js";import"./IconWarning-BmBcYBZE.js";import"./flowComponent-CsvuKB41.js";import"./index-CCt8Te2G.js";import"./index-B_-FfeBA.js";import"./remote-BlniWp0j.js";import"./Tooltip-DJu3FJXh.js";import"./utils-B4tY5r2S.js";import"./OverlayArrow-5aYILyU8.js";import"./useFocus-BOeBkWuf.js";import"./ProgressBar-Du8sUV-4.js";import"./Label-zjHNWfOJ.js";import"./Hidden-0AMuGqxl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BdtjZifw.js";import"./context-DrUKb0cF.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Ck0KvK0z.js";import"./useControlledState-SUsbXgrM.js";import"./useFocusable-Dm8xzBfk.js";import"./react-children-utilities-BMGswwLc.js";import"./ActionBatch-D8GPDYy5.js";import"./useOverlayController-DR05g40f.js";import"./useStatic-BFPJMVns.js";import"./browser-DzYF9AGw.js";import"./getActionGroupSlot-B6jQShKX.js";import"./dynamic-GrVhUXuF.js";import"./useLocalizedStringFormatter-DeSq1KSa.js";import"./Heading-439pSAMO.js";import"./Heading-D2J3_q6l.js";import"./RSPContexts-CFURB7yy.js";import"./InlineCode-BuybqPWs.js";import"./Link-J9e9j8q_.js";import"./usePress-DIXZ9Ppe.js";import"./Separator-C6ThB_CZ.js";import"./Separator-BbFY4QIS.js";import"./CollectionBuilder-B8mkHCYD.js";import"./Text-DGb4Yj-N.js";import"./EmulatedBoldText-Dyut30RV.js";import"./Text-Djzy7Vo0.js";import"./TextArea-zFcqHDEl.js";import"./useFieldComponent-CbaMz5aY.js";import"./useControlledHostValueProps-BuQGKxFM.js";import"./FieldDescription-WAwKPsRK.js";import"./TextField-CeJo-LsO.js";import"./FieldError-DNv3qA2U.js";import"./Form-XRNm8_rd.js";import"./Group-DV5U8v9N.js";import"./Input-7Pv0YxOe.js";import"./useTextField-CcrA4Fls.js";import"./useFormReset-BbhAN2Ls.js";import"./useFormValidation-BPzjnfej.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CTc4Vkoh.js";import"./AlertIcon-DR1EaW6b.js";import"./LoadingSpinner-kIQpS8IZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BKBgz7xZ.js";import"./ContextMenuSection-C0W18m8x.js";import"./Dialog-BnZ8dnOj.js";import"./Collection-XFdgj0zz.js";import"./SelectionIndicator-ex17VsHG.js";import"./SelectionManager-BQIYg6Kc.js";import"./useEvent-Bix3gDIS.js";import"./useCollator-BwS2zx0_.js";import"./FocusScope-BtEv7ihW.js";import"./VisuallyHidden-CB7azLHp.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
