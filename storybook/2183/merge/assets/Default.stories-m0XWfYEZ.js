import{j as r,r as f}from"./iframe-BmKAGSU1.js";import{M as o}from"./MarkdownEditor-BPaM8x2S.js";import{L as R}from"./Label-8kdX7ehW.js";import{F as b}from"./FieldError-DTx5qYoC.js";import{B as z}from"./Button-LvEI1uQm.js";import{S as x}from"./Section-Bl2UAmSX.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CPTPdOYR.js";import"./CodeBlock-DkGOnbIw.js";import"./clsx-B-dksMZM.js";import"./CopyButton-PvxYmxNW.js";import"./IconWarning-imbji-Kz.js";import"./flowComponent-GoF2pcsM.js";import"./index-Dy22JExn.js";import"./index-D3Sif_iZ.js";import"./remote-DfYMV5Tv.js";import"./Tooltip-EJoNqamZ.js";import"./utils-g5fx1pEf.js";import"./OverlayArrow-B9cbB1QQ.js";import"./useFocus-BW6_4Fc3.js";import"./ProgressBar-Cladi115.js";import"./Label-CQLEPw36.js";import"./Hidden-tXnJ8R5f.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-gR0_832q.js";import"./context-CxuOL-5x.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-TVCSEq66.js";import"./useFocusable-BP0ye7iu.js";import"./useFocusRing-DBug8spT.js";import"./react-children-utilities-d-UDWx5r.js";import"./Action-DOyYDw1l.js";import"./context-B4Nnt3qw.js";import"./useStatic-7Dbn5SyA.js";import"./browser-SWtWUPW6.js";import"./getActionGroupSlot-DaWwHLLH.js";import"./dynamic-4IbUBFl1.js";import"./useLocalizedStringFormatter-wjV9WHNF.js";import"./Heading-DYtAXBUQ.js";import"./Heading-Daf9Kt-W.js";import"./RSPContexts-BuF39hXg.js";import"./InlineCode-Buim-RLR.js";import"./Link-LBnBpt3Y.js";import"./usePress-JhlebSO6.js";import"./Separator-sKOA-COX.js";import"./Separator-D_YsxVNC.js";import"./CollectionBuilder-CAguRQCp.js";import"./Text-C9Y-BRqi.js";import"./EmulatedBoldText-DkbId6Zn.js";import"./Text-CWVum_CA.js";import"./TextArea-D3SiimOJ.js";import"./TextFieldBase-8RV6L25e.js";import"./FieldDescription-C007Rd_u.js";import"./useFieldComponent-DWe8fYc4.js";import"./TextField-C0OsEkr2.js";import"./FieldError-DtXh5FLR.js";import"./Form-B3BOXvjK.js";import"./Group-zAJTMebT.js";import"./Input-aV6cWdAR.js";import"./useTextField-DiMLAs4x.js";import"./useFormReset-DXCfJDY-.js";import"./useFormValidation-BWMCHu6j.js";import"./useControlledHostValueProps-ByJyWAjG.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-ZBVW6cS6.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C5vvsijg.js";import"./ContextMenuSection-ChJFKHwG.js";import"./Dialog-DjPgQ4DH.js";import"./Collection-DGvFsPwb.js";import"./SelectionIndicator-tnK26Qqc.js";import"./SelectionManager-ohd2qk3I.js";import"./useEvent-B00NxYME.js";import"./useCollator-3U7lxjuh.js";import"./FocusScope-ByKxlNca.js";import"./VisuallyHidden-Db2xRfqF.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Kr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Kr as __namedExportsOrder,Jr as default};
