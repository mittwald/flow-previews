import{j as r,r as f}from"./iframe-lb0QDBc2.js";import{M as o}from"./MarkdownEditor-BoYidYtt.js";import{L as R}from"./Label-DP_lb_cz.js";import{F as b}from"./FieldError-BAOq6bLD.js";import{B as z}from"./Button-juKgyftR.js";import{S as x}from"./Section-RCiCRE5k.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CrrNeM-9.js";import"./CodeBlock-Bs9yhAPR.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BYY3xU9E.js";import"./IconWarning-BeH6azjz.js";import"./flowComponent-CMLBvcrR.js";import"./index-B9b6xQ5S.js";import"./index-DLJvSM0l.js";import"./remote-HK64Xy28.js";import"./Tooltip-DbJSuJ2r.js";import"./utils-r2dAqIcX.js";import"./OverlayArrow-CyZLGayb.js";import"./useFocus-B48NrLMU.js";import"./ProgressBar-BWiLeXEa.js";import"./Label-BdYNaN4j.js";import"./Hidden-DFHOpifw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DBnvm8X4.js";import"./context-DKVhGweU.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-J18h0CnC.js";import"./useControlledState-BS6Up44I.js";import"./useFocusable-BRnBN5zK.js";import"./react-children-utilities-CI2FR3kn.js";import"./Action-4cKKicYt.js";import"./context-C_yF8yzC.js";import"./useStatic-C9kOien4.js";import"./browser-D6xfswL2.js";import"./getActionGroupSlot-CYlSlA5g.js";import"./dynamic-oimbFEy9.js";import"./useLocalizedStringFormatter-DaeZ3M4_.js";import"./Heading-Be2qz7j6.js";import"./Heading-BMdu11KH.js";import"./RSPContexts-YTE8c3lP.js";import"./InlineCode-Bnjz0Kxu.js";import"./Link-D3US6r6B.js";import"./usePress-CgYa4G9K.js";import"./Separator-C_Krj0qm.js";import"./Separator-dugLvl-c.js";import"./CollectionBuilder-C0jSlJnc.js";import"./Text-Bvo-yLEA.js";import"./EmulatedBoldText-CqgiFE-g.js";import"./Text-DV3fQztC.js";import"./TextArea-C-5XZku7.js";import"./TextFieldBase-Fxeb6rCc.js";import"./FieldDescription-D5GA7Uzb.js";import"./useFieldComponent-DzHSa8uO.js";import"./TextField-DJs8gWWO.js";import"./FieldError-dmorJJtq.js";import"./Form-DtivvrEr.js";import"./Group-x-kTcwBS.js";import"./Input-CDuEdvXx.js";import"./useTextField-CV_ELvki.js";import"./useFormReset-BIwT2nL6.js";import"./useFormValidation-M5q2KkbC.js";import"./useControlledHostValueProps-DOsneGRp.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DpQCB0Tk.js";import"./AlertIcon-DWhGd_Tx.js";import"./LoadingSpinner-D-Hn99XA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D3ym-GoV.js";import"./ContextMenuSection-BhdaIGz3.js";import"./Dialog-21JmjHkj.js";import"./Collection-qMjf8izv.js";import"./SelectionIndicator-DyUDH3aS.js";import"./SelectionManager-DxNkh6e5.js";import"./useEvent-DYKWYeYn.js";import"./useCollator-BRhgG2J7.js";import"./FocusScope-BL38dLR2.js";import"./VisuallyHidden-k_Pf5ETO.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
