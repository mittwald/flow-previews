import{j as r,r as f}from"./iframe-ByHSJ7Zj.js";import{M as o}from"./MarkdownEditor-gNXqBtkh.js";import{L as R}from"./Label-tcy2V_mA.js";import{F as b}from"./FieldError-C1ELgHYl.js";import{B as z}from"./Button-DRqw54Mf.js";import{S as x}from"./Section-MBeJOyG5.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-B3_Ujiiq.js";import"./CodeBlock-B4c0VKFX.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Dceu3lBK.js";import"./IconWarning-D57HRYjk.js";import"./flowComponent-DJOvxh70.js";import"./index-Df7GZGOr.js";import"./index-Bsvsb8kg.js";import"./remote-NqjFlPNq.js";import"./Tooltip-stz1zpwa.js";import"./utils-AuVRPQNE.js";import"./OverlayArrow-y5FFWgxm.js";import"./useFocus-DXK20Yfh.js";import"./ProgressBar-wJF_229J.js";import"./Label-BGNexww0.js";import"./Hidden-BFoBdwRQ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DwarV1Dq.js";import"./context-ER57Z7kb.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-lrSptqjQ.js";import"./useControlledState-CZXI0X0f.js";import"./useFocusable-CTHcGGNa.js";import"./react-children-utilities-B_uH5TcN.js";import"./ActionBatch-DAYGGFfY.js";import"./useOverlayController-ClfDXpmr.js";import"./useStatic-DqDfuSHj.js";import"./browser-CsRLC16Z.js";import"./getActionGroupSlot-V0cqrh5S.js";import"./dynamic-C8-Mz4LM.js";import"./useLocalizedStringFormatter-C3tZMmo1.js";import"./Heading-BzErtb-B.js";import"./Heading-DSIgXPzr.js";import"./RSPContexts-DvjI-Cwg.js";import"./InlineCode-BgDfO3r5.js";import"./Link-zFRuISWB.js";import"./usePress-53w3WrUq.js";import"./Separator-DdYptHsH.js";import"./Separator-xmb_Jck1.js";import"./CollectionBuilder-wcjbsfoD.js";import"./Text-CE06l-7_.js";import"./EmulatedBoldText-Cuj2T5Fx.js";import"./Text-CMdjYF8F.js";import"./TextArea-nOay8X8S.js";import"./useFieldComponent-CBB8cMnJ.js";import"./useControlledHostValueProps-BcSvQjHa.js";import"./FieldDescription-BGXfCMai.js";import"./TextField-B3HDf383.js";import"./FieldError-N78nigrI.js";import"./Form-B6nfDOYR.js";import"./Group-D2DTtkcC.js";import"./Input-Cjg2Ef7t.js";import"./useTextField-1pYdfEhT.js";import"./useFormReset-BeZmi33v.js";import"./useFormValidation-BGcU6QC0.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-sxDaercD.js";import"./AlertIcon-CPipsjCC.js";import"./LoadingSpinner-CaNN1xQ8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D0UJ2jXG.js";import"./ContextMenuSection-DKVD58cw.js";import"./Dialog-Bv6y7U-F.js";import"./Collection-yoadDvk3.js";import"./SelectionIndicator-B6Jii7Kf.js";import"./SelectionManager-DuKq6lse.js";import"./useEvent-CUm4NXev.js";import"./useCollator-uet9RA9C.js";import"./FocusScope-CdPzSUjP.js";import"./VisuallyHidden-DjUeNVhy.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
