import{j as r,r as f}from"./iframe-BwTc9KkQ.js";import{M as o}from"./MarkdownEditor-l0UF4aCi.js";import{L as R}from"./Label-BbbV6hPu.js";import{F as b}from"./FieldError-BhKB-hqh.js";import{B as z}from"./Button-Ckvz-MCb.js";import{S as x}from"./Section-C6exBiSb.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-B16-u6Nm.js";import"./CodeBlock-BL4-6vkB.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BmJxDsXd.js";import"./IconWarning-CuEgZ9GS.js";import"./flowComponent-CVbdUxz2.js";import"./index-CGQkNtsL.js";import"./index-C6-tpPRF.js";import"./remote-B0txjFXx.js";import"./Tooltip-BeTjs40R.js";import"./utils-CBQcEIVx.js";import"./OverlayArrow-DC7WkuhA.js";import"./useFocus-BpPHYutm.js";import"./ProgressBar-CaYu3rjO.js";import"./Label-123M7w93.js";import"./Hidden-DzSpzd_A.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BSSuBv8C.js";import"./context-BwyA9HG-.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DolIE8eq.js";import"./useControlledState-DJoARPq6.js";import"./useFocusable-B00zaX18.js";import"./react-children-utilities-DXTTJAXw.js";import"./Action-BhNW5Llg.js";import"./context-BTkxUDR7.js";import"./useStatic-D7wzuZGA.js";import"./browser-vKZ8hCbx.js";import"./getActionGroupSlot-CPP3dnXc.js";import"./dynamic-BE4DvzFx.js";import"./useLocalizedStringFormatter-INCxkZRf.js";import"./Heading-DdwcYqWJ.js";import"./Heading-DshP_5_D.js";import"./RSPContexts-DUJ8CZ2M.js";import"./InlineCode-B3LfHYVu.js";import"./Link-Dfs0oXSd.js";import"./usePress-CJeMKVhz.js";import"./Separator-BaPMbZG-.js";import"./Separator-DSMZMwnt.js";import"./CollectionBuilder-O788RXXq.js";import"./Text-Gc4XBNKO.js";import"./EmulatedBoldText-nz1iuJug.js";import"./Text-DngMYAZH.js";import"./TextArea-DAkkaRTy.js";import"./useFieldComponent-D1bp3yFp.js";import"./useControlledHostValueProps-CGmEN8BG.js";import"./FieldDescription-B41gpymH.js";import"./TextField-D8A2fYJW.js";import"./FieldError-B40__s1G.js";import"./Form-CXxVDbS0.js";import"./Group-BaqfBrUe.js";import"./Input-C8bkJupR.js";import"./useTextField-CS5fspsv.js";import"./useFormReset-38634gnl.js";import"./useFormValidation-BAeTIVc2.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-tZCm05zF.js";import"./AlertIcon-B9dP4NVD.js";import"./LoadingSpinner-lc_9xcB8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DqSxrgNL.js";import"./ContextMenuSection-LW48IjXN.js";import"./Dialog-DfJHDuJ2.js";import"./Collection-Dw9lmv_g.js";import"./SelectionIndicator-CWwUcpBG.js";import"./SelectionManager-BszBT5Go.js";import"./useEvent-DNrOKzwb.js";import"./useCollator-D6rhmeJa.js";import"./FocusScope-D13mvD2r.js";import"./VisuallyHidden-BgOZVVaM.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
