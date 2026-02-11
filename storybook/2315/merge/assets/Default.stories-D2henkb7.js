import{j as r,r as f}from"./iframe-BKpTcuej.js";import{M as o}from"./MarkdownEditor-ClBlg61Z.js";import{L as R}from"./Label-sjxWv79d.js";import{F as b}from"./FieldError-BmJ7-crS.js";import{B as z}from"./Button-CHR5Lto_.js";import{S as x}from"./Section-fJmoAqS0.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-0H4Tm3vg.js";import"./CodeBlock-BLJsPcBB.js";import"./clsx-B-dksMZM.js";import"./CopyButton-npHOVt_s.js";import"./IconWarning-8R3XoFcV.js";import"./flowComponent-DoYqiHFv.js";import"./index-Dp43xhBx.js";import"./index-DwEhfHus.js";import"./remote-nPMBb6wO.js";import"./Tooltip-cxoOV0-e.js";import"./utils-BuTqHWUg.js";import"./OverlayArrow-BRMGn8Rx.js";import"./useFocus-C4QXJ0i2.js";import"./ProgressBar-gtPQqryh.js";import"./Label--Zf6jHty.js";import"./Hidden-B0ayokwD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CLAZgdhb.js";import"./context-Bt___W0l.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CL2qG9Ti.js";import"./useControlledState-C61mrJlx.js";import"./useFocusable-8gC31DNg.js";import"./react-children-utilities-CYyXx9Nq.js";import"./Action-CRs_TTFg.js";import"./context-Do1O8LUQ.js";import"./useStatic-D1T02rpq.js";import"./browser-DdR_cYXU.js";import"./getActionGroupSlot-BVFFoNvG.js";import"./dynamic-D5pLUzdK.js";import"./useLocalizedStringFormatter-BpUbvorC.js";import"./Heading-Dusm-uvD.js";import"./Heading-Bj0wrS_Z.js";import"./RSPContexts-CNLAcvzw.js";import"./InlineCode-C2I9YRx9.js";import"./Link-QQGGWuEx.js";import"./usePress-BwvZqs_N.js";import"./Separator-lEiQbRar.js";import"./Separator-DsMLA7TC.js";import"./CollectionBuilder-BAfr6v0X.js";import"./Text-ChzZQXaT.js";import"./EmulatedBoldText-DTp9riJA.js";import"./Text-_5F14b0c.js";import"./TextArea-CC-1n4Gv.js";import"./useFieldComponent-AXq55mny.js";import"./useControlledHostValueProps-BTfwsBK-.js";import"./FieldDescription-B8eaQXaP.js";import"./TextField-CBKTAUDc.js";import"./FieldError-Bf7-_15k.js";import"./Form-fml-60gz.js";import"./Group-aKg9TIpc.js";import"./Input-u4H7iO9I.js";import"./useTextField-DFYLeiX4.js";import"./useFormReset-DjxTrJRS.js";import"./useFormValidation-6yUCZE8C.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-NjffNB6y.js";import"./AlertIcon-BxMTL622.js";import"./LoadingSpinner-CSX_cmFV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-WezQgFMH.js";import"./ContextMenuSection-CP33TlWV.js";import"./Dialog-CnIAbR2d.js";import"./Collection-DBuLuq_j.js";import"./SelectionIndicator-CKzMTdaQ.js";import"./SelectionManager-DoV1m8OU.js";import"./useEvent-DisABsaa.js";import"./useCollator-28QKhnaq.js";import"./FocusScope-CaneGuiO.js";import"./VisuallyHidden-DjSqpFWl.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
