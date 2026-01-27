import{j as r,r as f}from"./iframe-COrLnxQ5.js";import{M as o}from"./MarkdownEditor-Bx04T-Jg.js";import{L as R}from"./Label-D_znJf4n.js";import{F as b}from"./FieldError-CF8bH68v.js";import{B as z}from"./Button-B5T-9t49.js";import{S as x}from"./Section-BHGdwW8g.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-U8B-nPhu.js";import"./CodeBlock-kUjkCyjH.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BYqSbQL1.js";import"./IconWarning-CG-OJrgb.js";import"./flowComponent-Whsy6gdm.js";import"./index-B8mhWUvU.js";import"./index-C_Qn4vD5.js";import"./remote-DmDOnO_p.js";import"./Tooltip-D-uWNW3F.js";import"./utils-VsjjISTT.js";import"./OverlayArrow-B9AznsvA.js";import"./useFocus-D07Nw9k2.js";import"./ProgressBar-SUOC-8W4.js";import"./Label-B0iAgBS9.js";import"./Hidden-JddfwHBV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dc-mlO3X.js";import"./context-BGD9bWhq.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DLXXvYqO.js";import"./useControlledState-B-eslxlj.js";import"./useFocusable-BKqCzfQc.js";import"./react-children-utilities-Dkb7KmMl.js";import"./Action-DL1crjzC.js";import"./context-Dy8NilHt.js";import"./useStatic-CZwWlCB5.js";import"./browser-_tQTAo3E.js";import"./getActionGroupSlot-CizQjHpL.js";import"./dynamic-6q-iLiJj.js";import"./useLocalizedStringFormatter-CnLjSwJ3.js";import"./Heading--g-KOjmd.js";import"./Heading-B77ZBR05.js";import"./RSPContexts-Ds5AG3kQ.js";import"./InlineCode-Cn4LMkR8.js";import"./Link-eGYwWl9q.js";import"./usePress-BYo5WNMt.js";import"./Separator-CGO6iIz1.js";import"./Separator-DW4a3XE2.js";import"./CollectionBuilder-BrcW8xHd.js";import"./Text-xUIxpGpZ.js";import"./EmulatedBoldText-BCoG1WnK.js";import"./Text-DGq4TjGO.js";import"./TextArea-icfxX7No.js";import"./TextFieldBase-DUUoSO-b.js";import"./FieldDescription-BK-1FDkp.js";import"./useFieldComponent-CTuZy_pY.js";import"./TextField-CeJRoU-4.js";import"./FieldError-Ed5Dpq4f.js";import"./Form-nqQow0mS.js";import"./Group-Bxis-9K0.js";import"./Input-CS1DBvPY.js";import"./useTextField-CN826EJi.js";import"./useFormReset-CUYGlILL.js";import"./useFormValidation-Cve5G398.js";import"./useControlledHostValueProps-BXV19N0X.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CPhKjMMj.js";import"./AlertIcon-DPoTsBR0.js";import"./LoadingSpinner-BLCck0My.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-XrgEKXm-.js";import"./ContextMenuSection-Beuid9XD.js";import"./Dialog-CXGseDzt.js";import"./Collection-DJX2nYwX.js";import"./SelectionIndicator-DN8aDza5.js";import"./SelectionManager-B2aYcQpR.js";import"./useEvent-BPQkjHeP.js";import"./useCollator-BPVzlqIU.js";import"./FocusScope-DyecdLbF.js";import"./VisuallyHidden-DMXfMtnF.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
