import{j as r,r as f}from"./iframe-BMquwUxp.js";import{M as o}from"./MarkdownEditor-478QV2z4.js";import{L as R}from"./Label-RP2jfdXb.js";import{F as b}from"./FieldError-DmIKwRtH.js";import{B as z}from"./Button-DvE0An6z.js";import{S as x}from"./Section-Cjc_LDxh.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BELbq0UF.js";import"./CodeBlock-CT2qPu07.js";import"./clsx-B-dksMZM.js";import"./CopyButton-QXC3jYd6.js";import"./IconWarning-wcTYZTVE.js";import"./flowComponent-DgzAUF5h.js";import"./index-BYK8miAY.js";import"./index-cAMRUrux.js";import"./remote-CiXlw4PI.js";import"./Tooltip-BGPyUt4I.js";import"./utils-C54becjs.js";import"./OverlayArrow-LMfUU-b0.js";import"./useFocus-DaRXVXg_.js";import"./ProgressBar-ztA157SI.js";import"./Label-BA-uOG5q.js";import"./Hidden-DXpev5BT.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BNLCM250.js";import"./context-BcuHL9mG.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-C-7-yrsk.js";import"./useFocusable-DNP9d3st.js";import"./useFocusRing-CjhJ1DIN.js";import"./react-children-utilities-BxJRVkHq.js";import"./Action-4VgG125V.js";import"./context-BbITb74L.js";import"./useStatic-BMpae3_g.js";import"./browser-CBlt42Oy.js";import"./getActionGroupSlot-D40b9Kwq.js";import"./dynamic-B-3tImXr.js";import"./useLocalizedStringFormatter-C4X4wsGr.js";import"./Heading-DmFdEGik.js";import"./Heading-DxuUq0JW.js";import"./RSPContexts-BjvY3wPf.js";import"./InlineCode-Bwd4yfen.js";import"./Link-BG06YpsI.js";import"./usePress-B-RZvczw.js";import"./Separator-BLhIyNcI.js";import"./Separator-CIx6Mbjl.js";import"./CollectionBuilder-C63eWLYU.js";import"./Text-EG4UQ_l2.js";import"./EmulatedBoldText-CntJSrfE.js";import"./Text-CPXkgTZA.js";import"./TextArea-1-Qf8pT3.js";import"./TextFieldBase-DbXy3hri.js";import"./FieldDescription-CjEOnvYA.js";import"./useFieldComponent-7OMeXUSU.js";import"./TextField-KN1Jhhgc.js";import"./FieldError-D0s5eFn1.js";import"./Form-i5hQHr5E.js";import"./Group-CqoaeHFC.js";import"./Input-DU1QpXVG.js";import"./useTextField-BJeGxBtu.js";import"./useFormReset-DGUxmLDL.js";import"./useFormValidation-BU69543b.js";import"./useControlledHostValueProps-D7O5jAV7.js";import"./Label.module-CUYTf9Jc.js";import"./InlineAlert-AYUYuGXv.js";import"./AlertIcon-COvVg6Bc.js";import"./LoadingSpinner-BPW5hp_J.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CwpJPQ3S.js";import"./ContextMenuSection-DHh_hwVu.js";import"./Dialog-Dx0VK2pV.js";import"./Collection-CkKzGnvH.js";import"./SelectionIndicator-BIlCebKJ.js";import"./SelectionManager-WBqA1WyO.js";import"./useEvent-DDWvHjPW.js";import"./useCollator-BviFHu9Y.js";import"./FocusScope-BR9ShKUP.js";import"./VisuallyHidden-D31Z6xaf.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
