import{j as r,r as f}from"./iframe-Pk_Kk4JL.js";import{M as o}from"./MarkdownEditor-CnjO7Oe6.js";import{L as R}from"./Label-pFLu8ztF.js";import{F as b}from"./FieldError-2o2dfDUN.js";import{B as z}from"./Button-D9QX6l1e.js";import{S as x}from"./Section-CNK16UAG.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-WaRoWwj0.js";import"./CodeBlock-14d_BesI.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DS8D74q_.js";import"./IconWarning-BZbEOivs.js";import"./flowComponent-c6eRnhhg.js";import"./index-Cry2UgUa.js";import"./index-BO3AnCjb.js";import"./remote-jZTk_Znj.js";import"./Tooltip-rqrIKaj0.js";import"./utils-CLxMEgR2.js";import"./OverlayArrow-CX4Z7_7Y.js";import"./useFocus-CG8bKOp6.js";import"./ProgressBar-R9Q052Y1.js";import"./Label-BhzG_WzN.js";import"./Hidden-D3BnJIdN.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C5txBCfY.js";import"./context-CrHSUJ76.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-48Ld73MP.js";import"./useFocusable-6mL9jMN5.js";import"./useFocusRing-Cf40KqTj.js";import"./react-children-utilities-BUDAS9Qh.js";import"./Action-C8SSnKxx.js";import"./context-DgSiNkYd.js";import"./useStatic-i-ZCX3ob.js";import"./browser-DxGxcnNA.js";import"./getActionGroupSlot-CPzpUO6W.js";import"./dynamic-I4mA0X6x.js";import"./useLocalizedStringFormatter-DWczizNw.js";import"./Heading-wNCcNm7o.js";import"./Heading-CHcXaZb2.js";import"./RSPContexts-DW-Mep96.js";import"./InlineCode-BUnaNo8T.js";import"./Link-1JSdLWw6.js";import"./usePress-BhJiygMU.js";import"./Separator-Hj1gK_Fb.js";import"./Separator-BBzznqX8.js";import"./CollectionBuilder-DoPbpSH9.js";import"./Text-yAUoHBmv.js";import"./EmulatedBoldText-B0MH6cxw.js";import"./Text-cuBcImQE.js";import"./TextArea-W8SOSL6n.js";import"./TextFieldBase-B7K9qJ9e.js";import"./FieldDescription-BvDLT_Hd.js";import"./useFieldComponent-T3_INYSJ.js";import"./TextField-DdW_yhS8.js";import"./FieldError-Cm-TOrp1.js";import"./Form-kujN0LYD.js";import"./Group-vGwN-WPg.js";import"./Input-DA7G6uHH.js";import"./useTextField-B9WpeGti.js";import"./useFormReset-bAhSNWNb.js";import"./useFormValidation-BDoYoAKM.js";import"./useControlledHostValueProps-Df86iKH2.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B5n-OsOE.js";import"./AlertIcon-BQAdHRLg.js";import"./LoadingSpinner-DPjJtv8A.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CmNC7e_S.js";import"./ContextMenuSection-C_1sxa8j.js";import"./Dialog-hqEaC_v2.js";import"./Collection-BHxA-DrM.js";import"./SelectionIndicator-yei3WI6a.js";import"./SelectionManager-BkRtV5Co.js";import"./useEvent-CPz9WXw8.js";import"./useCollator-Doi6oCed.js";import"./FocusScope-CxdKQmWN.js";import"./VisuallyHidden-DaiW9JEZ.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
