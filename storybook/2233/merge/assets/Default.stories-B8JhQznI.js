import{j as r,r as f}from"./iframe-BeQWUZkN.js";import{M as o}from"./MarkdownEditor-Dhwvguwk.js";import{L as R}from"./Label-B2Ym8roL.js";import{F as b}from"./FieldError-BcvtKrk-.js";import{B as z}from"./Button-CGVqLO1a.js";import{S as x}from"./Section-BPuqexdG.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CLA7i1bo.js";import"./CodeBlock-f4ve0VDW.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BnQaG9r9.js";import"./IconWarning-BINGtqrd.js";import"./flowComponent-C5zRFTyN.js";import"./index-1B1ExeLK.js";import"./index-C7QqpnOV.js";import"./remote-BjhB0wla.js";import"./Tooltip-DmO9pGJl.js";import"./utils-DahaGO1Z.js";import"./OverlayArrow-CQhuNf01.js";import"./useFocus-B8WX1wz4.js";import"./ProgressBar-DrS-kVcX.js";import"./Label-CrwWIO9R.js";import"./Hidden-CGYC7LW_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bej11zP_.js";import"./context-BW8umLlU.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CVKu2BVA.js";import"./useFocusable-5ZG33T1u.js";import"./useFocusRing-plkuiMUL.js";import"./react-children-utilities-BkG6wfo9.js";import"./Action-E4S27TIO.js";import"./context-C8zS221N.js";import"./useStatic-H-gT8Tnv.js";import"./browser-CC8M21FF.js";import"./getActionGroupSlot-Mt7aWTck.js";import"./dynamic-CY8Jd6pV.js";import"./useLocalizedStringFormatter-BinbCyOY.js";import"./Heading-Em1n1mkD.js";import"./Heading-DqQ4fdlj.js";import"./RSPContexts-3R6axPUC.js";import"./InlineCode-BnfiiJNg.js";import"./Link-Cw7koCy6.js";import"./usePress-DC5PU-Mt.js";import"./Separator-B1y-9T0j.js";import"./Separator-jKx-ftTc.js";import"./CollectionBuilder-8XmSCxqz.js";import"./Text-DBLOUBNs.js";import"./EmulatedBoldText-Ds4ybabF.js";import"./Text-oRZAcHnn.js";import"./TextArea-CUGqU4Y_.js";import"./TextFieldBase-fscEfOId.js";import"./FieldDescription-DmDXfwSl.js";import"./useFieldComponent-Df_LAOUO.js";import"./TextField-ZmZv6OFU.js";import"./FieldError-D83BnXEF.js";import"./Form-Dldpy16s.js";import"./Group-tR5aTCJO.js";import"./Input-DQvG8v1g.js";import"./useTextField-BfYqTdEi.js";import"./useFormReset-C8CI0grL.js";import"./useFormValidation-enT2NaDW.js";import"./useControlledHostValueProps-tRPPDpMf.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-zAJvVLJZ.js";import"./AlertIcon-Bvyhnsbm.js";import"./LoadingSpinner-BzbdJJnJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CL6J7LkF.js";import"./ContextMenuSection-of5hagQh.js";import"./Dialog-BcNKaqXQ.js";import"./Collection-BT4mtoIi.js";import"./SelectionIndicator-CpkhsEOb.js";import"./SelectionManager-g_157G_P.js";import"./useEvent-D73bdPYV.js";import"./useCollator-BitTSQ9h.js";import"./FocusScope-BFFCHkyv.js";import"./VisuallyHidden-Dai9OIPt.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
