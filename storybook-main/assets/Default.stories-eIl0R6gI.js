import{j as r,r as h}from"./iframe-DALqHAyB.js";import{M as e}from"./MarkdownEditor-BJLUeg_J.js";import{L as l}from"./Label-DyIG2v27.js";import{F as g}from"./useFieldComponent-CuLkv2Wr.js";import{B as f}from"./Button-BbfkfOCO.js";import{S as x}from"./Section-DauTDmMy.js";import"./index-nuYtCEEu.js";import"./Markdown-DnHgYJLF.js";import"./CodeBlock-Tr6H_Bai.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BbCA5erN.js";import"./IconWarning-CcDUp5xj.js";import"./flowComponent-CvsgRxlP.js";import"./index-B4rQ27h-.js";import"./index-CPatoSxs.js";import"./Tooltip-DftF3NMd.js";import"./ClearPropsContextView-BSXhUQ8g.js";import"./ClearPropsContext-frWmeUQW.js";import"./utils-C0MA_VWy.js";import"./OverlayArrow-CD30hPjT.js";import"./useFocus-CR3niFsF.js";import"./ProgressBar-udFHgrmU.js";import"./Label-D28Pduqa.js";import"./Hidden-SLgE1qP8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-85XHUWXZ.js";import"./context-aw0dYPtu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BAMCZ0BN.js";import"./useFocusable-UlymAToY.js";import"./useFocusRing-BpmoLA66.js";import"./react-children-utilities-C1NF1MDP.js";import"./Action-yEvGmIpX.js";import"./context-CWEo3fLe.js";import"./useStatic-WJbJZsQS.js";import"./browser-pVqjrops.js";import"./getActionGroupSlot-BwSd42Bi.js";import"./dynamic-aVFvjRkA.js";import"./useLocalizedStringFormatter-CC_Z0iQM.js";import"./Heading-lDiFG-iI.js";import"./Heading-BEFcq9oy.js";import"./RSPContexts-CoCveTu3.js";import"./InlineCode-93XS2wDQ.js";import"./Link-CeNoH_pB.js";import"./usePress-RYFgUS1k.js";import"./Separator-B49_ybeu.js";import"./Separator-BdsMzjh6.js";import"./CollectionBuilder-l42sx1Ra.js";import"./Text-BxJmp77a.js";import"./EmulatedBoldText-Dxvms5Wy.js";import"./Text-vTixOjUz.js";import"./TextArea-2lQdk6QK.js";import"./TextFieldBase-oGqtL2rG.js";import"./FieldDescription-DA7yQQcX.js";import"./TextField-CjKAtJ6I.js";import"./Form-DuNFHANS.js";import"./Group-Co0gZnxS.js";import"./Input-D7GaT3Mp.js";import"./useTextField-Di0sHcGC.js";import"./useFormReset-C8DxwuW7.js";import"./useFormValidation-C14rVgab.js";import"./ReactAriaControlledValueFix-BUPP8sB2.js";import"./useManagedValue-CMn6PGpE.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-K4oR_LJz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B6bWdLOu.js";import"./ContextMenuSection-BiaSnVoU.js";import"./Dialog-bs1AaCOv.js";import"./Collection-BvojxhPL.js";import"./SelectionIndicator-D4RzQj7G.js";import"./SelectionManager-DM5ASuX4.js";import"./useEvent-D9fHmb7e.js";import"./useCollator-Do-67ZwH.js";import"./FocusScope-7BxeDCH7.js";import"./VisuallyHidden-BkwE9NAp.js";const Ar={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(g,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=h.useRef(null),u=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(f,{type:"button",onClick:u,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Hr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithOnChange","WithRef"];export{s as Default,a as Disabled,m as Resizeable,n as ShowCharacterCount,p as WithFieldError,i as WithLabel,c as WithOnChange,d as WithRef,Hr as __namedExportsOrder,Ar as default};
