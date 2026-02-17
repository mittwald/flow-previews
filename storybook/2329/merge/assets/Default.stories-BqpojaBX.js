import{j as r,r as f}from"./iframe-DU1OTSEW.js";import{M as o}from"./MarkdownEditor-Bld3BfqD.js";import{L as R}from"./Label-BFsMAETu.js";import{F as b}from"./FieldError-lAQ6GllT.js";import{B as z}from"./Button-C02FBbwW.js";import{S as x}from"./Section-DIfoCaa5.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-COlVyRc-.js";import"./CodeBlock-BGDBLrCr.js";import"./clsx-B-dksMZM.js";import"./CopyButton-AEBiyg0_.js";import"./IconWarning-BOLd-bsg.js";import"./flowComponent-C_TICRXM.js";import"./index-nIZOvY-k.js";import"./index-Ben_k6_D.js";import"./remote-C4J6eDzq.js";import"./Tooltip-D4OeMkzp.js";import"./utils-Dj7KEBV3.js";import"./OverlayArrow-Bh5zDL_J.js";import"./useFocus-u6Gylu9g.js";import"./ProgressBar-ZiPbwj7h.js";import"./Label-BJoTK4AB.js";import"./Hidden-UY4SCaak.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B3DB9qnR.js";import"./context-MHXBCA58.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-L_sy4AuI.js";import"./useControlledState-C4NYpY3o.js";import"./useFocusable-XjJjjkQd.js";import"./react-children-utilities-DEI8WjO8.js";import"./ActionBatch-BeODW9YZ.js";import"./useOverlayController-CN_E_UXR.js";import"./useStatic-B4QbuKZS.js";import"./browser-B-EQy8Zd.js";import"./getActionGroupSlot-DUS5YLbg.js";import"./dynamic-BTXPuCk3.js";import"./useLocalizedStringFormatter-npOcqoB_.js";import"./Heading-Cl160jiD.js";import"./Heading-D1wlHBOV.js";import"./RSPContexts-CELva0rI.js";import"./InlineCode-UYg5tPBl.js";import"./Link-qcDoNqE3.js";import"./usePress-DCIqPyrL.js";import"./Separator-C7Oko6mI.js";import"./Separator-ezkSicQA.js";import"./CollectionBuilder-D9jRpqx4.js";import"./Text-BlwSaqXM.js";import"./EmulatedBoldText-IXPdWydI.js";import"./Text-iBzBCpEi.js";import"./TextArea-CEmdTgwU.js";import"./useFieldComponent-DAmXFBUF.js";import"./useControlledHostValueProps-FQAX2oVh.js";import"./FieldDescription-BeeLUpCG.js";import"./TextField-Dvb4Cwl8.js";import"./FieldError-C-1FXxCh.js";import"./Form-DFVlj26J.js";import"./Group-DFJoPzzo.js";import"./Input-BRq7uXwq.js";import"./useTextField-BJo9NeBV.js";import"./useFormReset-B6aj4tVR.js";import"./useFormValidation-Bnl6yMKM.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DRGtE0Z7.js";import"./AlertIcon-_4be_GIR.js";import"./LoadingSpinner-7mWb9Q3Q.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-njBxl16I.js";import"./ContextMenuSection-B26kJYav.js";import"./Dialog-rIHNVDTB.js";import"./Collection-BgHGMK_M.js";import"./SelectionIndicator-BBXAzCHo.js";import"./SelectionManager-BMrQ3jem.js";import"./useEvent-BUR3uY3V.js";import"./useCollator-BcGn8FjN.js";import"./FocusScope-BR4Z_k_s.js";import"./VisuallyHidden---d_BDnt.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
