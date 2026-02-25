import{j as r,r as f}from"./iframe-BoiTaxGN.js";import{M as o}from"./MarkdownEditor-6mokynga.js";import{L as R}from"./Label-DgN2b341.js";import{F as b}from"./FieldError-DjT7Sc36.js";import{B as z}from"./Button-MYsVPgLO.js";import{S as x}from"./Section-Cq-t_YW4.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C6vRPlxG.js";import"./CodeBlock-BszIWpk_.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CKTqW97m.js";import"./IconWarning-DctWBCm0.js";import"./flowComponent-5SfKf5nB.js";import"./index-CnTFVdv3.js";import"./index-B9o0n-vC.js";import"./remote-C4jG3DXh.js";import"./Tooltip-dXWkrauF.js";import"./utils-RetFhwyR.js";import"./OverlayArrow-vd9UrCyT.js";import"./useFocus-BSOUAoQt.js";import"./ProgressBar-L18yOCjI.js";import"./Label-eoW__4rU.js";import"./Hidden-BZRUsILE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8QgbILE.js";import"./context-hlBZKj-7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-VutGkHGx.js";import"./useControlledState-DJPWuI7p.js";import"./useFocusable-CNuWQ5Vu.js";import"./react-children-utilities-B8VoHMQu.js";import"./ActionBatch-D2Yqxa5D.js";import"./useOverlayController-BbkltkAX.js";import"./useStatic-bFyj34a0.js";import"./browser-zBSS86_h.js";import"./getActionGroupSlot-CkMRx6Vr.js";import"./dynamic-X8snMUB4.js";import"./useLocalizedStringFormatter-jQztqgXA.js";import"./Heading-9cwIlFFB.js";import"./Heading-BcC1Qw26.js";import"./RSPContexts-9T8dsftx.js";import"./InlineCode-DcdxCJ83.js";import"./Link-BXD_Kg0Z.js";import"./usePress-DoLCzapA.js";import"./Separator-CZWTx42T.js";import"./Separator-CUdWNTXS.js";import"./CollectionBuilder-7YZ1XDUD.js";import"./Text-ClfpXeTF.js";import"./EmulatedBoldText-vFeun45o.js";import"./Text-DnUg5-aR.js";import"./TextArea-BR4LP2hd.js";import"./useFieldComponent-DiiGd8t3.js";import"./useControlledHostValueProps-7MsuqVNT.js";import"./FieldDescription-Dh4VnfJe.js";import"./TextField-Dx67xHNQ.js";import"./FieldError-C1wD6V1t.js";import"./Form-BMda5et4.js";import"./Group-bhKD4yJJ.js";import"./Input-CHjKW2hG.js";import"./useTextField-DcVWSpBm.js";import"./useFormReset-DsmV2EC6.js";import"./useFormValidation-CX6eZKbg.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-aAUEFisb.js";import"./AlertIcon-B1VBridV.js";import"./LoadingSpinner-BBdroSRA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BZbFxF4O.js";import"./ContextMenuSection-CBBb0XeQ.js";import"./Dialog-BL8T3CnU.js";import"./Collection-BswXFc7F.js";import"./SelectionIndicator-BQPOHDPg.js";import"./SelectionManager-BSZzvdD0.js";import"./useEvent-CSRhnpf0.js";import"./useCollator-CCHmo4fs.js";import"./FocusScope-p908I3Or.js";import"./VisuallyHidden-CML_0Z6P.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
