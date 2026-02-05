import{j as r,r as f}from"./iframe-BL1IY_6V.js";import{M as o}from"./MarkdownEditor-CF1d7Jmc.js";import{L as R}from"./Label-8Io_X3px.js";import{F as b}from"./FieldError-D0yWaYHs.js";import{B as z}from"./Button-B7zQBVb0.js";import{S as x}from"./Section-B_fcZRhb.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-TMJd5Nyb.js";import"./CodeBlock-OE_GqsF1.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BhOvn3UV.js";import"./IconWarning-BTI7YBWG.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./index-Cr6jOlTO.js";import"./remote-BuZW91cH.js";import"./Tooltip-D3eoqY2j.js";import"./utils-GyL2rjZN.js";import"./OverlayArrow-CpLmLaON.js";import"./useFocus-D7_v9YO6.js";import"./ProgressBar-DK1MtX49.js";import"./Label-StE6sPfa.js";import"./Hidden-B9Rk5_3H.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyH2amP0.js";import"./context-BeO7KH58.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DEMWgzWY.js";import"./useControlledState-CA6yhcg7.js";import"./useFocusable-CUtc6O_Q.js";import"./react-children-utilities-DJpeMoip.js";import"./Action-BftMxRJh.js";import"./context-Cv8xNoZb.js";import"./useStatic-BujRUGzM.js";import"./browser-DogRo3Wh.js";import"./getActionGroupSlot-Di2KrfRc.js";import"./dynamic-Dn3YQ50F.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./Heading-Weu1gBHD.js";import"./Heading-CMaaNVI7.js";import"./RSPContexts-BsiO56QH.js";import"./InlineCode-CetRovmp.js";import"./Link-Br8jdhIY.js";import"./usePress-CxRwZ9-L.js";import"./Separator-B28LeStb.js";import"./Separator-mUQkGyBt.js";import"./CollectionBuilder-DOfwpjF8.js";import"./Text-BSlhLkmN.js";import"./EmulatedBoldText-UtdvjbkN.js";import"./Text-B4yGITBG.js";import"./TextArea-CY-4yBhl.js";import"./useFieldComponent-oZ5IqIdY.js";import"./useControlledHostValueProps-BUMS7H49.js";import"./FieldDescription-DBr0KSuv.js";import"./TextField-DMfj3WzX.js";import"./FieldError-CCCCRqJ9.js";import"./Form-Ca3ASx7C.js";import"./Group-DzRbvT54.js";import"./Input-BFv5VDBN.js";import"./useTextField-vHdyh5zn.js";import"./useFormReset-C4J5P-lS.js";import"./useFormValidation-DCrH4OQY.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BDrbtAj0.js";import"./AlertIcon-B2R_BHtC.js";import"./LoadingSpinner-BFVS5fU_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CHtMceZn.js";import"./ContextMenuSection-JBlJYK6m.js";import"./Dialog-CDLoJFKu.js";import"./Collection-DjA8G57O.js";import"./SelectionIndicator-Dec13xxT.js";import"./SelectionManager-C3JHuUY2.js";import"./useEvent-BBSiUFe7.js";import"./useCollator-DpBUbIyY.js";import"./FocusScope-B7aMt2fO.js";import"./VisuallyHidden-CgqIxBlU.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
