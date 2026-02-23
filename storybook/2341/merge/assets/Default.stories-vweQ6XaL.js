import{j as r,r as f}from"./iframe-Bh3xJiHl.js";import{M as o}from"./MarkdownEditor-CVGWWKbw.js";import{L as R}from"./Label-SNmrw9Fy.js";import{F as b}from"./FieldError-BT5CTe02.js";import{B as z}from"./Button-C1GDS2T5.js";import{S as x}from"./Section-CfFeFwol.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DbjLjV0v.js";import"./CodeBlock-DvgeepRk.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BKdwe7_9.js";import"./IconWarning-BO5-ThfV.js";import"./flowComponent-C3sfiT_Y.js";import"./index-BFDJcR6G.js";import"./index-CTdhbmBU.js";import"./remote-Bp1RK0aJ.js";import"./Tooltip-DNbnI5fi.js";import"./utils-Dfx959rT.js";import"./OverlayArrow-D44cF5Xm.js";import"./useFocus-BHtMPlKM.js";import"./ProgressBar-f9Z69uXY.js";import"./Label-Dluta3ia.js";import"./Hidden-DdbuHEan.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CXwac_uq.js";import"./context-BR0BeWgQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BHUB4uMx.js";import"./useControlledState-cRERDsL1.js";import"./useFocusable-BqTTqTxS.js";import"./react-children-utilities-Ci08SEfb.js";import"./ActionBatch-i2QcTjWd.js";import"./useOverlayController-DT1eg7nU.js";import"./useStatic-BN6jI5KS.js";import"./browser-8DYgdl68.js";import"./getActionGroupSlot-1kHLqAyx.js";import"./dynamic-Cx5ap73z.js";import"./useLocalizedStringFormatter-C9w1tvwK.js";import"./Heading-OKG0Iw9H.js";import"./Heading-DtIx3EFz.js";import"./RSPContexts-CiTjd_Cl.js";import"./InlineCode-XT9pviGS.js";import"./Link-CB2VB7oO.js";import"./usePress-B8ZJpDXl.js";import"./Separator-HzHBagiQ.js";import"./Separator-C-kXScb9.js";import"./CollectionBuilder-CXW-gYlJ.js";import"./Text-yap4nkEx.js";import"./EmulatedBoldText-jamwOsD6.js";import"./Text-CYmLgYN4.js";import"./TextArea-eyX2N0jz.js";import"./useFieldComponent-DixKAqTB.js";import"./useControlledHostValueProps-D11NzOUo.js";import"./FieldDescription-DDUCZeUk.js";import"./TextField-CykpEZxz.js";import"./FieldError-DSfA25Iv.js";import"./Form-BYhBcXhc.js";import"./Group-DF5FwY7U.js";import"./Input-DfQ8ZFmJ.js";import"./useTextField-CocvbY9q.js";import"./useFormReset-CbcSutFk.js";import"./useFormValidation-DFhVz88J.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-29lF4HJO.js";import"./AlertIcon-BebRztpd.js";import"./LoadingSpinner-DCCe8ZqR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BNrfYXOb.js";import"./ContextMenuSection-rHl1P7lx.js";import"./Dialog-CdFvlhxh.js";import"./Collection-DIBLnAHN.js";import"./SelectionIndicator-CiZnwtLL.js";import"./SelectionManager-DY1RX6tv.js";import"./useEvent-Ck38Sl35.js";import"./useCollator-DwLdnUiO.js";import"./FocusScope-DSBEK_-_.js";import"./VisuallyHidden-CnocgGJn.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
